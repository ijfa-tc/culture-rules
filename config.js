// ===== 設定ファイル（ここだけ書きかえればOK） =====
window.IJFA_CONFIG = {
  // ポータルのURL（「ポータルへ」ボタンのリンク先）
  PORTAL_URL: "https://ijfa-tc.github.io/learning-portal/",

  // 結果を送るGASのURL。空のあいだは送らず、スマホの中にだけ保存する。
  GAS_URL: "",

  // テーマの一覧（この順番でトップ画面に並ぶ）。
  // ・できているテーマ：file に data_テーマ名.js を書く。
  // ・じゅんびちゅうのテーマ：soon: true と書く（押せないボタンになる）。
  //   できあがったら soon を消して、file を書く。
  // ・file と soon: true の両方があるテーマは、生徒には「じゅんびちゅう」と見える。
  //   URLの最後に &preview=1 を付けたときだけ開ける（公開の前に先生が確認するため）。
  // ・ふりがなは {漢字|かんじ} と書く。
  THEMES: [
    { key: "bicycle",  icon: "🚲", title: "{自転車|じてんしゃ}のルール", titleId: "Aturan Bersepeda", file: "data_bicycle.js" },
    { key: "dorm",     icon: "🏠", title: "{寮|りょう}のルール", titleId: "Aturan Asrama", file: "data_dorm.js" },
    { key: "time",     icon: "⏰", title: "{時間|じかん}と {休|やす}みの れんらく", titleId: "Waktu & Izin Tidak Masuk", file: "data_time.js" },
    { key: "money",    icon: "💴", title: "お{金|かね}", titleId: "Uang", file: "data_money.js" },
    { key: "sns",      icon: "📱", title: "スマホ・SNS", titleId: "HP & Media Sosial", file: "data_sns.js" },
    { key: "train",    icon: "🚃", title: "{電車|でんしゃ}・お{店|みせ}のルール", titleId: "Aturan Kereta & Toko", soon: true },
    { key: "garbage",  icon: "🗑️", title: "ゴミの {分|わ}け{方|かた}", titleId: "Cara Memilah Sampah", soon: true },
    { key: "safety",   icon: "⛑️", title: "{仕事|しごと}の あんぜん", titleId: "Keselamatan Kerja", soon: true },
    { key: "signs",    icon: "⚠️", title: "ひょうしき・マーク", titleId: "Rambu & Simbol", soon: true },
    { key: "horenso",  icon: "🗣️", title: "ほうれんそう", titleId: "Lapor, Kabari, Konsultasi", soon: true },
    { key: "disaster", icon: "🌏", title: "さいがい・びょうき", titleId: "Bencana & Sakit", soon: true },
    { key: "culture",  icon: "🍱", title: "{食事|しょくじ}・ぶんか", titleId: "Makan & Budaya", soon: true }
  ]
};
