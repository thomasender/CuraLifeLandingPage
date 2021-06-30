(function () {
  var d = document.getElementById("js_language").value,
    i = document.getElementById("js_style").value,
    s = document.getElementById("js_date").value,
    f = document.getElementById("js_uid").value,
    r = document.getElementById("js_tz").value,
    b,
    c,
    q = window.addEventListener ? "addEventListener" : "attachEvent",
    o = window[q],
    l = q == "attachEvent" ? "onmessage" : "message",
    k,
    e,
    n,
    m,
    j,
    g,
    a;
  k = {
    en: ["Days", "Hours", "Minutes", "Seconds"],
    ru: ["Дней", "Часов", "Минут", "Секунд"],
    cs: ["Dní", "Hodin", "Minut", "Sekund"],
    fr: ["Jours", "Heures", "Minutes", "Secondes"],
    de: ["Tage", "Stunden", "Minuten", "Sekunden"],
    it: ["Giorni", "Ore", "Minuti", "Secondi"],
    ja: ["日", "時", "分", "秒"],
    nl: ["Dagen", "Uren", "Minuten", "Seconden"],
    da: ["Dage", "Timer", "Minutter", "Sekunder"],
    ko: ["일", "시", "분", "초"],
    pl: ["Dni", "Godzin", "Minut", "Sekund"],
    pt: ["Dias", "Horas", "Minutos", "Segundos"],
    es: ["Días", "Horas", "Minutos", "Segundos"],
    sv: ["Dagar", "Timmar", "Minuter", "Sekunder"],
    tr: ["Gün", "Saat", "Dakika", "Saniye"],
    hr: ["Dani", "Sati", "Minute", "Sekundi"],
    uk: ["Днів", "Годин", "Хвилин", "Секунд"],
    ro: ["Zile", "Ore", "Minute", "Secunde"],
    az: ["Günlərdir", "Saat", "Dəqiqə", "Saniyə"],
    af: ["Dae", "Ure", "Minute", "Sekondes"],
    sk: ["Dni", "Hodiny", "Minúty", "Sekundy"],
    bn: ["দিন", "ঘন্টার", "মিনিট", "সেকেন্ড"],
    bg: ["Дни", "Часа", "Минути", "Секунди"],
    be: ["Дзён", "Гадзін", "Хвілін", "Секунд"],
    et: ["Päeva", "Tundi", "Minutit", "Sekundit"],
    ka: ["დღეები", "საათი", "წუთი", "წამი"],
    el: ["Μέρες", "Ωρες", "Λεπτά", "Δευτερόλεπτα"],
    hi: ["दिन", "घंटे", "मिनट", "सेकंड"],
    hu: ["Napok", "Órák", "Percek", "Másodperc"],
    is: ["Dagar", "Klukkustundir", "Fundargerðir", "Sekúndur"],
    ga: ["Laethanta", "Uaireanta", "Miontuairiscí", "Soicind"],
    lv: ["Dienas", "Stundas", "Protokols", "Sekundes"],
    lt: ["Dienos", "Valandos", "Minutės", "Sekundės"],
    sr: ["Дани", "Сати", "Минута", "Секунде"],
    sl: ["Dnevi", "Ure", "Minute", "Sekunde"],
    uz: ["Kunlar", "Soat", "Daqiqalar", "Soniya"],
    vi: ["Ngày", "Giờ", "Phút", "Giây"],
  };
  e = k[d][0];
  n = k[d][1];
  m = k[d][2];
  j = k[d][3];
  o(
    l,
    function (v) {
      g = document.getElementById("countdown");
      if (typeof g != "undefined" && g != null) {
        if (v.data === "button_over") {
          g.classList.add("hover");
        }
        if (v.data === "button_out") {
          g.classList.remove("hover");
        }
      }
      if (v.data === "js_countdown_size") {
        clearTimeout(b);
        h();
      }
    },
    false
  );
  function u() {
    var y = s,
      A,
      z,
      D = document.getElementById("flipdown"),
      C,
      x,
      w,
      E,
      B = new MutationObserver(function () {
        C = document.getElementsByClassName("rotor-group-heading")[0];
        x = document.getElementsByClassName("rotor-group-heading")[1];
        w = document.getElementsByClassName("rotor-group-heading")[2];
        E = document.getElementsByClassName("rotor-group-heading")[3];
        C.setAttribute("data-before", e);
        x.setAttribute("data-before", n);
        w.setAttribute("data-before", m);
        E.setAttribute("data-before", j);
        if (C) {
          C.className += C.className ? " days-before" : "rotor-group-heading";
          x.className += x.className ? " hours-before" : "rotor-group-heading";
          w.className += w.className
            ? " minutes-before"
            : "rotor-group-heading";
          E.className += E.className
            ? " seconds-before"
            : "rotor-group-heading";
          v();
        }
      });
    B.observe(D, { attributes: false, childList: true, subtree: true });
    function v() {
      B.disconnect();
    }
    if (i === "columns.css") {
      A = document.body;
      A.classList.toggle("light-theme");
      z = new FlipDown(y, { theme: "light" }).start();
    } else {
      z = new FlipDown(y).start();
    }
    t("countdown");
  }
  a = document.getElementById("js_not_found");
  if (typeof a != "undefined" && a != null) {
    t("not_found");
  } else {
    u();
  }
  function t(v) {
    window.parent.postMessage(
      { event_id: "js_countdown_show", uid: f, page: v },
      "*"
    );
  }
  function h() {
    var v, w;
    document.getElementById("js_countdown").style.visibility = "visible";
    v = document.getElementById("js_countdown").offsetHeight;
    w = document.getElementById("js_countdown").offsetWidth;
    window.parent.postMessage(
      {
        event_id: "time_countdown_size",
        width: w,
        height: v,
        disable: "0",
        uid: f,
      },
      "*"
    );
  }
  function p() {
    h();
  }
  window.onresize = function () {
    clearTimeout(c);
    c = setTimeout(p, 100);
  };
})();
