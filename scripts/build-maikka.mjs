/* eslint-env node */
/**
 * yt-comment-archiver のライブチャット Parquet から「まいっか」の再生位置を集計し、
 * src/data/maikka.json を生成するスクリプト。
 *
 * アルゴリズムは src/img/maikka-algorithm.svg のフローチャートに従う。
 *
 * 使い方:
 *   npm run build:data -- [--data-dir <archiverのdataディレクトリ>] [--out <出力JSON>]
 */
import { DuckDBInstance } from "@duckdb/node-api";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// フレン・E・ルスタリオさんのチャンネル
const CHANNEL_ID = "UCuep1JCrMvSxOGgGhBfJuYw";
// 「まいっか」とみなすキーワード（部分一致）
// 「まいいか」（あたまいいから）、「まぁいいか」（まぁいいかも）は誤検知が多いため含めない
const KEYWORDS = [
  "まいっか", "ま、いっか", "ま いっか", "ま　いっか", "まーいっか",
  "まぁいっか", "まあいっか", "まあ、いっか", "まあいいか", "ま、いいか", "マイッカ",
];
// 最初のキーワードから何秒以内に規定回数出たら検出とするか
const WINDOW_SECONDS = 30;
// 検出に必要なキーワードの回数
const REQUIRED_COUNT = 3;
// 検出後、この秒数だけ先を次の開始時間とする（連続検出の間隔）
const OFFSET_SECONDS = 20;
// 最初のキーワードの何秒前から再生するか
const LEAD_SECONDS = 20;

function parseArgs(argv) {
  const args = {
    dataDir: path.resolve(repoRoot, "../yt-comment-archiver/data"),
    out: path.join(repoRoot, "src/data/maikka.json"),
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--data-dir") {
      args.dataDir = path.resolve(argv[++i]);
    } else if (argv[i] === "--out") {
      args.out = path.resolve(argv[++i]);
    } else {
      throw new Error(`不明な引数: ${argv[i]}`);
    }
  }
  return args;
}

/** "H:MM:SS" / "M:SS" 形式を秒に変換する。変換できなければ null */
function parseElapsed(value) {
  if (typeof value !== "string" || !/^\d+(:\d+){1,2}$/.test(value)) {
    return null;
  }
  return value.split(":").reduce((sum, part) => sum * 60 + Number(part), 0);
}

function sqlString(value) {
  return `'${value.replace(/'/g, "''")}'`;
}

/**
 * 1動画分のチャット（時系列順）から検出した開始時間（秒）の配列を返す。
 *
 * キーワードを含まないメッセージはフローチャート上「経過時間 - 開始時間 > 30 ならリセット」
 * にしか関与せず、その判定は次のキーワードメッセージでも同じ結果になるため、
 * 入力はキーワードを含むメッセージだけでよい。
 */
export function detectStartTimes(elapsedList) {
  const results = [];
  let count = 0;
  let start = null;
  for (const elapsed of elapsedList) {
    if (elapsed === null) {
      continue;
    }
    if (start !== null && elapsed < start) {
      continue;
    }
    if (start !== null && elapsed - start > WINDOW_SECONDS) {
      count = 0;
      start = null;
    }
    if (start === null) {
      start = elapsed;
    }
    count++;
    if (count !== REQUIRED_COUNT) {
      continue;
    }
    if (elapsed - start <= WINDOW_SECONDS) {
      results.push(start);
      count = 0;
      start = elapsed + OFFSET_SECONDS;
    } else {
      count = 0;
      start = null;
    }
  }
  return results;
}

async function loadRows(dataDir) {
  const chatsPath = path.join(dataDir, `${CHANNEL_ID}_live_chats.parquet`);
  const videosPath = path.join(dataDir, `${CHANNEL_ID}_videos.parquet`);
  const keywordCondition = KEYWORDS.map((k) => `contains(c.message, ${sqlString(k)})`).join(" OR ");
  const instance = await DuckDBInstance.create(":memory:");
  const connection = await instance.connect();
  try {
    const reader = await connection.runAndReadAll(`
      SELECT
        c.video_id,
        c.elapsed_time,
        v.title,
        strftime(v.published_at AT TIME ZONE 'UTC', '%Y-%m-%dT%H:%M:%SZ') AS published_at
      FROM read_parquet(${sqlString(chatsPath)}) c
      JOIN read_parquet(${sqlString(videosPath)}) v USING (video_id)
      WHERE ${keywordCondition}
      ORDER BY c.video_id, c.published_at
    `);
    return reader.getRowObjects();
  } finally {
    connection.closeSync();
    instance.closeSync();
  }
}

function buildEntries(rows) {
  const videos = new Map();
  for (const row of rows) {
    if (!videos.has(row.video_id)) {
      videos.set(row.video_id, { title: row.title, publishedAt: row.published_at, elapsedList: [] });
    }
    videos.get(row.video_id).elapsedList.push(parseElapsed(row.elapsed_time));
  }

  const entries = [];
  for (const [videoId, video] of videos) {
    for (const start of detectStartTimes(video.elapsedList)) {
      const startTime = Math.max(0, start - LEAD_SECONDS);
      const url = `https://www.youtube.com/watch?v=${videoId}`;
      entries.push({
        publishedAt: video.publishedAt,
        title: video.title,
        url,
        videoId,
        startTime,
        startUrl: `${url}&t=${startTime}s`,
      });
    }
  }
  entries.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt) || a.startTime - b.startTime);
  return entries;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log(`入力: ${args.dataDir}`);
  const rows = await loadRows(args.dataDir);
  const entries = buildEntries(rows);
  await writeFile(args.out, `${JSON.stringify(entries, null, 2)}\n`);
  const videoCount = new Set(entries.map((e) => e.videoId)).size;
  console.log(`出力: ${args.out}`);
  console.log(`${entries.length}件（${videoCount}動画）`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
