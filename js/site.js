'use strict';
// Small, dependency-free progressive enhancements; no tracking or storage.
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-nav');
  const header = document.querySelector('.site-header');
  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.inert = !open;
    if (open) mobileMenu.removeAttribute('inert'); else mobileMenu.setAttribute('inert', '');
  };
  if (menuButton && mobileMenu) {
    setMenu(false);
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) setMenu(false);
    });
    window.addEventListener('resize', () => { if (innerWidth > 820) setMenu(false); });
  }

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy');
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(text);
        showToast('Email address copied');
      } catch {
        // Clipboard may be unavailable for local file previews or older browsers.
        const field = document.createElement('textarea');
        field.value = text;
        field.style.position = 'fixed'; field.style.opacity = '0';
        document.body.appendChild(field); field.select();
        const ok = document.execCommand('copy');
        field.remove();
        showToast(ok ? 'Email address copied' : 'Copy this email: ' + text);
      }
    });
  });
  if ('IntersectionObserver' in window) {
    const anchors = document.querySelectorAll('.desktop-nav a[href^="#"]');
    const targets = [...anchors].map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if (targets.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          anchors.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
        });
      }, {rootMargin:'-25% 0px -64% 0px', threshold:0});
      targets.forEach((section) => observer.observe(section));
    }
  }
})();
