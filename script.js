/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STRENGTH INTO SPEED — experimental design shell
   Placeholder art swaps in automatically: each figure's
   <img> uses inline onerror to reveal a labeled placeholder.
   Drop the real drawings into images/ and they replace it.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* floating cells (Frutiger-Aero family look, blueprint blues) */
(function cells() {
  const field = document.createElement('div');
  field.id = 'cell-field';
  Object.assign(field.style, { position: 'fixed', inset: '0', zIndex: '-1', pointerEvents: 'none', overflow: 'hidden' });
  document.body.prepend(field);
  const C = [
    { s: 360, x:  6, y: 14, d: 26, del:  0, c: '47,111,208' },
    { s: 240, x: 78, y: 52, d: 22, del: -5, c: '43,179,199' },
    { s: 300, x: 42, y: 80, d: 30, del: -8, c: '120,150,210' },
    { s: 170, x: 86, y: 10, d: 18, del: -2, c: '47,111,208' },
    { s: 130, x: 18, y: 86, d: 16, del: -1, c: '43,179,199' },
  ];
  C.forEach(c => {
    const el = document.createElement('div');
    el.style.cssText =
      `position:absolute;left:${c.x}%;top:${c.y}%;width:${c.s}px;height:${c.s}px;border-radius:50%;` +
      `background:radial-gradient(ellipse at 32% 28%, rgba(255,255,255,0.5) 0%, rgba(${c.c},0.10) 45%, rgba(${c.c},0.02) 100%);` +
      `border:1px solid rgba(255,255,255,0.55);animation:bp-drift ${c.d}s ${c.del}s ease-in-out infinite alternate;`;
    field.appendChild(el);
  });
  const st = document.createElement('style');
  st.textContent = '@keyframes bp-drift{from{transform:translate(0,0) scale(1)}to{transform:translate(16px,-24px) scale(1.04)}}';
  document.head.appendChild(st);
})();

/* nav active state */
const navLinks = document.querySelectorAll('#main-nav a');
const sections = document.querySelectorAll('main section[id]');
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`#main-nav a[href="#${en.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => obs.observe(s));
