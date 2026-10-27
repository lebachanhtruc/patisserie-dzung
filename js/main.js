/**
 * PATISSERIE DZUNG - MAIN JAVASCRIPT
 * Multilingual Engine (fr default, vi, en, zh), Slider, Menu Filter, Cart & Reservation
 */

let currentLang = 'fr'; // DEFAULT LANGUAGE: French as requested
let currentCategory = 'all';
let currentGalleryFilter = 'all';
let currentLightboxIndex = 0;
let cart = [];
let selectedDishOptions = {};

const GALLERY_ITEMS = [
  {
    id: 'gal-poster-banh-mi',
    type: 'poster',
    category: 'posters',
    src: 'assets/images/gallery-poster-banh-mi.jpg',
    width: 764,
    height: 1024,
    badge: {
      fr: '🎨 Affiche d’Art',
      vi: '🎨 Poster Nghệ Thuật',
      en: '🎨 Art Poster',
      zh: '🎨 艺术海报'
    },
    title: {
      fr: "Le Bánh Mì d'Exception",
      vi: 'Bánh Mì Đặc Biệt Pâtisserie Dzung',
      en: 'The Exceptional Bánh Mì',
      zh: '非凡越式手工法包'
    },
    desc: {
      fr: 'Baguette croustillante dorée, porc tendre savoureux, pâté maison onctueux et rousong parfumé.',
      vi: 'Vỏ bánh mì giòn rụm nóng hổi, thịt heo mềm đậm đà, patê gan béo ngậy và chà bông tơi xốp.',
      en: 'Golden crusty baguette, tender savory pork, velvety house pâté, and fluffy pork floss.',
      zh: '金黄酥脆的现烤法包，搭配鲜嫩猪肉、秘制香滑肝酱与蓬松肉松。'
    }
  },
  {
    id: 'gal-poster-banh-trang',
    type: 'poster',
    category: 'posters',
    src: 'assets/images/gallery-poster-banh-trang-cuon.jpg',
    width: 764,
    height: 1024,
    badge: {
      fr: '🎨 Affiche d’Art',
      vi: '🎨 Poster Nghệ Thuật',
      en: '🎨 Art Poster',
      zh: '🎨 艺术海报'
    },
    title: {
      fr: "L'Art du Bánh Tráng Cuốn",
      vi: 'Nghệ Thuật Bánh Tráng Cuốn Sài Gòn',
      en: 'The Art of Bánh Tráng Cuốn',
      zh: '西贡米纸卷的艺术'
    },
    desc: {
      fr: 'Roulés de galettes de riz moelleuses avec œufs de caille, mangue fraîche et sauce beurre-tamarin.',
      vi: 'Từng cuộn bánh tráng dẻo mềm ôm trọn trứng cút, xoài xanh, khô bò, tép sấy và sốt bơ me sánh mịn.',
      en: 'Soft rice paper rolls packed with quail eggs, green mango, dried shrimp, and rich tamarind-butter sauce.',
      zh: '柔韧米纸包裹鹌鹑蛋、青芒丝、虾米与香浓罗望子黄油酱。'
    }
  },
  {
    id: 'gal-store-feast',
    type: 'featured',
    category: 'ambiance',
    src: 'assets/images/hero-dzung-store.jpg',
    width: 1200,
    height: 800,
    badge: {
      fr: '🏮 Table & Festin',
      vi: '🏮 Bàn Tiệc Đặc Sản',
      en: '🏮 Feast & Vibe',
      zh: '🏮 招牌盛宴'
    },
    title: {
      fr: 'Le Grand Festin de Saigon à Brossard',
      vi: 'Bàn Tiệc Quà Vặt & Bánh Mì Sài Gòn',
      en: 'The Ultimate Saigon Street Food Feast',
      zh: '西贡街头美食盛宴'
    },
    desc: {
      fr: 'Bánh Mì croustillants, street food authentique, chè rafraîchissants et café vietnamien réunis sur une même table.',
      vi: 'Hội tụ trọn vẹn tinh hoa Bánh Mì giòn tan, ăn vặt đường phố, chè tươi thanh mát và cà phê đậm đà tại tiệm.',
      en: 'Crusty Bánh Mì, authentic street snacks, refreshing sweet soups, and bold Vietnamese coffee gathered together.',
      zh: '汇集酥脆越式法包、地道街头小吃、清爽糖水与香浓越式咖啡。'
    }
  },
  {
    id: 'gal-store-vibe',
    type: 'photo',
    category: 'ambiance',
    src: 'assets/images/hero-dzung-food.jpg',
    width: 1200,
    height: 800,
    badge: {
      fr: '🏮 Notre Espace',
      vi: '🏮 Không Gian Tiệm',
      en: '🏮 Our Space',
      zh: '🏮 门店空间'
    },
    title: {
      fr: 'Espace Chaleureux & Convivial',
      vi: 'Không Gian Ấm Cúng Tại Pâtisserie Dzung',
      en: 'Warm & Welcoming Saigon Corner',
      zh: '温馨舒适的店堂环境'
    },
    desc: {
      fr: 'Un coin du Vietnam authentique et lumineux au 5918 Avenue Auteuil, Brossard.',
      vi: 'Góc nhỏ bình yên, sạch sẽ và ngập tràn hương thơm bánh mới nướng tại 5918 Avenue Auteuil, Brossard.',
      en: 'A bright, cozy Vietnamese culinary sanctuary at 5918 Avenue Auteuil, Brossard.',
      zh: '位于 Brossard 的温馨越南美食空间，弥漫着现烤面包的香气。'
    }
  },
  {
    id: 'gal-store-counter',
    type: 'photo',
    category: 'ambiance',
    src: 'assets/images/hero-dzung-store2.jpg',
    width: 1200,
    height: 800,
    badge: {
      fr: '🏮 Fraîcheur du Jour',
      vi: '🏮 Quầy Tủ Tươi Mới',
      en: '🏮 Daily Freshness',
      zh: '🏮 每日鲜作'
    },
    title: {
      fr: 'Vitrine de Douceurs & Boissons Maison',
      vi: 'Quầy Chè, Bánh Truyền Thống & Thức Uống',
      en: 'Artisanal Desserts & Drinks Showcase',
      zh: '手工甜品与特色饮品展示柜'
    },
    desc: {
      fr: 'Préparés frais chaque jour avec 100% de vrais ingrédients naturels : pandan frais, pomélo et feuilles de sâm.',
      vi: 'Chế biến tươi mới mỗi ngày từ 100% nguyên liệu tự nhiên: lá dứa tươi xay, cùi bưởi thật và lá sâm vò tay.',
      en: 'Prepared fresh daily using 100% real natural ingredients: fresh pandan leaves, real pomelo rind, and hand-rubbed herbal jelly.',
      zh: '每日精选100%纯天然食材新鲜制作：鲜榨斑斓叶、真鲜柚皮与手搓仙草。'
    }
  },
  {
    id: 'gal-banh-mi-ga',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/menu-banh-mi-n3-ga-xe.jpg',
    width: 1024,
    height: 764,
    badge: {
      fr: '🥖 Bánh Mì Artisanal',
      vi: '🥖 Bánh Mì Thủ Công',
      en: '🥖 Artisanal Bánh Mì',
      zh: '🥖 匠心越式法包'
    },
    title: {
      fr: 'Bánh Mì au Poulet Effiloché & Ail Frit',
      vi: 'Bánh Mì Gà Xé Sốt Tỏi Phi Thơm Lừng',
      en: 'Shredded Chicken & Crispy Garlic Bánh Mì',
      zh: '蒜香手撕鸡肉越式法包'
    },
    desc: {
      fr: 'Pain croustillant, poulet effiloché tendre, ail frit doré et sauce maison savoureuse.',
      vi: 'Ổ bánh mì nóng giòn kẹp đầy gà xé sợi dai ngọt, tỏi phi vàng ươm và nước sốt đậm vị gia truyền.',
      en: 'Crispy warm baguette generously filled with tender shredded chicken, golden fried garlic, and house savory sauce.',
      zh: '酥脆法包夹满鲜嫩手撕鸡丝、金黄炸蒜与秘制鲜香酱汁。'
    }
  },
  {
    id: 'gal-tra-sua-thau',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/menu-drink-n41.jpg',
    width: 1024,
    height: 764,
    badge: {
      fr: '🧋 Boisson Star',
      vi: '🧋 Thức Uống Hot Trend',
      en: '🧋 Viral Favorite',
      zh: '🧋 人气爆款饮品'
    },
    title: {
      fr: 'Seau de Thé au Lait Spécial Pudding 3D',
      vi: 'Trà Sữa Thau Đặc Biệt Topping Thỏ 3D & Bánh Flan',
      en: 'Special Bucket Milk Tea with 3D Bunny Pudding',
      zh: '萌趣3D奶冻焦糖布丁大桶奶茶'
    },
    desc: {
      fr: 'Thé au lait parfumé garni de flan caramel entier, pudding 3D fait main, perles et gelées maison.',
      vi: 'Thau trà sữa đậm vị trà kết hợp nguyên chiếc bánh flan trứng sữa, thạch thỏ 3D núng nính và đa dạng thạch nhà làm.',
      en: 'Rich brewed milk tea topped with a whole caramel flan, handcrafted 3D bunny pudding, and artisanal jellies.',
      zh: '香醇奶茶搭配整颗手工焦糖布丁、Q弹3D萌兔奶冻与丰富自制配料。'
    }
  },
  {
    id: 'gal-banh-da-lon',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/menu-banh-da-lon.jpg',
    width: 1024,
    height: 764,
    badge: {
      fr: '🥮 Pâtisserie Ancestrale',
      vi: '🥮 Bánh Quê Cổ Truyền',
      en: '🥮 Heritage Pastry',
      zh: '🥮 古法传统糕点'
    },
    title: {
      fr: 'Bánh Da Lợn & Bánh Xu Xuê au Pandan Frais',
      vi: 'Bánh Da Lợn Lá Dứa Tươi & Đậu Xanh Bùi Béo',
      en: 'Steamed Fresh Pandan & Mung Bean Layer Cake',
      zh: '鲜榨斑斓叶绿豆九层糕'
    },
    desc: {
      fr: 'Couches moelleuses parfumées aux vraies feuilles de pandan fraîches mixées et haricots mungo.',
      vi: 'Từng lớp bánh dẻo dai thơm nức hương lá dứa tươi xay nguyên chất quyện cùng nhân đậu xanh sên mịn.',
      en: 'Delicate chewy layers infused with freshly blended pandan leaves and creamy mung bean paste.',
      zh: '采用100%新鲜斑斓叶现榨与醇厚绿豆蓉层层蒸制，软糯清香。'
    }
  },
  {
    id: 'gal-com-chay',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/menu-streetfood-com-chay.jpg',
    width: 1024,
    height: 764,
    badge: {
      fr: '🍢 Snack Croustillant',
      vi: '🍢 Ăn Vặt Đậm Vị',
      en: '🍢 Crispy Street Snack',
      zh: '🍢 香脆街头小吃'
    },
    title: {
      fr: 'Cơm Cháy Chà Bông & Trio de Sauces Maison',
      vi: 'Cơm Cháy Chà Bông Giòn Rụm & Bộ Sốt Mỡ Hành',
      en: 'Crispy Rice Crackers with Pork Floss & Scallion Oil',
      zh: '香脆锅巴肉松配秘制葱油蘸酱'
    },
    desc: {
      fr: 'Riz croustillant doré accompagné de rousong généreux, huile à la ciboulette et sauce sucrée-salée.',
      vi: 'Miếng cơm cháy dày giòn rụm đi kèm chà bông heo tơi xốp, mỡ hành béo thơm và nước sốt mặn ngọt đậm đà.',
      en: 'Thick golden crispy rice blocks served with fluffy pork floss, fragrant scallion oil, and savory-sweet dipping sauce.',
      zh: '厚实酥脆的黄金锅巴，佐以蓬松猪肉松、香葱油与秘制咸甜酱汁。'
    }
  },
  {
    id: 'gal-che-flan',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/gallery-che-flan.jpg',
    width: 1024,
    height: 764,
    badge: {
      fr: '🍮 Douceur Maison',
      vi: '🍮 Tráng Miệng Nhà Làm',
      en: '🍮 House Dessert',
      zh: '🍮 手工招牌甜品'
    },
    title: {
      fr: 'Flan au Caramel Fondant aux Œufs Frais',
      vi: 'Bánh Flan Trứng Sữa Sốt Caramel Đắng Nhẹ',
      en: 'Silky Crème Caramel Flan with Fresh Eggs',
      zh: '丝滑鲜蛋焦糖布丁'
    },
    desc: {
      fr: 'Texture ultra-lisse et crémeuse aux œufs frais et lait entier, nappée de caramel ambré.',
      vi: 'Mềm mịn tan ngay đầu lưỡi, béo thơm vị trứng sữa tươi hòa quyện cùng lớp caramel óng ả.',
      en: 'Melt-in-your-mouth custard crafted from fresh eggs and rich milk, glazed with amber caramel.',
      zh: '入口即化的细腻蛋奶布丁，淋上琥珀色微苦焦糖。'
    }
  },
  {
    id: 'gal-sam-bo-luong',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/menu-dessert-n29.jpg',
    width: 1024,
    height: 764,
    badge: {
      fr: '🍧 Dessert Fraîcheur',
      vi: '🍧 Chè Thanh Nhiệt',
      en: '🍧 Refreshing Sweet Soup',
      zh: '🍧 清润养生糖水'
    },
    title: {
      fr: 'Sâm Bổ Lượng & Douceurs Rafraîchissantes',
      vi: 'Sâm Bổ Lượng & Các Món Chè Giải Nhiệt',
      en: 'Herbal Sâm Bổ Lượng & Cooling Desserts',
      zh: '清补凉与越式手工糖水'
    },
    desc: {
      fr: 'Longanes, jujubes rouges, graines de lotus, algues croquantes et sirop de sucre candi léger.',
      vi: 'Nhãn nhục, táo đỏ, hạt sen, bo bo, phổ tai giòn sần sật nấu cùng đường phèn thanh mát.',
      en: 'Longan, red dates, lotus seeds, and crunchy kelp simmered in a light rock sugar broth.',
      zh: '桂圆、红枣、莲子、薏米与爽脆昆布慢火熬煮，清甜润燥。'
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbar();
  initHeroSlider();
  renderMenu(currentCategory);
  initMenuTabs();
  renderGallery(currentGalleryFilter);
  initGallery();
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
  renderGallery(currentGalleryFilter);
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
   4B. CREATIVE EXHIBITION GALLERY & FULLSCREEN CINEMA LIGHTBOX
   ========================================================================== */
function getFilteredGalleryItems(filter = currentGalleryFilter) {
  if (filter === 'all') return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter(item => item.category === filter);
}

function buildGalleryCardHtml(item, isSpotlightFeatured, zoomHint) {
  const badge = (item.badge && (item.badge[currentLang] || item.badge.fr || item.badge.vi)) || '';
  const title = (item.title && (item.title[currentLang] || item.title.fr || item.title.vi)) || '';
  const desc = (item.desc && (item.desc[currentLang] || item.desc.fr || item.desc.vi)) || '';
  const isPoster = item.type === 'poster';
  const isVideo = item.type === 'video';

  const cardClass = isPoster
    ? 'gallery-card is-poster'
    : (isSpotlightFeatured ? 'gallery-card is-featured' : (isVideo ? 'gallery-card is-video' : 'gallery-card is-photo'));

  const mediaHtml = isVideo
    ? `<video class="gallery-card-media-el" src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ''} muted loop playsinline preload="metadata"></video>
       <span class="gallery-video-play-icon" aria-hidden="true">▶</span>`
    : `<img class="gallery-card-media-el" src="${item.src}" alt="${title}" loading="lazy" width="${item.width || 1024}" height="${item.height || 764}" />`;

  return `
    <article class="${cardClass}" onclick="openGalleryLightbox('${item.id}')" tabindex="0" role="button" aria-label="${title}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openGalleryLightbox('${item.id}');}">
      <div class="gallery-card-stage">
        ${mediaHtml}
        <span class="gallery-card-zoom">${isVideo ? '▶ Video' : zoomHint}</span>
      </div>
      <div class="gallery-card-plaque">
        <div class="gallery-card-meta">
          <span class="gallery-card-badge">${badge}</span>
        </div>
        <h3 class="gallery-card-title">${title}</h3>
        <p class="gallery-card-desc">${desc}</p>
      </div>
    </article>
  `;
}

function scrollGalleryReel(direction) {
  const track = document.getElementById('gallery-reel-track');
  if (!track) return;
  const scrollAmount = Math.max(track.clientWidth * 0.75, 320);
  track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function renderGallery(filter = 'all') {
  currentGalleryFilter = filter;
  const grid = document.getElementById('gallery-showcase-grid');
  if (!grid) return;

  // Automatically show Videos filter tab if any video item exists in GALLERY_ITEMS
  const hasVideos = GALLERY_ITEMS.some(item => item.category === 'videos' || item.type === 'video');
  const videoTabBtn = document.getElementById('gal-tab-videos-btn');
  if (videoTabBtn) {
    videoTabBtn.style.display = hasVideos ? 'inline-flex' : 'none';
  }

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang])
    ? TRANSLATIONS[currentLang]
    : {};
  const zoomHint = t.gal_zoom_hint || '🔍 Fullscreen';
  const reelTitle = t.gal_reel_title || '🎞️ Pellicule Gourmande — Faites défiler horizontalement';
  const fullscreenBtnLabel = t.gal_btn_fullscreen_all || '⛶ Mode Cinéma Plein Écran';

  const items = getFilteredGalleryItems(filter);
  if (!items.length) {
    grid.innerHTML = '';
    return;
  }

  if (filter === 'all') {
    const posterItems = items.filter(i => i.type === 'poster').slice(0, 2);
    const featuredItem = items.find(i => i.type === 'featured');
    const spotlightIds = new Set([
      ...posterItems.map(i => i.id),
      ...(featuredItem ? [featuredItem.id] : [])
    ]);
    const spotlightItems = items.filter(i => spotlightIds.has(i.id));
    const reelItems = items.filter(i => !spotlightIds.has(i.id));

    grid.innerHTML = `
      <div class="gallery-spotlight-row">
        ${spotlightItems.map(item => buildGalleryCardHtml(item, item.type === 'featured', zoomHint)).join('')}
      </div>
      <div class="gallery-reel-wrapper">
        <div class="gallery-reel-header">
          <div class="gallery-reel-title-group">
            <span class="gallery-reel-title">${reelTitle}</span>
            <span class="gallery-reel-count-pill">${reelItems.length}</span>
          </div>
          <div class="gallery-reel-actions">
            <button type="button" class="gallery-fullscreen-all-btn" onclick="openGalleryLightbox('${items[0].id}')">
              <span>${fullscreenBtnLabel} (${items.length})</span>
            </button>
            <div class="gallery-reel-nav">
              <button type="button" class="gallery-reel-arrow" onclick="scrollGalleryReel(-1)" aria-label="Previous">❮</button>
              <button type="button" class="gallery-reel-arrow" onclick="scrollGalleryReel(1)" aria-label="Next">❯</button>
            </div>
          </div>
        </div>
        <div class="gallery-reel-track" id="gallery-reel-track">
          ${reelItems.map(item => buildGalleryCardHtml(item, false, zoomHint)).join('')}
        </div>
      </div>
    `;
  } else {
    grid.innerHTML = `
      <div class="gallery-reel-wrapper">
        <div class="gallery-reel-header">
          <div class="gallery-reel-title-group">
            <span class="gallery-reel-title">${reelTitle}</span>
            <span class="gallery-reel-count-pill">${items.length}</span>
          </div>
          <div class="gallery-reel-actions">
            <button type="button" class="gallery-fullscreen-all-btn" onclick="openGalleryLightbox('${items[0].id}')">
              <span>${fullscreenBtnLabel} (${items.length})</span>
            </button>
            <div class="gallery-reel-nav">
              <button type="button" class="gallery-reel-arrow" onclick="scrollGalleryReel(-1)" aria-label="Previous">❮</button>
              <button type="button" class="gallery-reel-arrow" onclick="scrollGalleryReel(1)" aria-label="Next">❯</button>
            </div>
          </div>
        </div>
        <div class="gallery-reel-track" id="gallery-reel-track">
          ${items.map(item => buildGalleryCardHtml(item, false, zoomHint)).join('')}
        </div>
      </div>
    `;
  }

  // Enable hover video preview on video cards
  grid.querySelectorAll('.gallery-card.is-video').forEach(card => {
    const vid = card.querySelector('video');
    if (vid) {
      card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
      card.addEventListener('mouseleave', () => {
        vid.pause();
        vid.currentTime = 0;
      });
    }
  });
}

function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-gallery-filter') || 'all';
      renderGallery(filter);
    });
  });

  const dialog = document.getElementById('gallery-lightbox');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!dialog) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  dialog.addEventListener('close', () => {
    const mediaContainer = document.getElementById('lightbox-media-container');
    if (mediaContainer) {
      const vid = mediaContainer.querySelector('video');
      if (vid) vid.pause();
    }
  });

  // Fallback for browsers without native <dialog closedby="any"> support (e.g. Safari)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (isDialogContent) return;
      dialog.close();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });
}

function openGalleryLightbox(itemId) {
  const items = getFilteredGalleryItems(currentGalleryFilter);
  const idx = items.findIndex(i => i.id === itemId);
  currentLightboxIndex = idx >= 0 ? idx : 0;
  updateLightboxView();

  const dialog = document.getElementById('gallery-lightbox');
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

function navigateLightbox(delta) {
  const items = getFilteredGalleryItems(currentGalleryFilter);
  if (!items.length) return;
  currentLightboxIndex = (currentLightboxIndex + delta + items.length) % items.length;
  updateLightboxView();
}

function updateLightboxView() {
  const items = getFilteredGalleryItems(currentGalleryFilter);
  if (!items.length) return;
  const item = items[currentLightboxIndex];

  const counterEl = document.getElementById('lightbox-counter');
  const badgeEl = document.getElementById('lightbox-category-badge');
  const mediaContainer = document.getElementById('lightbox-media-container');
  const titleEl = document.getElementById('lightbox-caption-title');
  const descEl = document.getElementById('lightbox-caption-desc');
  const thumbsEl = document.getElementById('lightbox-thumbs');

  const badge = (item.badge && (item.badge[currentLang] || item.badge.fr || item.badge.vi)) || '';
  const title = (item.title && (item.title[currentLang] || item.title.fr || item.title.vi)) || '';
  const desc = (item.desc && (item.desc[currentLang] || item.desc.fr || item.desc.vi)) || '';

  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${items.length}`;
  if (badgeEl) badgeEl.textContent = badge;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  if (mediaContainer) {
    if (item.type === 'video') {
      mediaContainer.innerHTML = `<video class="lightbox-media-el" src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ''} controls autoplay playsinline></video>`;
    } else {
      mediaContainer.innerHTML = `<img class="lightbox-media-el" src="${item.src}" alt="${title}" />`;
    }
  }

  if (thumbsEl) {
    thumbsEl.innerHTML = items.map((it, i) => {
      const thumbSrc = it.type === 'video' ? (it.poster || 'assets/images/story-dzung.jpg') : it.src;
      const itTitle = (it.title && (it.title[currentLang] || it.title.fr || it.title.vi)) || '';
      return `
        <button type="button" class="lightbox-thumb-btn ${i === currentLightboxIndex ? 'active' : ''}" onclick="currentLightboxIndex=${i};updateLightboxView();" aria-label="${itTitle}">
          <img src="${thumbSrc}" alt="${itTitle}" loading="lazy" />
        </button>
      `;
    }).join('');
  }
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
