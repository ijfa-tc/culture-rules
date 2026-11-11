// =====================================================================
// テーマ「時間と 休みの れんらく」の問題データ
// ・形は data_dorm.js と同じ（OK／ダメ、◎○✖）
// ・ふりがなは {漢字|かんじ} と書く
// ・teacherNote は先生用のメモ（生徒の画面には出ない）
// =====================================================================
window.IJFA_THEMES = window.IJFA_THEMES || {};
window.IJFA_THEMES.time = {
  key: "time",
  title: "{時間|じかん}と {休|やす}みの れんらく",
  titleId: "Waktu & Izin Tidak Masuk",
  intro: "おくれる ことより、れんらくしない ことが {大|おお}きな もんだいです。{大切|たいせつ}な ことは 3つ。①{仕事|しごと}が はじまる {前|まえ}に　②{自分|じぶん}で　③{会社|かいしゃ}が きめた {方法|ほうほう}で（きまって いなければ {電話|でんわ}）。",
  introId: "Tidak memberi kabar adalah masalah yang lebih besar daripada terlambat. Ada 3 hal penting: (1) sebelum jam kerja mulai, (2) sendiri, (3) dengan cara yang ditentukan perusahaan (jika tidak ditentukan, telepon).",
  sets: [
    // ================= セット1　きほん（OK／ダメ） =================
    {
      key: "basic",
      title: "きほん",
      titleId: "Dasar",
      description: "{時間|じかん}を まもる・れんらくの しかた",
      questions: [
        {
          id: "time-j01", icon: "🕗✅",
          text: "{仕事|しごと}は 8{時|じ}からです。7{時|じ}55{分|ふん}に {仕事|しごと}の {場所|ばしょ}に います。じゅんびも {終|お}わって います。",
          textId: "Kerja mulai pukul 8. Pukul 7.55 sudah berada di tempat kerja dan sudah siap.",
          answer: "ok", tag: null,
          explain: [
            ["なぜ？", "「8{時|じ}」は、{会社|かいしゃ}に {来|く}る {時間|じかん}では ありません。{仕事|しごと}を はじめる {時間|じかん}です。"],
            ["ポイント", "きがえや じゅんびの {時間|じかん}も {考|かんが}えて、{家|いえ}を {出|で}ます。"]
          ],
          explainId: "\"Pukul 8\" bukan waktu tiba di perusahaan, tetapi waktu mulai bekerja. Hitung juga waktu ganti baju dan persiapan saat berangkat.",
          teacherNote: ""
        },
        {
          id: "time-j02", icon: "🕗🏃",
          text: "{仕事|しごと}は 8{時|じ}からです。8{時|じ} ちょうどに {会社|かいしゃ}に つきます。",
          textId: "Kerja mulai pukul 8. Tiba di perusahaan tepat pukul 8.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "きがえて、{仕事|しごと}の {場所|ばしょ}に {行|い}くと、8{時|じ}を すぎます。それは ちこくです。"],
            ["どうする？", "5{分前|ふんまえ}には、{仕事|しごと}が できる ように します。"],
            ["インドネシアでは？", "「{少|すこ}し おくれても だいじょうぶ」な ことが あります。{日本|にほん}の {会社|かいしゃ}では、1{分|ぷん}でも ちこくです。"]
          ],
          explainId: "Setelah ganti baju dan menuju tempat kerja, sudah lewat pukul 8, dan itu terlambat. Usahakan siap bekerja 5 menit sebelumnya. Di perusahaan Jepang, terlambat 1 menit pun tetap terlambat.",
          teacherNote: ""
        },
        {
          id: "time-j03", icon: "🌙🎮",
          text: "あしたは {仕事|しごと}です。{夜|よる} 2{時|じ}まで ゲームを します。",
          textId: "Besok kerja. Bermain game sampai pukul 2 malam.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "{朝|あさ} おきられません。ねむいと、{仕事|しごと}で けがを します。"],
            ["ほんとうに あった {話|はなし}", "{夜|よる} おそくまで ゲームや {電話|でんわ}を して、{何回|なんかい}も ちこくした {人|ひと}が います。"],
            ["どうする？", "ねる {時間|じかん}を きめます。"]
          ],
          explainId: "Tidak bisa bangun pagi, dan mengantuk saat kerja bisa menyebabkan cedera. Ada orang yang berkali-kali terlambat karena bermain game atau menelepon sampai larut malam. Tentukan jam tidur.",
          teacherNote: "駐在記録では、遅刻・寝坊・夜更かしが8件。"
        },
        {
          id: "time-j04", icon: "⏰⏰",
          text: "ねる {前|まえ}に、アラームを 2つ セットします。",
          textId: "Sebelum tidur, memasang 2 alarm.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "スマホは、{手|て}が とどかない {場所|ばしょ}に おきます。おきて、{立|た}って {止|と}めます。"]
          ],
          explainId: "Taruh HP di tempat yang tidak terjangkau tangan, supaya harus bangun dan berdiri untuk mematikannya.",
          teacherNote: ""
        },
        {
          id: "time-j05", icon: "😴🤐",
          text: "ねぼうしました。5{分|ふん} おくれます。5{分|ふん}だけなので、れんらくしません。",
          textId: "Kesiangan dan akan terlambat 5 menit. Karena hanya 5 menit, tidak memberi kabar.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{会社|かいしゃ}の {人|ひと}は、あなたが {来|く}るか どうか わかりません。{仕事|しごと}の じゅんばんを かえる ことが できません。"],
            ["どうする？", "1{分|ぷん}でも おくれる ときは、れんらくします。"]
          ],
          explainId: "Perusahaan tidak tahu apakah Anda datang atau tidak, dan tidak bisa mengatur ulang pekerjaan. Walaupun terlambat 1 menit, beri kabar.",
          teacherNote: ""
        },
        {
          id: "time-j06", icon: "💬📵",
          text: "ちこくします。{会社|かいしゃ}の ルールは「{電話|でんわ}で れんらく」です。でも、メッセージだけ {送|おく}ります。",
          textId: "Akan terlambat. Aturan perusahaan adalah \"hubungi lewat telepon\", tetapi hanya mengirim pesan.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "メッセージは、あいてが すぐ {読|よ}むか わかりません。"],
            ["どうする？", "{会社|かいしゃ}が きめた {方法|ほうほう}で れんらくします。きまって いない ときは、{電話|でんわ}します。"]
          ],
          explainId: "Pesan belum tentu langsung dibaca. Hubungi dengan cara yang ditentukan perusahaan; jika tidak ditentukan, telepon.",
          teacherNote: "チャットでの連絡を認めている会社もある。入社したら連絡方法と連絡先を確認する。"
        },
        {
          id: "time-j07", icon: "🤒🗣️",
          text: "{熱|ねつ}が あります。{同|おな}じ {会社|かいしゃ}の {友|とも}だちに「{休|やす}むと {言|い}って おいて」と たのみます。",
          textId: "Demam. Meminta teman sekantor, \"Tolong bilang saya tidak masuk.\"",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{会社|かいしゃ}の {人|ひと}は、あなたに {聞|き}きたい ことが あります（いつから？ {病院|びょういん}は？ あしたは？）。"],
            ["どうする？", "{自分|じぶん}で {電話|でんわ}します。"],
            ["ポイント", "{話|はな}せない くらい わるい ときは、{友|とも}だちに たのんで いいです。"]
          ],
          explainId: "Perusahaan ingin bertanya langsung kepada Anda (sejak kapan, sudah ke dokter, besok bagaimana). Telepon sendiri. Jika sakit sampai tidak bisa bicara, boleh minta tolong teman.",
          teacherNote: ""
        },
        {
          id: "time-j08", icon: "🤒📞",
          text: "{熱|ねつ}が あります。{仕事|しごと}が はじまる {前|まえ}に、{自分|じぶん}で {会社|かいしゃ}に {電話|でんわ}します。",
          textId: "Demam. Sebelum jam kerja mulai, menelepon sendiri ke perusahaan.",
          answer: "ok", tag: null,
          explain: [
            ["なぜ？", "{会社|かいしゃ}は、{早|はや}く {知|し}ると、ほかの {人|ひと}に {仕事|しごと}を たのむ ことが できます。"]
          ],
          explainId: "Jika perusahaan tahu lebih awal, pekerjaan bisa dialihkan ke orang lain.",
          teacherNote: ""
        },
        {
          id: "time-j09", icon: "🕘📞",
          text: "{今日|きょう}は {休|やす}みます。{仕事|しごと}が はじまって 1{時間後|じかんご}に、{会社|かいしゃ}に {電話|でんわ}します。",
          textId: "Hari ini tidak masuk. Menelepon perusahaan 1 jam setelah jam kerja mulai.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{会社|かいしゃ}は 1{時間|じかん}、あなたを {待|ま}って います。しんぱいして、{寮|りょう}に {見|み}に {来|く}る ことも あります。"],
            ["ほんとうに あった {話|はなし}", "{仕事|しごと}の {前|まえ}に れんらくしないで {休|やす}んで、{大|おお}きな もんだいに なった {人|ひと}が います。"],
            ["どうする？", "{仕事|しごと}が はじまる {前|まえ}に {電話|でんわ}します。"]
          ],
          explainId: "Perusahaan menunggu Anda selama 1 jam dan mungkin khawatir sampai datang ke asrama. Ada orang yang tidak masuk tanpa kabar sebelum jam kerja dan menjadi masalah besar. Telepon sebelum jam kerja mulai.",
          teacherNote: "駐在記録では、連絡なしの欠勤が6件。"
        },
        {
          id: "time-j10", icon: "📅🙋",
          text: "{来月|らいげつ}、{休|やす}みを とりたいです。{早|はや}めに {会社|かいしゃ}の {人|ひと}に そうだんします。",
          textId: "Bulan depan ingin cuti. Berkonsultasi lebih awal dengan perusahaan.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "{休|やす}みは「きめてから {言|い}う」では なく、「そうだんして きめる」です。"]
          ],
          explainId: "Cuti bukan \"diputuskan dulu baru bilang\", tetapi \"dikonsultasikan lalu diputuskan\".",
          teacherNote: ""
        },
        {
          id: "time-j11", icon: "🌙🏠❓",
          text: "{寮|りょう}の ルールは「{外|そと}で とまる ときは、{先|さき}に {言|い}う」です。{言|い}わないで、{友|とも}だちの {家|いえ}に とまります。",
          textId: "Aturan asrama: \"Jika menginap di luar, beri tahu dulu.\" Menginap di rumah teman tanpa memberi tahu.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{会社|かいしゃ}は、あなたが どこに いるか わかりません。じこや びょうきの とき、たすける ことが できません。"],
            ["どうする？", "{先|さき}に {言|い}います。"]
          ],
          explainId: "Perusahaan tidak tahu Anda di mana dan tidak bisa menolong saat ada kecelakaan atau sakit. Beri tahu lebih dulu.",
          teacherNote: "外泊のルールは会社・寮によって違う。駐在記録に無断外泊の例がある。"
        }
      ]
    },

    // ================= セット2　こんなとき、どうする？（◎○✖） =================
    {
      key: "action",
      title: "こんなとき、どうする？",
      titleId: "Kalau begini, bagaimana?",
      description: "いちばん いい ものを えらびます。",
      questions: [
        {
          id: "time-c01", icon: "⏰😱",
          text: "{朝|あさ} おきました。{仕事|しごと}が はじまる 10{分前|ぷんまえ}です。まにあいません。",
          textId: "Bangun pagi, 10 menit sebelum jam kerja. Tidak akan sempat.",
          choices: [
            { text: "すぐ {会社|かいしゃ}に {電話|でんわ}して、{何時|なんじ}に つくか {言|い}う。それから {行|い}く。", textId: "Segera telepon perusahaan, sampaikan jam berapa tiba, lalu berangkat.", grade: "best" },
            { text: "{電話|でんわ}しないで、いそいで {走|はし}って {行|い}く。", textId: "Tidak menelepon, langsung lari ke perusahaan.", grade: "ng", note: "{会社|かいしゃ}は、あなたが {来|く}るか わかりません。{先|さき}に {電話|でんわ}します。" },
            { text: "「おこられるから」と {思|おも}って、「おなかが いたい」と うそを {言|い}って {休|やす}む。", textId: "Karena takut dimarahi, berbohong \"sakit perut\" lalu tidak masuk.", grade: "ng", note: "うそは、あとで わかります。ちこくより {大|おお}きな もんだいに なります。" }
          ],
          explainId: "Telepon dulu, sampaikan jam tiba, lalu berangkat. Jika langsung lari tanpa menelepon, perusahaan tidak tahu Anda datang atau tidak. Berbohong akan ketahuan dan menjadi masalah lebih besar daripada terlambat.",
          teacherNote: "「怒られるのが怖い」気持ちを話し合える。正直に言うほうが信頼される、という校訓「誠実」につなげる。"
        },
        {
          id: "time-c02", icon: "🚃🛑",
          text: "{駅|えき}に います。{電車|でんしゃ}が {止|と}まりました。{仕事|しごと}に おくれます。",
          textId: "Di stasiun. Kereta berhenti. Akan terlambat kerja.",
          choices: [
            { text: "すぐ {会社|かいしゃ}に {電話|でんわ}する。{駅|えき}で「ちえん しょうめいしょ」を もらう。", textId: "Segera telepon perusahaan dan minta \"surat keterangan keterlambatan kereta\" di stasiun.", grade: "best" },
            { text: "{会社|かいしゃ}に {電話|でんわ}して、べつの {行|い}き{方|かた}を さがす。", textId: "Telepon perusahaan lalu cari rute lain.", grade: "best" },
            { text: "{電車|でんしゃ}の せいなので、れんらくしない。", textId: "Tidak memberi kabar karena itu salah kereta.", grade: "ng", note: "りゆうが {何|なん}でも、れんらくは ひつようです。" },
            { text: "{会社|かいしゃ}に ついてから、せつめいする。", textId: "Menjelaskan setelah tiba.", grade: "ng", note: "つくまで、{会社|かいしゃ}は {何|なに}も わかりません。" }
          ],
          explainId: "Apa pun alasannya, kabar tetap perlu. Sampai Anda tiba, perusahaan tidak tahu apa-apa. Telepon dulu, lalu minta surat keterangan keterlambatan di stasiun atau cari rute lain.",
          teacherNote: "遅延証明書は駅の改札でもらえる。鉄道会社のサイトで出せる場合もある。"
        },
        {
          id: "time-c03", icon: "📞❓",
          text: "{会社|かいしゃ}に {電話|でんわ}しました。でも、だれも {出|で}ません。",
          textId: "Menelepon perusahaan, tetapi tidak ada yang mengangkat.",
          choices: [
            { text: "{少|すこ}し {待|ま}って、もう{一度|いちど} {電話|でんわ}する。{出|で}るまで {何回|なんかい}か かける。", textId: "Tunggu sebentar lalu telepon lagi, beberapa kali sampai diangkat.", grade: "best" },
            { text: "ほかの たんとうの {人|ひと}に {電話|でんわ}する。", textId: "Telepon penanggung jawab yang lain.", grade: "best" },
            { text: "メッセージを {送|おく}って、あとで もう{一度|いちど} {電話|でんわ}する。", textId: "Kirim pesan, lalu telepon lagi nanti.", grade: "ok", note: "メッセージだけで {終|お}わらなければ OKです。" },
            { text: "1{回|かい} {電話|でんわ}したので、もう {何|なに}も しない。", textId: "Sudah menelepon sekali, jadi tidak melakukan apa-apa lagi.", grade: "ng", note: "つたわって いません。" }
          ],
          explainId: "Kabar belum sampai jika tidak ada yang mengangkat. Telepon lagi atau hubungi penanggung jawab lain. Mengirim pesan boleh, asal tidak berhenti di pesan saja.",
          teacherNote: ""
        },
        {
          id: "time-c04", icon: "🌙🎮📲",
          text: "{夜|よる} 11{時|じ}です。{友|とも}だちから「いっしょに ゲームを しよう」と さそわれました。あしたは {仕事|しごと}です。",
          textId: "Pukul 11 malam. Teman mengajak, \"Ayo main game bareng.\" Besok kerja.",
          choices: [
            { text: "「あした {仕事|しごと}だから、{休|やす}みの {日|ひ}に しよう」と {言|い}う。", textId: "Menjawab \"Besok kerja, main di hari libur saja\".", grade: "best" },
            { text: "「30{分|ぷん}だけ」と きめて、アラームを セットして する。", textId: "Menetapkan \"30 menit saja\", memasang alarm, lalu bermain.", grade: "ok", note: "{時間|じかん}を まもれるなら OKです。でも、「あと {少|すこ}し」と {思|おも}う ことが {多|おお}いです。" },
            { text: "さそわれたので、ねむく なるまで する。", textId: "Bermain sampai mengantuk karena diajak.", grade: "ng" }
          ],
          explainId: "Menolak dengan baik adalah yang terbaik. Bermain dengan batas waktu boleh jika bisa ditepati, tetapi sering tergoda \"sebentar lagi\". Jangan bermain sampai mengantuk.",
          teacherNote: "断り方の練習にも使える。"
        },
        {
          id: "time-c05", icon: "🤕🌅",
          text: "{朝|あさ}、{少|すこ}し {頭|あたま}が いたいです。{熱|ねつ}は ありません。",
          textId: "Pagi hari, kepala sedikit sakit. Tidak demam.",
          choices: [
            { text: "{仕事|しごと}に {行|い}く。わるく なったら、すぐ {会社|かいしゃ}の {人|ひと}に {言|い}う。", textId: "Berangkat kerja; jika memburuk, segera beri tahu perusahaan.", grade: "best" },
            { text: "{仕事|しごと}の {前|まえ}に {会社|かいしゃ}に {電話|でんわ}して、そうだんする。", textId: "Sebelum jam kerja, telepon perusahaan untuk berkonsultasi.", grade: "best" },
            { text: "れんらくしないで {休|やす}む。", textId: "Tidak masuk tanpa kabar.", grade: "ng" },
            { text: "とても わるく なっても、だれにも {言|い}わないで、きかいの {仕事|しごと}を つづける。", textId: "Walaupun makin parah, tidak bilang siapa pun dan terus mengoperasikan mesin.", grade: "ng", note: "ぐあいが わるい ときの {仕事|しごと}は、けがの もとです。" }
          ],
          explainId: "Berangkat atau tidak, keduanya bisa benar. Yang penting, jangan memutuskan sendiri tanpa memberi tahu. Bekerja saat tidak sehat bisa menyebabkan cedera.",
          teacherNote: "「休む／行く」のどちらも正解になりうる問題。大事なのは、自分だけで決めずに伝えること。"
        },
        {
          id: "time-c06", icon: "🙇🏢",
          text: "きのう、びょうきで {休|やす}みました。{今日|きょう}、{会社|かいしゃ}に {行|い}きました。",
          textId: "Kemarin tidak masuk karena sakit. Hari ini masuk kerja.",
          choices: [
            { text: "{上司|じょうし}に「きのうは {休|やす}んで、すみませんでした。もう だいじょうぶです」と {言|い}う。", textId: "Berkata kepada atasan, \"Maaf kemarin saya tidak masuk. Sekarang sudah sehat.\"", grade: "best" },
            { text: "いっしょに はたらく {人|ひと}にも「きのうは ありがとう ございました」と {言|い}う。", textId: "Juga mengucapkan terima kasih kepada rekan kerja.", grade: "best", note: "あなたの {仕事|しごと}を、ほかの {人|ひと}が して くれました。" },
            { text: "{何|なに}も {言|い}わないで、{仕事|しごと}を はじめる。", textId: "Langsung bekerja tanpa berkata apa-apa.", grade: "ok", note: "ルールいはんでは ありません。でも、ひとこと {言|い}うと、しんらいされます。" }
          ],
          explainId: "Pekerjaan Anda kemarin dikerjakan orang lain. Langsung bekerja tanpa berkata apa-apa bukan pelanggaran, tetapi satu kalimat maaf dan terima kasih membuat Anda lebih dipercaya.",
          teacherNote: ""
        },
        {
          id: "time-c07", icon: "🏭😵",
          text: "{仕事中|しごとちゅう}です。きゅうに {気分|きぶん}が わるく なりました。",
          textId: "Sedang bekerja. Tiba-tiba merasa tidak enak badan.",
          choices: [
            { text: "{近|ちか}くの {上司|じょうし}に、すぐ {言|い}う。", textId: "Segera beri tahu atasan terdekat.", grade: "best" },
            { text: "がまんして、{仕事|しごと}を つづける。", textId: "Menahan diri dan terus bekerja.", grade: "ng", note: "けがや じこの もとです。" },
            { text: "{何|なに}も {言|い}わないで、トイレで {長|なが}く {休|やす}む。", textId: "Diam-diam beristirahat lama di toilet.", grade: "ng", note: "みんなが あなたを さがします。" },
            { text: "{何|なに}も {言|い}わないで、{寮|りょう}に {帰|かえ}る。", textId: "Pulang ke asrama tanpa bilang.", grade: "ng" }
          ],
          explain: [
            ["ほんとうに あった {話|はなし}", "そうだんしないで、かってに {帰|かえ}った {人|ひと}が います。びょうきより、{言|い}わなかった ことが もんだいに なりました。"]
          ],
          explainId: "Segera beri tahu atasan terdekat. Menahan diri bisa menyebabkan cedera atau kecelakaan. Ada orang yang pulang tanpa berkonsultasi; yang menjadi masalah bukan sakitnya, tetapi karena tidak memberi tahu.",
          teacherNote: "駐在記録に「相談せずに休む・退勤する」が4件ある。"
        },
        {
          id: "time-c08", icon: "📝📅",
          text: "{日本語|にほんご}の しけんを うけたいです。しけんの {日|ひ}は、{仕事|しごと}の {日|ひ}です。",
          textId: "Ingin ikut ujian bahasa Jepang, tetapi hari ujiannya adalah hari kerja.",
          choices: [
            { text: "{申|もう}しこむ {前|まえ}に、{会社|かいしゃ}の {人|ひと}に そうだんする。", textId: "Berkonsultasi dengan perusahaan sebelum mendaftar.", grade: "best" },
            { text: "{休|やす}みの {日|ひ}に ある しけんを さがす。", textId: "Mencari ujian yang diadakan pada hari libur.", grade: "best" },
            { text: "{先|さき}に {申|もう}しこんで、あとで「この {日|ひ}は {休|やす}みます」と {言|い}う。", textId: "Mendaftar dulu, lalu bilang \"hari itu saya libur\".", grade: "ng", note: "{会社|かいしゃ}は こまります。" },
            { text: "しけんの {日|ひ}に「びょうきです」と うそを {言|い}って {休|やす}む。", textId: "Berbohong \"sakit\" pada hari ujian.", grade: "ng" }
          ],
          explainId: "Konsultasikan dengan perusahaan sebelum mendaftar, atau cari ujian di hari libur. Mendaftar dulu lalu memberi tahu membuat perusahaan kesulitan. Berbohong tidak boleh.",
          teacherNote: "駐在記録に、会社に相談せず勤務日に試験を申し込んだ例がある。"
        }
      ]
    },

    // ================= セット3　つたえる（◎○✖） =================
    {
      key: "say",
      title: "つたえる",
      titleId: "Menyampaikan",
      description: "{何|なん}と {言|い}いますか。",
      intro: {
        title: "{電話|でんわ}の かたち",
        lines: [
          ["h", "あいさつ ＋ {名前|なまえ} ＋ りゆう ＋ おねがい"],
          ["li", "「おはよう ございます。○○です。{熱|ねつ}が あるので、{今日|きょう}は {休|やす}ませて ください。」"],
          ["p", "りゆうは、{正直|しょうじき}に {言|い}います。"]
        ],
        textId: "Pola telepon: salam + nama + alasan + permohonan. Contoh: \"Ohayou gozaimasu. (Nama) desu. Netsu ga aru node, kyou wa yasumasete kudasai.\" Sampaikan alasan dengan jujur."
      },
      questions: [
        {
          id: "time-t01", icon: "📞🤒",
          text: "{熱|ねつ}が 38{度|ど} あります。{仕事|しごと}を {休|やす}みます。{朝|あさ}、{会社|かいしゃ}に {電話|でんわ}します。",
          textId: "Demam 38 derajat dan tidak masuk kerja. Pagi hari menelepon perusahaan.",
          choices: [
            { text: "「おはよう ございます。○○です。{熱|ねつ}が 38{度|ど} あるので、{今日|きょう}は {休|やす}ませて ください。」", textId: "\"Ohayou gozaimasu. (Nama) desu. Netsu ga 38-do aru node, kyou wa yasumasete kudasai.\" (Selamat pagi. Saya …. Karena demam 38 derajat, izinkan saya tidak masuk hari ini.)", grade: "best" },
            { text: "「{今日|きょう}、{休|やす}みます。」", textId: "\"Kyou, yasumimasu.\" (Hari ini saya libur.)", grade: "ng", note: "{名前|なまえ}と りゆうが ありません。" },
            { text: "{何|なに}を {言|い}うか わからなくて、{電話|でんわ}を {切|き}る。", textId: "Menutup telepon karena tidak tahu harus bilang apa.", grade: "ng" }
          ],
          explainId: "\"Yasumasete kudasai\" (izinkan saya libur) lebih sopan daripada \"yasumimasu\" (saya libur). Tanpa nama dan alasan, laporan belum cukup.",
          teacherNote: "聞かれやすいこと（いつから？ 病院に行く？ 明日は？）の答え方も練習できる。"
        },
        {
          id: "time-t02", icon: "📞😴",
          text: "ねぼうしました。20{分|ぷん} おくれます。{会社|かいしゃ}に {電話|でんわ}します。",
          textId: "Kesiangan dan akan terlambat 20 menit. Menelepon perusahaan.",
          choices: [
            { text: "「おはよう ございます。○○です。すみません、ねぼうしました。8{時|じ}20{分|ぷん}ごろ つきます。」", textId: "\"Ohayou gozaimasu. (Nama) desu. Sumimasen, nebou shimashita. 8-ji 20-pun goro tsukimasu.\" (Selamat pagi. Saya …. Maaf, saya kesiangan. Saya tiba sekitar pukul 8.20.)", grade: "best" },
            { text: "「すみません、{少|すこ}し おくれます。」", textId: "\"Sumimasen, sukoshi okuremasu.\" (Maaf, saya sedikit terlambat.)", grade: "ng", note: "りゆうと、{何時|なんじ}に つくかが ありません。" },
            { text: "「{電車|でんしゃ}が おくれて います。」（ほんとうは ねぼうです）", textId: "\"Densha ga okurete imasu.\" (Keretanya terlambat.) — padahal sebenarnya kesiangan.", grade: "ng", note: "うそは、あとで わかります。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "あやまる ＋ りゆう（{正直|しょうじき}に）＋ {何時|なんじ}に つくか"]
          ],
          explainId: "Pola: minta maaf + alasan (jujur) + jam berapa tiba. \"Sedikit terlambat\" saja tidak cukup karena tidak ada alasan dan jam tiba. Jangan berbohong soal kereta.",
          teacherNote: ""
        },
        {
          id: "time-t03", icon: "📞🚃",
          text: "{電車|でんしゃ}が {止|と}まって います。{何時|なんじ}に つくか わかりません。{会社|かいしゃ}に {電話|でんわ}します。",
          textId: "Kereta berhenti dan belum tahu jam berapa tiba. Menelepon perusahaan.",
          choices: [
            { text: "「○○です。{電車|でんしゃ}が {止|と}まって います。{何時|なんじ}に つくか、まだ わかりません。わかったら、また {電話|でんわ}します。」", textId: "\"(Nama) desu. Densha ga tomatte imasu. Nanji ni tsuku ka, mada wakarimasen. Wakattara, mata denwa shimasu.\" (Saya …. Keretanya berhenti. Belum tahu jam berapa tiba. Nanti saya telepon lagi.)", grade: "best" },
            { text: "「{電車|でんしゃ}です。」", textId: "\"Densha desu.\" (Kereta.)", grade: "ng", note: "{何|なに}が あったか、わかりません。" },
            { text: "わかるまで、{電話|でんわ}しない。", textId: "Tidak menelepon sampai tahu jam tiba.", grade: "ng", note: "わからない ときも、「わからない」と つたえます。" }
          ],
          explainId: "Sampaikan: apa yang terjadi + belum tahu jam tiba + akan menelepon lagi. \"Densha desu\" saja tidak menjelaskan apa yang terjadi. Jangan menunggu sampai tahu; \"belum tahu\" pun harus disampaikan.",
          teacherNote: ""
        },
        {
          id: "time-t04", icon: "🏃🙇",
          text: "おくれて、{会社|かいしゃ}に つきました。",
          textId: "Tiba di perusahaan dalam keadaan terlambat.",
          choices: [
            { text: "{上司|じょうし}の ところへ {行|い}って、「おくれて すみませんでした」と {言|い}ってから、{仕事|しごと}を はじめる。", textId: "Datangi atasan dan katakan \"Okurete sumimasen deshita\" (Maaf saya terlambat), lalu mulai bekerja.", grade: "best" },
            { text: "「{電車|でんしゃ}が おくれました。」とだけ {言|い}う。", textId: "Hanya berkata \"Densha ga okuremashita\" (Keretanya terlambat).", grade: "ng", note: "あやまる ことばが ありません。" },
            { text: "しずかに {入|はい}って、{何|なに}も {言|い}わないで {仕事|しごと}を はじめる。", textId: "Masuk diam-diam dan langsung bekerja tanpa berkata apa-apa.", grade: "ng" }
          ],
          explainId: "Datangi atasan dan katakan \"Okurete sumimasen deshita\" sebelum mulai bekerja. Hanya menyebut alasan tanpa minta maaf tidak cukup. Jangan masuk diam-diam.",
          teacherNote: ""
        },
        {
          id: "time-t05", icon: "🗓️🙋",
          text: "{来月|らいげつ}の 10{日|か}に、{休|やす}みを とりたいです。{会社|かいしゃ}の {人|ひと}に {言|い}います。",
          textId: "Ingin cuti tanggal 10 bulan depan. Menyampaikan kepada perusahaan.",
          choices: [
            { text: "「すみません、{来月|らいげつ}の 10{日|か}に {休|やす}みを いただきたいです。よろしいでしょうか。」", textId: "\"Sumimasen, raigetsu no tooka ni yasumi o itadakitai desu. Yoroshii deshou ka.\" (Maaf, saya ingin cuti tanggal 10 bulan depan. Apakah boleh?)", grade: "best" },
            { text: "「{来月|らいげつ}の 10{日|か}、{休|やす}みます。」", textId: "\"Raigetsu no tooka, yasumimasu.\" (Tanggal 10 bulan depan saya libur.)", grade: "ng", note: "もう きめた {言|い}い{方|かた}です。そうだんの かたちに します。" },
            { text: "{前|まえ}の {日|ひ}に {言|い}う。", textId: "Baru bilang sehari sebelumnya.", grade: "ng", note: "{会社|かいしゃ}は じゅんびが できません。" }
          ],
          explainId: "Gunakan bentuk konsultasi: \"Yasumi o itadakitai desu. Yoroshii deshou ka.\" \"Yasumimasu\" terdengar sudah diputuskan sendiri. Jangan baru bilang sehari sebelumnya.",
          teacherNote: ""
        },
        {
          id: "time-t06", icon: "🏭🗣️",
          text: "{仕事中|しごとちゅう}、{気分|きぶん}が わるく なりました。{上司|じょうし}に {言|い}います。",
          textId: "Saat bekerja, merasa tidak enak badan. Menyampaikan kepada atasan.",
          choices: [
            { text: "「すみません、{気分|きぶん}が わるいです。{少|すこ}し {休|やす}んでも いいですか。」", textId: "\"Sumimasen, kibun ga warui desu. Sukoshi yasunde mo ii desu ka.\" (Maaf, saya merasa tidak enak badan. Boleh saya istirahat sebentar?)", grade: "best" },
            { text: "「{帰|かえ}ります。」", textId: "\"Kaerimasu.\" (Saya pulang.)", grade: "ng", note: "りゆうが ありません。かってに きめないで、そうだんします。" },
            { text: "{何|なに}も {言|い}わないで、がまんする。", textId: "Menahan diri tanpa bilang apa-apa.", grade: "ng" }
          ],
          explainId: "Katakan: \"Sumimasen, kibun ga warui desu. Sukoshi yasunde mo ii desu ka.\" \"Kaerimasu\" saja tidak ada alasannya dan terdengar memutuskan sendiri. Jangan menahan diri tanpa bilang.",
          teacherNote: ""
        }
      ]
    }
  ]
};
