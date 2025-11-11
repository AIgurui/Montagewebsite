// Basic interactive effects for the landing
(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  // Update year
  const y = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = y;

  // Mobile nav toggle
  const nav = $('.nav');
  const toggle = $('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Animated nav underline for desktop
  const underline = $('.nav-underline');
  const links = $$('.nav-list a');
  function moveUnderline(target) {
    if (!underline || !target) return;
    const r = target.getBoundingClientRect();
    const parent = underline.parentElement.getBoundingClientRect();
    underline.style.width = r.width + 'px';
    underline.style.transform = `translateX(${r.left - parent.left}px)`;
  }
  links.forEach((a) => a.addEventListener('mouseenter', (e) => moveUnderline(e.target)));
  const activeOnLoad = links[0];
  if (activeOnLoad) moveUnderline(activeOnLoad);

  // Scroll spy + reveal on scroll
  const sections = ['hero','about','capabilities','commodities','footprint','contact'];
  const byId = (id) => document.getElementById(id);
  const sectionEls = sections.map(byId).filter(Boolean);

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el) => io.observe(el));

  const spy = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.getAttribute('id');
    const link = links.find(a => a.getAttribute('href') === `#${id}`);
    if (link && window.innerWidth > 780) moveUnderline(link);
  }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, .2, .5, 1] });
  sectionEls.forEach((el) => spy.observe(el));

  // Parallax glow on mouse
  const glow = document.querySelector('.fx-glow');
  if (glow) {
    window.addEventListener('pointermove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
})();

