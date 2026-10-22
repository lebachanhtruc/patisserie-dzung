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

  menuContainer.innerHTML = filteredItems.map(item => {
    const name = item.name[currentLang] || item.name.fr || item.name.vi;
    const desc = item.desc[currentLang] || item.desc.fr || item.desc.vi;
    const badgeText = item.badgeText ? (item.badgeText[currentLang] || item.badgeText.fr || item.badgeText.vi) : '';
    const tags = item.tags[currentLang] || item.tags.fr || item.tags.vi || [];
    const priceDisplay = (item.priceDisplay && typeof item.priceDisplay === 'object')
      ? (item.priceDisplay[currentLang] || item.priceDisplay.vi || item.priceDisplay.fr)
      : (item.priceDisplay || `${item.price}$`);

    // Flavor / Variant Options Selector
    let optionsHtml = '';
    if (item.options && Array.isArray(item.options.choices) && item.options.choices.length > 0) {
      const optLabel = (item.options.label && (item.options.label[currentLang] || item.options.label.fr || item.options.label.vi))
        || (currentLang === 'fr' ? 'Saveur au choix :' : (currentLang === 'en' ? 'Choose flavor:' : (currentLang === 'zh' ? '选择风味：' : 'Chọn vị trà:')));
      
      const activeChoiceId = selectedDishOptions[item.id] || item.options.choices[0].id;
      if (!selectedDishOptions[item.id]) {
        selectedDishOptions[item.id] = activeChoiceId;
      }

      optionsHtml = `
        <div class="dish-options" data-dish-id="${item.id}">
          <div class="dish-options-header">
            <span class="dish-options-icon">🧋</span>
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
              <span class="dish-price">${priceDisplay}</span>
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
  if (typeof MENU_ITEMS === 'undefined') return;
  const dish = MENU_ITEMS.find(item => item.id === dishId);
  if (!dish) return;

  let cartKey = dish.id;
  let chosenOptionObj = null;

  if (dish.options && Array.isArray(dish.options.choices) && dish.options.choices.length > 0) {
    const choiceId = selectedDishOptions[dish.id] || dish.options.choices[0].id;
    chosenOptionObj = dish.options.choices.find(c => c.id === choiceId) || dish.options.choices[0];
    cartKey = `${dish.id}__${chosenOptionObj.id}`;
  }

  const existingItem = cart.find(item => (item.cartKey || item.id) === cartKey);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      cartKey: cartKey,
      id: dish.id,
      nameObj: dish.name,
      chosenOption: chosenOptionObj ? chosenOptionObj.name : null,
      price: dish.price,
      quantity: 1
    });
  }

  updateCartBadge();
  const dishBaseName = dish.name[currentLang] || dish.name.fr || dish.name.vi;
  const optName = chosenOptionObj ? ` (${chosenOptionObj.name[currentLang] || chosenOptionObj.name.fr || chosenOptionObj.name.vi})` : '';
  const fullDishName = `${dishBaseName}${optName}`;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  showToast(`${t.toast_added || '🥖 '}"${fullDishName}"`);
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;
  badge.style.display = totalCount > 0 ? 'flex' : 'none';
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
  if (!cartContainer || !totalElem) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p style="text-align: center; color: var(--color-text-muted); padding: 2rem 0;">${t.cart_empty}</p>`;
    totalElem.textContent = '0$';
    return;
  }

  let total = 0;
  cartContainer.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const baseName = item.nameObj ? (item.nameObj[currentLang] || item.nameObj.fr || item.nameObj.vi) : item.name;
    const optText = item.chosenOption ? ` (${item.chosenOption[currentLang] || item.chosenOption.fr || item.chosenOption.vi})` : '';
    const name = `${baseName}${optText}`;
    const key = item.cartKey || item.id;

    return `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${name}</div>
          <div style="font-size: 0.8rem; color: var(--color-gold);">${formatPrice(item.price)} x ${item.quantity}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button style="background: rgba(255,255,255,0.1); width: 26px; height: 26px; border-radius: 4px; color: #fff;" onclick="changeCartQty('${key}', -1)">-</button>
          <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.quantity}</span>
          <button style="background: rgba(255,255,255,0.1); width: 26px; height: 26px; border-radius: 4px; color: #fff;" onclick="changeCartQty('${key}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  totalElem.textContent = formatPrice(total);
}

function changeCartQty(cartKey, delta) {
  const item = cart.find(i => (i.cartKey || i.id) === cartKey);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => (i.cartKey || i.id) !== cartKey);
  }

  updateCartBadge();
  renderCartItems();
}

function checkoutOrder() {
  if (cart.length === 0) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    showToast(currentLang === 'fr' ? '⚠️ Votre panier est vide !' : '⚠️ Bạn chưa chọn món nào trong thực đơn!');
    return;
  }

  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formattedTotal = formatPrice(total);
  const msg = currentLang === 'fr' 
    ? `🎉 Commande reçue (${formattedTotal}) ! L'équipe Pâtisserie Dzung va vous contacter rapidement.`
    : (currentLang === 'zh'
        ? `🎉 订单已接收（${formattedTotal}）！Pâtisserie Dzung 将尽快与您联系确认。`
        : (currentLang === 'en'
            ? `🎉 Order received (${formattedTotal})! Pâtisserie Dzung team will contact you shortly.`
            : `🎉 Đã tiếp nhận đơn hàng (${formattedTotal})! Nhân viên Patisserie Dzung sẽ liên hệ xác nhận ngay.`));

  showToast(msg);
  cart = [];
  updateCartBadge();
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
