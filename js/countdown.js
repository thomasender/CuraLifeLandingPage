(function (e, i, h, f, c, b, d) {
  (d = new Date()),
    (h += "?v=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours()),
    (c = e.createElement(i)),
    (b = e.getElementsByTagName(i)[0]);
  if (e.getElementById(f)) {
    return;
  }
  c.src = h;
  c.id = f;
  b.parentNode.insertBefore(c, b);
})(
  document,
  "script",
  "https://cdn.logwork.com/widget/countdown_api.js",
  "countdown-timer"
);
