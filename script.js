
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
    title: 'Strategic context creates consistency.',
    copy: 'A defined foundation keeps the work anchored to the right positioning, voice, priorities, and standards. AI can accelerate execution because the strategic direction is already clear.',
    example: 'Consistent positioning, approved messaging, and a reliable source of strategic knowledge.'
  },
  execution: {
    number: '03',
    label: 'STAGE 03 · THE WORKFLOW ENGINE',
    title: 'Connected workflows turn strategy into useful work.',
    copy: 'Repeatable workflows connect different GTM needs, from seller readiness and content development to research and operational follow-through. Each workflow builds on the same strategic foundation rather than operating as a disconnected task.',
    example: 'Repeatable processes for sales enablement, content, research, and GTM operations.'
  },
  activation: {
    number: '04',
    label: 'STAGE 04 · COMMERCIAL ACTIVATION',
    title: 'The output has to work in the real world.',
    copy: 'The measure is not how much content gets generated. It is whether teams can use the work, tell a consistent story, respond to buyers, and move opportunities forward.',
    example: 'Usable sales tools, consistent market-facing content, and execution tied to business priorities.'
  }
};



document.querySelectorAll('.system-node').forEach((node) => {
  node.addEventListener('click', () => {
    const key = node.dataset.layer;
    const content = layerContent[key];
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

});


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}
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
