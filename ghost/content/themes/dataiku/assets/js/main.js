(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.getElementById('dk-nav');
  if (!toggle || !nav) {
    return;
  }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('.material-symbols-sharp').textContent = open ? 'close' : 'menu';
  });
})();
