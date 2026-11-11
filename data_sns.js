// =====================================================================
// テーマ「スマホ・SNS」の問題データ（第1弾：3セット・22問）
// ・形は data_dorm.js と同じ（OK／ダメ、◎○✖）
// ・ふりがなは {漢字|かんじ} と書く
// ・tag は "law"（ほうりつ いはん）"rule"（ルールいはん）"danger"（あぶない）"meiwaku"（めいわく）
// ・罰則の数字は生徒の画面に出さない。teacherNote（先生用メモ）だけに書く
// ・相談先は「会社・くみあい・IJFA」。特定技能の人は「TSK」（登録支援機関）
// ・被害者になったことと、犯罪に加担したことは区別する。「インドネシア人は だまされやすい」とは書かない
// =====================================================================
window.IJFA_THEMES = window.IJFA_THEMES || {};
window.IJFA_THEMES.sns = {
  key: "sns",
  title: "スマホ・SNS",
  titleId: "HP & Media Sosial",
  intro: "スマホは、お{金|かね}や {自分|じぶん}の じょうほうが {入|はい}った {大切|たいせつ}な ものです。おさいふと {同|おな}じように まもりましょう。SNSに のせる ものにも {気|き}を つけます。",
  introId: "HP berisi uang dan data pribadi Anda. Jagalah seperti dompet. Hati-hati juga dengan apa yang Anda unggah ke media sosial.",
  sets: [
    // ================= セット1　まもる（OK／ダメ） =================
    {
      key: "protect",
      title: "まもる",
      titleId: "Melindungi",
      description: "へんな メッセージ・さぎ・スマホの {使|つか}い{方|かた}",
      intro: {
        title: "スマホを まもる 3つの ルール",
        lines: [
          ["li", "① メッセージの リンクから、パスワードを {入|い}れません。"],
          ["li", "② SMSに {来|き}た {番号|ばんごう}（コード）を、{人|ひと}に {教|おし}えません。"],
          ["li", "③ {知|し}らない {人|ひと}に、スマホを {使|つか}わせません。"],
          ["p", "「おかしいな」と {思|おも}ったら、{何|なに}も しないで、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {聞|き}きます。"]
        ],
        textId: "(1) Jangan memasukkan kata sandi lewat tautan di pesan. (2) Jangan memberi tahu orang lain kode yang datang lewat SMS. (3) Jangan biarkan orang yang tidak dikenal memakai HP Anda. Jika merasa aneh, jangan lakukan apa-apa dan tanyakan ke staf perusahaan, kumiai, atau IJFA."
      },
      summary: {
        lines: [
          "リンクから パスワードを {入|い}れません。SMSの コードを {教|おし}えません。",
          "「かならず もうかる」「{先|さき}に お{金|かね}を {入|い}れて」は、さぎです。",
          "お{金|かね}の {画面|がめん}を、SNSに のせません。"
        ],
        textId: "Jangan memasukkan kata sandi lewat tautan. Jangan memberi tahu kode SMS. \"Pasti untung\" dan \"setor uang dulu\" adalah penipuan. Jangan unggah layar keuangan ke media sosial."
      },
      questions: [
        {
          id: "sns-p01", icon: "📩🏦",
          text: "「ぎんこうです。カードが {止|と}まりました。ここから {入力|にゅうりょく}して ください」と SMSが {来|き}ました。リンクを おして、パスワードを {入|い}れます。",
          textId: "Datang SMS: \"Dari bank. Kartu Anda diblokir. Silakan input di sini.\" Anda menekan tautan dan memasukkan kata sandi.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "ぎんこうの ふりを した、にせの メッセージかも しれません。パスワードを {入|い}れると、とられます。"],
            ["もし…", "こうざの お{金|かね}が、{知|し}らない うちに なくなる ことが あります。"],
            ["どうする？", "リンクは おしません。{心配|しんぱい}な ときは、カードの うらの {番号|ばんごう}や、いつも {使|つか}う ぎんこうの アプリで たしかめます。"]
          ],
          explainId: "Bisa jadi pesan palsu yang berpura-pura dari bank. Jika memasukkan kata sandi, kata sandi dicuri dan uang di rekening bisa hilang tanpa disadari. Jangan tekan tautan. Jika khawatir, cek lewat nomor di balik kartu atau aplikasi bank yang biasa dipakai.",
          teacherNote: "フィッシング。神奈川県警（2026年7月3日更新）：銀行・カード・通信・通販・配送業者などを装い、偽サイトでID・カード情報を盗む。"
        },
        {
          id: "sns-p02", icon: "📩📦",
          text: "「おにもつを おとどけ できませんでした。こちらで かくにん して ください」と SMSが {来|き}ました。{何|なに}も {買|か}って いませんが、リンクを おします。",
          textId: "Datang SMS: \"Paket Anda tidak dapat dikirim. Silakan cek di sini.\" Anda tidak membeli apa-apa, tetapi menekan tautannya.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "にもつの {会社|かいしゃ}の ふりを した、にせの メッセージが とても {多|おお}いです。"],
            ["もし…", "にせの サイトで じょうほうを とられたり、へんな アプリを {入|い}れられたり します。"],
            ["どうする？", "おぼえの ない メッセージは、けします。"]
          ],
          explainId: "Banyak sekali pesan palsu yang berpura-pura dari perusahaan pengiriman. Data Anda bisa dicuri di situs palsu, atau aplikasi aneh bisa terpasang. Hapus pesan yang tidak Anda kenal.",
          teacherNote: "配送業者を装うSMSは典型的な手口（神奈川県警ほか）。"
        },
        {
          id: "sns-p03", icon: "🔢🙅",
          text: "{知|し}らない {人|ひと}から {電話|でんわ}が {来|き}ました。「かくにんの ために、SMSに {来|き}た 6けたの {番号|ばんごう}を {教|おし}えて」と {言|い}われて、{教|おし}えます。",
          textId: "Ada telepon dari orang tidak dikenal: \"Untuk konfirmasi, beri tahu 6 digit nomor yang masuk lewat SMS.\" Anda memberitahukannya.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "その {番号|ばんごう}（にんしょう コード）は、あなたの アカウントに {入|はい}る ための かぎです。"],
            ["もし…", "アカウントを とられたり、お{金|かね}を {使|つか}われたり します。"],
            ["ポイント", "ぎんこうや {会社|かいしゃ}が、コードを {電話|でんわ}で {聞|き}く ことは ありません。{家族|かぞく}や {友|とも}だちにも {教|おし}えません。"]
          ],
          explainId: "Nomor itu (kode verifikasi) adalah kunci untuk masuk ke akun Anda. Akun bisa diambil alih atau uang Anda dipakai. Bank atau perusahaan tidak pernah menanyakan kode lewat telepon. Jangan beri tahu keluarga atau teman juga.",
          teacherNote: "警察庁・基本的なセキュリティ対策。自分で開いた正規のアプリにコードを入力するのはよい。他人に伝えるのがダメ、と区別する。"
        },
        {
          id: "sns-p04", icon: "📲👀",
          text: "「てつづきを {手伝|てつだ}います」と {言|い}う {知|し}らない {人|ひと}の {言|い}うとおりに アプリを {入|い}れて、スマホの {画面|がめん}を {見|み}せながら そうさします。",
          textId: "Mengikuti instruksi orang tidak dikenal yang berkata \"Saya bantu prosedurnya\", memasang aplikasi lalu mengoperasikan HP sambil memperlihatkan layarnya.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "あいてが、あなたの スマホを {見|み}たり、うごかしたり できるように なります。"],
            ["もし…", "あなたの {名前|なまえ}で お{金|かね}を かりさせられたり、お{金|かね}を おくらされたり する ことが あります。"],
            ["どうする？", "{知|し}らない {人|ひと}に、スマホを そうさ させません。"]
          ],
          explainId: "Orang itu menjadi bisa melihat dan mengoperasikan HP Anda. Anda bisa dibuat meminjam uang atas nama Anda atau mengirim uang. Jangan biarkan orang tidak dikenal mengoperasikan HP Anda.",
          teacherNote: "国民生活センター「副業サポートや投資の名目で借金させる業者に注意！」（2026年5月20日）：遠隔操作・画面共有で本人に借入れや送金をさせる手口。"
        },
        {
          id: "sns-p05", icon: "🔒📱",
          text: "スマホに {画面|がめん}ロックを かけます。ロックの {番号|ばんごう}は、だれにも {言|い}いません。",
          textId: "Memasang kunci layar di HP. Nomor kuncinya tidak diberitahukan kepada siapa pun.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "スマホを なくした とき、ほかの {人|ひと}に {使|つか}われません。アプリの {更新|こうしん}も して おきます。"]
          ],
          explainId: "Jika HP hilang, orang lain tidak bisa memakainya. Perbarui juga aplikasinya.",
          teacherNote: "IPA「日常における情報セキュリティ対策」。"
        },
        {
          id: "sns-p06", icon: "📱🤝",
          text: "ぎんこうの アプリが {入|はい}った スマホを、{友|とも}だちに {自由|じゆう}に {使|つか}わせます。ロックの {番号|ばんごう}も {教|おし}えます。",
          textId: "Membiarkan teman memakai bebas HP yang berisi aplikasi bank, dan memberi tahu nomor kuncinya.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "スマホの {中|なか}には、お{金|かね}と じょうほうが {入|はい}って います。"],
            ["もし…", "なかの いい {友|とも}だちでも、あとで お{金|かね}の トラブルに なる ことが あります。"],
            ["ポイント", "{友|とも}だちが {電話|でんわ}を {少|すこ}し かりるだけなら、だいじょうぶです。{自分|じぶん}の {前|まえ}で {使|つか}って もらいます。"]
          ],
          explainId: "HP berisi uang dan data. Walaupun teman akrab, nanti bisa terjadi masalah uang. Jika teman hanya meminjam untuk menelepon sebentar, tidak apa-apa; biarkan dia memakainya di depan Anda.",
          teacherNote: "一時的に電話を貸すことがすべて悪いわけではない。お金や個人情報にアクセスできる状態で自由に使わせる危険を教える。"
        },
        {
          id: "sns-p07", icon: "📸💴",
          text: "きゅうりょうが {入|はい}りました。うれしいので、こうざの {画面|がめん}を SNSに のせます。",
          textId: "Gaji masuk. Karena senang, Anda mengunggah tangkapan layar rekening ke media sosial.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "いくら もって いるか、どこの ぎんこうか、わかって しまいます。"],
            ["もし…", "さぎや、「お{金|かね}を かして」の きっかけに なります。"],
            ["ポイント", "「{友|とも}だちだけ」の とうこうも、ほぞんされて、ほかの {人|ひと}に {見|み}られる ことが あります。げんきん、きゅうりょうめいさい、そうきんの きろくも のせません。"]
          ],
          explainId: "Orang jadi tahu berapa uang Anda dan bank mana yang dipakai. Ini bisa menjadi awal penipuan atau permintaan pinjam uang. Unggahan \"khusus teman\" pun bisa disimpan dan dilihat orang lain. Jangan unggah uang tunai, slip gaji, atau bukti kiriman uang.",
          teacherNote: "投稿自体が違法という意味ではない。お金と個人情報を守るための学校の方針。"
        },
        {
          id: "sns-p08", icon: "📈🇮🇩",
          text: "SNSで、「{同|おな}じ インドネシア{人|じん}」と {言|い}う {人|ひと}に、「かならず もうかる {投資|とうし}が ある」と さそわれました。お{金|かね}を おくります。",
          textId: "Di media sosial, orang yang mengaku \"sesama orang Indonesia\" mengajak, \"Ada investasi yang pasti untung.\" Anda mengirim uang.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "「かならず もうかる」は、さぎの ことばです。「{同|おな}じ {国|くに}の {人|ひと}」と {言|い}って、あんしん させます。"],
            ["もし…", "はじめは {少|すこ}し もうかった ように {見|み}せて、もっと お{金|かね}を {入|い}れさせます。"],
            ["どうする？", "お{金|かね}を おくる {前|まえ}に、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {聞|き}きます。"]
          ],
          explainId: "\"Pasti untung\" adalah kata-kata penipuan. Mereka membuat Anda merasa aman dengan berkata \"sesama orang dari negara yang sama\". Awalnya diperlihatkan seolah-olah untung sedikit, lalu Anda disuruh menyetor lebih banyak. Sebelum mengirim uang, tanyakan ke staf perusahaan, kumiai, atau IJFA.",
          teacherNote: "警視庁・外国人向け投資詐欺チラシ：「同じ国籍」と親近感を持たせ、少額の配当を見せて追加送金させる手口。「インドネシア人は特にだまされやすい」とは書かない。"
        },
        {
          id: "sns-p09", icon: "💕💸",
          text: "SNSで {知|し}り{合|あ}った {恋人|こいびと}が います。まだ {会|あ}った ことは ありません。「こまって いるから、お{金|かね}を おくって」と {言|い}われて、おくります。",
          textId: "Anda punya pacar yang dikenal di media sosial dan belum pernah bertemu. Ia berkata, \"Aku sedang kesulitan, kirimi aku uang,\" lalu Anda mengirimnya.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "{会|あ}った ことが ない {人|ひと}に お{金|かね}を おくると、もどって きません。「けっこん」や「しょうらい」の {話|はなし}を して、お{金|かね}を おくらせる さぎが あります。"],
            ["ポイント", "「この お{金|かね}を べつの こうざに おくって」と たのまれる ことも あります。それは、はんざいの {手伝|てつだ}いに なります。"]
          ],
          explainId: "Uang yang dikirim kepada orang yang belum pernah ditemui tidak akan kembali. Ada penipuan yang membicarakan \"menikah\" atau \"masa depan\" lalu menyuruh mengirim uang. Kadang Anda diminta, \"Kirim uang ini ke rekening lain\"; itu berarti membantu kejahatan.",
          teacherNote: "警察庁・SNS型ロマンス詐欺。他人の資金の転送役に使われる場合がある（お金編「おくるだけ」の問題とつながる）。"
        },
        {
          id: "sns-p10", icon: "🎯💰",
          text: "「SNSで『いいね』を おすだけで お{金|かね}が もらえる」しごとを はじめました。{少|すこ}し もらえた あと、「つぎの ミッションは、{先|さき}に お{金|かね}を {入|い}れて」と {言|い}われて、はらいます。",
          textId: "Anda mulai \"pekerjaan\" yang memberi uang hanya dengan menekan \"like\" di media sosial. Setelah menerima sedikit uang, Anda diminta, \"Misi berikutnya, setor uang dulu,\" lalu Anda membayar.",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "これは にせの ふくぎょうです。{先|さき}に はらった お{金|かね}は、もどって きません。"],
            ["ポイント", "はじめに {少|すこ}し もらえても、あんしんでは ありません。"],
            ["ポイント", "それに、あなたは {日本|にほん}で ふくぎょうが できません。"]
          ],
          explainId: "Ini pekerjaan sampingan palsu. Uang yang dibayar duluan tidak akan kembali. Walaupun awalnya menerima sedikit uang, itu tidak berarti aman. Selain itu, Anda tidak boleh bekerja sampingan di Jepang.",
          teacherNote: "Polri公式サイト（2026年4月24日）：Telegramを使う偽副業（misi berbayar／deposit）。OJKも偽求人（lowongan kerja paruh waktu）の注意喚起。インドネシア語では misi berbayar・deposit・reward・sambil rebahan などの言葉が使われる。「ほうりつ いはん」の印にした（技能実習・特定技能では副業ができないため。2026-11-11 坂井さん決定）。"
        }
      ]
    },

    // ================= セット2　のせる？ のせない？（OK／ダメ） =================
    {
      key: "post",
      title: "のせる？ のせない？",
      titleId: "Unggah atau tidak?",
      description: "しゃしん・{書|か}きこみ・どうが",
      intro: {
        title: "のせる {前|まえ}に 3つ {見|み}る",
        lines: [
          ["li", "① {会社|かいしゃ}の ものや {仕事|しごと}が うつって いませんか。"],
          ["li", "② ほかの {人|ひと}の {顔|かお}が うつって いませんか。"],
          ["li", "③ {住所|じゅうしょ}・{在留|ざいりゅう}カード・{社員証|しゃいんしょう}が うつって いませんか。"],
          ["p", "しゃしんの うしろや はしも {見|み}ます。いちど のせると、けしても のこる ことが あります。"]
        ],
        textId: "(1) Apakah barang atau pekerjaan perusahaan terlihat? (2) Apakah wajah orang lain terlihat? (3) Apakah alamat, kartu izin tinggal, atau kartu karyawan terlihat? Periksa juga latar belakang dan tepi foto. Sekali diunggah, walaupun dihapus, bisa tetap tersisa."
      },
      summary: {
        lines: [
          "{仕事|しごと}の しゃしんは、{会社|かいしゃ}に {聞|き}いてから。{人|ひと}の {顔|かお}は、その {人|ひと}に {聞|き}いてから。",
          "SNSでも、{人|ひと}を きずつける ことばは {書|か}きません。",
          "えいがや まんがは、せいきの サービスで {見|み}ます。"
        ],
        textId: "Foto pekerjaan: tanyakan dulu ke perusahaan. Wajah orang: tanyakan dulu ke orangnya. Di media sosial pun, jangan menulis kata-kata yang menyakiti orang. Tonton film dan baca manga lewat layanan resmi."
      },
      questions: [
        {
          id: "sns-n01", icon: "🏭📸",
          text: "{工場|こうじょう}の {中|なか}や、{作業|さぎょう}の しゃしんを、{会社|かいしゃ}に {聞|き}かないで SNSに のせます。",
          textId: "Mengunggah foto bagian dalam pabrik atau pekerjaan ke media sosial tanpa bertanya ke perusahaan.",
          answer: "dame", tag: "rule",
          explain: [
            ["なぜ？", "{会社|かいしゃ}の ひみつが うつって いる かも しれません。{多|おお}くの {会社|かいしゃ}で、きそくで きまって います。"],
            ["もし…", "{会社|かいしゃ}に ちゅういされます。{大|おお}きな もんだいに なる ことも あります。"],
            ["どうする？", "のせたい ときは、{先|さき}に {会社|かいしゃ}の {人|ひと}に {聞|き}きます。"]
          ],
          explainId: "Mungkin ada rahasia perusahaan yang terlihat. Banyak perusahaan mengaturnya dalam peraturan kerja. Anda bisa ditegur perusahaan, dan bisa menjadi masalah besar. Jika ingin mengunggah, tanyakan dulu ke perusahaan.",
          teacherNote: "就業規則・秘密保持義務違反として、懲戒・損害賠償の可能性。どんな職場写真もすぐ犯罪というわけではない（営業秘密の不正な漏えいは不正競争防止法の要件を満たす場合に犯罪）。会社ごとの規則を確認する。"
        },
        {
          id: "sns-n02", icon: "🧑‍🤝‍🧑📸",
          text: "{同|おな}じ {会社|かいしゃ}の {人|ひと}の {顔|かお}が うつった しゃしんを、その {人|ひと}に {聞|き}かないで のせます。",
          textId: "Mengunggah foto yang memperlihatkan wajah rekan kerja tanpa bertanya kepada orang itu.",
          answer: "dame", tag: "meiwaku",
          explain: [
            ["なぜ？", "{顔|かお}を のせられたくない {人|ひと}も います。"],
            ["もし…", "「けして ください」と {言|い}われたり、トラブルに なったり します。"],
            ["どうする？", "{先|さき}に「のせても いいですか」と {聞|き}きます。"]
          ],
          explainId: "Ada orang yang tidak ingin wajahnya diunggah. Anda bisa diminta menghapusnya atau terjadi masalah. Tanyakan dulu, \"Bolehkah saya unggah?\"",
          teacherNote: "肖像・プライバシーの問題（削除・損害賠償）。同僚の同意があっても、会社の秘密が写っていれば別。"
        },
        {
          id: "sns-n03", icon: "🪪📸",
          text: "{日本|にほん}に {来|き}た きねんに、{在留|ざいりゅう}カードの しゃしんを SNSに のせます。",
          textId: "Sebagai kenang-kenangan datang ke Jepang, mengunggah foto kartu izin tinggal ke media sosial.",
          answer: "dame", tag: "danger",
          explain: [
            ["なぜ？", "{名前|なまえ}、{生年月日|せいねんがっぴ}、{番号|ばんごう}が わかります。わるい {人|ひと}が つかう ことが あります。"],
            ["ポイント", "パスポート、{社員証|しゃいんしょう}、カードも {同|おな}じです。{会社|かいしゃ}や やくしょに {出|だ}す ときは、だれに、なぜ おくるか たしかめます。"]
          ],
          explainId: "Nama, tanggal lahir, dan nomornya terlihat, dan bisa dipakai orang jahat. Paspor, kartu karyawan, dan kartu bank juga sama. Saat menyerahkan ke perusahaan atau kantor pemerintah, pastikan kepada siapa dan untuk apa.",
          teacherNote: "身分証の写真は、提出先と目的を確認する（警察庁・基本的なセキュリティ対策）。闇バイトでは身分証の写真を送らせて脅しに使う手口がある（お金編のD5とつながる）。"
        },
        {
          id: "sns-n04", icon: "🔍📸",
          text: "しゃしんを のせる {前|まえ}に、うしろに {寮|りょう}の {住所|じゅうしょ}や {社員証|しゃいんしょう}が うつって いないか {見|み}ます。",
          textId: "Sebelum mengunggah foto, memeriksa apakah alamat asrama atau kartu karyawan terlihat di latar belakang.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "{住所|じゅうしょ}の {看板|かんばん}、ゆうびんぶつ、{窓|まど}から {見|み}える けしきでも、{住|す}んで いる {場所|ばしょ}が わかる ことが あります。{今|いま} いる {場所|ばしょ}を、{知|し}らない {人|ひと}に おしえ つづけません。"]
          ],
          explainId: "Dari papan alamat, surat, atau pemandangan dari jendela pun, tempat tinggal bisa diketahui. Jangan terus membagikan lokasi Anda kepada orang yang tidak dikenal.",
          teacherNote: "IPA：写真の背景、位置情報の共有、アプリの権限。"
        },
        {
          id: "sns-n05", icon: "💬😡",
          text: "{会社|かいしゃ}の {人|ひと}に おこられました。くやしいので、SNSに その {人|ひと}の {名前|なまえ}を {書|か}いて、わるぐちを のせます。",
          textId: "Dimarahi orang di perusahaan. Karena kesal, menulis nama orang itu dan menjelek-jelekkannya di media sosial.",
          answer: "dame", tag: ["law", "meiwaku"],
          explain: [
            ["なぜ？", "SNSで {人|ひと}を きずつける ことを {書|か}くと、つみに なる ことが あります。"],
            ["ポイント", "ほんとうの ことでも、{書|か}いて いいとは かぎりません。インドネシア{語|ご}で {書|か}いても {同|おな}じです。"],
            ["どうする？", "くやしい ときは、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {話|はな}します。"]
          ],
          explainId: "Menulis hal yang menyakiti orang di media sosial bisa menjadi tindak pidana. Walaupun benar, belum tentu boleh ditulis. Ditulis dalam bahasa Indonesia pun sama. Jika kesal, ceritakan kepada staf perusahaan, kumiai, atau IJFA.",
          teacherNote: "侮辱罪（刑法231条：1年以下の拘禁刑・30万円以下の罰金など）、名誉毀損罪（230条：3年以下の拘禁刑または50万円以下の罰金）。真実でも常に適法ではない（公共性などの例外判断がある）。"
        },
        {
          id: "sns-n06", icon: "🎬📥",
          text: "むだんで コピーされた サイトから、えいがや まんがを ダウンロードして ほぞんします。",
          textId: "Mengunduh dan menyimpan film atau manga dari situs yang menyalin tanpa izin (bajakan).",
          answer: "dame", tag: "law",
          explain: [
            ["なぜ？", "むだんの コピーだと {知|し}って ほぞんすると、いはんに なる ことが あります。"],
            ["もし…", "へんな アプリや ウイルスが {入|はい}る ことも あります。"],
            ["どうする？", "えいがや まんがは、せいきの サービスで {見|み}ます。"]
          ],
          explainId: "Menyimpan film atau manga yang Anda tahu bajakan bisa melanggar hukum. Aplikasi aneh atau virus juga bisa masuk. Tonton film dan baca manga lewat layanan resmi.",
          teacherNote: "著作権法。有償の音楽・映像を違法と知ってダウンロードすると、要件により2年以下の拘禁刑・200万円以下の罰金など。漫画などは2021年1月から対象が拡大（反復・継続などの要件あり）。「見ただけで必ず犯罪」とは書かない。視聴・保存・アップロードを区別する。"
        },
        {
          id: "sns-n07", icon: "📺✅",
          text: "えいがや {音楽|おんがく}は、せいきの サービスで {見|み}たり {聞|き}いたり します。",
          textId: "Menonton film dan mendengarkan musik lewat layanan resmi.",
          answer: "ok", tag: null,
          explain: [
            ["ポイント", "{無料|むりょう}の せいきの サービスも あります。わからない ときは、{友|とも}だちや {先生|せんせい}に {聞|き}きます。"]
          ],
          explainId: "Ada juga layanan resmi yang gratis. Jika tidak tahu, tanyakan ke teman atau guru.",
          teacherNote: ""
        }
      ]
    },

    // ================= セット3　こんなとき、どうする？（◎○✖） =================
    {
      key: "action",
      title: "こんなとき、どうする？",
      titleId: "Kalau begini, bagaimana?",
      description: "いちばん いい ものを えらびます。",
      summary: {
        lines: [
          "まちがえても、かくしません。はやく {言|い}うと、{被害|ひがい}を {小|ちい}さく できます。",
          "そうだんする ときは、{何|なに}が {来|き}たか、{自分|じぶん}が もう {何|なに}を したか を {話|はな}します。"
        ],
        textId: "Walaupun keliru, jangan disembunyikan. Jika cepat disampaikan, kerugian bisa diperkecil. Saat berkonsultasi, ceritakan apa yang diterima dan apa yang sudah Anda lakukan."
      },
      questions: [
        {
          id: "sns-c01", icon: "📩😱",
          text: "ぎんこうの ふりを した SMSの リンクから、パスワードを {入|い}れて しまいました。",
          textId: "Anda terlanjur memasukkan kata sandi lewat tautan SMS yang berpura-pura dari bank.",
          choices: [
            { text: "すぐ、カードの うらの {番号|ばんごう}に {電話|でんわ}して、カードや こうざを {止|と}めて もらう。", textId: "Segera telepon nomor di balik kartu dan minta kartu atau rekening diblokir.", grade: "best" },
            { text: "すぐ、{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {話|はな}して、いっしょに ぎんこうに れんらくする。", textId: "Segera beri tahu staf perusahaan, kumiai, atau IJFA, lalu hubungi bank bersama-sama.", grade: "best" },
            { text: "SMSに {書|か}いて ある {番号|ばんごう}に {電話|でんわ}する。", textId: "Menelepon nomor yang tertulis di SMS.", grade: "ng", note: "その {番号|ばんごう}も にせものです。" },
            { text: "はずかしいので、だれにも {言|い}わない。", textId: "Karena malu, tidak memberi tahu siapa pun.", grade: "ng", note: "{言|い}わないと、お{金|かね}が なくなる かも しれません。" }
          ],
          explainId: "Segera hubungi bank lewat nomor resmi (di balik kartu), dan beri tahu staf perusahaan, kumiai, atau IJFA. Nomor di SMS juga palsu. Jika tidak bilang karena malu, uang Anda bisa hilang.",
          teacherNote: "お金をとられた場合は、警察（#9110、緊急は110）にも相談する。"
        },
        {
          id: "sns-c02", icon: "📈😟",
          text: "SNSの {投資|とうし}に 1{万円|まんえん} {入|い}れたら、{画面|がめん}の お{金|かね}が ふえました。{出|だ}そうと したら、「てすうりょうを はらえば {出|だ}せる」と {言|い}われました。",
          textId: "Setelah menyetor 10.000 yen ke investasi di media sosial, angka uang di layar bertambah. Saat ingin menarik, Anda diberi tahu, \"Bisa ditarik kalau membayar biaya administrasi.\"",
          choices: [
            { text: "もう お{金|かね}を {入|い}れない。{会社|かいしゃ}・くみあい・IJFAの {人|ひと}に {話|はな}す。", textId: "Tidak menyetor uang lagi, lalu memberi tahu staf perusahaan, kumiai, atau IJFA.", grade: "best" },
            { text: "もう お{金|かね}を {入|い}れない。メッセージや おくった きろくを ほぞんして、けいさつに そうだんする。", textId: "Tidak menyetor uang lagi, menyimpan pesan dan bukti transfer, lalu berkonsultasi dengan polisi.", grade: "best" },
            { text: "てすうりょうを はらって、お{金|かね}を {出|だ}す。", textId: "Membayar biaya administrasi untuk menarik uang.", grade: "ng", note: "はらっても、お{金|かね}は {出|で}て きません。また べつの お{金|かね}を {言|い}われます。" },
            { text: "もうかって いるので、{友|とも}だちも さそう。", textId: "Karena untung, mengajak teman juga.", grade: "ng", note: "{友|とも}だちも {被害|ひがい}に あいます。" }
          ],
          explainId: "Jangan menyetor uang lagi, simpan buktinya, dan berkonsultasilah. Walaupun membayar biaya, uang tidak akan keluar, dan Anda akan diminta uang lagi. Jika mengajak teman, teman juga akan menjadi korban.",
          teacherNote: "SNS型投資詐欺の典型（出金時に税金・保証金・手数料を追加請求）。「返金のための手数料」にも応じない。被害者になったことは犯罪ではない。"
        },
        {
          id: "sns-c03", icon: "🏭📱",
          text: "{仕事|しごと}の しゃしんを SNSに のせて いました。{会社|かいしゃ}の {人|ひと}に「のせては いけません」と {言|い}われました。",
          textId: "Anda sudah mengunggah foto pekerjaan ke media sosial. Orang perusahaan berkata, \"Tidak boleh diunggah.\"",
          choices: [
            { text: "すぐ けして、あやまる。ほかにも のせた しゃしんが あれば、それも {言|い}う。", textId: "Segera hapus dan minta maaf. Jika ada foto lain yang diunggah, sampaikan juga.", grade: "best" },
            { text: "すぐ けす。", textId: "Segera menghapusnya.", grade: "ok", note: "けすのは いいです。あやまる ことばも {言|い}うと、もっと いいです。" },
            { text: "「{友|とも}だちだけに {見|み}せて います」と {言|い}って、けさない。", textId: "Berkata \"Hanya untuk teman\" dan tidak menghapusnya.", grade: "ng", note: "「{友|とも}だちだけ」でも、ほかの {人|ひと}に {見|み}られる ことが あります。" }
          ],
          explainId: "Segera hapus, minta maaf, dan sampaikan jika ada foto lain. Menghapus saja sudah baik, tetapi lebih baik jika juga minta maaf. Unggahan \"khusus teman\" pun bisa dilihat orang lain.",
          teacherNote: ""
        },
        {
          id: "sns-c04", icon: "📩🗣️",
          text: "「ぎんこうです。カードが {止|と}まりました。ここから {入力|にゅうりょく}して ください」と SMSが {来|き}ました。{会社|かいしゃ}の {人|ひと}に {聞|き}きます。{何|なん}と {言|い}いますか。",
          textId: "Datang SMS: \"Dari bank. Kartu Anda diblokir. Silakan input di sini.\" Anda bertanya kepada staf perusahaan. Apa yang Anda katakan?",
          choices: [
            { text: "「すみません、この メッセージを {見|み}て ください。ぎんこうからと {書|か}いて ありますが、ほんものか わかりません。まだ {何|なに}も {入力|にゅうりょく}して いません。」", textId: "\"Sumimasen, kono messeeji o mite kudasai. Ginkou kara to kaite arimasu ga, honmono ka wakarimasen. Mada nani mo nyuuryoku shite imasen.\" (Maaf, tolong lihat pesan ini. Tertulis dari bank, tetapi saya tidak tahu asli atau tidak. Saya belum memasukkan apa-apa.)", grade: "best" },
            { text: "「へんな メッセージが {来|き}ました。」", textId: "\"Hen na messeeji ga kimashita.\" (Ada pesan aneh.)", grade: "ng", note: "どんな メッセージか、もう {入力|にゅうりょく}したか、わかりません。" },
            { text: "リンクを おして、ほんものか たしかめてから {聞|き}く。", textId: "Menekan tautan untuk mengecek asli atau tidak, baru bertanya.", grade: "ng", note: "リンクを おすと、パスワードが とられる ことが あります。" }
          ],
          explain: [
            ["{言|い}い{方|かた}の かたち", "「{見|み}て ください」＋ {何|なに}が {来|き}たか ＋ {自分|じぶん}が もう {何|なに}を したか"]
          ],
          explainId: "Pola: \"Mite kudasai\" + apa yang diterima + apa yang sudah Anda lakukan. \"Hen na messeeji ga kimashita\" tidak menjelaskan isi pesan dan apakah Anda sudah input sesuatu. Jangan menekan tautan untuk mengecek; kata sandi bisa dicuri.",
          teacherNote: "「つたえる」形の問題。会社に言いにくいときは、くみあい・IJFAに同じように話す。"
        },
        {
          id: "sns-c05", icon: "🤳🙋",
          text: "{休|やす}みの {日|ひ}に、{同|おな}じ {寮|りょう}の {友|とも}だちと しゃしんを とりました。SNSに のせたいです。",
          textId: "Pada hari libur, Anda berfoto dengan teman seasrama dan ingin mengunggahnya ke media sosial.",
          choices: [
            { text: "「この しゃしん、SNSに のせても いいですか。」と {聞|き}く。", textId: "Bertanya, \"Kono shashin, SNS ni nosete mo ii desu ka.\" (Bolehkah foto ini saya unggah ke media sosial?)", grade: "best" },
            { text: "「のせるね。」と {言|い}って、すぐ のせる。", textId: "Berkata \"Noseru ne\" (Aku unggah ya) lalu langsung mengunggah.", grade: "ng", note: "{聞|き}いて いません。あいては「いや」と {言|い}えません。" },
            { text: "{何|なに}も {言|い}わないで のせる。", textId: "Mengunggah tanpa berkata apa-apa.", grade: "ng" }
          ],
          explain: [
            ["ポイント", "「いや」と {言|い}われたら、のせません。{寮|りょう}の {場所|ばしょ}が わかる しゃしんも のせません。"]
          ],
          explainId: "Tanyakan dulu: \"Kono shashin, SNS ni nosete mo ii desu ka.\" \"Noseru ne\" bukan bertanya, dan teman jadi sulit menolak. Jika teman bilang tidak mau, jangan diunggah. Jangan unggah foto yang memperlihatkan lokasi asrama.",
          teacherNote: ""
        }
      ]
    }
  ]
};
