/* =========================================================
   Tranquil Stays — Site Scripts
   ========================================================= */

/* ---------- Toast helper ---------- */
function getToastContainer() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Show a toast notification.
 * @param {string} message - The text to display.
 * @param {'success'|'error'|'info'} type - Variant. Default 'info'.
 * @param {number} duration - Auto-dismiss in ms. Default 4000.
 */
function showToast(message, type = 'info', duration = 4000) {
  const container = getToastContainer();

  const icons = { success: '✓', error: '✕', info: 'i' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'i'}</span>
    <span class="toast-message">${message}</span>
    <button type="button" class="toast-close" aria-label="Dismiss">✕</button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector('.toast-close');
  const timer = setTimeout(() => dismissToast(toast), duration);

  closeBtn.addEventListener('click', () => {
    clearTimeout(timer);
    dismissToast(toast);
  });

  // Cap visible toasts at 3
  while (container.children.length > 3) {
    container.firstChild.remove();
  }
}

function dismissToast(toast) {
  if (!toast || toast.classList.contains('is-leaving')) return;
  toast.classList.add('is-leaving');
  toast.addEventListener('animationend', () => toast.remove(), { once: true });
}

/* =========================================================
   Site behavior
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Booking form ---------- */
  const bookingForm = document.getElementById('formBooking');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const room = document.getElementById('room').value;
      const date = document.getElementById('checkin').value;

      // Basic validation guard
      if (!name || !email || !room || !date) {
        showToast('Please fill in all fields before booking.', 'error');
        return;
      }

      const message =
        `Thank you, ${name}! Your booking for a ${room} on ${date} has been received. ` +
        `We'll contact you at ${email} shortly.`;

      showToast(message, 'success', 6000);

      bookingForm.reset();
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('fullname').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !message) {
        showToast('Please fill in all fields before sending.', 'error');
        return;
      }

      // Truncate very long messages in the toast
      const preview =
        message.length > 120 ? message.slice(0, 120) + '…' : message;

      showToast(
        `Thank you, ${name}! Your message "${preview}" has been received. We'll get back to you soon.`,
        'success',
        6000
      );

      contactForm.reset();
    });
  }

  /* ---------- Room filter ---------- */
  const filterRooms = document.getElementById('filterRooms');
  if (filterRooms) {
    filterRooms.addEventListener('change', function () {
      const selected = this.value;
      const rooms = document.querySelectorAll('.room');

      rooms.forEach((room) => {
        if (selected === 'all' || room.classList.contains(selected)) {
          room.style.display = 'block';
        } else {
          room.style.display = 'none';
        }
      });
    });
  }

  /* ---------- Hero image slider ---------- */
  const hero = document.querySelector('.hero');
  if (hero) {
    const images = [
      'images/1.jpeg',
      'images/2.jpeg',
      'images/3.jpeg',
      'images/4.jpeg',
      'images/5.jpeg',
    ];

    let index = 0;

    function changeBackground() {
      hero.style.backgroundImage = `url('${images[index]}')`;
      index = (index + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000);
  }

  /* ---------- Navbar toggle ---------- */
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
});