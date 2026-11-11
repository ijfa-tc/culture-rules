// =====================================================================
// テーマ「お金」の問題データ（第1弾：3セット・21問）
// ・形は data_dorm.js と同じ（OK／ダメ、◎○✖）
// ・ふりがなは {漢字|かんじ} と書く
// ・tag は "law"（ほうりつ いはん）"rule"（ルールいはん）"danger"（あぶない）
//   合法なギャンブルは "law" にしない（学校としてすすめない → "danger"）
// ・罰則の数字は生徒の画面に出さない。teacherNote（先生用メモ）だけに書く
// ・相談先は「会社・くみあい・IJFA」。特定技能の人は「TSK」（登録支援機関）
// =====================================================================
window.IJFA_THEMES = window.IJFA_THEMES || {};
window.IJFA_THEMES.money = {
  key: "money",
  title: "お{金|かね}",
  titleId: "Uang",
  intro: "{日本|にほん}で {働|はたら}いて もらった お{金|かね}は、あなたと {家族|かぞく}の {大切|たいせつ}な お{金|かね}です。お{金|かね}を まもる ルールと、こまった ときの そうだんの しかたを {覚|おぼ}えましょう。",
  introId: "Uang yang Anda dapatkan dari bekerja di Jepang adalah uang berharga untuk Anda dan keluarga. Mari belajar aturan untuk menjaga uang dan cara berkonsultasi saat kesulitan.",
  sets: [
    // ================= セット1　ぜったい ダメ（OK／ダメ） =================
    {
      key: "basic",
      title: "ぜったい ダメ",
      titleId: "Sama sekali tidak boleh",
      description: "かけごと・こうざ・あぶない しごと",
      intro: {
        title: "「かんたん」に {気|き}を つけて",
        lines: [
          ["p", "「かんたんに もうかる」「たのまれた だけ」でも、つみに なる ことが あります。"],
          ["p", "つみに なると、{日本|にほん}で {働|はたら}けなく なる ことが あります。"],
          ["h", "こうざ・カード・SIM・{名前|なまえ}は"],
          ["li", "{売|う}りません。かしません。あげません。"]
        ],
        textId: "Walaupun \"mudah dapat uang\" atau \"hanya dimintai tolong\", bisa menjadi tindak pidana. Jika menjadi tindak pidana, Anda bisa tidak dapat bekerja lagi di Jepang. Rekening, kartu, SIM, dan nama Anda: jangan dijual, jangan dipinjamkan, jangan diberikan."
      },
      summary: {
        lines: [
          "こうざ・カード・SIM・{名前|なまえ}は、{売|う}りません。かしません。あげません。",
          "「おくるだけ」「うけとるだけ」「けいやくするだけ」で お{金|かね}が もらえる しごとは、しません。",
          "べつの しごとは できません。わからない ときは、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {聞|き}きます。"
        ],
        textId: "Rekening, kartu, SIM, dan nama: jangan dijual, dipinjamkan, atau diberikan. Jangan ambil pekerjaan \"cukup kirim\", \"cukup terima\", atau \"cukup buat kontrak\". Pekerjaan lain tidak boleh. Jika ragu, tanyakan ke staf perusahaan, kumiai, atau IJFA."
      },
      questions: [
        {
          id: "money-k01", icon: "📱🎰",
          text: "{日本|にほん}から、インドネシア{語|ご}の オンラインカジノの サイトで、お{金|かね}を かけます。",
          textId: "Dari Jepang, bertaruh uang di situs kasino online berbahasa Indonesia.",
          answer: "dame", tag: "law", heavy: true,
          explain: [
            ["なぜ？", "{日本|にほん}から お{金|かね}を かけると、とばく（つみ）です。サイトが インドネシア{語|ご}でも、{外国|がいこく}の {会社|かいしゃ}でも、{同|おな}じです。"],
            ["もし…", "けいさつに {調|しら}べられます。{何回|なんかい}も すると、もっと おもい つみに なります。{日本|にほん}で {働|はたら}けなく なる ことも あります。"],
            ["ほんとうに あった {話|はなし}", "オンラインの かけごとで、きゅうりょうを ぜんぶ つかって しまった {実習生|じっしゅうせい}が います。お{金|かね}に こまって、{人|ひと}の {家|いえ}に {入|はい}り、{人|ひと}に けがを させる {大|おお}きな じけんを おこしました。お{金|かね}の もんだいが、もっと {大|おお}きな つみに つながりました。"],
            ["インドネシアでは？", "オンラインの かけごと（judol）は、インドネシアでも ダメです。"],
            ["どうする？", "リンクが {来|き}ても、ひらきません。"]
          ],
          explainId: "Bertaruh uang dari Jepang adalah perjudian (tindak pidana), walaupun situsnya berbahasa Indonesia atau milik perusahaan asing. Anda bisa diperiksa polisi; jika berulang, hukumannya lebih berat dan Anda bisa tidak dapat bekerja lagi di Jepang. Ada pemagang yang menghabiskan seluruh gajinya untuk judi online. Karena kesulitan uang, ia masuk ke rumah orang dan melukai orang, sehingga terjadi kasus besar. Masalah uang berujung pada kejahatan yang lebih besar. Di Indonesia pun judi online (judol) dilarang. Jika menerima tautan, jangan dibuka.",
          teacherNote: "刑法185条（賭博罪）50万円以下の罰金または科料。常習は186条で3年以下の拘禁刑。技能実習・特定技能では、賭博の拘禁刑の判決が退去強制事由に当たり得る。インドネシアでも新刑法（2026年1月2日施行）で禁止。「ほんとうに あった 話」は2024年静岡県掛川市の強盗致傷事件（インドネシア人技能実習生。公判で検察が「オンラインギャンブルで給料を使い果たした」と指摘。2025年10月に懲役6年の判決と報道）。判決は強盗致傷によるもので、オンラインカジノの罪ではない。お金の問題が別の事件につながるリスクの例として使う（2026-11-11 坂井さん了承）。"
        },
        {
          id: "money-k02", icon: "⚽💸",
          text: "サッカーの しあいに お{金|かね}を かける {外国|がいこく}の サイトを、{日本|にほん}から つかいます。",
          textId: "Dari Jepang, memakai situs asing untuk bertaruh uang pada pertandingan sepak bola.",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "「{外国|がいこく}では OKの サイト」でも、{日本|にほん}から お{金|かね}を かけると、とばくです。"],
            ["ポイント", "しあいを {見|み}て おうえんするのは、もちろん OKです。"]
          ],
          explainId: "Walaupun situsnya legal di luar negeri, bertaruh uang dari Jepang tetap perjudian. Menonton dan mendukung pertandingan tentu boleh.",
          teacherNote: "日本の公営競技・スポーツくじとは別。"
        },
        {
          id: "money-k03", icon: "🏦🎁",
          text: "{国|くに}に {帰|かえ}る {前|まえ}に、{自分|じぶん}の ぎんこうの こうざと カードを、{友|とも}だちに あげます。お{金|かね}は もらいません。",
          textId: "Sebelum pulang, memberikan rekening bank dan kartu ATM kepada teman. Tidak menerima uang.",
          answer: "dame", tag: "law", heavy: true,
          explain: [
            ["なぜ？", "こうざは、{自分|じぶん}しか つかえません。お{金|かね}を もらわなくても、{人|ひと}に あげると つみに なります。"],
            ["もし…", "その こうざが、さぎに つかわれる ことが あります。あなたの {名前|なまえ}の こうざです。"],
            ["どうする？", "{帰|かえ}る {前|まえ}に、ぎんこうに {行|い}って、こうざを やめます（かいやく）。"]
          ],
          explainId: "Rekening hanya boleh dipakai pemiliknya. Walaupun gratis, memberikannya kepada orang lain adalah tindak pidana. Rekening itu bisa dipakai untuk penipuan, dan rekening itu atas nama Anda. Sebelum pulang, datang ke bank dan tutup rekening.",
          teacherNote: "犯罪収益移転防止法26条2項（2026年7月10日施行）。3年以下の拘禁刑・500万円以下の罰金（両方のことも）。業として行うと5年以下・1,000万円以下（26条3項）。改正前の「1年以下・100万円以下」は使わない。「送金犯罪」（32条）とは別の罪。警察庁は帰国時の口座譲渡について外国人向けに注意喚起している。"
        },
        {
          id: "money-k04", icon: "💳💰",
          text: "「キャッシュカードを 1まい 3{万円|まんえん}で {買|か}います」と {言|い}われて、{売|う}ります。",
          textId: "Ada yang berkata, \"Saya beli kartu ATM Anda 30.000 yen,\" lalu Anda menjualnya.",
          answer: "dame", tag: "law", heavy: true,
          explain: [
            ["なぜ？", "こうざや カードを {買|か}う {人|ひと}は、わるい ことに つかいます。"],
            ["もし…", "こうざが {止|と}められます。{新|あたら}しい こうざが つくれなく なる ことも あります。"],
            ["どうする？", "「{売|う}りません」と ことわります。"]
          ],
          explainId: "Orang yang membeli rekening atau kartu ATM akan memakainya untuk kejahatan. Rekening Anda bisa dibekukan, dan Anda bisa tidak dapat membuat rekening baru. Tolak dengan berkata \"Tidak saya jual.\"",
          teacherNote: "「3万円」は教材用の例。日本での口座の買い取り額の相場を示す公的資料はない。警察の注意喚起には「使っていない銀行口座を高価買い取りします」「口座を貸すだけで毎月数万円」という例がある。インドネシアでもPPATKが口座売買（jual beli rekening）を問題にしている。"
        },
        {
          id: "money-k05", icon: "🏦✅",
          text: "{帰|かえ}る {前|まえ}に ぎんこうへ {行|い}って、さいごの きゅうりょうを たしかめてから、こうざを やめます。",
          textId: "Sebelum pulang, pergi ke bank, memastikan gaji terakhir sudah masuk, lalu menutup rekening.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "やちんや スマホの お{金|かね}が、まだ こうざから ひかれるか、{先|さき}に たしかめます。わからない ときは、{会社|かいしゃ}と ぎんこうに {聞|き}きます。"]
          ],
          explainId: "Pastikan dulu apakah sewa atau biaya HP masih akan didebet dari rekening. Jika tidak tahu, tanyakan ke perusahaan dan bank.",
          teacherNote: ""
        },
        {
          id: "money-k06", icon: "🏦➡️🏦",
          text: "「あなたの こうざに {来|き}た お{金|かね}を、べつの こうざに おくるだけ。1{回|かい} 1{万円|まんえん}」という しごとを します。",
          textId: "Mengambil pekerjaan: \"Cukup kirim uang yang masuk ke rekening Anda ke rekening lain. Sekali 10.000 yen.\"",
          answer: "dame", tag: "law", heavy: true,
          explain: [
            ["なぜ？", "お{金|かね}を もらって、{人|ひと}の お{金|かね}を おくる ことは、つみです。その お{金|かね}は、さぎで とった お{金|かね}かも しれません。"],
            ["ポイント", "{自分|じぶん}で さぎの {電話|でんわ}を しなくても、つみに なります。"],
            ["ポイント", "{家族|かぞく}に {生活|せいかつ}の お{金|かね}を おくる こと、みんなの ごはん{代|だい}を あつめて はらう ことは、だいじょうぶです。"]
          ],
          explainId: "Menerima bayaran untuk mengirim uang orang lain adalah tindak pidana. Uang itu mungkin hasil penipuan. Walaupun Anda tidak menelepon korban sendiri, tetap menjadi tindak pidana. Mengirim biaya hidup kepada keluarga atau mengumpulkan uang makan bersama lalu membayarnya tidak apa-apa.",
          teacherNote: "2026年7月10日施行の「送金犯罪」（犯収法32条）。正当な理由のない有償の送金代行が対象。2年以下の拘禁刑・300万円以下の罰金（反復継続は3年・500万円）。警察は「送金バイト」という言い方を避け、「送金犯罪」と呼んでいる。教材でも「バイト」と書かない。"
        },
        {
          id: "money-k07", icon: "📦🔁",
          text: "SNSで {見|み}た「にもつを うけとって、べつの {住所|じゅうしょ}に おくるだけ」の しごとを します。",
          textId: "Mengambil pekerjaan yang dilihat di SNS: \"Cukup terima paket lalu kirim ke alamat lain.\"",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "その にもつは、{人|ひと}の カードで かってに {買|か}った ものかも しれません。"],
            ["もし…", "あなたも、さぎや どろぼうの なかまに されます。「{知|し}らなかった」は、つうじない ことが あります。"],
            ["どうする？", "{知|し}らない {人|ひと}の にもつは、うけとりません。"]
          ],
          explainId: "Paket itu mungkin dibeli dengan kartu orang lain tanpa izin. Anda bisa dianggap ikut dalam penipuan atau pencurian. Alasan \"tidak tahu\" belum tentu diterima. Jangan menerima paket orang yang tidak dikenal.",
          teacherNote: "静岡県警・愛媛県警が、技能実習生・留学生などが荷物の受け取り・転送で犯罪に巻き込まれる例について注意喚起している。荷物を受け取ること自体がすべて犯罪ではない。認識・関与で判断される。"
        },
        {
          id: "money-k08", icon: "📱✍️",
          text: "{友|とも}だちに「あなたの {名前|なまえ}で スマホを けいやくして。お{金|かね}は わたしが はらう。1{万円|まんえん} あげる」と {言|い}われて、けいやくします。",
          textId: "Teman berkata, \"Kontrak HP atas namamu. Aku yang bayar. Kuberi 10.000 yen,\" lalu Anda membuat kontrak.",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "けいやくした {人|ひと}が、お{金|かね}を はらう {人|ひと}です。{友|とも}だちが はらわなくても、あなたが はらいます。"],
            ["もし…", "その スマホが さぎに つかわれる ことが あります。だまして スマホを とったと されると、さぎの つみに なります。"],
            ["どうする？", "「{名前|なまえ}は かせません」と ことわります。"]
          ],
          explainId: "Yang membuat kontrak adalah yang wajib membayar. Jika teman tidak membayar, Anda yang harus membayar. HP itu bisa dipakai untuk penipuan, dan jika dianggap mendapatkan HP dengan menipu, bisa menjadi tindak pidana penipuan.",
          teacherNote: "警視庁「携帯電話等を販売店からだまし取る行為は犯罪です」（2026年9月更新）。いわゆる「契約バイト」。「即日現金を渡します」「請求書は無視」などの勧誘文句がある。詐欺罪は10年以下の拘禁刑。"
        },
        {
          id: "money-k09", icon: "📶🤝",
          text: "{国|くに}に {帰|かえ}るので、つかって いる SIMカードを {友|とも}だちに {売|う}ります。",
          textId: "Karena akan pulang, menjual kartu SIM yang sedang dipakai kepada teman.",
          answer: "dame", tag: ["rule", "danger"],
          explain: [
            ["なぜ？", "けいやく{中|ちゅう}の SIMは、けいたいの {会社|かいしゃ}の ゆるしが ないと、{人|ひと}に わたせません。"],
            ["もし…", "その {電話|でんわ}が さぎに つかわれると、あなたの {名前|なまえ}の {電話|でんわ}です。"],
            ["どうする？", "{帰|かえ}る {前|まえ}に、けいたいの {会社|かいしゃ}で けいやくを やめます。スマホの のこりの お{金|かね}（ぶんかつ）も たしかめます。"]
          ],
          explainId: "Kartu SIM yang masih dalam kontrak tidak boleh diserahkan tanpa izin operator. Jika dipakai untuk penipuan, nomor itu atas nama Anda. Sebelum pulang, putus kontrak di operator, dan cek sisa cicilan HP.",
          teacherNote: "携帯電話不正利用防止法。契約中の回線の譲渡は携帯会社の承諾が必要。承諾なく有償譲渡を業として行うと2年以下の拘禁刑・300万円以下の罰金。1回の譲渡がすべて同じ刑罰になるわけではないので、「ほうりつ いはん」ではなく「ルールいはん」「あぶない」にした。スマホ本体（SIMなし）の中古売買とは別。分割払いは帰国しても消えない。"
        },
        {
          id: "money-k10", icon: "🏪🙅",
          text: "{休|やす}みの {日|ひ}に、コンビニで アルバイトを します。",
          textId: "Pada hari libur, kerja paruh waktu di minimarket.",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "あなたが {日本|にほん}で できる しごとは、きまって います。アルバイトは できません。"],
            ["もし…", "ビザ（{在留資格|ざいりゅうしかく}）の {更新|こうしん}が できない ことや、{国|くに}に {帰|かえ}る ことに なる ことが あります。"],
            ["ポイント", "ビザの しゅるいで、できる しごとが ちがいます。ほかの {人|ひと}が して いても、あなたが できるとは かぎりません。"],
            ["ポイント", "{会社|かいしゃ}の {人|ひと}が「いいよ」と {言|い}っても、{入管|にゅうかん}の きょかでは ありません。"]
          ],
          explainId: "Pekerjaan yang boleh Anda lakukan di Jepang sudah ditentukan. Kerja paruh waktu tidak boleh. Visa (status izin tinggal) bisa tidak diperpanjang, atau Anda bisa harus pulang. Jenis pekerjaan yang boleh dilakukan berbeda menurut jenis visa; walaupun orang lain melakukannya, belum tentu Anda boleh. Walaupun orang di perusahaan berkata boleh, itu bukan izin dari imigrasi.",
          teacherNote: "技能実習生はアルバイトができない（OTIT「外国人技能実習適正実施マニュアル」）。特定技能も、入管庁の特定技能総合支援サイトのFAQで「アルバイトはできません」と案内されている。無許可の資格外活動は入管法73条（1年以下の拘禁刑・200万円以下の罰金）。災害などの特別な場合の扱いはあるが、普通の副業ができるという意味ではない。生徒から「留学生はコンビニで働いている」と出たら：留学生は「資格外活動許可」を取って決められた時間だけ働いている。技能実習・特定技能は決められた会社・仕事で働くための在留資格なので、同じようにはできない。くみあい・TSKは、副業を許可する機関ではない。"
        },
        {
          id: "money-k11", icon: "🛵🍔",
          text: "{休|やす}みの {日|ひ}に、フードデリバリーの アプリで はいたつを します。",
          textId: "Pada hari libur, mengantar makanan lewat aplikasi pesan-antar.",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "アプリの しごとも、しごとです。{会社|かいしゃ}に やとわれて いなくても、お{金|かね}を もらう しごとは できません。"],
            ["インドネシアでは？", "インドネシアでは ふつうの しごとでも、{日本|にほん}では ビザの ルールが あります。"]
          ],
          explainId: "Pekerjaan lewat aplikasi juga pekerjaan. Walaupun tidak dipekerjakan perusahaan, pekerjaan yang menghasilkan uang tidak boleh dilakukan. Walaupun di Indonesia biasa, di Jepang ada aturan visa.",
          teacherNote: "雇用契約でなくても、収入を伴う活動は資格外活動になり得る。SNSでの有料の仕事（広告・制作など）も同じ。"
        },
        {
          id: "money-k12", icon: "🏦🇮🇩",
          text: "{家族|かぞく}に お{金|かね}を おくる とき、ぎんこうや とうろくされた そうきんの {会社|かいしゃ}を つかいます。",
          textId: "Saat mengirim uang ke keluarga, memakai bank atau perusahaan pengiriman uang yang terdaftar.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "「やすいから」と、とうろくの ない {人|ひと}に お{金|かね}を あずけません。お{金|かね}が なくなっても、もどって きません。"],
            ["ポイント", "わからない ときは、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {聞|き}きます。"]
          ],
          explainId: "Jangan menitipkan uang kepada orang yang tidak terdaftar hanya karena murah. Jika uangnya hilang, tidak akan kembali. Jika tidak tahu, tanyakan ke staf perusahaan, kumiai, atau IJFA.",
          teacherNote: "登録業者は金融庁の「免許・登録業者一覧」（資金移動業者）で確認できる。地下銀行を「利用しただけで必ず違法」とは断定できないため、利用者側の問題は「お金がなくなる危険」として教える。2026年6月、インドネシア国籍の夫婦が無許可でインドネシアへ送金した疑い（銀行法違反）で逮捕されたと報道（メ～テレ。在留資格は未確認）。"
        }
      ]
    },

    // ================= セット2　こんなとき、どうする？（◎○✖） =================
    {
      key: "action",
      title: "こんなとき、どうする？",
      titleId: "Kalau begini, bagaimana?",
      description: "いちばん いい ものを えらびます。",
      intro: {
        title: "お{金|かね}と そうだん",
        lines: [
          ["p", "お{金|かね}を まったく つかわない ことが、{目標|もくひょう}では ありません。ごはん、けんこう、べんきょう、むりの ない たのしみも {大切|たいせつ}です。"],
          ["h", "つぎの きゅうりょう{日|び}までの {生活|せいかつ}の お{金|かね}は、まもります。"],
          ["h", "こまった ときは、かくさないで、はやく そうだんします。"],
          ["li", "① {会社|かいしゃ}の {人|ひと}"],
          ["li", "② くみあいの {人|ひと}（{特定技能|とくていぎのう}の {人|ひと}は TSK）"],
          ["li", "③ IJFAの {日本|にほん}の スタッフ"],
          ["p", "{会社|かいしゃ}に {言|い}いにくい ときは、くみあいや IJFAに すぐ そうだんして いいです。"],
          ["p", "あぶない ときは、110（けいさつ）に {電話|でんわ}します。"]
        ],
        textId: "Tujuannya bukan tidak memakai uang sama sekali. Makanan, kesehatan, belajar, dan hiburan yang wajar juga penting. Uang untuk hidup sampai gajian berikutnya harus dijaga. Jika kesulitan, jangan disembunyikan; segera berkonsultasi: (1) staf perusahaan, (2) staf kumiai (untuk Tokutei Ginou: TSK), (3) staf IJFA di Jepang. Jika sulit bicara dengan perusahaan, boleh langsung berkonsultasi dengan kumiai atau IJFA. Jika dalam bahaya, telepon 110 (polisi)."
      },
      summary: {
        lines: [
          "お{金|かね}を かける あそびは、{学校|がっこう}は すすめません。まけた お{金|かね}を、とりもどそうと しません。",
          "{家族|かぞく}に おくる {前|まえ}に、つぎの きゅうりょう{日|び}までの お{金|かね}を のこします。",
          "こまったら、かくさないで、はやく そうだんします（{会社|かいしゃ}・くみあい・IJFA）。"
        ],
        textId: "Sekolah tidak menganjurkan permainan bertaruh uang. Jangan mencoba membalikkan kekalahan. Sebelum mengirim ke keluarga, sisihkan uang sampai gajian berikutnya. Jika kesulitan, jangan disembunyikan; segera berkonsultasi (perusahaan, kumiai, IJFA)."
      },
      questions: [
        {
          id: "money-c01", icon: "🎰🙋",
          text: "{休|やす}みの {日|ひ}です。{友|とも}だちに「パチンコに {行|い}こう」と さそわれました。",
          textId: "Hari libur. Teman mengajak, \"Ayo main pachinko.\"",
          choices: [
            { text: "「わたしは {行|い}かない」と ことわって、お{金|かね}を つかわない あそびに さそう（こうえん、サッカー、りょうり）。", textId: "Menolak dan mengajak bermain tanpa uang (taman, sepak bola, memasak).", grade: "best" },
            { text: "「きょうは {行|い}かない」と ことわって、へやで {休|やす}む。", textId: "Menolak dan beristirahat di kamar.", grade: "best" },
            { text: "「1000{円|えん}だけ」と きめて、{行|い}く。", textId: "Pergi dengan batas \"1.000 yen saja\".", grade: "ng", note: "はじめは {少|すこ}しでも、「もう {少|すこ}し」と ふえて いきます。" },
            { text: "{来週|らいしゅう}の やちんの お{金|かね}で {行|い}く。", textId: "Pergi memakai uang sewa minggu depan.", grade: "ng", note: "{生活|せいかつ}の お{金|かね}です。" }
          ],
          explain: [
            ["ポイント", "パチンコは、ほうりつで OKです。でも、あんしんとは かぎりません。お{金|かね}が なくなる ことが あります。{学校|がっこう}は すすめません。"]
          ],
          explainId: "Menolak lalu bermain tanpa uang atau beristirahat adalah pilihan terbaik. Batas \"1.000 yen saja\" mudah bertambah menjadi \"sedikit lagi\". Uang sewa adalah uang hidup. Pachinko legal menurut hukum, tetapi belum tentu aman. Uang bisa habis. Sekolah tidak menganjurkannya.",
          teacherNote: "パチンコは規制の範囲内では賭博罪に当たらないとの政府説明がある（18歳未満は入店不可）。違法とは教えない。方針として「すすめない」を伝える。「上限を決めて行く」を✖にしたのは、リスクを避ける学校の方針による（2026-11-11）。授業では「お金を使わない休みの過ごし方」を出し合える。"
        },
        {
          id: "money-c02", icon: "🎰😣",
          text: "パチンコで、1{万円|まんえん} まけました。「とりもどしたい」と {思|おも}って います。",
          textId: "Kalah 10.000 yen di pachinko. Anda ingin \"mendapatkannya kembali.\"",
          choices: [
            { text: "もう {行|い}かない。まけた お{金|かね}は、もどらないと {考|かんが}える。", textId: "Tidak pergi lagi; anggap uang yang kalah tidak kembali.", grade: "best" },
            { text: "{何回|なんかい}も {行|い}きたく なる ときは、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に そうだんする。", textId: "Jika terus ingin pergi, konsultasi dengan staf perusahaan, kumiai, atau IJFA.", grade: "best" },
            { text: "{来週|らいしゅう}、もう{一度|いちど} {行|い}って とりもどす。", textId: "Minggu depan pergi lagi untuk membalikkan kekalahan.", grade: "ng", note: "とりもどそうと すると、もっと まけます。" },
            { text: "{友|とも}だちに お{金|かね}を かりて、{今日|きょう} もう{一度|いちど} {行|い}く。", textId: "Pinjam uang teman dan pergi lagi hari ini.", grade: "ng", note: "かりた お{金|かね}で あそぶと、しゃっきんに なります。" }
          ],
          explainId: "Anggap uang yang kalah tidak kembali, dan jika terus ingin pergi, berkonsultasilah. Berusaha membalikkan kekalahan justru membuat kalah lebih banyak. Bermain dengan uang pinjaman menjadi utang.",
          teacherNote: "「負けを取り戻そうとする」ことが依存の入り口になる、という点を話し合う。"
        },
        {
          id: "money-c03", icon: "👨‍👩‍👧🍚",
          text: "{家族|かぞく}から「{今月|こんげつ}は もっと おくって」と {言|い}われました。おくると、つぎの きゅうりょう{日|び}まで、ごはんの お{金|かね}が たりません。",
          textId: "Keluarga meminta, \"Bulan ini kirim lebih banyak.\" Jika dikirim, uang makan sampai gajian berikutnya tidak cukup.",
          choices: [
            { text: "つぎの きゅうりょう{日|び}までの {生活|せいかつ}の お{金|かね}を のこして、おくれる {金額|きんがく}を {家族|かぞく}に {話|はな}す。", textId: "Sisihkan uang hidup sampai gajian berikutnya, lalu jelaskan kepada keluarga jumlah yang bisa dikirim.", grade: "best" },
            { text: "どうしたら いいか わからない とき、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に そうだんする。", textId: "Jika bingung, konsultasi dengan staf perusahaan, kumiai, atau IJFA.", grade: "best" },
            { text: "ぜんぶ おくって、ごはんを へらす。", textId: "Kirim semua dan kurangi makan.", grade: "ng", note: "あなたが びょうきに なると、{働|はたら}けません。" },
            { text: "{友|とも}だちや SNSの {人|ひと}に お{金|かね}を かりて、おくる。", textId: "Pinjam uang dari teman atau orang di SNS untuk dikirim.", grade: "ng", note: "おくる ために、しゃっきんを しません。" }
          ],
          explain: [
            ["ポイント", "{家族|かぞく}も、{自分|じぶん}の {生活|せいかつ}も、{大切|たいせつ}です。おくる {金額|きんがく}の {大|おお}きさが、{家族|かぞく}への {気持|きも}ちの {大|おお}きさでは ありません。"]
          ],
          explainId: "Sisihkan uang hidup dulu, lalu jelaskan jumlah yang bisa dikirim; jika bingung, berkonsultasilah. Jika Anda sakit karena kurang makan, tidak bisa bekerja. Jangan berutang demi mengirim uang. Keluarga dan hidup Anda sama-sama penting. Besarnya kiriman bukan ukuran besarnya kasih sayang kepada keluarga.",
          teacherNote: "本人や家族を責めない。「送金は悪い」とは教えない。送金額・残す額は一律に決めず、手取りと生活費で考える。授業で「手取り − 毎月の生活費 − 急な出費の分 = 送れる額」を一緒に計算できる。"
        },
        {
          id: "money-c04", icon: "🧑‍🤝‍🧑🏦",
          text: "{帰国|きこく}する {先輩|せんぱい}に「あなたの こうざを {売|う}って。1{万円|まんえん} あげる」と {言|い}われました。",
          textId: "Senior yang akan pulang berkata, \"Jual rekeningmu. Kuberi 10.000 yen.\"",
          choices: [
            { text: "「{売|う}れません」と ことわる。", textId: "Menolak, \"Tidak bisa saya jual.\"", grade: "best" },
            { text: "ことわって、しつこく {言|い}われる ときは、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に そうだんする。", textId: "Menolak, dan jika terus didesak, konsultasi dengan staf perusahaan, kumiai, atau IJFA.", grade: "best" },
            { text: "{先輩|せんぱい}だから、ことわれないので {売|う}る。", textId: "Menjual karena tidak bisa menolak senior.", grade: "ng", note: "「{先輩|せんぱい}が {言|い}ったから」は、りゆうに なりません。つみに なるのは あなたです。" },
            { text: "お{金|かね}は もらわないで、こうざだけ あげる。", textId: "Memberikan rekening tanpa menerima uang.", grade: "ng", note: "お{金|かね}を もらわなくても、つみです。" }
          ],
          explainId: "Tolak dengan jelas, dan jika terus didesak, berkonsultasilah. \"Karena disuruh senior\" bukan alasan; yang dihukum adalah Anda. Walaupun gratis, memberikan rekening tetap tindak pidana.",
          teacherNote: ""
        },
        {
          id: "money-c05", icon: "📱⚠️",
          text: "SNSで「ホワイトな しごと。はこぶだけ。1{日|にち} 5{万円|まんえん}。その{日|ひ}に はらいます」に おうぼしました。{在留|ざいりゅう}カードの しゃしんを おくりました。そのあと「やめたら {家族|かぞく}に {何|なに}か する」と {言|い}われました。",
          textId: "Anda melamar di SNS: \"Pekerjaan aman (white). Cukup mengantar barang. 50.000 yen sehari, dibayar hari itu juga.\" Anda mengirim foto kartu izin tinggal. Lalu diancam, \"Kalau berhenti, keluargamu akan kami apa-apakan.\"",
          choices: [
            { text: "すぐ けいさつに そうだんする（あぶない ときは 110）。", textId: "Segera lapor polisi (jika berbahaya, telepon 110).", grade: "best" },
            { text: "{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に、すぐ {話|はな}す。", textId: "Segera beri tahu staf perusahaan, kumiai, atau IJFA.", grade: "best" },
            { text: "こわいので、{言|い}われた しごとを 1{回|かい}だけ する。", textId: "Karena takut, melakukan pekerjaan itu sekali saja.", grade: "ng", note: "1{回|かい}でも、つみに なります。そのあとも、また {言|い}われます。" },
            { text: "だれにも {言|い}わないで、アプリを けして わすれる。", textId: "Tidak bilang siapa pun, hapus aplikasi dan lupakan.", grade: "ng", note: "あいては あなたの じょうほうを もって います。1{人|ひとり}で なやみません。" }
          ],
          explain: [
            ["ポイント", "「かんたん」「はこぶだけ」「1{日|にち} ○{万円|まんえん}」「その{日|ひ}に はらう」は、あぶない しごとの しるしです。「ホワイト」「はんざいでは ない」と {書|か}いて あっても、しんじません。"],
            ["ポイント", "しごとの {中身|なかみ}が わからないのに お{金|かね}が {高|たか}い、{在留|ざいりゅう}カードの しゃしんを ほしがる、{知|し}らない アプリに うつるように {言|い}う ときは、とくに あぶないです。"]
          ],
          explainId: "Segera beri tahu polisi dan staf perusahaan, kumiai, atau IJFA. Sekali pun menjadi tindak pidana, dan Anda akan disuruh lagi. Mereka memegang data Anda; jangan memendam sendiri. \"Mudah\", \"cukup mengantar\", \"○ yen sehari\", \"dibayar hari itu juga\" adalah tanda pekerjaan berbahaya. Walaupun tertulis \"aman (white)\" atau \"bukan kejahatan\", jangan percaya. Sangat berbahaya jika isi pekerjaan tidak jelas tetapi bayarannya tinggi, diminta foto kartu izin tinggal, atau disuruh pindah ke aplikasi yang tidak dikenal.",
          teacherNote: "募集の言葉は、警察庁「SNSなどで求人情報を探している方へ」（2024年10月25日）にある実際の特徴（「高額」「即日即金」「ホワイト案件」「運びの仕事」「日給5万円から」、「闇バイトではない」と強調する例）を参考にした教材用の例。「送迎」「副業」などの言葉だけで犯罪と決めつけず、組み合わせ（仕事の中身があいまい／高い報酬／身分証を送らせる／匿名アプリへ移らせる）で見分けさせる。闇バイトは罪名ではなく、受け子（詐欺）・出し子（窃盗）などで処罰される。相談先は110（緊急）・#9110（相談）。「相談すれば必ず罪にならない」とは約束しない。"
        },
        {
          id: "money-c06", icon: "👛😰",
          text: "お{金|かね}を つかいすぎました。きゅうりょう{日|び}まで 1{週間|しゅうかん} ありますが、ごはんの お{金|かね}が ありません。",
          textId: "Uang terlalu banyak terpakai. Masih seminggu sampai gajian, tetapi tidak ada uang makan.",
          choices: [
            { text: "{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に、はやく そうだんする。", textId: "Segera konsultasi dengan staf perusahaan, kumiai, atau IJFA.", grade: "best" },
            { text: "つかった お{金|かね}を {書|か}いて、どこで つかいすぎたか {見|み}る。", textId: "Catat pengeluaran dan lihat di mana terlalu boros.", grade: "ok", note: "{大切|たいせつ}です。でも、ごはんが たりない ときは、そうだんも します。" },
            { text: "SNSで {見|み}つけた「こじん」の {人|ひと}に お{金|かね}を かりる。", textId: "Pinjam uang dari \"perorangan\" yang ditemukan di SNS.", grade: "ng", note: "あぶない ところかも しれません。{高|たか}い りそくや、こわい とりたてが あります。" },
            { text: "あとばらいの アプリで {買|か}って、{来月|らいげつ} はらう。", textId: "Beli dengan aplikasi bayar-nanti dan bayar bulan depan.", grade: "ng", note: "{来月|らいげつ}も、お{金|かね}が たりなく なります。" }
          ],
          explainId: "Segera berkonsultasi. Mencatat pengeluaran itu penting, tetapi jika uang makan tidak cukup, konsultasikan juga. \"Perorangan\" di SNS bisa jadi rentenir ilegal dengan bunga tinggi dan penagihan menakutkan. Jika memakai bayar-nanti, bulan depan uang juga akan kurang.",
          teacherNote: "SNSの「個人間融資」は、繰り返していれば無登録の貸金業（ヤミ金）になり得る。借りた側は被害者で、犯罪者ではない。インドネシアの無許可pinjolと同じ危険、と話せる。自分から相談したことを評価する。"
        }
      ]
    },

    // ================= セット3　つたえる（言い方をえらぶ） =================
    {
      key: "say",
      title: "つたえる",
      titleId: "Menyampaikan",
      description: "{何|なん}と {言|い}いますか。",
      summary: {
        lines: [
          "ことわる ときは、「ごめんなさい」＋ はっきり「できません」。",
          "そうだんする ときは、{何|なに}が あったか、{何|なに}に こまって いるか を {話|はな}します。うそは つきません。"
        ],
        textId: "Saat menolak: \"Gomen nasai\" + dengan jelas \"dekimasen\". Saat berkonsultasi: ceritakan apa yang terjadi dan apa yang menyulitkan. Jangan berbohong."
      },
      questions: [
        {
          id: "money-t01", icon: "🙏💴",
          text: "{友|とも}だちに「5{万円|まんえん} かして」と {言|い}われました。かせません。{何|なん}と {言|い}いますか。",
          textId: "Teman berkata, \"Pinjami aku 50.000 yen.\" Anda tidak bisa meminjamkan. Apa yang Anda katakan?",
          choices: [
            { text: "「ごめんね。わたしも {生活|せいかつ}の お{金|かね}しか ないから、かせない。」", textId: "\"Gomen ne. Watashi mo seikatsu no okane shika nai kara, kasenai.\" (Maaf ya. Aku juga cuma punya uang untuk hidup, jadi tidak bisa meminjamkan.)", grade: "best" },
            { text: "「むり。」", textId: "\"Muri.\" (Tidak bisa.)", grade: "ng", note: "ことわった ことは つたわります。でも、りゆうが なくて、つめたく {聞|き}こえます。" },
            { text: "「うん、いいよ。」（ほんとうは かせない）", textId: "\"Un, ii yo.\" (Ya, boleh.) — padahal sebenarnya tidak bisa.", grade: "ng", note: "あとで こまるのは、あなたと {友|とも}だちです。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "「ごめんね」＋ りゆう ＋「できない」"],
            ["ポイント", "ことわるのは、つめたい ことでは ありません。"]
          ],
          explainId: "Pola: \"Gomen ne\" + alasan + \"tidak bisa\". \"Muri\" saja menyampaikan penolakan, tetapi tanpa alasan terdengar dingin. Berkata \"boleh\" padahal tidak bisa akan menyusahkan Anda dan teman. Menolak bukan berarti dingin.",
          teacherNote: "貸す場合は「いくら・いつ かえすか」を書く、という指導は第2弾「つかいかた」で扱う。"
        },
        {
          id: "money-t02", icon: "✍️🙅",
          text: "{友|とも}だちに「あなたの {名前|なまえ}で けいやくして」と {言|い}われました。",
          textId: "Teman berkata, \"Buat kontrak atas namamu.\"",
          choices: [
            { text: "「ごめんなさい。{名前|なまえ}を かす ことは できません。」", textId: "\"Gomen nasai. Namae o kasu koto wa dekimasen.\" (Maaf. Saya tidak bisa meminjamkan nama.)", grade: "best" },
            { text: "「うーん、また こんど。」", textId: "\"Uun, mata kondo.\" (Hmm, lain kali.)", grade: "ng", note: "ことわった ことが つたわりません。また たのまれます。" },
            { text: "「1{回|かい}だけなら いいよ。」", textId: "\"Ikkai dake nara ii yo.\" (Kalau sekali saja, boleh.)", grade: "ng" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "「ごめんなさい」＋「〜は できません」（はっきり）"]
          ],
          explainId: "Pola: \"Gomen nasai\" + \"… wa dekimasen\" (dengan jelas). \"Uun, mata kondo\" tidak menyampaikan penolakan, jadi Anda akan diminta lagi. \"Sekali saja\" pun tidak boleh.",
          teacherNote: ""
        },
        {
          id: "money-t03", icon: "🗣️👛",
          text: "お{金|かね}を つかいすぎて、きゅうりょう{日|び}まで {生活|せいかつ}できません。{会社|かいしゃ}の {人|ひと}に そうだんします。",
          textId: "Uang terlalu banyak terpakai dan tidak cukup sampai gajian. Anda berkonsultasi dengan staf perusahaan.",
          choices: [
            { text: "「すみません、そうだんが あります。お{金|かね}を つかいすぎて、きゅうりょう{日|び}まで ごはんの お{金|かね}が たりません。」", textId: "\"Sumimasen, soudan ga arimasu. Okane o tsukaisugite, kyuuryoubi made gohan no okane ga tarimasen.\" (Maaf, saya ingin berkonsultasi. Saya terlalu banyak memakai uang, dan uang makan tidak cukup sampai gajian.)", grade: "best" },
            { text: "「お{金|かね}、ないです。」", textId: "\"Okane, nai desu.\" (Tidak ada uang.)", grade: "ng", note: "{何|なに}が あったか、{何|なに}に こまって いるか、わかりません。" },
            { text: "「さいふを なくしました。」（ほんとうは つかいすぎ）", textId: "\"Saifu o nakushimashita.\" (Dompet saya hilang.) — padahal sebenarnya terlalu boros.", grade: "ng", note: "うそは つきません。{正直|しょうじき}に {話|はな}すと、いっしょに {考|かんが}えられます。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "「そうだんが あります」＋ {何|なに}が あったか ＋ {何|なに}に こまって いるか"],
            ["ポイント", "{会社|かいしゃ}に {言|い}いにくい ときは、くみあいや IJFAの {人|ひと}に {同|おな}じように {話|はな}します。"]
          ],
          explainId: "Pola: \"Soudan ga arimasu\" + apa yang terjadi + apa yang menyulitkan. \"Okane, nai desu\" tidak menjelaskan apa yang terjadi. Jangan berbohong; jika jujur, bisa dipikirkan bersama. Jika sulit bicara dengan perusahaan, sampaikan dengan cara yang sama kepada staf kumiai atau IJFA.",
          teacherNote: ""
        }
      ]
    }
  ]
};
