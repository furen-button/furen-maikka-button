# GitHub Copilot への指示

## プロジェクト概要
このプロジェクトは「まいっかボタン」という、にじさんじ所属バーチャルライバー「フレン・E・ルスタリオ」さんの「まいっか」音声を集めた非公式ファンサイトです。

### 技術スタック
- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript
- **API**: YouTube IFrame API
- **開発環境**: ESLint, http-server
- **ホスティング**: GitHub Pages

### プロジェクト構成
- `src/index.html`: メインのHTMLファイル
- `src/script.js`: YouTubeプレイヤーとUI制御のJavaScript
- `src/data/maikka.json`: 「まいっか」音声データベース（6000件以上の動画情報）
- `src/img/`: アイコン、OGP画像、その他の画像ファイル

## 全般的な指示
- 日本語で応答してください
- 適切に日本語でドキュメントやコメントを追加してください
- 単一責任の原則に従ってください
- ESLintを使用してコードをチェックしてください（`.eslintrc.json`の設定に従う）

## コーディング規約

### JavaScript
- ESLint設定（`.eslintrc.json`）に従う
- インデント: 2スペース
- 引用符: ダブルクォート
- セミコロン: 必須
- 変数名は英語で記述、コメントは日本語
- `console.log`はデバッグ目的のみ使用

### HTML/CSS
- HTML5セマンティクス要素を使用
- レスポンシブデザインを考慮
- フォント: "Mochiy Pop One"（タイトル）、"RocknRoll One"（本文）
- カラーテーマ: #EC1D2F（メインカラー）

### データ形式
- `maikka.json`の構造を維持
  ```json
  {
    "publishedAt": "ISO 8601形式",
    "title": "動画タイトル",
    "url": "動画URL",
    "videoId": "YouTube動画ID",
    "startTime": "開始時間（秒）",
    "startUrl": "タイムスタンプ付きURL"
  }
  ```

## 機能要件
- YouTube IFrame APIを使用した動画再生
- ランダム再生機能
- 自動再生機能
- プログレスバー表示
- 動画リスト表示（年別グループ化）
- レスポンシブデザイン

## 注意事項
- 非公式ファンサイトとして適切な表記を維持
- YouTubeの利用規約に準拠
- パフォーマンスを考慮した実装（大量データの効率的な処理）
- アクセシビリティを考慮した実装

