
const layerContent = {
  direction: {
    number: '01',
    label: 'STAGE 01 · THE STARTING POINT',
    title: 'Strategy starts with human direction.',
    copy: 'Business objectives, market realities, and commercial priorities establish what the GTM system needs to accomplish. Human judgment sets the direction; AI helps accelerate the work that follows.',
    example: 'Clear priorities, defined objectives, and a focused direction for GTM execution.'
  },
  foundation: {
    number: '02',
    label: 'STAGE 02 · THE STRATEGIC FOUNDATION',
    title: 'Give AI the context to do useful work.',
    copy: 'Positioning, messaging, customer insights, brand voice, and strategic frameworks provide a shared foundation. This context helps keep downstream work aligned with the strategy instead of generating disconnected outputs.',
    example: 'Consistent messaging, grounded recommendations, and deliverables aligned to the same strategic direction.'
  },
  execution: {
    number: '03',
    label: 'STAGE 03 · CONNECTED WORKFLOWS',
    title: 'Turn context into repeatable execution.',
    copy: 'AI-enabled workflows apply that foundation across GTM planning, content development, sales enablement, and operations. Reusable processes reduce repetitive work and help teams move from strategy to execution faster.',
    example: 'Repeatable workflows that accelerate deliverables while maintaining consistency across teams and channels.'
  },
  activation: {
    number: '04',
    label: 'STAGE 04 · COMMERCIAL ACTIVATION',
    title: 'Accelerate GTM to drive revenue growth.',
    copy: 'The outputs become practical tools and activities that support go-to-market execution. Human review keeps the work accurate and useful, while performance and market feedback help improve the next cycle.',
    example: 'Faster GTM execution, better-equipped teams, and a process designed to support revenue growth.'
  }
};

document.querySelectorAll('.system-node').forEach((node) => {
  node.addEventListener('click', () => {
    const content = layerContent[node.dataset.layer];
    if (!content) return;

    document.querySelectorAll('.system-node').forEach((item) => {
      const active = item === node;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    document.querySelector('.detail-number').textContent = content.number;
    document.querySelector('.detail-label').textContent = content.label;
    document.querySelector('#detail-title').textContent = content.title;
    document.querySelector('#detail-copy').textContent = content.copy;
    document.querySelector('#detail-example').textContent = content.example;
  });
});

const nav = document.querySelector('.site-header nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
