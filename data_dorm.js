// =====================================================================
// テーマ「寮のルール」の問題データ
// ・ふりがなは {漢字|かんじ} と書く
// ・セットの形は3つある
//   ① OK／ダメ ……………… answer は "ok" か "dame"
//   ② えらぶ（2つ・3つ）…… セットに options を書き、answer に options の key を書く
//   ③ ◎○✖ ………………… 問題に choices を書く。grade は "best"（◎）"ok"（○）"ng"（✖）
// ・intro はセットの最初に出す「きじゅん」の画面、summary は結果の画面に出す「まとめ」
// ・tag は "rule"（ルールいはん）"meiwaku"（めいわく）"danger"（あぶない）。2つ書くときは ["rule","meiwaku"]
// ・teacherNote は先生用のメモ（生徒の画面には出ない）
// =====================================================================
window.IJFA_THEMES = window.IJFA_THEMES || {};
window.IJFA_THEMES.dorm = {
  key: "dorm",
  title: "{寮|りょう}のルール",
  titleId: "Aturan Asrama",
  intro: "{日本|にほん}の {寮|りょう}で、みんなと いっしょに {生活|せいかつ}する ルールを {覚|おぼ}えましょう。",
  introId: "Mari belajar aturan hidup bersama di asrama di Jepang.",
  sets: [
    // ================= セット1　きほん（OK／ダメ） =================
    {
      key: "basic",
      title: "きほん",
      titleId: "Dasar",
      description: "タバコ・{音|おと}・{火|ひ}・そうじ",
      questions: [
        {
          id: "dorm-k01", icon: "🚬🛏️",
          text: "へやの {中|なか}で タバコを すいます。",
          textId: "Merokok di dalam kamar.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "かべや カーテンに においが つきます。{火事|かじ}の げんいんにも なります。"],
            ["もし…", "へやを なおす お{金|かね}を はらう ことが あります。{何回|なんかい}も すると、{国|くに}に {帰|かえ}る ことに なる ことも あります。"],
            ["どうする？", "きめられた {場所|ばしょ}で すいます。"],
            ["ほんとうに あった {話|はなし}", "{会社|かいしゃ}に {入|はい}った {日|ひ}の {夜|よる}に へやで すって、{大|おお}きな もんだいに なった {人|ひと}が います。"]
          ],
          explainId: "Bau menempel di dinding dan gorden, dan bisa menyebabkan kebakaran. Anda bisa diminta membayar biaya perbaikan kamar; jika berulang, bisa dipulangkan ke Indonesia. Merokoklah di tempat yang ditentukan.",
          teacherNote: "駐在記録では室内喫煙が9件。繰り返して途中帰国になった例が複数ある。"
        },
        {
          id: "dorm-k02", icon: "🚬🌇",
          text: "ベランダで タバコを すいます。",
          textId: "Merokok di balkon.",
          answer: "dame", tag: ["rule", "meiwaku"],
          explain: [
            ["なぜ？", "けむりが となりの へやに {入|はい}ります。せんたくものに においが つきます。"],
            ["ポイント", "「ベランダは {外|そと}だから OK」では ありません。"],
            ["どうする？", "きめられた {場所|ばしょ}（きつえんじょ）で すいます。"]
          ],
          explainId: "Asap masuk ke kamar tetangga dan bau menempel di jemuran. Balkon bukan berarti boleh. Merokoklah di tempat merokok yang ditentukan.",
          teacherNote: "法律ではなく寮則・管理規約による禁止。多くの寮・アパートで禁止されている。"
        },
        {
          id: "dorm-k03", icon: "🚬✅",
          text: "きめられた {場所|ばしょ}（きつえんじょ）で タバコを すいます。",
          textId: "Merokok di tempat merokok yang ditentukan.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "すいがらは はいざらに すてます。{道|みち}に すてません。"]
          ],
          explainId: "Puntung rokok dibuang ke asbak, jangan dibuang di jalan.",
          teacherNote: ""
        },
        {
          id: "dorm-k04", icon: "🌙📱🔊",
          text: "{夜|よる} 11{時|じ}、へやで スピーカーで {電話|でんわ}を します。",
          textId: "Pukul 11 malam, menelepon dengan pengeras suara (speaker) di kamar.",
          answer: "dame", tag: "meiwaku",
          explain: [
            ["なぜ？", "{日本|にほん}の アパートは かべが うすいです。{夜|よる}は {小|ちい}さい {音|おと}も よく {聞|き}こえます。"],
            ["もし…", "となりの {人|ひと}が {会社|かいしゃ}や {大家|おおや}さんに {言|い}います（くじょう）。"],
            ["どうする？", "{夜|よる} 9{時|じ}からは、イヤホンを して、{小|ちい}さい {声|こえ}で {話|はな}します。"]
          ],
          explainId: "Dinding apartemen di Jepang tipis, dan malam hari suara kecil pun terdengar. Tetangga bisa mengadu ke perusahaan atau pemilik rumah. Setelah pukul 9 malam, pakai earphone dan bicara pelan.",
          teacherNote: ""
        },
        {
          id: "dorm-k05", icon: "🌙🎧",
          text: "{夜|よる}、イヤホンを して、{小|ちい}さい {声|こえ}で みじかく {電話|でんわ}します。",
          textId: "Malam hari, menelepon sebentar dengan earphone dan suara pelan.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "イヤホンでも、あなたの {声|こえ}は {聞|き}こえます。{長|なが}く {話|はな}す ときは、へやの {外|そと}の {話|はな}して いい {場所|ばしょ}へ {行|い}きます。"]
          ],
          explainId: "Walaupun pakai earphone, suara Anda tetap terdengar. Jika ingin bicara lama, pindah ke tempat di luar kamar yang boleh untuk berbicara.",
          teacherNote: ""
        },
        {
          id: "dorm-k06", icon: "🌙👥😂",
          text: "{夜|よる} 9{時|じ}すぎ、へやに {友|とも}だちが 5{人|にん} {来|き}て、{話|はな}して わらいます。",
          textId: "Lewat pukul 9 malam, 5 teman datang ke kamar, mengobrol dan tertawa.",
          answer: "dame", tag: "meiwaku",
          explain: [
            ["なぜ？", "1{人|ひとり}の {声|こえ}は {小|ちい}さくても、5{人|にん}の {声|こえ}は {大|おお}きいです。"],
            ["ほんとうに あった {話|はなし}", "{音|おと}の ことで 4{回|かい} ちゅういされて、「{寮|りょう}を {出|で}て ください」と {言|い}われた {人|ひと}が います。"],
            ["どうする？", "あつまる ときは、{昼|ひる}に します。{夜|よる}は {早|はや}く {終|お}わります。"]
          ],
          explainId: "Suara satu orang kecil, tetapi suara 5 orang besar. Ada orang yang ditegur 4 kali karena berisik lalu diminta keluar dari asrama. Berkumpullah pada siang hari, dan malam hari selesai lebih awal.",
          teacherNote: "駐在記録では騒音・苦情が8件。"
        },
        {
          id: "dorm-k07", icon: "🍳🔥🚶",
          text: "{料理|りょうり}の とちゅうで、{火|ひ}を つけたまま へやに もどります。",
          textId: "Saat memasak, kembali ke kamar dengan api masih menyala.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "{少|すこ}しの {時間|じかん}でも、{火事|かじ}に なります。"],
            ["どうする？", "はなれる ときは、かならず {火|ひ}を {消|け}します。"]
          ],
          explainId: "Walaupun sebentar, bisa terjadi kebakaran. Jika meninggalkan dapur, api harus dimatikan.",
          teacherNote: "駐在記録に小火の例がある。"
        },
        {
          id: "dorm-k08", icon: "🛢️🚰",
          text: "のこった {油|あぶら}を、{台所|だいどころ}の {流|なが}しに ながします。",
          textId: "Membuang sisa minyak goreng ke bak cuci dapur.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{油|あぶら}は パイプの {中|なか}で かたまります。{水|みず}が ながれなく なって、{水|みず}もれの げんいんに なります。"],
            ["どうする？", "{油|あぶら}が あたたかい うちに、「{固|かた}めるテンプル」など {油|あぶら}を かためる ものを {入|い}れます。かたまったら、もえる ゴミに {出|だ}します。"],
            ["ポイント", "「{固|かた}めるテンプル」は、スーパーや ドラッグストアで {買|か}えます。{少|すこ}しの {油|あぶら}は、{紙|かみ}に すわせて すてても いいです。"]
          ],
          explainId: "Minyak mengeras di dalam pipa, air tersumbat dan bisa bocor. Saat minyak masih hangat, masukkan bahan pengental minyak seperti \"Katameru Tenpuru\". Setelah mengeras, buang sebagai sampah yang bisa dibakar. Produk ini bisa dibeli di supermarket atau toko obat (drugstore). Minyak yang sedikit boleh diserap dengan kertas lalu dibuang.",
          teacherNote: "油の捨て方は自治体で違う場合がある。駐在記録に漏水の例がある。"
        },
        {
          id: "dorm-k09", icon: "🧳🛏️",
          text: "{寮|りょう}に すんで いない {友|とも}だちを、へやに とめます。",
          textId: "Mengajak teman yang bukan penghuni asrama untuk menginap di kamar.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{寮|りょう}は {会社|かいしゃ}が かりて いる {場所|ばしょ}です。すむ {人|ひと}が きまって います。"],
            ["どうする？", "{先|さき}に {会社|かいしゃ}の {人|ひと}に {聞|き}きます。「いい」と {言|い}われたら OKです。"]
          ],
          explainId: "Asrama disewa oleh perusahaan dan penghuninya sudah ditentukan. Tanyakan dulu kepada perusahaan; boleh jika sudah diizinkan.",
          teacherNote: "会社・寮によってルールが違う。駐在記録には無断外泊の例もある。"
        },
        {
          id: "dorm-k10", icon: "🧽✨",
          text: "{台所|だいどころ}や トイレを つかった あと、すぐ きれいに します。",
          textId: "Setelah memakai dapur atau toilet, langsung membersihkannya.",
          answer: "ok", tag: null,
          explain: [
            ["なぜ？", "みんなで つかう {場所|ばしょ}です。つぎの {人|ひと}が {気持|きも}ちよく つかえます。"],
            ["ポイント", "「あとで やる」は、けんかの げんいんに なります。"]
          ],
          explainId: "Itu tempat yang dipakai bersama. \"Nanti saja\" bisa menjadi penyebab pertengkaran.",
          teacherNote: "駐在記録では寮の汚れの指摘が5件。"
        },
        {
          id: "dorm-k11", icon: "🗑️📅",
          text: "ゴミを、きまった {曜日|ようび}の {朝|あさ}に、きまった {場所|ばしょ}に {出|だ}します。",
          textId: "Membuang sampah pada pagi hari sesuai jadwal, di tempat yang ditentukan.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "{前|まえ}の {夜|よる}に {出|だ}すと、カラスや ねこが ちらかします。ちがう {日|ひ}に {出|だ}すと、もって いって もらえません。"]
          ],
          explainId: "Jika dibuang malam sebelumnya, sampah diacak-acak gagak atau kucing. Jika salah hari, sampah tidak diangkut.",
          teacherNote: "分け方・曜日・時間は地域で違う。"
        }
      ]
    },

    // ================= セット2　今すぐ？ 朝？ =================
    {
      key: "night",
      title: "{今|いま}すぐ？ {朝|あさ}？",
      titleId: "Sekarang? Pagi?",
      description: "{夜|よる} 11{時|じ}です。{会社|かいしゃ}に {電話|でんわ}しますか。",
      options: [
        { key: "now", label: "{今|いま}すぐ {電話|でんわ}", labelId: "Telepon sekarang", color: "red", icon: "📞" },
        { key: "morning", label: "{朝|あさ}に {言|い}う", labelId: "Sampaikan pagi", color: "blue", icon: "🌅" }
      ],
      intro: {
        title: "{夜|よる}の {電話|でんわ}の きじゅん",
        lines: [
          ["h", "{朝|あさ}まで {待|ま}つと、もっと わるく なりますか？"],
          ["li", "はい → {夜|よる}でも、すぐ {電話|でんわ}します。"],
          ["li", "いいえ → {朝|あさ}、{仕事|しごと}の {時間|じかん}に {言|い}います。{夜|よる}の {電話|でんわ}は しつれいです。"]
        ],
        textId: "Apakah keadaannya akan lebih buruk jika menunggu sampai pagi? Ya → segera telepon walaupun malam. Tidak → sampaikan pagi hari pada jam kerja; menelepon malam-malam itu tidak sopan."
      },
      summary: {
        lines: [
          "{会社|かいしゃ}に {入|はい}ったら、「{夜|よる}の きんきゅう れんらく{先|さき}」を {聞|き}いて、スマホに {入|い}れます。",
          "{夜|よる}に {電話|でんわ}する ときは、はじめに「{夜|よる} おそく すみません」と {言|い}います。"
        ],
        textId: "Setelah masuk perusahaan, tanyakan nomor kontak darurat malam hari dan simpan di HP. Saat menelepon malam, awali dengan \"Yoru osoku sumimasen\"."
      },
      questions: [
        {
          id: "dorm-i01", icon: "💧🚰",
          text: "{台所|だいどころ}の ゆかに {水|みず}が ひろがって います。{水|みず}が {止|と}まりません。",
          textId: "Air menggenang di lantai dapur dan tidak berhenti.",
          answer: "now",
          explain: [
            ["なぜ？", "{水|みず}は {下|した}の へやに おちます。{朝|あさ}まで {待|ま}つと、もっと ひろがります。"],
            ["ほんとうに あった {話|はなし}", "{水|みず}もれを {朝|あさ}まで {言|い}わなかった {人|ひと}が います。{会社|かいしゃ}は とても こまりました。"]
          ],
          explainId: "Air bisa menetes ke kamar di bawah, dan makin meluas jika menunggu pagi. Ada orang yang tidak melapor sampai pagi sehingga perusahaan sangat kesulitan.",
          teacherNote: ""
        },
        {
          id: "dorm-i02", icon: "💡❌",
          text: "へやの {電気|でんき}が 1つ つきません。",
          textId: "Satu lampu di kamar tidak menyala.",
          answer: "morning",
          explain: [
            ["なぜ？", "{朝|あさ}まで {待|ま}っても、わるく なりません。"]
          ],
          explainId: "Menunggu sampai pagi tidak membuat keadaan lebih buruk.",
          teacherNote: ""
        },
        {
          id: "dorm-i03", icon: "🍳🔥⬛",
          text: "{料理中|りょうりちゅう}に {火|ひ}が {出|で}ました。{火|ひ}は {消|き}えました。かべが {少|すこ}し {黒|くろ}く なりました。",
          textId: "Saat memasak, muncul api. Api sudah padam, tetapi dinding sedikit menghitam.",
          answer: "now",
          explain: [
            ["なぜ？", "{消|き}えたと {思|おも}っても、また もえる ことが あります。{火|ひ}の ことは、{小|ちい}さくても すぐ ほうこくします。"],
            ["ほんとうに あった {話|はなし}", "{小|ちい}さい {火事|かじ}を {朝|あさ}まで {言|い}わなかった {人|ひと}が います。{火事|かじ}より、{言|い}わなかった ことが {大|おお}きな もんだいに なりました。"]
          ],
          explainId: "Walaupun terlihat padam, api bisa menyala lagi. Soal api, sekecil apa pun harus segera dilaporkan. Yang menjadi masalah besar bukan apinya, tetapi karena tidak melapor.",
          teacherNote: ""
        },
        {
          id: "dorm-i04", icon: "🧹😠",
          text: "{同|おな}じ へやの {人|ひと}が そうじを しません。おこって います。",
          textId: "Teman sekamar tidak mau bersih-bersih. Saya kesal.",
          answer: "morning",
          explain: [
            ["なぜ？", "いそぐ ことでは ありません。{夜|よる}の {電話|でんわ}は、{会社|かいしゃ}の {人|ひと}の めいわくに なります。"],
            ["どうする？", "{仕事|しごと}の {時間|じかん}に そうだんします。"]
          ],
          explainId: "Ini tidak mendesak. Telepon malam mengganggu staf perusahaan. Konsultasikan pada jam kerja.",
          teacherNote: ""
        },
        {
          id: "dorm-i05", icon: "📅🏖️",
          text: "{来週|らいしゅう}、{休|やす}みを とりたいです。",
          textId: "Saya ingin mengambil cuti minggu depan.",
          answer: "morning",
          explain: [
            ["なぜ？", "いそぐ ことでは ありません。{仕事|しごと}の {時間|じかん}に そうだんします。"]
          ],
          explainId: "Tidak mendesak. Bicarakan pada jam kerja.",
          teacherNote: ""
        },
        {
          id: "dorm-i06", icon: "🔑❓🚪",
          text: "かぎを なくしました。へやに {入|はい}れません。",
          textId: "Kunci hilang dan saya tidak bisa masuk kamar.",
          answer: "now",
          explain: [
            ["なぜ？", "{朝|あさ}まで {外|そと}に いる ことに なります。なくした かぎを だれかが つかう かも しれません。"]
          ],
          explainId: "Anda terpaksa di luar sampai pagi, dan kunci yang hilang bisa dipakai orang lain.",
          teacherNote: ""
        }
      ]
    },

    // ================= セット3　びょうき・けが =================
    {
      key: "sick",
      title: "びょうき・けが",
      titleId: "Sakit & Luka",
      description: "{夜|よる}です。119？ {会社|かいしゃ}？ {朝|あさ}？",
      options: [
        { key: "119", label: "119に {電話|でんわ}", labelId: "Telepon 119 (ambulans)", color: "red", icon: "🚑" },
        { key: "company", label: "{会社|かいしゃ}に {今|いま}すぐ {電話|でんわ}", labelId: "Telepon perusahaan sekarang", color: "orange", icon: "📞" },
        { key: "morning", label: "{朝|あさ}に れんらく", labelId: "Hubungi pagi hari", color: "blue", icon: "🌅" }
      ],
      intro: {
        title: "びょうき・けがの きじゅん",
        lines: [
          ["p", "{熱|ねつ}の {数字|すうじ}では なく、{体|からだ}の ようすで きめます。"],
          ["h", "① 119の しるし"],
          ["p", "よんでも こたえない／いきが とても くるしい／むねが とても いたい／けいれん／{血|ち}が {止|と}まらない／きゅうに {話|はな}せない・{手|て}や {足|あし}が うごかない"],
          ["li", "すぐ 119（きゅうきゅうしゃ）。そのあと {会社|かいしゃ}に {電話|でんわ}。"],
          ["h", "② 3つの チェック"],
          ["p", "ねられますか？　{水|みず}が のめますか？　ふつうに {話|はな}せますか？"],
          ["li", "ぜんぶ「はい」→ ねて、{朝|あさ}、{仕事|しごと}の {前|まえ}に {自分|じぶん}で {電話|でんわ}します。"],
          ["li", "1つでも「いいえ」→ {夜|よる}でも、{会社|かいしゃ}に {電話|でんわ}します。"],
          ["h", "③ まず、{同|おな}じ へやの {人|ひと}に {言|い}います。"],
          ["p", "1{人|ひとり}で きめません。"],
          ["h", "④ それでも まよったら、{電話|でんわ}して いいです。"],
          ["p", "がまんして わるく なる ほうが、{大|おお}きな もんだいです。"]
        ],
        textId: "Putuskan berdasarkan keadaan tubuh, bukan angka demam. (1) Tanda bahaya → segera telepon 119, lalu perusahaan: tidak merespons saat dipanggil, sangat sesak napas, dada sangat sakit, kejang, darah tidak berhenti, tiba-tiba tidak bisa bicara atau tangan/kaki tidak bisa digerakkan. (2) Tiga pertanyaan: Bisa tidur? Bisa minum air? Bisa bicara seperti biasa? Semua \"ya\" → tidur, lalu pagi sebelum jam kerja telepon sendiri. Ada satu \"tidak\" → telepon perusahaan walaupun malam. (3) Beri tahu teman sekamar dulu; jangan memutuskan sendirian. (4) Jika masih ragu, boleh menelepon. Menahan diri sampai memburuk adalah masalah yang lebih besar."
      },
      summary: {
        lines: [
          "{夜|よる}の {電話|でんわ}は、きじゅんで きめます。「ねられる・のめる・{話|はな}せる」が ぜんぶ「はい」なら、{朝|あさ}で だいじょうぶです。",
          "それでも まよったら、{電話|でんわ}して いいです。"
        ],
        textId: "Putuskan telepon malam berdasarkan patokan. Jika bisa tidur, bisa minum, dan bisa bicara, pagi hari sudah cukup. Jika masih ragu, boleh menelepon."
      },
      questions: [
        {
          id: "dorm-b01", icon: "🤒😴",
          text: "{熱|ねつ}が 38{度|ど} あります。ねる ことが できます。{水|みず}も のめます。",
          textId: "Demam 38 derajat. Masih bisa tidur dan bisa minum air.",
          answer: "morning",
          explain: [
            ["なぜ？", "3つの チェックが ぜんぶ「はい」です。{今|いま}は {休|やす}む ことが できます。"],
            ["どうする？", "{同|おな}じ へやの {人|ひと}に {言|い}って、ねます。{朝|あさ}、{仕事|しごと}が はじまる {前|まえ}に、{自分|じぶん}で {電話|でんわ}します。"],
            ["ポイント", "{夜|よる}の {間|あいだ}に わるく なったら、もう{一度|いちど} チェックします。"]
          ],
          explainId: "Ketiga pertanyaan jawabannya \"ya\", jadi sekarang bisa beristirahat. Beri tahu teman sekamar lalu tidur. Pagi sebelum jam kerja, telepon sendiri. Jika memburuk di malam hari, periksa lagi.",
          teacherNote: "B1〜B3は、同じ「熱」でも状態で答えが変わることを見せる組。"
        },
        {
          id: "dorm-b02", icon: "🤒🤮",
          text: "{熱|ねつ}が 39{度|ど} あります。{何回|なんかい}も はいて、{水|みず}が のめません。",
          textId: "Demam 39 derajat. Muntah berkali-kali dan tidak bisa minum air.",
          answer: "company",
          explain: [
            ["なぜ？", "「{水|みず}が のめますか？」が「いいえ」です。{朝|あさ}まで {待|ま}つと、もっと わるく なります。"]
          ],
          explainId: "Jawaban untuk \"Bisa minum air?\" adalah \"tidak\". Jika menunggu sampai pagi, keadaan memburuk.",
          teacherNote: ""
        },
        {
          id: "dorm-b03", icon: "🤒😶",
          text: "{同|おな}じ へやの {友|とも}だちが、{熱|ねつ}で ねて います。よんでも こたえません。",
          textId: "Teman sekamar tidur karena demam. Dipanggil pun tidak merespons.",
          answer: "119",
          explain: [
            ["なぜ？", "「よんでも こたえない」は、119の しるしです。"],
            ["どうする？", "すぐ 119に {電話|でんわ}します。そのあと、{会社|かいしゃ}に {電話|でんわ}します。"]
          ],
          explainId: "\"Tidak merespons saat dipanggil\" adalah tanda bahaya. Segera telepon 119, lalu telepon perusahaan.",
          teacherNote: ""
        },
        {
          id: "dorm-b04", icon: "😣🛏️",
          text: "おなかが とても いたいです。ねられません。うごけません。",
          textId: "Perut sangat sakit. Tidak bisa tidur dan tidak bisa bergerak.",
          answer: "company",
          explain: [
            ["なぜ？", "「ねられますか？」が「いいえ」です。"],
            ["ポイント", "いたみが どんどん {強|つよ}く なる とき、119の しるしが ある ときは、119に {電話|でんわ}します。"]
          ],
          explainId: "Jawaban untuk \"Bisa tidur?\" adalah \"tidak\". Jika sakit makin parah atau ada tanda bahaya, telepon 119.",
          teacherNote: ""
        },
        {
          id: "dorm-b05", icon: "🔪🩹",
          text: "{料理中|りょうりちゅう}に、ほうちょうで {指|ゆび}を {切|き}りました。おさえたら、{血|ち}は {止|と}まりました。",
          textId: "Saat memasak, jari teriris pisau. Setelah ditekan, darah berhenti.",
          answer: "morning",
          explain: [
            ["なぜ？", "{血|ち}が {止|と}まりました。ねる ことが できます。"],
            ["どうする？", "きずを {水|みず}で あらって、ばんそうこうを します。{朝|あさ}、{会社|かいしゃ}の {人|ひと}に {言|い}います。"],
            ["ポイント", "{血|ち}が たくさん {出|で}て {止|と}まらない ときは、{強|つよ}く おさえて、119に {電話|でんわ}します。"]
          ],
          explainId: "Darah sudah berhenti dan Anda bisa tidur. Cuci luka dengan air dan pakai plester. Pagi hari, beri tahu perusahaan. Jika darah banyak dan tidak berhenti, tekan kuat dan telepon 119.",
          teacherNote: "小さいけがでも、朝の報告は必要（仕事に影響するため）。"
        },
        {
          id: "dorm-b06", icon: "😵‍💫⚡",
          text: "{同|おな}じ へやの {友|とも}だちが、きゅうに たおれて、{体|からだ}が ふるえて います（けいれん）。",
          textId: "Teman sekamar tiba-tiba jatuh dan tubuhnya kejang.",
          answer: "119",
          explain: [
            ["なぜ？", "けいれんは、119の しるしです。"],
            ["どうする？", "すぐ 119に {電話|でんわ}します。まわりの あぶない ものを どけます。そのあと、{会社|かいしゃ}に {電話|でんわ}します。"]
          ],
          explainId: "Kejang adalah tanda bahaya. Segera telepon 119, singkirkan benda berbahaya di sekitarnya, lalu telepon perusahaan.",
          teacherNote: "駐在記録に、服薬の中断によるけいれんの例がある。持病と薬は会社に正直に伝えておくこと、薬を自分でやめないことも話せる。"
        }
      ]
    },

    // ================= セット4　こんなとき、どうする？（◎○✖） =================
    {
      key: "action",
      title: "こんなとき、どうする？",
      titleId: "Kalau begini, bagaimana?",
      description: "いちばん いい ものを えらびます。",
      questions: [
        {
          id: "dorm-d01", icon: "🥶🚬",
          text: "{仕事|しごと}の はじめての {日|ひ}の {夜|よる}です。つかれて います。{外|そと}は {寒|さむ}いです。タバコを すいたいです。",
          textId: "Malam hari pertama kerja. Capek, di luar dingin, dan ingin merokok.",
          choices: [
            { text: "うわぎを きて、きつえんじょへ {行|い}く。", textId: "Pakai jaket lalu ke tempat merokok.", grade: "best" },
            { text: "{今日|きょう}は すわないで、ねる。", textId: "Hari ini tidak merokok, tidur.", grade: "best" },
            { text: "まどを あけて、へやで 1{本|ぽん}だけ すう。", textId: "Buka jendela dan merokok satu batang di kamar.", grade: "ng", note: "まどを あけても、においは のこります。1{本|ぽん}でも ルールいはんです。" },
            { text: "ベランダで すう。", textId: "Merokok di balkon.", grade: "ng", note: "けむりが となりの へやに {入|はい}ります。" }
          ],
          explainId: "Membuka jendela tidak menghilangkan bau, dan satu batang pun tetap melanggar aturan. Di balkon, asap masuk ke kamar tetangga. Pergi ke tempat merokok, atau tidak merokok hari ini.",
          teacherNote: "駐在記録の「入社当日の夜に喫煙」の場面。疲れ・寒さ・「1本だけ」という気持ちを話し合える。"
        },
        {
          id: "dorm-d02", icon: "🧑‍🤝‍🧑🚬",
          text: "{同|おな}じ へやの {先輩|せんぱい}が、へやで タバコを すって います。「お{前|まえ}も すえよ」と {言|い}われました。",
          textId: "Senior sekamar merokok di kamar dan berkata, \"Kamu juga merokok saja.\"",
          choices: [
            { text: "「すみません、わたしは {外|そと}で すいます」と {言|い}って、きつえんじょへ {行|い}く。", textId: "Berkata \"Maaf, saya merokok di luar\" lalu pergi ke tempat merokok.", grade: "best" },
            { text: "ことわる。あとで、{仕事|しごと}の {時間|じかん}に {会社|かいしゃ}の {人|ひと}に そうだんする。", textId: "Menolak, lalu berkonsultasi dengan perusahaan pada jam kerja.", grade: "best", note: "{同|おな}じ へやの あなたも、ちゅういされる ことが あります。そうだんは、{自分|じぶん}を まもる ことです。" },
            { text: "{何|なに}も {言|い}わないで、へやで がまんする。", textId: "Diam dan menahan diri di kamar.", grade: "ok", note: "あなたは ルールを まもりました。でも、もんだいは つづきます。" },
            { text: "いっしょに すう。", textId: "Ikut merokok.", grade: "ng", note: "「{先輩|せんぱい}が {言|い}ったから」は、りゆうに なりません。" }
          ],
          explainId: "Anda juga bisa ikut ditegur karena sekamar, jadi berkonsultasi dengan perusahaan berarti melindungi diri. Diam saja memang menaati aturan, tetapi masalah berlanjut. \"Karena disuruh senior\" bukan alasan.",
          teacherNote: "先輩のことを会社に相談するのは「告げ口」か、を話し合える問題。"
        },
        {
          id: "dorm-d03", icon: "🌙📹😴",
          text: "{夜|よる} 11{時|じ}、インドネシアの {家族|かぞく}から ビデオ{電話|でんわ}が {来|き}ました。{同|おな}じ へやの {人|ひと}は ねて います。",
          textId: "Pukul 11 malam, keluarga di Indonesia melakukan panggilan video. Teman sekamar sedang tidur.",
          choices: [
            { text: "へやの {外|そと}の、{話|はな}して いい {場所|ばしょ}へ {行|い}って、{小|ちい}さい {声|こえ}で {話|はな}す。", textId: "Pindah ke tempat di luar kamar yang boleh untuk berbicara, dan bicara pelan.", grade: "best" },
            { text: "「あした {電話|でんわ}するね」と メッセージを {送|おく}る。", textId: "Kirim pesan \"Besok saya telepon\".", grade: "best" },
            { text: "イヤホンを して、へやで {小|ちい}さい {声|こえ}で {話|はな}す。", textId: "Pakai earphone dan bicara pelan di kamar.", grade: "ok", note: "みじかい {時間|じかん}なら OK。あなたの {声|こえ}は {聞|き}こえます。" },
            { text: "スピーカーの まま、へやで {話|はな}す。", textId: "Bicara di kamar dengan speaker.", grade: "ng" }
          ],
          explainId: "Pindah ke tempat yang boleh untuk berbicara atau kirim pesan dulu adalah yang terbaik. Dengan earphone di kamar boleh jika sebentar, karena suara Anda tetap terdengar. Jangan pakai speaker.",
          teacherNote: "時差（日本が2時間早い）を家族に伝えておくことも話せる。"
        },
        {
          id: "dorm-d04", icon: "🌙💧",
          text: "{夜|よる}、{台所|だいどころ}の ゆかに {水|みず}が ひろがって います。まず、{何|なに}を しますか。",
          textId: "Malam hari, air menggenang di lantai dapur. Apa yang pertama dilakukan?",
          choices: [
            { text: "{水|みず}を {止|と}めて、すぐ {会社|かいしゃ}の {人|ひと}に {電話|でんわ}する。", textId: "Hentikan air lalu segera telepon perusahaan.", grade: "best" },
            { text: "{何|なに}も しないで、すぐ {電話|でんわ}だけ する。", textId: "Langsung telepon tanpa melakukan apa-apa.", grade: "ok", note: "{電話|でんわ}は いいです。でも、{先|さき}に {水|みず}を {止|と}めると、もっと いいです。" },
            { text: "タオルで ふいて、{朝|あさ}に {言|い}う。", textId: "Lap dengan handuk dan lapor besok pagi.", grade: "ng", note: "{水|みず}は {下|した}の へやに おちて いる かも しれません。" },
            { text: "{自分|じぶん}の せいでは ないので、{何|なに}も しない。", textId: "Diam saja karena bukan salah saya.", grade: "ng", note: "{見|み}つけた {人|ひと}が、ほうこくします。" }
          ],
          explain: [
            ["じゅんばん", "① {止|と}める　② すぐ ほうこく　③ あとで せつめい"]
          ],
          explainId: "Urutannya: (1) hentikan air, (2) segera lapor, (3) jelaskan kemudian. Air mungkin sudah menetes ke kamar bawah, jadi jangan menunggu pagi. Yang menemukan wajib melapor walaupun bukan salahnya.",
          teacherNote: "順番は「①止める → ②すぐ報告 → ③あとで説明」。"
        },
        {
          id: "dorm-d05", icon: "🍳🔥",
          text: "{料理中|りょうりちゅう}に、フライパンから {火|ひ}が {出|で}ました。",
          textId: "Saat memasak, muncul api dari wajan.",
          choices: [
            { text: "コンロの {火|ひ}を {止|と}めて、ふたや ぬれた タオルで フライパンを おおう。", textId: "Matikan kompor, lalu tutup wajan dengan tutup atau handuk basah.", grade: "best" },
            { text: "{火|ひ}が {大|おお}きい ときは、にげて、{大|おお}きい {声|こえ}で {知|し}らせて、119に {電話|でんわ}する。", textId: "Jika api besar, lari, berteriak memberi tahu orang, dan telepon 119.", grade: "best" },
            { text: "{水|みず}を かける。", textId: "Menyiram air.", grade: "ng", note: "{油|あぶら}の {火|ひ}に {水|みず}を かけると、{火|ひ}が {大|おお}きく なります。" },
            { text: "こわいので にげて、だれにも {言|い}わない。", textId: "Lari karena takut dan tidak memberi tahu siapa pun.", grade: "ng" }
          ],
          explain: [
            ["ポイント", "{火|ひ}が {消|き}えても、すぐ {会社|かいしゃ}に ほうこくします。"]
          ],
          explainId: "Menyiram api minyak dengan air membuat api membesar. Jika api kecil, matikan kompor dan tutup wajan. Jika api besar, lari, beri tahu orang, dan telepon 119. Walaupun api sudah padam, segera laporkan ke perusahaan.",
          teacherNote: "消火器の場所の確認も教える。"
        },
        {
          id: "dorm-d06", icon: "🚪😠",
          text: "となりの へやの {人|ひと}が {来|き}て、「うるさいです」と {言|い}いました。",
          textId: "Tetangga kamar sebelah datang dan berkata, \"Berisik.\"",
          choices: [
            { text: "「すみません」と あやまって、すぐ しずかに する。", textId: "Minta maaf dan langsung tenang.", grade: "best" },
            { text: "あやまって、つぎの {日|ひ}に {会社|かいしゃ}の {人|ひと}にも「ちゅういされました」と ほうこくする。", textId: "Minta maaf, lalu besoknya melapor ke perusahaan bahwa ditegur.", grade: "best", note: "{会社|かいしゃ}は、あとで {知|し}ると こまります。" },
            { text: "あやまる。でも、10{分後|ぷんご}に また {同|おな}じ {声|こえ}で {話|はな}す。", textId: "Minta maaf tetapi 10 menit kemudian berisik lagi.", grade: "ng" },
            { text: "「まだ 9{時|じ}ですよ」と {言|い}う。", textId: "Menjawab \"Baru jam 9\".", grade: "ng" }
          ],
          explainId: "Minta maaf dan langsung tenang. Lebih baik lagi jika besoknya melapor ke perusahaan, karena perusahaan akan kesulitan jika baru tahu belakangan.",
          teacherNote: ""
        },
        {
          id: "dorm-d07", icon: "🧹🙅",
          text: "{同|おな}じ へやの {人|ひと}が、そうじの とうばんを しません。",
          textId: "Teman sekamar tidak menjalankan giliran bersih-bersih.",
          choices: [
            { text: "その {人|ひと}に「そうじを おねがいします」と {言|い}う。", textId: "Katakan kepadanya \"Tolong bersih-bersih\".", grade: "best" },
            { text: "{言|い}っても かわらない とき、{仕事|しごと}の {時間|じかん}に {会社|かいしゃ}の {人|ひと}に そうだんする。", textId: "Jika tidak berubah, konsultasi dengan perusahaan pada jam kerja.", grade: "best" },
            { text: "{何|なに}も {言|い}わないで、ずっと {自分|じぶん}が やる。", textId: "Diam dan selalu mengerjakan sendiri.", grade: "ok", note: "けんかには なりません。でも、がまんは {長|なが}く つづきません。" },
            { text: "おこって、{大|おお}きい {声|こえ}で けんかする。", textId: "Marah dan bertengkar dengan suara keras.", grade: "ng" }
          ],
          explainId: "Sampaikan langsung dengan sopan; jika tidak berubah, konsultasikan dengan perusahaan pada jam kerja. Diam dan mengerjakan sendiri tidak menimbulkan pertengkaran, tetapi tidak bisa bertahan lama.",
          teacherNote: "駐在記録に、清掃分担をめぐる不仲・口論の例がある。"
        },
        {
          id: "dorm-d08", icon: "🧱🕳️",
          text: "{夜|よる}、へやの かべに {小|ちい}さい あなを あけて しまいました。",
          textId: "Malam hari, tidak sengaja membuat lubang kecil di dinding kamar.",
          choices: [
            { text: "つぎの {日|ひ}、{仕事|しごと}の {時間|じかん}に {会社|かいしゃ}の {人|ひと}に ほうこくする。", textId: "Besoknya, melapor ke perusahaan pada jam kerja.", grade: "best", note: "いそぐ ことでは ないので、{夜|よる}の {電話|でんわ}は しません。" },
            { text: "ポスターで かくす。", textId: "Menutupi dengan poster.", grade: "ng" },
            { text: "{国|くに}に {帰|かえ}る ときまで {言|い}わない。", textId: "Tidak bilang sampai pulang ke Indonesia.", grade: "ng", note: "あとで {見|み}つかると、もっと {大|おお}きな もんだいに なります。" },
            { text: "{自分|じぶん}で なおす。", textId: "Memperbaiki sendiri.", grade: "ng", note: "かってに なおしません。{先|さき}に ほうこくします。" }
          ],
          explainId: "Ini tidak mendesak, jadi tidak perlu telepon malam; laporkan besok pada jam kerja. Jangan disembunyikan dan jangan diperbaiki sendiri. Jika ketahuan belakangan, masalahnya lebih besar.",
          teacherNote: ""
        }
      ]
    },

    // ================= セット5　つたえる（◎○✖） =================
    {
      key: "say",
      title: "つたえる",
      titleId: "Menyampaikan",
      description: "{何|なん}と {言|い}いますか。",
      questions: [
        {
          id: "dorm-t01", icon: "📞💧",
          text: "{夜|よる}、{水|みず}もれです。{会社|かいしゃ}の {人|ひと}に {電話|でんわ}します。{何|なん}と {言|い}いますか。",
          textId: "Malam hari ada kebocoran air. Anda menelepon perusahaan. Apa yang Anda katakan?",
          choices: [
            { text: "「{夜|よる} おそく すみません。{寮|りょう}の {台所|だいどころ}で、{水|みず}が もれて います。」", textId: "\"Yoru osoku sumimasen. Ryou no daidokoro de, mizu ga morete imasu.\" (Maaf mengganggu malam-malam. Di dapur asrama ada air bocor.)", grade: "best" },
            { text: "「{水|みず}です！ {水|みず}！」", textId: "\"Mizu desu! Mizu!\" (Air! Air!)", grade: "ng", note: "どこで、{何|なに}が あったか、わかりません。" },
            { text: "メッセージだけ {送|おく}って、ねる。", textId: "Hanya mengirim pesan lalu tidur.", grade: "ng", note: "あいてが {読|よ}んだか、わかりません。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "「{夜|よる} おそく すみません」＋ どこで ＋ {何|なに}が"]
          ],
          explainId: "Pola: \"Yoru osoku sumimasen\" + di mana + apa yang terjadi. Hanya berteriak \"Air!\" tidak menjelaskan tempat dan kejadian. Hanya mengirim pesan lalu tidur juga tidak boleh karena belum tentu dibaca.",
          teacherNote: ""
        },
        {
          id: "dorm-t02", icon: "🚪💥",
          text: "ドアを こわして しまいました。{会社|かいしゃ}の {人|ひと}に {言|い}います。",
          textId: "Anda merusak pintu. Anda melapor ke perusahaan.",
          choices: [
            { text: "「すみません。ドアを こわして しまいました。」", textId: "\"Sumimasen. Doa o kowashite shimaimashita.\" (Maaf, saya merusak pintu.)", grade: "best" },
            { text: "「ドアが こわれました。」", textId: "\"Doa ga kowaremashita.\" (Pintunya rusak.)", grade: "ng", note: "{自分|じぶん}が した ことが わかりません。あやまる ことばも ありません。" },
            { text: "{何|なに}も {言|い}わない。", textId: "Tidak bilang apa-apa.", grade: "ng" }
          ],
          explainId: "\"Doa o kowashite shimaimashita\" (saya merusak pintu) menunjukkan bahwa Anda yang melakukannya. \"Doa ga kowaremashita\" (pintunya rusak) tidak cukup karena tidak jelas siapa yang merusak dan tidak ada permintaan maaf.",
          teacherNote: "「こわしました／こわれました」の違いは、誠実さの話につなげられる。"
        },
        {
          id: "dorm-t03", icon: "🙇",
          text: "となりの {人|ひと}に「うるさい」と {言|い}われました。",
          textId: "Tetangga berkata \"Berisik\".",
          choices: [
            { text: "「すみません。これから {気|き}を つけます。」", textId: "\"Sumimasen. Korekara ki o tsukemasu.\" (Maaf. Mulai sekarang saya akan berhati-hati.)", grade: "best" },
            { text: "「わかりました。」", textId: "\"Wakarimashita.\" (Saya mengerti.)", grade: "ng", note: "あやまる ことばが ありません。" },
            { text: "「わたしじゃ ないです。」（ほんとうは {自分|じぶん}です）", textId: "\"Watashi ja nai desu.\" (Bukan saya.) — padahal sebenarnya Anda.", grade: "ng", note: "うそは、いけません。" }
          ],
          explainId: "Minta maaf dulu, lalu katakan akan berhati-hati. \"Wakarimashita\" saja tidak cukup karena tidak ada kata maaf. Berbohong tidak boleh.",
          teacherNote: ""
        },
        {
          id: "dorm-t04", icon: "🛏️📱🔊",
          text: "{同|おな}じ へやの {人|ひと}の {電話|でんわ}の {声|こえ}が {大|おお}きいです。ねむれません。",
          textId: "Suara telepon teman sekamar keras. Anda tidak bisa tidur.",
          choices: [
            { text: "「すみません、もう {少|すこ}し しずかに して もらえますか。」", textId: "\"Sumimasen, mou sukoshi shizuka ni shite moraemasu ka.\" (Maaf, bisa lebih tenang sedikit?)", grade: "best" },
            { text: "「すみません、あした {早|はや}いので…」", textId: "\"Sumimasen, ashita hayai node…\" (Maaf, besok saya harus bangun pagi…)", grade: "best" },
            { text: "「うるさい！」", textId: "\"Urusai!\" (Berisik!)", grade: "ng" },
            { text: "{何|なに}も {言|い}わないで、かべを たたく。", textId: "Tidak bilang apa-apa, lalu memukul dinding.", grade: "ng" }
          ],
          explainId: "Sampaikan dengan sopan: \"Sumimasen, mou sukoshi shizuka ni shite moraemasu ka\" atau \"Sumimasen, ashita hayai node…\". Jangan membentak atau memukul dinding.",
          teacherNote: ""
        },
        {
          id: "dorm-t05", icon: "📞🤒",
          text: "{夜|よる}、{熱|ねつ}が 39{度|ど} あります。{何回|なんかい}も はいて、{水|みず}が のめません。{会社|かいしゃ}の {人|ひと}に {電話|でんわ}します。",
          textId: "Malam hari demam 39 derajat, muntah berkali-kali, dan tidak bisa minum air. Anda menelepon perusahaan.",
          choices: [
            { text: "「{夜|よる} おそく すみません。{夕方|ゆうがた}から {熱|ねつ}が 39{度|ど} あります。{何回|なんかい}も はいて、{水|みず}が のめません。」", textId: "\"Yoru osoku sumimasen. Yuugata kara netsu ga 39-do arimasu. Nankai mo haite, mizu ga nomemasen.\" (Maaf mengganggu malam-malam. Sejak sore demam 39 derajat. Muntah berkali-kali dan tidak bisa minum air.)", grade: "best" },
            { text: "「びょうきです。」", textId: "\"Byouki desu.\" (Saya sakit.)", grade: "ng", note: "どこが どう わるいか、わかりません。" },
            { text: "がまんして、{朝|あさ}まで {待|ま}つ。", textId: "Menahan diri dan menunggu sampai pagi.", grade: "ng", note: "「{水|みず}が のめない」ときは、{夜|よる}でも {電話|でんわ}します。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "いつから ＋ どこが ＋ どのように"]
          ],
          explainId: "Pola: sejak kapan + bagian mana + bagaimana keadaannya. \"Byouki desu\" saja tidak cukup karena tidak jelas apa yang sakit. Jika tidak bisa minum air, telepon walaupun malam; jangan menahan sampai pagi.",
          teacherNote: "駐在記録に「手が痛い／手首が痛い」の食い違いなど、症状の伝え方の問題がある。"
        },
        {
          id: "dorm-t06", icon: "🚑📞",
          text: "{友|とも}だちが よんでも こたえません。119に {電話|でんわ}しました。「{火事|かじ}ですか、きゅうきゅうですか」と {聞|き}かれました。",
          textId: "Teman tidak merespons saat dipanggil. Anda menelepon 119 dan ditanya, \"Kebakaran atau darurat medis?\"",
          choices: [
            { text: "「きゅうきゅうです。{住所|じゅうしょ}は ○○です。{友|とも}だちが よんでも こたえません。」", textId: "\"Kyuukyuu desu. Juusho wa … desu. Tomodachi ga yonde mo kotaemasen.\" (Darurat medis. Alamatnya …. Teman saya tidak merespons saat dipanggil.)", grade: "best" },
            { text: "「たすけて ください！」だけ {言|い}う。", textId: "Hanya berkata \"Tasukete kudasai!\" (Tolong!)", grade: "ng", note: "{住所|じゅうしょ}が ないと、きゅうきゅうしゃは {来|こ}られません。{聞|き}かれた ことに こたえます。" },
            { text: "{日本語|にほんご}が むずかしいので、{電話|でんわ}を {切|き}る。", textId: "Menutup telepon karena bahasa Jepangnya sulit.", grade: "ng", note: "{切|き}りません。ゆっくり、みじかい ことばで {話|はな}します。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "「きゅうきゅうです」＋ {住所|じゅうしょ} ＋ だれが どう なったか"],
            ["ポイント", "{寮|りょう}の {住所|じゅうしょ}を、スマホに {入|い}れて おきます。119の あと、{会社|かいしゃ}にも {電話|でんわ}します。"]
          ],
          explainId: "Pola: \"Kyuukyuu desu\" + alamat + siapa dan bagaimana keadaannya. Hanya berkata \"Tolong!\" tidak cukup karena ambulans tidak bisa datang tanpa alamat. Jangan menutup telepon; bicara pelan dengan kata-kata pendek. Simpan alamat asrama di HP. Setelah 119, telepon juga perusahaan.",
          teacherNote: "119は無料で、最初に「火事ですか、救急ですか」と聞かれる。授業で寮（または自宅）の住所を日本語で言う練習ができる。"
        }
      ]
    }
  ]
};
