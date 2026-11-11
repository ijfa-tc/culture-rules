// =====================================================================
// テーマ「自転車のルール」の問題データ
// ・ふりがなは {漢字|かんじ} と書く
// ・answer は "ok" か "dame"
// ・tag は "rule"（ルールいはん）か "danger"（あぶない）。OKの問題は null
// ・icon は絵文字、image は画像ファイル名（どちらか片方）
// ・teacherNote は先生用のメモ（生徒の画面には出ない）
// =====================================================================
window.IJFA_THEMES = window.IJFA_THEMES || {};
window.IJFA_THEMES.bicycle = {
  key: "bicycle",
  title: "{自転車|じてんしゃ}のルール",
  titleId: "Aturan Bersepeda",
  intro: "{日本|にほん}の {自転車|じてんしゃ}の ルールを {覚|おぼ}えましょう。「OK」か「ダメ」を えらんで ください。",
  introId: "Mari belajar aturan bersepeda di Jepang. Pilih \"OK\" atau \"Dame (tidak boleh)\".",
  sets: [
    {
      key: "basic",
      title: "きほん",
      titleId: "Dasar",
      description: "{走|はし}り{方|かた}の ルール",
      descriptionId: "Aturan cara bersepeda",
      questions: [
        {
          id: "bike-b01",
          image: "bike_b01.jpg",
          text: "かさを さして、{自転車|じてんしゃ}に のります。",
          textId: "Naik sepeda sambil memegang payung.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "かた{手|て}に なります。ブレーキが うまく できません。{前|まえ}も {見|み}えにくいです。"],
            ["もし…", "けいさつに {止|と}められます。ばっきん（5,000{円|えん}）に なる ことも あります。"],
            ["どうする？", "{雨|あめ}の {日|ひ}は、レインコートを きます。"],
            ["インドネシアでは？", "インドネシアでも、かさを さして のるのは ダメです。"]
          ],
          explainId: "Hanya satu tangan, rem tidak aman, dan pandangan terhalang. Bisa diberhentikan polisi dan didenda 5.000 yen. Saat hujan, pakai jas hujan. Di Indonesia pun dilarang.",
          teacherNote: "公安委員会規則による違反。傘を固定する器具を使っても、必ず合法になるわけではない。"
        },
        {
          id: "bike-b02",
          image: "bike_b02.jpg",
          text: "スマホを {見|み}ながら、{自転車|じてんしゃ}に のります。",
          textId: "Naik sepeda sambil melihat HP.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{前|まえ}を {見|み}て いません。{人|ひと}や {車|くるま}に ぶつかります。"],
            ["もし…", "ばっきん（12,000{円|えん}）。じこを おこすと、もっと おもい ばつに なります。"],
            ["どうする？", "{止|と}まってから、スマホを つかいます。"],
            ["インドネシアでは？", "インドネシアでも、うんてん{中|ちゅう}の スマホは ダメです。"]
          ],
          explainId: "Tidak melihat ke depan, bisa menabrak orang atau mobil. Denda 12.000 yen; jika terjadi kecelakaan, hukumannya lebih berat. Berhenti dulu, baru pakai HP.",
          teacherNote: "ハンドルに固定していても、走りながら画面を見るのは禁止。"
        },
        {
          id: "bike-b03",
          image: "bike_b03.jpg",
          text: "イヤホンで {音楽|おんがく}を {大|おお}きい {音|おと}で ききながら、{自転車|じてんしゃ}に のります。",
          textId: "Naik sepeda sambil mendengarkan musik keras dengan earphone.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{車|くるま}の {音|おと}や {人|ひと}の こえが きこえません。"],
            ["もし…", "じこの とき、あなたの せきにんが {大|おお}きく なります。ばっきん（5,000{円|えん}）に なる ことも あります。"],
            ["どうする？", "{自転車|じてんしゃ}に のる ときは、イヤホンを はずします。"]
          ],
          explainId: "Tidak bisa mendengar suara mobil atau orang. Jika kecelakaan, tanggung jawab Anda lebih besar; bisa didenda 5.000 yen. Lepas earphone saat naik sepeda.",
          teacherNote: "法律上は「必要な音が聞こえない状態」が違反で、装着だけでは違反にならない。教室では「はずす」と教える。会社でルールが決まっている場合はそれに従う。"
        },
        {
          id: "bike-b04",
          image: "bike_b04.jpg",
          text: "{友|とも}だちを、{自転車|じてんしゃ}の うしろに のせます。",
          textId: "Membonceng teman di belakang sepeda.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{自転車|じてんしゃ}は 1{人|り}で のる ものです。バランスが わるく なります。"],
            ["もし…", "ばっきん（3,000{円|えん}）に なる ことも あります。"],
            ["どうする？", "{友|とも}だちと いっしょなら、2だいで のるか、あるきます。"],
            ["インドネシアでは？", "インドネシアでは、うしろに すわる {場所|ばしょ}が あれば OKです。{日本|にほん}では、{大人|おとな}の 2{人|にん}のりは ダメです。ここが ちがいます。"]
          ],
          explainId: "Sepeda untuk satu orang. Bisa didenda 3.000 yen. Di Indonesia boleh jika ada tempat duduk belakang, tetapi di Jepang orang dewasa tidak boleh berboncengan.",
          teacherNote: "幼児用座席やタンデム自転車などの例外あり。"
        },
        {
          id: "bike-b05",
          image: "bike_b05.jpg",
          text: "{友|とも}だちと 2{人|ふたり}で、よこに ならんで {走|はし}ります。",
          textId: "Bersepeda berdampingan dengan teman (2 sepeda sejajar).",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{道|みち}が せまく なります。{車|くるま}や {人|ひと}の じゃまに なります。"],
            ["もし…", "ばっきん（3,000{円|えん}）に なる ことも あります。"],
            ["どうする？", "1れつに なって {走|はし}ります。{話|はなし}は、{止|と}まってから します。"],
            ["インドネシアでは？", "インドネシアでは 3だい{以上|いじょう}が ダメです。{日本|にほん}では 2だいでも ダメです。"]
          ],
          explainId: "Menghalangi mobil dan pejalan kaki. Bisa didenda 3.000 yen. Di Indonesia yang dilarang 3 sepeda atau lebih; di Jepang 2 sepeda pun dilarang. Bersepedalah satu baris.",
          teacherNote: "「並進可」の標識がある場所は例外。"
        },
        {
          id: "bike-b06",
          image: "bike_b06.jpg",
          text: "{夜|よる}、ライトを つけて {走|はし}ります。",
          textId: "Malam hari, bersepeda dengan lampu menyala.",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "ライトが あると、{車|くるま}から あなたが {見|み}えます。"],
            ["ポイント", "{町|まち}が {明|あか}るくても、{夜|よる}は かならず ライトを つけます。ライトを つけないと ばっきん（5,000{円|えん}）です。"]
          ],
          explainId: "Dengan lampu, pengendara mobil bisa melihat Anda. Walaupun jalan terang, malam hari wajib menyalakan lampu (tanpa lampu: denda 5.000 yen).",
          teacherNote: ""
        },
        {
          id: "bike-b07",
          image: "stop_sign.svg",
          text: "「{止|と}まれ」の ひょうしきで、{止|と}まって、{右|みぎ}と {左|ひだり}を {見|み}ます。",
          textId: "Di rambu \"Tomare\" (Berhenti), berhenti lalu melihat kanan dan kiri.",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "{見|み}えない ところから {車|くるま}が {来|き}ます。"],
            ["ポイント", "スピードを おとすだけでは ダメです。{足|あし}を ついて、{止|と}まります。"]
          ],
          explainId: "Mobil bisa datang dari tempat yang tidak terlihat. Tidak cukup hanya memperlambat; harus benar-benar berhenti.",
          teacherNote: "一時停止を無視すると反則金5,000円。"
        },
        {
          id: "bike-b08",
          image: "bike_b08.jpg",
          text: "{道|みち}の {右|みぎ}がわを {走|はし}ります。",
          textId: "Bersepeda di sisi kanan jalan.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{日本|にほん}の {自転車|じてんしゃ}は、{車|くるま}と おなじで {左|ひだり}がわを {走|はし}ります。{右|みぎ}を {走|はし}ると、{前|まえ}から {来|く}る {車|くるま}と ぶつかります。"],
            ["もし…", "ばっきん（6,000{円|えん}）に なる ことも あります。"],
            ["どうする？", "いつも {左|ひだり}がわを {走|はし}ります。"],
            ["インドネシアでは？", "インドネシアも {日本|にほん}も、{車|くるま}は {左|ひだり}です。おなじです。"]
          ],
          explainId: "Di Jepang, sepeda berjalan di sisi kiri seperti mobil. Bisa didenda 6.000 yen. Sama seperti di Indonesia, lajur kiri.",
          teacherNote: ""
        },
        {
          id: "bike-b09",
          image: "bike_b09.jpg",
          text: "しんごうが {赤|あか}です。{車|くるま}が {来|こ}ないので、わたります。",
          textId: "Lampu merah. Karena tidak ada mobil, saya menyeberang.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{車|くるま}が {来|こ}なくても、{赤|あか}は {止|と}まります。みんなが まもる から、あんぜんです。"],
            ["もし…", "ばっきん（6,000{円|えん}）に なる ことも あります。{日本人|にほんじん}は よく {見|み}て います。"],
            ["どうする？", "{青|あお}に なるまで、まちます。"]
          ],
          explainId: "Walaupun tidak ada mobil, lampu merah berarti berhenti. Bisa didenda 6.000 yen. Tunggu sampai lampu hijau.",
          teacherNote: "点滅信号の無視は5,000円。"
        },
        {
          id: "bike-b10",
          image: "bike_b10.jpg",
          text: "ヘルメットを かぶって、{自転車|じてんしゃ}に のります。",
          textId: "Naik sepeda dengan memakai helm.",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "じこの とき、{頭|あたま}を まもります。"],
            ["ポイント", "{日本|にほん}では、ヘルメットを かぶる ことが すすめられて います。のる ときは、いつも かぶりましょう。"]
          ],
          explainId: "Melindungi kepala saat kecelakaan. Di Jepang, memakai helm sangat dianjurkan.",
          teacherNote: "法律上は努力義務で、かぶらなくても罰則はない。会社が義務にしている場合もある。"
        },
        {
          id: "bike-b11",
          image: "bike_b11.jpg",
          text: "お{酒|さけ}を すこし のみました。{自転車|じてんしゃ}で {家|いえ}に かえります。",
          textId: "Saya minum sedikit alkohol. Lalu pulang naik sepeda.",
          answer: "dame",
          tag: "rule",
          heavy: true,
          explain: [
            ["なぜ？", "お{酒|さけ}を のむと、{正|ただ}しく うんてん できません。"],
            ["もし…", "ばっきんでは なく、もっと おもい ばつ（けいじばつ）に なります。{会社|かいしゃ}にも {大|おお}きな めいわくが かかります。"],
            ["どうする？", "お{酒|さけ}を のんだら、{自転車|じてんしゃ}を おして あるきます。"]
          ],
          explainId: "Setelah minum alkohol, tidak bisa mengemudi dengan benar. Ini bukan denda biasa, tetapi hukuman pidana. Jika sudah minum, tuntun sepeda sambil berjalan.",
          teacherNote: "酒気帯び運転は青切符の対象外で、3年以下の拘禁刑または50万円以下の罰金。基準値未満でも飲酒運転は禁止。"
        },
        {
          id: "bike-b12",
          image: "bike_b12.jpg",
          text: "{歩道|ほどう}で、{前|まえ}に あるく {人|ひと}が います。ゆっくり {走|はし}るか、{止|と}まります。",
          textId: "Di trotoar ada pejalan kaki di depan. Saya pelan-pelan atau berhenti.",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "{歩道|ほどう}は、あるく {人|ひと}が いちばん {先|さき}（ゆうせん）です。"],
            ["ポイント", "{大人|おとな}の {自転車|じてんしゃ}は、ふつうは {車道|しゃどう}（{左|ひだり}がわ）を {走|はし}ります。{歩道|ほどう}を {走|はし}れるのは、ひょうしきが ある ときなどです。"]
          ],
          explainId: "Di trotoar, pejalan kaki diutamakan. Sepeda orang dewasa pada umumnya berjalan di jalan raya (sisi kiri).",
          teacherNote: ""
        }
      ]
    },
    {
      key: "life",
      title: "せいかつ",
      titleId: "Kehidupan",
      description: "{止|と}め{方|かた}・{持|も}ち{物|もの}・じこの とき",
      descriptionId: "Parkir, barang milik, saat kecelakaan",
      questions: [
        {
          id: "bike-l01",
          image: "bike_l01.jpg",
          text: "{道|みち}に おいて ある、かぎの ない {自転車|じてんしゃ}を つかいます。",
          textId: "Memakai sepeda yang ditaruh di jalan dan tidak dikunci.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "かぎが なくても、だれかの {自転車|じてんしゃ}です。かってに つかうのは、どろぼうと おなじです。"],
            ["もし…", "けいさつの もんだいに なります。{会社|かいしゃ}で はたらけなく なる ことも あります。"],
            ["どうする？", "{人|ひと}の ものは、つかいません。"]
          ],
          explainId: "Walaupun tidak dikunci, sepeda itu milik seseorang. Memakainya tanpa izin sama dengan mencuri. Bisa menjadi urusan polisi, dan Anda bisa kehilangan pekerjaan. Jangan memakai barang orang lain.",
          teacherNote: "窃盗罪・占有離脱物横領罪にあたり得る。駐在記録でも窃盗・警察対応が14件ある。"
        },
        {
          id: "bike-l02",
          image: "bike_l02.jpg",
          text: "お{店|みせ}に {入|はい}る とき、{自転車|じてんしゃ}に かぎを かけます。",
          textId: "Saat masuk toko, saya mengunci sepeda.",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "{日本|にほん}でも、{自転車|じてんしゃ}は よく ぬすまれます。"],
            ["ポイント", "みじかい {時間|じかん}でも、かぎを かけます。"]
          ],
          explainId: "Di Jepang pun sepeda sering dicuri. Walaupun sebentar, kunci sepeda.",
          teacherNote: ""
        },
        {
          id: "bike-l03",
          image: "bike_l03.jpg",
          text: "{友|とも}だちの {自転車|じてんしゃ}を、だまって かります。",
          textId: "Meminjam sepeda teman tanpa bilang.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{友|とも}だちが こまります。ぬすまれたと {思|おも}って、けいさつに れんらくする かも しれません。"],
            ["どうする？", "「かして ください」と {聞|き}いて、「いいよ」と {言|い}われてから つかいます。"]
          ],
          explainId: "Teman Anda akan kebingungan, dan mungkin mengira sepedanya dicuri lalu melapor ke polisi. Tanyakan dulu \"Boleh pinjam?\", dan pakai setelah diizinkan.",
          teacherNote: "無断使用は窃盗として扱われることがある。"
        },
        {
          id: "bike-l04",
          image: "bike_l04.jpg",
          text: "{自転車|じてんしゃ}で {人|ひと}に ぶつかりました。けがが ないので、そのまま かえります。",
          textId: "Saya menabrak orang dengan sepeda. Karena tidak ada yang terluka, saya langsung pulang.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "じこの ときは、けいさつに れんらくする ルールが あります。あとで けがが わかる ことも あります。"],
            ["もし…", "にげたと {思|おも}われて、{大|おお}きな もんだいに なります。"],
            ["どうする？", "その {場所|ばしょ}に いて、けいさつと {会社|かいしゃ}に れんらくします。"]
          ],
          explainId: "Saat kecelakaan, ada aturan wajib melapor ke polisi. Luka bisa ketahuan belakangan. Jika langsung pergi, Anda bisa dianggap kabur dan masalahnya jadi besar. Tetap di tempat, lalu hubungi polisi dan perusahaan.",
          teacherNote: "道路交通法の事故報告義務は自転車にも適用される。"
        },
        {
          id: "bike-l05",
          image: "bike_l05.jpg",
          text: "{自転車|じてんしゃ}で ぶつかりました。すぐ けいさつと {会社|かいしゃ}に {電話|でんわ}します。",
          textId: "Saya bertabrakan dengan sepeda. Saya segera menelepon polisi dan perusahaan.",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "はやく れんらくすると、{会社|かいしゃ}が たすけて くれます。"],
            ["ポイント", "じこや ミスは、かくさないで すぐ ほうこく。これが「ほうれんそう」です。"]
          ],
          explainId: "Jika cepat melapor, perusahaan bisa membantu. Kecelakaan atau kesalahan jangan disembunyikan, segera laporkan. Inilah \"Hou-Ren-Sou\".",
          teacherNote: "駐在記録では、小火や漏水を翌朝まで報告しなかった例がある。報連相のテーマとつなげる。"
        },
        {
          id: "bike-l06",
          image: "bike_l06.jpg",
          text: "ライトが こわれた {自転車|じてんしゃ}で、{夜|よる} {走|はし}ります。",
          textId: "Bersepeda malam hari dengan lampu yang rusak.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{車|くるま}から あなたが {見|み}えません。"],
            ["もし…", "ばっきん（5,000{円|えん}）に なる ことも あります。"],
            ["どうする？", "ライトを なおしてから のります。なおすまでは、おして あるきます。"],
            ["インドネシアでは？", "インドネシアでも、ライトは ひつようです。"]
          ],
          explainId: "Pengendara mobil tidak bisa melihat Anda. Bisa didenda 5.000 yen. Perbaiki lampu dulu; sebelum diperbaiki, tuntun sepedanya. Di Indonesia pun lampu wajib.",
          teacherNote: ""
        },
        {
          id: "bike-l07",
          image: "bike_l07.jpg",
          text: "ブレーキが ききにくいです。でも、そのまま のります。",
          textId: "Remnya kurang pakem, tapi tetap dipakai.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "{止|と}まりたい ときに、{止|と}まれません。"],
            ["もし…", "{人|ひと}や {車|くるま}に ぶつかります。ルールいはんにも なります。"],
            ["どうする？", "{自転車屋|じてんしゃや}で なおしてから のります。"]
          ],
          explainId: "Tidak bisa berhenti saat perlu. Bisa menabrak orang atau mobil, dan juga melanggar aturan. Perbaiki di toko sepeda dulu.",
          teacherNote: "ブレーキ不良は道路交通法違反（整備不良）。"
        },
        {
          id: "bike-l08",
          image: "bike_l08.jpg",
          text: "かた{手|て}に {買|か}いものぶくろを もって、{走|はし}ります。",
          textId: "Bersepeda sambil memegang kantong belanja di satu tangan.",
          answer: "dame",
          tag: "danger",
          explain: [
            ["なぜ？", "かた{手|て}では、ブレーキが うまく できません。ふくろが タイヤに はさまる ことも あります。"],
            ["もし…", "ちいき に よっては、ルールいはんに なります。"],
            ["どうする？", "かごに {入|い}れます。"]
          ],
          explainId: "Dengan satu tangan, rem tidak aman. Kantong bisa terjepit di roda. Di beberapa daerah juga melanggar aturan. Masukkan ke keranjang.",
          teacherNote: "片手運転・荷物の持ち方は公安委員会規則で禁止している地域が多い。"
        },
        {
          id: "bike-l09",
          image: "bike_l09.jpg",
          text: "{駅|えき}の {前|まえ}の、ちゅうりんじょうでは ない {場所|ばしょ}に {止|と}めます。",
          textId: "Memarkir sepeda di depan stasiun, bukan di tempat parkir sepeda.",
          answer: "dame",
          tag: "rule",
          explain: [
            ["なぜ？", "あるく {人|ひと}の じゃまに なります。"],
            ["もし…", "{自転車|じてんしゃ}を もって いかれます（てっきょ）。とりに {行|い}く とき、お{金|かね}が かかります。"],
            ["どうする？", "ちゅうりんじょうに {止|と}めます。"]
          ],
          explainId: "Menghalangi pejalan kaki. Sepeda bisa diangkut petugas, dan untuk mengambilnya harus bayar. Parkir di tempat parkir sepeda.",
          teacherNote: "自治体の条例による。撤去・保管費用は地域差あり。"
        },
        {
          id: "bike-l10",
          image: "moped_and_bicycle.png",
          imageAlt: "モペットと自転車",
          text: "{左|ひだり}の {自転車|じてんしゃ}は、こがなくても アクセルで {走|はし}ります。めんきょが ないですが、のります。",
          textId: "Sepeda di sebelah kiri bisa jalan dengan gas tanpa dikayuh. Saya tidak punya SIM, tapi tetap mengendarainya.",
          answer: "dame",
          tag: "rule",
          explainImage: "moped_vs_assist.svg",
          explain: [
            ["なぜ？", "こがなくても {走|はし}るなら、{自転車|じてんしゃ}では なく バイク（モペット）です。めんきょ・ナンバー・ヘルメットが ひつようです。"],
            ["もし…", "めんきょなしの うんてんに なります。けいさつの {大|おお}きな もんだいです。"],
            ["どうする？", "{買|か}う {前|まえ}に、お{店|みせ}の {人|ひと}や {会社|かいしゃ}に {聞|き}きます。"],
            ["ポイント", "{見|み}た{目|め}では わかりません。ペダルが あっても、バイクの ことが あります。"]
          ],
          explainId: "Jika bisa jalan tanpa dikayuh, itu bukan sepeda tetapi sepeda motor (moped). Wajib SIM, pelat nomor, dan helm. Mengendarai tanpa SIM adalah masalah besar dengan polisi. Tidak bisa dibedakan hanya dari penampilan. Tanyakan dulu ke toko atau perusahaan sebelum membeli.",
          teacherNote: "モーターを切ってペダルだけで走っても、バイクの運転として扱われる（2024年11月から明確化）。"
        },
        {
          id: "bike-l11",
          image: "bike_l11.jpg",
          text: "{友|とも}だちから {自転車|じてんしゃ}を もらいました。ぼうはん{登録|とうろく}の {手|て}つづきを します。",
          textId: "Saya diberi sepeda oleh teman. Saya mengurus pendaftaran anti-pencurian (bouhan touroku).",
          answer: "ok",
          tag: null,
          explain: [
            ["なぜ？", "{日本|にほん}では、{自転車|じてんしゃ}の ぼうはん{登録|とうろく}は ルールです。{登録|とうろく}の {名前|なまえ}が ちがうと、けいさつに「ぬすんだ {自転車|じてんしゃ}？」と {聞|き}かれます。"],
            ["ポイント", "もらう ときは、「あげます」と {書|か}いた {紙|かみ}（じょうと しょうめい）を もらいます。"]
          ],
          explainId: "Di Jepang, pendaftaran anti-pencurian sepeda adalah kewajiban. Jika nama terdaftar berbeda, polisi bisa bertanya \"Apakah ini sepeda curian?\". Saat diberi sepeda, minta surat keterangan pemberian.",
          teacherNote: "手数料・必要書類は都道府県で違う。"
        }
      ]
    }
  ]
};
