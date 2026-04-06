// ===========================
// HAMBURGER MENU TOGGLE
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===========================
// SCROLL FADE-IN ANIMATION
// ===========================
const animTargets = document.querySelectorAll('.pkg-card, .category-heading');

animTargets.forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = ((i % 3) * 0.1) + 's';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

animTargets.forEach(el => observer.observe(el));

// ===========================
// BOOK NOW BUTTON FEEDBACK
// ===========================
document.querySelectorAll('.btn-book').forEach(btn => {
  btn.addEventListener('click', function () {
    const original = this.textContent;
    this.textContent = 'Booking...';
    this.style.opacity = '0.75';
    this.disabled = true;
    setTimeout(() => {
      this.textContent = original;
      this.style.opacity = '1';
      this.disabled = false;
    }, 1400);
  });
});
