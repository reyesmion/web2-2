// Manejo de apertura/cierre del menú y submenús (clic en móvil)
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.menu');
  if (!nav) return;

  const toggle = nav.querySelector('.menu-toggle');
  const mainMenu = nav.querySelector('#main-menu');

  // Abrir/cerrar menú principal (móvil)
  if (toggle) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Submenu toggles (móvil)
  nav.querySelectorAll('.submenu-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const li = btn.closest('li');
      if (!li) return;
      const isOpen = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  // Cerrar todo si hace clic fuera
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      nav.classList.remove('open');
      const menutoggle = nav.querySelector('.menu-toggle');
      if (menutoggle) menutoggle.setAttribute('aria-expanded', 'false');
      nav.querySelectorAll('li.open').forEach(function (li) {
        li.classList.remove('open');
        const btn = li.querySelector('.submenu-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Soporte teclado: cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      const menutoggle = nav.querySelector('.menu-toggle');
      if (menutoggle) menutoggle.setAttribute('aria-expanded', 'false');
      nav.querySelectorAll('li.open').forEach(function (li) {
        li.classList.remove('open');
        const btn = li.querySelector('.submenu-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
});