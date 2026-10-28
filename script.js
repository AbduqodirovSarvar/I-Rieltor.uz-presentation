// Menu, day/night mode and the small live-auction animation in the hero card. No libraries.
(function () {
  var root = document.documentElement;
  var KEY = 'irieltor.presentation.theme';

  function store(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* storage may be blocked */ }
  }
  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function isDark() {
    var set = root.getAttribute('data-theme');
    return set ? set === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  var themeBtn = document.getElementById('theme');
  function paint() { themeBtn.textContent = isDark() ? '☾' : '☀'; }
  var saved = read();
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  paint();
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store(next);
    paint();
  });

  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // A pretend live bid: the price grows and the timer counts down. A picture of the idea, not real data.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bidEl = document.getElementById('bid');
  var timerEl = document.getElementById('timer');
  var bid = 420000000;
  var left = 4 * 60 + 32;
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function tick() {
    left = left > 0 ? left - 1 : 4 * 60 + 32;
    var m = Math.floor(left / 60), s = left % 60;
    timerEl.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function raise() {
    bid += 5000000;
    bidEl.textContent = fmt(bid);
    bidEl.classList.remove('bump');
    void bidEl.offsetWidth;
    bidEl.classList.add('bump');
  }
  bidEl.textContent = fmt(bid);
  if (!reduce) {
    setInterval(tick, 1000);
    setInterval(raise, 4000);
  }
})();
