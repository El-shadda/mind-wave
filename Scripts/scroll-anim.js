document.addEventListener('DOMContentLoaded', () => {
  const selector = '.animate-on-scroll';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Immediately reveal all elements for reduced-motion users
    document.querySelectorAll(selector).forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add('in-view');
      obs.unobserve(el);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -10% 0'
  });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
});