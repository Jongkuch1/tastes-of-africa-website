/* ===== Tastes of Africa - script.js ===== */

/* ---- Hamburger Menu ---- */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  /* ---- Recipe Filter ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const recipeCards = document.querySelectorAll('.recipe-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const region = btn.dataset.filter;
      recipeCards.forEach(card => {
        if (region === 'all' || card.dataset.region === region) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ---- Favorites (localStorage) ---- */
  const savedFavs = JSON.parse(localStorage.getItem('toa-favorites') || '[]');

  function setFavoriteButtonState(button, isSaved) {
    button.classList.toggle('active', isSaved);

    if (button.classList.contains('recipe-favorite-btn')) {
      button.textContent = isSaved ? '❤️ Saved to Favorites' : '🤍 Add to Favorites';
      return;
    }

    button.textContent = isSaved ? '❤️ Saved' : '🤍 Favorite';
  }

  function initFavorites() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
      const id = btn.dataset.id;
      setFavoriteButtonState(btn, savedFavs.includes(id));
      btn.addEventListener('click', () => {
        const idx = savedFavs.indexOf(id);
        if (idx === -1) {
          savedFavs.push(id);
          setFavoriteButtonState(btn, true);
        } else {
          savedFavs.splice(idx, 1);
          setFavoriteButtonState(btn, false);
        }
        localStorage.setItem('toa-favorites', JSON.stringify(savedFavs));
      });
    });
  }
  initFavorites();

  /* ---- Ingredient Scaler ---- */
  const scaleRange = document.getElementById('scale-range');
  const scaleDisplay = document.getElementById('scale-display');
  const scalableItems = document.querySelectorAll('[data-amount]');

  if (scaleRange) {
    scaleRange.addEventListener('input', () => {
      const factor = parseFloat(scaleRange.value);
      scaleDisplay.textContent = `${factor}x`;
      scalableItems.forEach(item => {
        const base = parseFloat(item.dataset.amount);
        const unit = item.dataset.unit || '';
        item.textContent = `${(base * factor).toFixed(base % 1 === 0 ? 0 : 1)} ${unit}`.trim();
      });
    });
  }

  /* ---- Contact Form Validation ---- */
  const contactForm = document.getElementById('contact-form');
  const confirmation = document.getElementById('confirmation');
  const msgError = document.getElementById('msg-error');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();

      if (message.length < 20) {
        msgError.classList.add('show');
        return;
      }
      msgError.classList.remove('show');
      contactForm.style.display = 'none';
      confirmation.style.display = 'block';
      document.getElementById('confirm-name').textContent = name;
    });
  }

  /* ---- Dark / Light Mode Toggle ---- */
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('toa-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) {
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('toa-theme', next);
      themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  /* ---- Newsletter Form ---- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.value) {
        newsletterForm.innerHTML = '<p class="newsletter-success">✅ You\'re subscribed!</p>';
      }
    });
  }
});
