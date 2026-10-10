(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', 'G-1GNTH07207');

  // Load Google Analytics after the page has finished loading, so it does not
  // slow down the first view. It loads on the visitor's first interaction,
  // or 4 seconds after the page loads, whichever comes first.
  var loaded = false;
  var events = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove'];

  function loadGtag() {
    if (loaded) return;
    loaded = true;
    events.forEach(function (e) {
      window.removeEventListener(e, loadGtag, { passive: true });
    });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1GNTH07207';
    document.head.appendChild(script);
  }

  events.forEach(function (e) {
    window.addEventListener(e, loadGtag, { passive: true, once: true });
  });

  function startTimer() {
    setTimeout(loadGtag, 4000);
  }
  if (document.readyState === 'complete') {
    startTimer();
  } else {
    window.addEventListener('load', startTimer);
  }
})();
