// =====================================================================
// 日本の文化・ルール  アプリ本体
// 問題の中身は data_*.js、設定は config.js にある。ここは画面の動きだけ。
// =====================================================================
(function () {
  "use strict";

  var CONFIG = window.IJFA_CONFIG || {};
  var STORAGE_KEY = "ijfa_culture_results";
  var ID_PATTERN = /^[A-Z]{3}[0-9]{5}$/;

  // ---------- URLから生徒IDとテーマを読む ----------
  var params = new URLSearchParams(location.search);
  var rawId = (params.get("id") || "").trim().toUpperCase();
  var studentId = ID_PATTERN.test(rawId) ? rawId : "";
  var themeKey = params.get("theme") || "";
  // ?preview=1 … じゅんびちゅうのテーマを、公開の前に先生が確認するためのしるし
  var preview = params.get("preview") === "1";
  var LETTERS = "ABCDEF";

  var app = document.getElementById("app");
  var studentEl = document.getElementById("student");
  studentEl.textContent = studentId ? "ID: " + studentId : "ゲスト / Tamu";

  // ---------- 小さな道具 ----------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // {漢字|かんじ} → <ruby>漢字<rt>かんじ</rt></ruby>
  function rb(s) {
    return esc(s).replace(/\{([^|{}]+)\|([^{}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
  }
  // ふりがなを外した文字（記録用）
  function plain(s) {
    return String(s || "").replace(/\{([^|{}]+)\|([^{}]+)\}/g, "$1");
  }
  function linkWithId(url) {
    if (!studentId) return url;
    return url + (url.indexOf("?") >= 0 ? "&" : "?") + "id=" + encodeURIComponent(studentId);
  }
  function render(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }
  function meaningBlock(text, key) {
    if (!text) return "";
    return '<button type="button" class="meaning-btn" data-meaning="' + key + '" aria-expanded="false">' +
      'いみを見る / Lihat arti</button>' +
      '<div class="meaning" id="meaning-' + key + '" lang="id">' + esc(text) + "</div>";
  }
  // すでにHTMLになっている中身を入れる版
  function meaningBlockHtml(html, key) {
    if (!html) return "";
    return '<button type="button" class="meaning-btn" data-meaning="' + key + '" aria-expanded="false">' +
      'いみを見る / Lihat arti</button>' +
      '<div class="meaning" id="meaning-' + key + '" lang="id">' + html + "</div>";
  }
  function bindMeaning(onOpen) {
    var btns = app.querySelectorAll("[data-meaning]");
    Array.prototype.forEach.call(btns, function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-meaning");
        var box = document.getElementById("meaning-" + key);
        var open = !box.classList.contains("open");
        box.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.innerHTML = open ? "いみを かくす / Tutup" : "いみを見る / Lihat arti";
        if (open && onOpen) onOpen(key);
      });
    });
  }

  // ---------- 記録（スマホの中に保存＋将来GASへ送る） ----------
  function loadResults() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch (e) { return []; }
  }
  function saveResult(rec) {
    try {
      var list = loadResults();
      list.push(rec);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(-300)));
    } catch (e) { /* 保存できなくても続ける */ }
    sendResult(rec);
  }
  function sendResult(rec) {
    if (!CONFIG.GAS_URL) return; // まだ送り先がない
    try {
      fetch(CONFIG.GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(rec)
      }).catch(function () {});
    } catch (e) {}
  }
  function bestScore(setKey) {
    var best = null;
    loadResults().forEach(function (r) {
      if (r.theme === themeKey && r.set === setKey && r.mode === "all" && r.studentId === studentId) {
        var p = r.total ? r.score / r.total : 0;
        if (best === null || p > best.p) best = { p: p, score: r.score, total: r.total };
      }
    });
    return best;
  }

  // ---------- テーマのデータを読みこむ ----------
  function loadTheme(key, done) {
    var themes = CONFIG.THEMES || [];
    var entry = null;
    for (var i = 0; i < themes.length; i++) if (themes[i].key === key) entry = themes[i];
    if (!entry || !entry.file || (entry.soon && !preview)) { showThemes(); return; }
    // もう読みこんであるテーマは、そのまま使う
    if (window.IJFA_THEMES && window.IJFA_THEMES[key]) { done(window.IJFA_THEMES[key]); return; }
    var s = document.createElement("script");
    s.src = entry.file;
    s.onload = function () {
      var data = window.IJFA_THEMES && window.IJFA_THEMES[key];
      if (!data) { showError("データを読みこめません / Data gagal dimuat"); return; }
      done(data);
    };
    s.onerror = function () { showError("データを読みこめません / Data gagal dimuat"); };
    document.body.appendChild(s);
  }
  function showError(msg) {
    render('<div class="card"><p>' + esc(msg) + '</p></div>');
  }

  // ---------- 画面0：テーマをえらぶ ----------
  function showThemes() {
    document.title = "日本の文化・ルール | IJFA";
    var html = '<div class="card">' +
      '<h1>' + rb("テーマを えらぶ") + '</h1>' +
      '<p class="sub-id" lang="id">Pilih tema</p>' +
      '</div>';
    (CONFIG.THEMES || []).forEach(function (t, i) {
      var ready = t.file && (!t.soon || preview);
      html += '<button type="button" class="card theme-card' + (ready ? '' : ' soon') + '"' +
        (ready ? ' data-theme="' + i + '"' : ' disabled') + '>' +
        '<span class="theme-icon" aria-hidden="true">' + esc(t.icon || "") + '</span>' +
        '<span class="theme-text"><span class="title">' + rb(t.title) + '</span>' +
        '<span class="theme-id" lang="id">' + esc(t.titleId || "") + '</span></span>' +
        (ready ? (t.soon ? '<span class="theme-soon">かくにん{中|ちゅう}<br><small lang="id">Pratinjau</small></span>'.replace("{中|ちゅう}", "<ruby>中<rt>ちゅう</rt></ruby>") : '<span class="theme-go" aria-hidden="true">›</span>')
               : '<span class="theme-soon">じゅんびちゅう<br><small lang="id">Segera hadir</small></span>') +
        '</button>';
    });
    html += '<div class="footer-links"><a href="' + esc(linkWithId(CONFIG.PORTAL_URL)) + '">← ポータルへ / Ke portal</a></div>';
    render(html);
    Array.prototype.forEach.call(app.querySelectorAll("[data-theme]"), function (btn) {
      btn.addEventListener("click", function () {
        openTheme(CONFIG.THEMES[Number(btn.getAttribute("data-theme"))].key);
      });
    });
  }

  function openTheme(key) {
    themeKey = key;
    loadTheme(key, function (data) {
      theme = data;
      document.title = plain(theme.title) + " | 日本の文化・ルール | IJFA";
      showTop();
    });
  }

  // ---------- 画面1：テーマのトップ（セットをえらぶ） ----------
  var theme = null;
  var quiz = null; // 今のクイズの状態

  function showTop() {
    var html = '<div class="card">' +
      '<h1>' + rb(theme.title) + '</h1>' +
      '<p class="sub-id" lang="id">' + esc(theme.titleId) + '</p>' +
      '<p>' + rb(theme.intro) + '</p>' +
      meaningBlock(theme.introId, "intro") +
      '</div>';

    theme.sets.forEach(function (set, i) {
      var best = bestScore(set.key);
      html += '<button type="button" class="card set-card" data-set="' + i + '">' +
        '<div class="title">' + rb(set.title) + '<small lang="id">' + esc(set.titleId) + '</small></div>' +
        '<div>' + rb(set.description || "") + '</div>' +
        '<div class="meta"><span>' + set.questions.length + 'もん / soal</span>' +
        (best ? '<span class="best">さいこう ' + best.score + ' / ' + best.total + '</span>' : '<span>まだ / Belum</span>') +
        '</div></button>';
    });

    html += '<button type="button" class="btn ghost" id="themes">← テーマを えらぶ / Pilih tema</button>';
    render(html);
    bindMeaning();
    document.getElementById("themes").addEventListener("click", showThemes);
    Array.prototype.forEach.call(app.querySelectorAll("[data-set]"), function (btn) {
      btn.addEventListener("click", function () {
        var set = theme.sets[Number(btn.getAttribute("data-set"))];
        startQuiz(set, set.questions.slice(), "all");
      });
    });
  }

  // ---------- 画面2：問題 ----------
  function startQuiz(set, questions, mode) {
    quiz = { set: set, questions: questions, mode: mode, index: 0, details: [] };
    // セットに「きじゅん」の画面があれば、最初に見せる
    if (set.intro && mode === "all") showIntro();
    else showQuestion();
  }

  // ---------- 画面1.5：セットの最初の「きじゅん」 ----------
  function linesHtml(lines) {
    return (lines || []).map(function (l) {
      if (typeof l === "string") return '<p class="intro-p">' + rb(l) + '</p>';
      if (l[0] === "h") return '<p class="intro-h">' + rb(l[1]) + '</p>';
      if (l[0] === "li") return '<p class="intro-li">' + rb(l[1]) + '</p>';
      return '<p class="intro-p">' + rb(l[1]) + '</p>';
    }).join("");
  }
  function showIntro() {
    var it = quiz.set.intro;
    var html = '<div class="card intro">' +
      '<h1 style="font-size:22px">' + rb(it.title || "") + '</h1>' +
      linesHtml(it.lines) +
      meaningBlock(it.textId, "intro") +
      '</div>' +
      '<button type="button" class="btn" id="start">はじめる<small>Mulai</small></button>' +
      '<button type="button" class="btn ghost" id="back">もどる / Kembali</button>';
    render(html);
    bindMeaning();
    document.getElementById("start").addEventListener("click", showQuestion);
    document.getElementById("back").addEventListener("click", showTop);
  }

  // 答えのボタン（セットの形で変わる）
  function choicesHtml(q) {
    var set = quiz.set;
    if (q.choices) {   // ◎○✖：文を えらぶ
      return '<div class="gchoices">' + q.choices.map(function (c, i) {
        return '<button type="button" class="gchoice" data-choice="' + i + '">' +
          '<span class="gletter">' + LETTERS.charAt(i) + '</span><span class="gtext">' + rb(c.text) + '</span></button>';
      }).join("") + '</div>';
    }
    if (set.options) { // 2つ・3つから えらぶ
      return '<div class="opts opts-' + set.options.length + '">' + set.options.map(function (o) {
        return '<button type="button" class="opt opt-' + esc(o.color || "blue") + '" data-choice="' + esc(o.key) + '">' +
          '<span>' + (o.icon ? esc(o.icon) + " " : "") + rb(o.label) + '</span>' +
          '<small lang="id">' + esc(o.labelId || "") + '</small></button>';
      }).join("") + '</div>';
    }
    return '<div class="choices">' +
      '<button type="button" class="choice ok" data-choice="ok">⭕ OK<small>Boleh</small></button>' +
      '<button type="button" class="choice dame" data-choice="dame">✖ ダメ<small>Tidak boleh</small></button>' +
      '</div>';
  }
  // 問題の「いみ」（◎○✖の問題は、えらぶ文のインドネシア語も出す）
  function questionMeaning(q) {
    if (!q.choices) return meaningBlock(q.textId, "q");
    var html = esc(q.textId || "") + '<ul class="meaning-choices">' + q.choices.map(function (c, i) {
      return '<li><b>' + LETTERS.charAt(i) + '.</b> ' + esc(c.textId || "") + '</li>';
    }).join("") + '</ul>';
    return meaningBlockHtml(html, "q");
  }
  function tagsHtml(q) {
    var html = "";
    [].concat(q.tag || []).forEach(function (t) {
      if (t === "law") html += '<span class="tag law">ほうりつ いはん / Melanggar hukum</span>';
      if (t === "rule") html += '<span class="tag rule">ルールいはん / Melanggar aturan</span>';
      if (t === "danger") html += '<span class="tag danger">あぶない / Berbahaya</span>';
      if (t === "meiwaku") html += '<span class="tag meiwaku">めいわく / Mengganggu</span>';
    });
    if (q.heavy) html += '<span class="tag heavy">とても おもい / Sangat berat</span>';
    return html;
  }

  function visualHtml(q, isExplain) {
    var img = isExplain ? q.explainImage : q.image;
    if (img) return '<img src="' + esc(img) + '" alt="' + esc(q.imageAlt || "") + '">';
    if (!isExplain && q.icon) return '<span class="icon" aria-hidden="true">' + esc(q.icon) + '</span>';
    return "";
  }

  function showQuestion() {
    var q = quiz.questions[quiz.index];
    var n = quiz.index + 1, total = quiz.questions.length;
    quiz.meaningOpened = false;

    var html = '<div class="progress"><span>' + n + ' / ' + total + '</span>' +
      '<div class="bar"><span style="width:' + Math.round((quiz.index / total) * 100) + '%"></span></div></div>' +
      '<div class="card">' +
      '<div class="visual">' + visualHtml(q, false) + '</div>' +
      '<div class="q-text">' + rb(q.text) + '</div>' +
      questionMeaning(q) +
      '</div>' +
      choicesHtml(q);
    render(html);
    bindMeaning(function () { quiz.meaningOpened = true; });

    Array.prototype.forEach.call(app.querySelectorAll("[data-choice]"), function (btn) {
      btn.addEventListener("click", function () { answer(btn.getAttribute("data-choice")); });
    });
  }

  // ---------- 画面3：答えと解説 ----------
  function answer(choice) {
    var q = quiz.questions[quiz.index];
    var set = quiz.set;
    var graded = !!q.choices;
    var pickedIndex = graded ? Number(choice) : -1;
    var grade = graded ? q.choices[pickedIndex].grade : null;      // "best"（◎）"ok"（○）"ng"（✖）
    var correct = graded ? grade !== "ng" : choice === q.answer;
    var detail = {
      qid: q.id,
      question: plain(q.text),
      choice: graded ? LETTERS.charAt(pickedIndex) : choice,
      correct: correct,
      meaningOpened: !!quiz.meaningOpened
    };
    if (graded) detail.grade = grade;
    quiz.details.push(detail);

    // 上の大きな表示
    var big = correct ? "せいかい！" : "ざんねん…", small = correct ? "Benar!" : "Salah";
    if (graded && grade === "best") { big = "◎ いちばん いい！"; small = "Paling baik!"; }
    if (graded && grade === "ok") { big = "○ これも OK"; small = "Ini juga boleh"; }

    // 答えの行
    var answerHtml = "";
    if (graded) {
      var MARK = { best: "◎", ok: "○", ng: "✖" };
      answerHtml = '<ul class="glist">' + q.choices.map(function (c, i) {
        return '<li class="g-' + c.grade + (i === pickedIndex ? " picked" : "") + '">' +
          '<span class="gmark">' + MARK[c.grade] + '</span>' +
          '<span class="gbody"><span class="gline">' + rb(c.text) + '</span>' +
          (c.note ? '<span class="gnote">' + rb(c.note) + '</span>' : "") +
          (i === pickedIndex ? '<span class="gyou">あなたの こたえ / Jawaban Anda</span>' : "") +
          '</span></li>';
      }).join("") + '</ul>';
    } else if (set.options) {
      var right = null;
      set.options.forEach(function (o) { if (o.key === q.answer) right = o; });
      answerHtml = '<div class="answer-line">こたえ：' + (right && right.icon ? esc(right.icon) + " " : "") +
        rb(right ? right.label : "") + '</div>';
    } else {
      answerHtml = '<div class="answer-line">こたえ：' + (q.answer === "ok" ? "⭕ OK" : "✖ ダメ") + tagsHtml(q) + '</div>';
    }

    var items = (q.explain || []).map(function (e) {
      return '<li><span class="label">' + rb(e[0]) + '</span>' + rb(e[1]) + '</li>';
    }).join("");

    var last = quiz.index === quiz.questions.length - 1;
    var html = '<div class="result-head ' + (correct ? (grade === "ok" ? "okay" : "correct") : "wrong") + '">' +
      '<div class="big">' + big + '</div>' +
      '<div class="small" lang="id">' + small + '</div></div>' +
      '<div class="card">' +
      (graded ? '<div class="q-text" style="font-size:17px;font-weight:400;margin-bottom:6px">' + rb(q.text) + '</div>' + answerHtml
              : answerHtml + '<div class="q-text" style="font-size:17px;font-weight:400;margin-bottom:6px">' + rb(q.text) + '</div>') +
      (items ? '<ul class="explain">' + items + '</ul>' : "") +
      (q.explainImage ? '<div class="explain-image">' + visualHtml(q, true) + '</div>' : "") +
      meaningBlock(q.explainId, "ex") +
      '</div>' +
      '<button type="button" class="btn" id="next">' +
      (last ? "けっかを見る<small>Lihat hasil</small>" : "つぎへ<small>Lanjut</small>") + '</button>';
    render(html);
    bindMeaning();
    document.getElementById("next").addEventListener("click", function () {
      if (last) finish();
      else { quiz.index++; showQuestion(); }
    });
  }

  // ---------- 画面4：結果 ----------
  function finish() {
    var score = quiz.details.filter(function (d) { return d.correct; }).length;
    var total = quiz.details.length;

    saveResult({
      timestamp: new Date().toISOString(),
      studentId: studentId,
      page: "culture-rules",
      theme: theme.key,
      themeName: plain(theme.title),
      set: quiz.set.key,
      setName: plain(quiz.set.title),
      mode: quiz.mode, // "all"＝ぜんぶ / "retry"＝まちがえた問題だけ
      score: score,
      total: total,
      details: quiz.details
    });

    var wrongIds = quiz.details.filter(function (d) { return !d.correct; }).map(function (d) { return d.qid; });
    var wrongQs = quiz.questions.filter(function (q) { return wrongIds.indexOf(q.id) >= 0; });

    var msg, msgId;
    if (score === total) { msg = "ぜんもん せいかい！すばらしい！"; msgId = "Semua benar! Hebat!"; }
    else if (score / total >= 0.8) { msg = "よく できました！"; msgId = "Bagus sekali!"; }
    else { msg = "もう一度 チャレンジしよう！"; msgId = "Ayo coba lagi!"; }

    var html = '<div class="card score">' +
      '<div class="muted">' + rb(theme.title) + '・' + rb(quiz.set.title) + (quiz.mode === "retry" ? "（まちがえた もんだい）" : "") + '</div>' +
      '<div class="num">' + score + '<small> / ' + total + '</small></div>' +
      '<div style="font-size:20px;font-weight:700">' + msg + '</div>' +
      '<div class="muted" lang="id">' + msgId + '</div>' +
      '</div>';

    // セットの「まとめ」
    if (quiz.set.summary && quiz.mode === "all") {
      html += '<div class="card intro"><div class="intro-h">まとめ / Rangkuman</div>' +
        quiz.set.summary.lines.map(function (l) { return '<p class="intro-li">' + rb(l) + '</p>'; }).join("") +
        meaningBlock(quiz.set.summary.textId, "sum") + '</div>';
    }

    if (wrongQs.length) {
      html += '<div class="card"><div style="font-weight:700">まちがえた もんだい / Soal yang salah</div><ul class="wrong-list">' +
        wrongQs.map(function (q) { return '<li>' + rb(q.text) + '</li>'; }).join("") +
        '</ul></div>' +
        '<button type="button" class="btn" id="retry">まちがえた もんだいを もう一度<small>Ulangi soal yang salah</small></button>';
    }
    html += '<button type="button" class="btn secondary" id="again">さいしょから<small>Ulangi dari awal</small></button>' +
      '<button type="button" class="btn ghost" id="top">もどる / Kembali</button>';
    render(html);
    bindMeaning();

    if (wrongQs.length) {
      document.getElementById("retry").addEventListener("click", function () { startQuiz(quiz.set, wrongQs, "retry"); });
    }
    document.getElementById("again").addEventListener("click", function () { startQuiz(quiz.set, quiz.set.questions.slice(), "all"); });
    document.getElementById("top").addEventListener("click", showTop);
  }

  // ---------- スタート ----------
  // ?theme= があればそのテーマを開く。なければテーマをえらぶ画面。
  if (themeKey) openTheme(themeKey);
  else showThemes();
})();
