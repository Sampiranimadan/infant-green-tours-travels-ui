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
const fadeTargets = document.querySelectorAll(
  '.info-item, .map-wrapper, .booking-form, .section-heading'
);

fadeTargets.forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = (i * 0.07) + 's';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeTargets.forEach(el => observer.observe(el));

// ===========================
// FORM VALIDATION & SUBMIT
// ===========================
const form        = document.getElementById('bookingForm');
const successBox  = document.getElementById('formSuccess');
const submitBtn   = form.querySelector('.btn-submit');

// Field → error element map
const fields = [
  { id: 'name',      errId: 'nameError',   msg: 'Please enter your name.'         },
  { id: 'phone',     errId: 'phoneError',  msg: 'Please enter a valid phone number.' },
  { id: 'pickup',    errId: 'pickupError', msg: 'Please enter a pickup location.'  },
  { id: 'drop',      errId: 'dropError',   msg: 'Please enter a drop location.'    },
  { id: 'travelDate',errId: 'dateError',   msg: 'Please select a travel date.'     },
];

// Live validation: clear error on input
fields.forEach(({ id, errId }) => {
  const el  = document.getElementById(id);
  const err = document.getElementById(errId);
  el.addEventListener('input', () => {
    el.classList.remove('invalid');
    err.textContent = '';
  });
});

// Phone: allow only digits while typing
document.getElementById('phone').addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9+\-\s()]/g, '');
});

// Validate a single field
function validateField({ id, errId, msg }) {
  const el    = document.getElementById(id);
  const errEl = document.getElementById(errId);
  const value = el.value.trim();

  // Phone: at least 10 digits
  if (id === 'phone') {
    const digits = value.replace(/\D/g, '');
    if (digits.length < 10) {
      el.classList.add('invalid');
      errEl.textContent = msg;
      return false;
    }
  } else {
    if (!value) {
      el.classList.add('invalid');
      errEl.textContent = msg;
      return false;
    }
  }

  el.classList.remove('invalid');
  errEl.textContent = '';
  return true;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  successBox.classList.remove('show');

  // Validate all required fields
  let valid = true;
  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });

  if (!valid) return;

  // Simulate submission
  submitBtn.textContent  = 'Sending...';
  submitBtn.disabled     = true;

  setTimeout(() => {
    submitBtn.textContent = 'Send Booking Request';
    submitBtn.disabled    = false;
    successBox.classList.add('show');
    form.reset();

    // Scroll success into view on mobile
    successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 1500);
});

// ===========================
// SET MIN DATE TO TODAY
// ===========================
const dateInput = document.getElementById('travelDate');
const today     = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);
