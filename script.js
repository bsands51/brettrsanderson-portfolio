
const layerContent = {
  direction: {
    number: '01', title: 'Human direction sets the destination.',
    copy: 'Priorities, context, judgment, and taste determine what matters. AI is most useful when it is working toward a clear objective rather than guessing at one.'
  },
  foundation: {
    number: '02', title: 'Strategic context creates consistency.',
    copy: 'A defined foundation keeps the work anchored to the right positioning, voice, priorities, and standards. AI can accelerate execution because the strategic direction is already clear.'
  },
  execution: {
    number: '03', title: 'Connected workflows turn strategy into useful work.',
    copy: 'Repeatable workflows support different GTM needs, from seller readiness to external storytelling and operational follow-through, without treating every task as a one-off.'
  },
  activation: {
    number: '04', title: 'The output has to work in the real world.',
    copy: 'The measure is not how much content gets generated. It is whether teams can use the work, tell a consistent story, respond to buyers, and move opportunities forward.'
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
    document.querySelector('#detail-title').textContent = content.title;
    document.querySelector('#detail-copy').textContent = content.copy;
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
