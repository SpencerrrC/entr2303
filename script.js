// Smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Pickleball court quadrant popups
const overlay = document.getElementById('popup-overlay');
const popupContent = document.getElementById('popup-content');
const popupClose = document.getElementById('popup-close');

document.querySelectorAll('.court-quadrant').forEach(quadrant => {
  quadrant.addEventListener('click', () => {
    const key = quadrant.dataset.quadrant;
    const source = document.getElementById('content-' + key);
    if (source) {
      popupContent.innerHTML = source.innerHTML;
      overlay.classList.add('active');
    }
  });
});

// Close popup
popupClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.classList.remove('active');
  }
});
