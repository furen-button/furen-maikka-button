# まいっかボタン

## 概要

このプロジェクトは、にじさんじ所属バーチャルライバー、フレン・E・ルスタリオさんの「まいっか」を自動収集した結果をまとめる非公式ファンサイトです。

## ファイル構成

- `src/`
  - `img/`: 画像ファイルを格納
  - `index.html`: メインのHTMLファイル
  - `script.js`: JavaScriptファイル

## セットアップ

プロジェクトをクローンした後、以下のコマンドを実行して依存関係をインストールしてください。

```sh
npm install
```

## 開発

以下のコマンドで開発サーバーを起動できます。

```sh
npm start
```

## データ更新

`src/data/maikka.json` は [yt-comment-archiver](../yt-comment-archiver) が取得したライブチャットから生成します。

1. yt-comment-archiver でフレンさんのチャンネル（`UCuep1JCrMvSxOGgGhBfJuYw`）の動画とライブチャットを最新化する
   - `data/UCuep1JCrMvSxOGgGhBfJuYw_videos.parquet` と `data/UCuep1JCrMvSxOGgGhBfJuYw_live_chats.parquet` が更新される
2. このリポジトリで集計スクリプトを実行する

   ```sh
   npm run build:data
   # archiver の data ディレクトリや出力先を変える場合
   npm run build:data -- --data-dir ../yt-comment-archiver/data --out src/data/maikka.json
   ```

3. 表示された件数を `src/index.html` の「更新日」に追記する
4. `npm start` で表示を確認し、main に push する（GitHub Pages に自動デプロイ）

集計のアルゴリズムは [maikka-algorithm.svg](src/img/maikka-algorithm.svg) のとおりです。キーワードや秒数などのパラメータは `scripts/build-maikka.mjs` の先頭で定義しています。

## ESLint

以下のコマンドでESLintを実行してコードのリントを行います。

```sh
npm run lint
```
