/**
 * PATISSERIE DZUNG - MAIN JAVASCRIPT
 * Multilingual Engine (fr default, vi, en, zh), Slider, Menu Filter, Cart & Reservation
 */

let currentLang = 'fr'; // DEFAULT LANGUAGE: French as requested
let currentCategory = 'all';
let cart = [];
let selectedDishOptions = {};

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbar();
  initHeroSlider();
  renderMenu(currentCategory);
  initMenuTabs();
  initReservationModal();
  initCart();
});

/* ==========================================================================
   1. MULTILINGUAL ENGINE (i18n)
   ========================================================================== */
function initLanguage() {
  const savedLang = localStorage.getItem('patisserie_dzung_lang');
  currentLang = savedLang && TRANSLATIONS[savedLang] ? savedLang : 'fr';

  updateLanguageUI(currentLang);
  applyTranslations(currentLang);

  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('active');
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = opt.getAttribute('data-lang');
      if (lang && TRANSLATIONS[lang]) {
        switchLanguage(lang);
      }
      if (langMenu) langMenu.classList.remove('active');
    });
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('patisserie_dzung_lang', lang);
  updateLanguageUI(lang);
  applyTranslations(lang);
  renderMenu(currentCategory);
  renderCartItems();
}

function updateLanguageUI(lang) {
  document.documentElement.lang = lang;

  const flagMap = {
    fr: { flag: '🇫🇷', code: 'FR' },
    vi: { flag: '🇻🇳', code: 'VI' },
    en: { flag: '🇬🇧', code: 'EN' },
    zh: { flag: '🇨🇳', code: 'ZH' }
  };

  const currentFlagElem = document.querySelector('.lang-current-flag');
  const currentCodeElem = document.querySelector('.lang-current-code');
  if (currentFlagElem) currentFlagElem.textContent = flagMap[lang].flag;
  if (currentCodeElem) currentCodeElem.textContent = flagMap[lang].code;

  document.querySelectorAll('.lang-option').forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
}

function applyTranslations(lang) {
  if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
  const t = TRANSLATIONS[lang];

  // Text content replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Placeholder replacements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });
}

/* ==========================================================================
   2. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   3. HERO SLIDER
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const btnPrev = document.querySelector('.hero-prev-btn');
  const btnNext = document.querySelector('.hero-next-btn');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, 5500);
  }

  function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });
  }

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
}

function setDishOption(dishId, choiceId) {
  selectedDishOptions[dishId] = choiceId;
  const container = document.querySelector(`.dish-options[data-dish-id="${dishId}"]`);
  if (container) {
    const pills = container.querySelectorAll('.dish-option-pill');
    pills.forEach(pill => {
      if (pill.getAttribute('data-choice-id') === choiceId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // Update dynamic price if choice has its own price
  if (typeof MENU_ITEMS !== 'undefined') {
    const dish = MENU_ITEMS.find(item => item.id === dishId);
    if (dish && dish.options && Array.isArray(dish.options.choices)) {
      const choice = dish.options.choices.find(c => c.id === choiceId);
      if (choice && (choice.priceDisplay || choice.price !== undefined)) {
        const priceElem = document.querySelector(`.dish-price[data-dish-price-id="${dishId}"]`);
        if (priceElem) {
          const displayStr = choice.priceDisplay 
            ? (typeof choice.priceDisplay === 'object' ? (choice.priceDisplay[currentLang] || choice.priceDisplay.vi) : choice.priceDisplay)
            : formatPrice(choice.price);
          priceElem.textContent = displayStr;
        }
      }
    }
  }
}

/* ==========================================================================
   4. MENU FILTER & MULTILINGUAL RENDER
   ========================================================================== */
function renderMenu(category = 'all') {
  currentCategory = category;
  const menuContainer = document.getElementById('menu-items-grid');
  if (!menuContainer || typeof MENU_ITEMS === 'undefined') return;

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) 
    ? TRANSLATIONS[currentLang] 
    : {};

  const btnAddText = t.btn_add_dish || '+ Thêm';

  const filteredItems = category === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === category);

  if (filteredItems.length === 0) {
    const emptyMsg = currentLang === 'fr'
      ? 'Nos délicieux desserts arrivent très bientôt !'
      : (currentLang === 'zh'
          ? '精致甜品即将上线，敬请期待！'
          : (currentLang === 'en'
              ? 'Delicious desserts coming very soon!'
              : 'Các món tráng miệng ngọt ngào đang được tiệm chuẩn bị và sẽ sớm ra mắt!'));
    menuContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1rem; color: var(--color-text-muted);">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🍧</div>
        <h3 style="color: #fff; font-size: 1.3rem; margin-bottom: 0.5rem; font-family: var(--font-serif);">${emptyMsg}</h3>
        <p style="font-size: 0.9rem; color: var(--color-gold);">Pâtisserie Dzung</p>
      </div>
    `;
    return;
  }

  menuContainer.innerHTML = filteredItems.map(item => {
    const name = item.name[currentLang] || item.name.fr || item.name.vi;
    const desc = item.desc[currentLang] || item.desc.fr || item.desc.vi;
    const badgeText = item.badgeText ? (item.badgeText[currentLang] || item.badgeText.fr || item.badgeText.vi) : '';
    const tags = item.tags[currentLang] || item.tags.fr || item.tags.vi || [];
    let priceDisplay = (item.priceDisplay && typeof item.priceDisplay === 'object')
      ? (item.priceDisplay[currentLang] || item.priceDisplay.vi || item.priceDisplay.fr)
      : (item.priceDisplay || `${item.price}$`);

    // Flavor / Variant Options Selector
    let optionsHtml = '';
    if (item.options && Array.isArray(item.options.choices) && item.options.choices.length > 0) {
      const optIcon = item.options.icon || '🧋';
      const optLabel = (item.options.label && (item.options.label[currentLang] || item.options.label.fr || item.options.label.vi))
        || (currentLang === 'fr' ? 'Saveur au choix :' : (currentLang === 'en' ? 'Choose flavor:' : (currentLang === 'zh' ? '选择风味：' : 'Chọn vị:')));
      
      const activeChoiceId = selectedDishOptions[item.id] || item.options.choices[0].id;
      if (!selectedDishOptions[item.id]) {
        selectedDishOptions[item.id] = activeChoiceId;
      }

      // If active choice has its own price, use that for initial price display
      const activeChoice = item.options.choices.find(c => c.id === activeChoiceId);
      if (activeChoice && (activeChoice.priceDisplay || activeChoice.price !== undefined)) {
        priceDisplay = activeChoice.priceDisplay 
          ? (typeof activeChoice.priceDisplay === 'object' ? (activeChoice.priceDisplay[currentLang] || activeChoice.priceDisplay.vi) : activeChoice.priceDisplay)
          : formatPrice(activeChoice.price);
      }

      optionsHtml = `
        <div class="dish-options" data-dish-id="${item.id}">
          <div class="dish-options-header">
            <span class="dish-options-icon">${optIcon}</span>
            <span class="dish-options-label">${optLabel}</span>
          </div>
          <div class="dish-options-pills" role="radiogroup" aria-label="${optLabel}">
            ${item.options.choices.map(choice => {
              const choiceName = choice.name[currentLang] || choice.name.fr || choice.name.vi;
              const isSelected = (activeChoiceId === choice.id);
              return `
                <button type="button" 
                        class="dish-option-pill ${isSelected ? 'active' : ''}" 
                        data-dish-id="${item.id}" 
                        data-choice-id="${choice.id}"
                        onclick="setDishOption('${item.id}', '${choice.id}')">
                  ${choiceName}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="dish-card" data-category="${item.category}">
        <div class="dish-image-wrapper">
          <img class="dish-img" src="${item.image}" alt="${name}" loading="lazy" onerror="this.src='assets/images/story-dzung.jpg'" />
          ${item.badge && badgeText ? `<span class="dish-badge ${item.badge}">${badgeText}</span>` : ''}
        </div>
        <div class="dish-info">
          <div>
            <div class="dish-header">
              <h3 class="dish-name">${name}</h3>
              <span class="dish-price" data-dish-price-id="${item.id}">${priceDisplay}</span>
            </div>
            <p class="dish-desc">${desc}</p>
            ${optionsHtml}
          </div>
          <div class="dish-footer">
            <div class="dish-tags">
              ${tags.map(tag => `<span>#${tag}</span>`).join(' ')}
            </div>
            <button class="btn-add-dish" onclick="addToCart('${item.id}')">
              <span>${btnAddText}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initMenuTabs() {
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderMenu(category);
    });
  });
}

/* ==========================================================================
   5. RESERVATION MODAL
   ========================================================================== */
function initReservationModal() {
  const modal = document.getElementById('reservation-modal');
  const openBtns = document.querySelectorAll('[data-open-reservation]');
  const closeBtn = document.getElementById('close-reservation-btn');
  const form = document.getElementById('reservation-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('res-name').value;
      const guests = document.getElementById('res-guests').value;
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;

      closeModal();
      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
      showToast(`${t.toast_res_success || '✨ '}${guestName}! (${guests} - ${time}, ${date})`);
      form.reset();
    });
  }
}

/* ==========================================================================
   6. QUICK ORDER & CART
   ========================================================================== */
function initCart() {
  const cartBtn = document.getElementById('cart-toggle');
  const cartModal = document.getElementById('cart-modal');
  const closeCartBtn = document.getElementById('close-cart-btn');

  if (!cartModal) return;

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderCartItems();
      cartModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeCart() {
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }

  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      closeCart();
    }
  });
}

function addToCart(dishId) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  renderCartItems();

  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  showToast(t.toast_added || '📞 Vui lòng gọi vào tiệm (514) 880-8388 để đặt món (Chức năng order đang hoàn thiện)!');
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  badge.style.display = 'none';
}

function formatPrice(amount) {
  if (amount < 1000) {
    return Number.isInteger(amount) ? `${amount}$` : `${amount.toFixed(2)}$`;
  }
  return `${amount.toLocaleString('vi-VN')}₫`;
}

function renderCartItems() {
  const cartContainer = document.getElementById('cart-items-list');
  const totalElem = document.getElementById('cart-total-price');
  if (!cartContainer) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const badgeText = t.order_locked_badge || '🛠️ Chức năng Order Online đang hoàn thiện';

  cartContainer.innerHTML = `
    <div style="background: rgba(229, 179, 88, 0.08); border: 1px solid rgba(229, 179, 88, 0.35); border-radius: 10px; padding: 1.4rem 1.2rem; margin-top: 0.5rem;">
      <div style="display: inline-block; background: rgba(229, 179, 88, 0.18); color: var(--color-gold-bright); font-weight: 700; font-size: 0.85rem; padding: 0.35rem 0.9rem; border-radius: 50px; margin-bottom: 1rem;">
        ${badgeText}
      </div>
      <p style="color: #f3f3f5; font-size: 0.98rem; line-height: 1.65; margin-bottom: 1rem;">
        ${t.cart_empty}
      </p>
      <div style="font-size: 0.85rem; color: var(--color-text-muted);">
        📍 ${t.footer_address || '5918 Avenue Auteuil, Brossard, QC J4Z 1N2, Canada'}
      </div>
    </div>
  `;

  if (totalElem) {
    totalElem.textContent = '(514) 880-8388';
  }
}

function changeCartQty(cartKey, delta) {
  renderCartItems();
}

function checkoutOrder() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  showToast(t.toast_added || '📞 Vui lòng gọi vào tiệm (514) 880-8388 để đặt món (Chức năng order đang hoàn thiện)!');
  window.location.href = 'tel:5148808388';
}

/* ==========================================================================
   7. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4200);
}
