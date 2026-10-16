/**
 * PATISSERIE DZUNG - MAIN JAVASCRIPT
 * Handles Hero Carousel, Menu Filtering, Cart/Order, Reservation Modal, Smooth Scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroSlider();
  renderMenu('all');
  initMenuTabs();
  initReservationModal();
  initCart();
});

/* ==========================================================================
   1. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar with blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active link highlighter on scroll
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
   2. HERO SLIDER (Carousel)
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

  // Pause on hover
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
  }

  // Start initial auto slide
  startAutoSlide();
}

/* ==========================================================================
   3. MENU FILTER & RENDER
   ========================================================================== */
function renderMenu(category = 'all') {
  const menuContainer = document.getElementById('menu-items-grid');
  if (!menuContainer || typeof MENU_ITEMS === 'undefined') return;

  const filteredItems = category === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === category);

  menuContainer.innerHTML = filteredItems.map(item => `
    <div class="dish-card" data-category="${item.category}">
      <div class="dish-image-wrapper">
        <img class="dish-img" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/hero-anan-reference.jpg'" />
        ${item.badge ? `<span class="dish-badge ${item.badge}">${item.badgeText}</span>` : ''}
      </div>
      <div class="dish-info">
        <div>
          <div class="dish-header">
            <h3 class="dish-name">${item.name}</h3>
            <span class="dish-price">${item.priceDisplay}</span>
          </div>
          <p class="dish-desc">${item.desc}</p>
        </div>
        <div class="dish-footer">
          <div class="dish-tags">
            ${item.tags.map(tag => `<span>#${tag}</span>`).join(' ')}
          </div>
          <button class="btn-add-dish" onclick="addToCart('${item.id}')">
            <span>+ Thêm</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
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
   4. RESERVATION MODAL
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
      showToast(`✨ Đặt bàn thành công cho quý khách ${guestName}! (${guests} người vào lúc ${time} ngày ${date})`);
      form.reset();
    });
  }
}

/* ==========================================================================
   5. QUICK ORDER & CART
   ========================================================================== */
let cart = [];

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

  const existingItem = cart.find(item => item.id === dishId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: 1
    });
  }

  updateCartBadge();
  showToast(`🥖 Đã thêm "${dish.name}" vào danh sách gọi món!`);
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;
  badge.style.display = totalCount > 0 ? 'flex' : 'none';
}

function renderCartItems() {
  const cartContainer = document.getElementById('cart-items-list');
  const totalElem = document.getElementById('cart-total-price');
  if (!cartContainer || !totalElem) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-muted); padding: 2rem 0;">Danh sách gọi món hiện đang trống.<br>Hãy chọn các món bánh mì và street food hấp dẫn bên dưới nhé!</p>';
    totalElem.textContent = '0₫';
    return;
  }

  let total = 0;
  cartContainer.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${item.name}</div>
          <div style="font-size: 0.8rem; color: var(--color-gold);">${item.price.toLocaleString('vi-VN')}₫ x ${item.quantity}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button style="background: rgba(255,255,255,0.1); width: 26px; height: 26px; border-radius: 4px; color: #fff;" onclick="changeCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.quantity}</span>
          <button style="background: rgba(255,255,255,0.1); width: 26px; height: 26px; border-radius: 4px; color: #fff;" onclick="changeCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  totalElem.textContent = `${total.toLocaleString('vi-VN')}₫`;
}

function changeCartQty(dishId, delta) {
  const item = cart.find(i => i.id === dishId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== dishId);
  }

  updateCartBadge();
  renderCartItems();
}

function checkoutOrder() {
  if (cart.length === 0) {
    showToast('⚠️ Bạn chưa chọn món nào trong thực đơn!');
    return;
  }

  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  const itemsList = cart.map(i => `${i.name} (x${i.quantity})`).join(', ');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // In production, can redirect to Zalo / WhatsApp / Hotline with prefilled message
  showToast(`🎉 Đã tiếp nhận đơn hàng (${total.toLocaleString('vi-VN')}₫)! Nhân viên Patisserie Dzung sẽ liên hệ xác nhận ngay.`);
  cart = [];
  updateCartBadge();
}

/* ==========================================================================
   6. TOAST NOTIFICATIONS
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
  }, 4000);
}
