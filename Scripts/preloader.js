
// hide preloader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.classList.add('hidden');
});

// show preloader for internal navigation links
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href') || '';
  // skip anchors, mailto, external links, and links opening in new tab
  if (href.startsWith('#') || href.startsWith('mailto:') || a.target === '_blank') return;
  const isExternal = /^https?:\/\//i.test(href) && (new URL(href, location.href).origin !== location.origin);
  if (isExternal) return;

  a.addEventListener('click', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.remove('hidden');
  });
});

// optional: show on beforeunload (some browsers restrict visual updates)
window.addEventListener('beforeunload', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.classList.remove('hidden');
});