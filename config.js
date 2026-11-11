// ===== 設定ファイル（ここだけ書きかえればOK） =====
window.IJFA_CONFIG = {
  // ポータルのURL（「ポータルへ」ボタンのリンク先）
  PORTAL_URL: "https://ijfa-tc.github.io/learning-portal/",

  // 結果を送るGASのURL。空のあいだは送らず、スマホの中にだけ保存する。
  GAS_URL: "",

  // テーマの一覧。新しいテーマを足すときは、data_テーマ名.js を作って、ここに1行足す。
  THEMES: [
    { key: "bicycle", file: "data_bicycle.js" }
  ],

  // ?theme= がないときに開くテーマ
  DEFAULT_THEME: "bicycle"
};
