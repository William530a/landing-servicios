// abre/cierra nav en móvil y cierra al clicar fuera
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // cerrar al hacer click fuera
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // cerrar al cambiar tamaño (para evitar estados inconsistentes)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});