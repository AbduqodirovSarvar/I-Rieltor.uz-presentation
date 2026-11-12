// The phone menu button, and the demo link on a developer machine. The page works without this script.
(function () {
  // Opened from localhost (docker compose on a developer machine): the demo button leads to the local site.
  var demo = document.getElementById('d-site');
  var host = window.location.hostname;
  if (demo && (host === 'localhost' || host === '127.0.0.1')) demo.href = 'http://localhost:8081/';

  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (!burger || !nav) return;

  function close() {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
