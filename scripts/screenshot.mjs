/* eslint-env node */
/**
 * src/ を簡易サーバで配信し、Playwright で PC / スマホ幅のスクリーンショットを撮るスクリプト。
 * UI 改修の Before/After 比較やリグレッション確認に使う。
 *
 * 使い方:
 *   npm run screenshot -- [--out <出力ディレクトリ>]   (既定: screenshots/latest)
 */
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(repoRoot, "src");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
};

const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 900, isMobile: false, deviceScaleFactor: 1 },
  { name: "mobile", width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
];

function parseArgs(argv) {
  const args = { out: path.join(repoRoot, "screenshots/latest") };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out") {
      args.out = path.resolve(argv[++i]);
    }
  }
  return args;
}

function startServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const filePath = path.join(srcDir, urlPath.endsWith("/") ? `${urlPath}index.html` : urlPath);
    if (!filePath.startsWith(srcDir)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const body = await readFile(filePath);
      res.writeHead(200, { "Content-Type": MIME_TYPES[path.extname(filePath)] || "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await mkdir(args.out, { recursive: true });
  const server = await startServer();
  const baseUrl = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  try {
    for (const viewport of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        isMobile: viewport.isMobile,
        hasTouch: viewport.isMobile,
        deviceScaleFactor: viewport.deviceScaleFactor,
      });
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: "load" });
      // YouTube プレイヤーの準備後にリストが描画されるのを待つ（オフライン等で描画されなくても撮影は続ける）
      await page.waitForSelector("#video-list > *", { timeout: 15000 }).catch(() => {
        console.warn(`[${viewport.name}] 動画リストが描画されませんでした`);
      });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: path.join(args.out, `${viewport.name}-top.png`) });

      // リスト部分まで下にスクロールした状態も撮る
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.2));
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(args.out, `${viewport.name}-scrolled.png`) });

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) {
        console.warn(`[${viewport.name}] 横方向に ${overflow}px はみ出しています`);
      }
      await context.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`スクリーンショットを ${path.relative(repoRoot, args.out)} に保存しました`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
