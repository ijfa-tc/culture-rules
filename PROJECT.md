# 日本の文化・ルール（IJFA学習ポータル）

日本で働く前に、生活や仕事のルールを「OK／ダメ」のクイズで身につけるページです。
IJFA学習ポータル（https://ijfa-tc.github.io/learning-portal/）からリンクします。

## 開き方
- `index.html?id=JKT16001` … 生徒IDつき（結果にIDが残る）
- `index.html` … ゲストとして使う
- `index.html?theme=bicycle&id=JKT16001` … テーマを指定する（テーマを省くと「テーマを えらぶ」画面が開く）

## ファイル
| ファイル | 役割 |
|---|---|
| index.html | ページの骨組み |
| style.css | 見た目 |
| app.js | 画面の動き（問題→解説→結果、記録） |
| config.js | 設定（ポータルURL、GASのURL、テーマ一覧） |
| data_bicycle.js | テーマ「自転車のルール」の問題（きほん12問、せいかつ11問） |
| stop_sign.svg / moped_and_bicycle.png / moped_vs_assist.svg | 問題と解説で使う画像 |

## 問題の足し方・直し方
1. `data_bicycle.js` を開き、同じ形の `{ ... }` をコピーして中身を書きかえる。
2. `id` は重ならないようにする（例：bike-b13）。
3. 新しいテーマを作るときは、`data_テーマ名.js` を作り、`config.js` の THEMES のその行から `soon: true` を消して `file` を書く。

## 結果の記録
セットを最後まで解くと、次の形で1件記録します。今はスマホの中（localStorage の `ijfa_culture_results`）に保存しています。
`config.js` の `GAS_URL` を入れると、同じデータをGASへ送ります（「IJFA テスト結果DB」用）。

```json
{
  "timestamp": "2026-11-11T06:51:34.576Z",
  "studentId": "JKT16001",
  "page": "culture-rules",
  "theme": "bicycle",
  "themeName": "自転車のルール",
  "set": "basic",
  "setName": "きほん",
  "mode": "all",
  "score": 11,
  "total": 12,
  "details": [
    { "qid": "bike-b01", "question": "かさを さして、自転車に のります。", "choice": "ok", "correct": false, "meaningOpened": true }
  ]
}
```
- `mode`：`all` はぜんぶの問題、`retry` は間違えた問題だけ。
- `meaningOpened`：その問題で「いみを見る」を押したか（日本語だけで理解できたかの目安）。

## 公開
GitHub の ijfa-tc に Public リポジトリを作り、GitHub Pages（main ブランチ／ルート）で公開する。

## 内容の出典
反則金などの数字は、2026年11月時点で警察庁・警視庁の資料をもとに確認したもの。改正があれば見直す。
