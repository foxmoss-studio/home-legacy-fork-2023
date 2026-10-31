(function () {
  var framePending = false;
  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var scriptElement = document.currentScript;

  function resetArtworkPosition() {
    document.documentElement.style.setProperty('--artwork-y', '50%');
  }

  function updateArtworkPosition() {
    framePending = false;
    if (motionQuery.matches) {
      resetArtworkPosition();
      return;
    }

    var scroller = document.scrollingElement || document.documentElement;
    var maximumScroll = Math.max(scroller.scrollHeight - scroller.clientHeight, 0);
    var progress = maximumScroll > 0
      ? Math.min(Math.max(scroller.scrollTop / maximumScroll, 0), 1)
      : 0;

    document.documentElement.style.setProperty('--artwork-y', (progress * 100).toFixed(4) + '%');
  }

  function scheduleArtworkPosition() {
    if (motionQuery.matches || framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateArtworkPosition);
  }

  function handleMotionChange() {
    if (motionQuery.matches) resetArtworkPosition();
    else scheduleArtworkPosition();
  }

  function applyReleaseLabels(manifest) {
    document.querySelectorAll('[data-download-label]').forEach(function (node) {
      var parts = (node.getAttribute('data-download-label') || '').split(':');
      var entry = manifest && manifest[parts[0]] && manifest[parts[0]][parts[1]];
      if (entry && entry.label) node.textContent = entry.label;
    });
  }

  function refreshReleaseLabels() {
    if (!document.querySelector('[data-download-label]') || !scriptElement || !scriptElement.src) return;
    var manifestUrl = new URL('./downloads/apps.json', scriptElement.src);
    fetch(manifestUrl.href, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('release manifest unavailable');
        return response.json();
      })
      .then(applyReleaseLabels)
      .catch(function () {
        // The HTML contains a truthful fallback label when the manifest is unavailable.
      });
  }

  window.addEventListener('scroll', scheduleArtworkPosition, { passive: true });
  window.addEventListener('resize', scheduleArtworkPosition);
  document.addEventListener('toggle', scheduleArtworkPosition, true);

  if (motionQuery.addEventListener) motionQuery.addEventListener('change', handleMotionChange);
  else if (motionQuery.addListener) motionQuery.addListener(handleMotionChange);

  if ('ResizeObserver' in window) {
    var resizeObserver = new ResizeObserver(scheduleArtworkPosition);
    resizeObserver.observe(document.body);
  }

  refreshReleaseLabels();
  handleMotionChange();
})();
