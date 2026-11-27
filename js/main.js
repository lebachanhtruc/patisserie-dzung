/**
 * PATISSERIE DZUNG - MAIN JAVASCRIPT
 * Multilingual Engine (fr default, vi, en, zh), Slider, Menu Filter, Cart & Reservation
 */

const MOBILE_MENU_BREAKPOINT_PX = 820;
let currentLang = 'fr'; // DEFAULT LANGUAGE: French as requested
let currentView = 'home';
let currentMenuDisplayMode = 'deli';
let hasUserSelectedMenuMode = false;
let currentCategory = 'all';
let currentDietaryFilter = 'all';
let currentOrderDishId = null;
let currentGalleryFilter = 'all';
let currentLightboxIndex = 0;
let cart = [];
let selectedDishOptions = {};

const ALLERGEN_META = {
  peanuts: { icon: '🥜', tone: 'danger', labels: { fr: 'Arachides', vi: 'Đậu phộng', en: 'Peanuts', zh: '含花生' } },
  tree_nuts: { icon: '🌰', tone: 'danger', labels: { fr: 'Amandes / Noix', vi: 'Hạnh nhân / Hạt', en: 'Almonds / Tree Nuts', zh: '含坚果（杏仁）' } },
  shellfish: { icon: '🦐', tone: 'danger', labels: { fr: 'Crustacés', vi: 'Tôm / Giáp xác', en: 'Shellfish', zh: '含甲壳类' } },
  fish: { icon: '🐟', tone: 'info', labels: { fr: 'Sauce poisson', vi: 'Nước mắm', en: 'Fish Sauce', zh: '含鱼露' } },
  gluten: { icon: '🌾', tone: 'info', labels: { fr: 'Gluten', vi: 'Gluten', en: 'Gluten', zh: '含麸质' } },
  egg: { icon: '🥚', tone: 'info', labels: { fr: 'Œuf', vi: 'Trứng', en: 'Egg', zh: '含蛋类' } },
  dairy: { icon: '🥛', tone: 'info', labels: { fr: 'Lait / Beurre', vi: 'Sữa / Bơ', en: 'Dairy', zh: '含乳制品' } },
  soy: { icon: '🫘', tone: 'info', labels: { fr: 'Soja', vi: 'Đậu nành', en: 'Soy', zh: '含大豆' } },
  pork: { icon: '🥩', tone: 'info', labels: { fr: 'Porc', vi: 'Thịt / Mỡ heo', en: 'Pork', zh: '含猪肉' } },
  beef: { icon: '🥩', tone: 'info', labels: { fr: 'Bœuf', vi: 'Khô bò', en: 'Beef', zh: '含牛肉' } },
  beef_fresh: { icon: '🥩', tone: 'info', labels: { fr: 'Bœuf', vi: 'Thịt bò', en: 'Beef', zh: '含牛肉' } },
  spicy: { icon: '🌶️', tone: 'spice', labels: { fr: 'Épicé', vi: 'Cay', en: 'Spicy', zh: '微辣' } }
};

const DIETARY_META = {
  vegan: { icon: '🌱', tone: 'dietary', labels: { fr: '100% Végétal', vi: 'Thuần Chay', en: 'Vegan', zh: '纯素' } },
  pork_free_option: { icon: '✨', tone: 'option', labels: { fr: 'Sans porc possible', vi: 'Bỏ patê = 0 heo', en: 'Pork-Free if No Pâté', zh: '去肉酱=无猪肉' } },
  gluten_free: { icon: '🌾', tone: 'dietary', labels: { fr: 'Sans gluten (recette)', vi: 'Không gluten', en: 'Gluten-Free Recipe', zh: '无麸质配方' } }
};

const HOME_SIGNATURE_IDS = [
  'bm-n1',
  'bm-n2',
  'sn-n12',
  'dr-n41',
  'pst-01'
];

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
    id: 'gal-tutorial-goi-bo-khoai-mon',
    type: 'video',
    category: 'videos',
    src: 'assets/videos/goi-bo-khoai-mon-huong-dan.mp4',
    poster: 'assets/images/goi-bo-khoai-mon-huong-dan-poster.jpg',
    width: 720,
    height: 900,
    badge: {
      fr: '🍽️ Guide 4:5 · 28s · 45$ / 100$',
      vi: '🍽️ Hướng Dẫn 4:5 · 28s · 45$ / 100$',
      en: '🍽️ 4:5 Guide · 28s · $45 / $100',
      zh: '🍽️ 4:5 拌制指南 · 28秒 · 45$ / 100$'
    },
    title: {
      fr: 'Gỏi Bò Khoai Môn · Guide de Mélange Avant Service (45$ / 100$)',
      vi: 'Gỏi Bò Khoai Môn · Video Hướng Dẫn Trộn Gỏi Trước Khi Ăn (45$ / 100$)',
      en: 'Gỏi Bò Khoai Môn · How to Toss Before Eating ($45 / $100)',
      zh: '越式炸芋丝牛肉凉拌拼盘 · 食用前拌匀指南 (45$ / 100$)'
    },
    desc: {
      fr: 'Vidéo 4:5 (VI · FR · EN) : versez notre sauce nuoc-mâm maison, mélangez délicatement de bas en haut pour garder les filaments de taro croustillants et dégustez avec les chips aux crevettes incluses ! Plateau 3–4 pers. (45$) · Grand plateau 9–10 pers. (100$).',
      vi: 'Video 4:5 (Việt · Pháp · Anh) : rưới đều nước mắm pha nhà làm, trộn nhẹ từ dưới lên để giữ sợi khoai môn chiên giòn rụm và thưởng thức cùng bánh phồng tôm kèm sẵn! Khay 3–4 người (45$) · Khay tiệc 9–10 người (100$).',
      en: '4:5 trilingual video (VI · FR · EN): pour our house nuoc-mam dressing evenly, toss gently from bottom up to keep the crispy taro airy and crunchy, and enjoy with included shrimp crackers! 3–4 ppl ($45) · 9–10 ppl ($100).',
      zh: '4:5 三语教学视频（越·法·英）：均匀淋上秘制鱼露酱，从底向上轻柔翻拌以保持炸芋头丝香脆，搭配附赠虾片即刻享用！3–4人份拼盘 (45$) · 9–10人宴席大盘 (100$)。'
    }
  },
  {
    id: 'gal-reel-bltm',
    type: 'video',
    category: 'videos',
    src: 'assets/videos/banh-bong-lan-trung-muoi-reel.mp4',
    poster: 'assets/images/banh-bong-lan-trung-muoi-reel-poster.jpg',
    width: 720,
    height: 1280,
    badge: {
      fr: '✨ Pâtisserie VN · Reel 30s · 20$',
      vi: '✨ Bánh VN Mới · Reel 30s · 20$',
      en: '✨ VN Pastry · 30s Reel · $20',
      zh: '✨ 越式蛋糕新品 · 30秒视频 · 20$'
    },
    title: {
      fr: 'Gâteau Éponge aux Œufs Salés · Bánh Bông Lan Trứng Muối (20$)',
      vi: 'Bánh Bông Lan Trứng Muối Sốt Phô Mai Chà Bông (20$)',
      en: 'Vietnamese Salted Egg Sponge Cake · Bánh Bông Lan Trứng Muối ($20)',
      zh: '越式咸蛋黄肉松蛋糕 · Bánh Bông Lan Trứng Muối (20$)'
    },
    desc: {
      fr: "Vidéo 9:16 · 20$ / boîte : génoise légère fraîchement cuite, sauce maison aux jaunes d’œufs et fromage, effiloché de porc (chà bông) et jaunes d’œufs salés dorés. Précommande 1 jour à l'avance ou appelez le (514) 880-8388 pour vérifier la disponibilité du jour !",
      vi: 'Video dọc 9:16 · 20$ / hộp : cốt bánh bông lan nướng mới mềm mịn, phủ tràn sốt dầu trứng phô mai béo ngậy, chà bông heo tơi sợi và trứng muối hoàng kim. Vui lòng đặt trước 1 ngày hoặc gọi trước (514) 880-8388 để hỏi xem tiệm có sẵn không nhé!',
      en: 'Vertical 9:16 reel · $20 / box: freshly baked pillowy vanilla sponge topped with rich egg-yolk & cheese glaze, savory pork floss, and golden salted egg yolks. Please pre-order 1 day ahead or call (514) 880-8388 to check same-day availability!',
      zh: '竖版 9:16 短视频 · 20$ / 盒：现烤松软海绵蛋糕，淋满秘制蛋黄芝士酱，铺满蓬松猪肉松与金黄咸蛋黄。请提前 1 天预订，或致电 (514) 880-8388 询问当天现货！'
    }
  },
  {
    id: 'gal-reel-bap-xao',
    type: 'video',
    category: 'videos',
    src: 'assets/videos/bap-xao-reel.mp4',
    poster: 'assets/images/bap-xao-reel-poster.jpg',
    width: 720,
    height: 1280,
    badge: {
      fr: '🎬 Reel 20s · 12$ · Plat Chaud',
      vi: '🎬 Reel 20s · 12$ · Món Nóng',
      en: '🎬 20s Reel · $12 · Hot Dish',
      zh: '🎬 20秒短视频 · 12$ · 热食'
    },
    title: {
      fr: 'Maïs Sauté Beurre, Crevettes Séchées & Couennes Dorées (12$)',
      vi: 'Bắp Xào Bơ Tép Khô & Da Heo Giòn (12$)',
      en: 'Sizzling Saigon Butter Corn & Crispy Pork Rinds ($12)',
      zh: '西贡黄油虾米脆猪皮炒玉米（12$）'
    },
    desc: {
      fr: 'Vidéo 9:16 (FR / EN) · 12$ : maïs doux doré au wok avec beurre à l’ail, crevettes séchées, ciboulette, couennes de porc croustillantes et sauce saté maison. Préparé chaud en ~15 min (appelez ~1 h avant pour éviter l’attente).',
      vi: 'Video dọc 9:16 (FR / EN) · 12$ : bắp Mỹ xào bơ tỏi thơm ngậy, tép khô rang, hành lá, da heo nổ giòn rụm và sốt sa tế nhà làm. Xào nóng trong ~15 phút tại tiệm (khuyên gọi đặt trước ~1 tiếng).',
      en: 'Vertical 9:16 reel (FR / EN) · $12: sweet golden corn wok-tossed in garlic butter with dried shrimp, scallions, crunchy puffed pork rinds, and house chili saté. Cooked fresh hot in ~15 min (1h call-ahead recommended).',
      zh: '竖版 9:16 短视频 (FR / EN) · 12$：蒜蓉黄油大火现炒玉米粒，配虾米、葱花、酥脆猪皮与秘制微辣沙茶酱。到店现炒约 15 分钟（建议提前 1 小时致电预订）。'
    }
  },
  {
    id: 'gal-reel-xoi-ga',
    type: 'video',
    category: 'videos',
    src: 'assets/videos/xoi-ga-mam-nhi-reel.mp4',
    poster: 'assets/images/xoi-ga-mam-nhi-poster.jpg',
    width: 720,
    height: 1280,
    badge: {
      fr: '🔥 Plat Chaud · Reel 20s',
      vi: '🔥 Món Nóng Mới · Reel 20s',
      en: '🔥 Hot Dish · 20s Reel',
      zh: '🔥 特色热菜 · 20秒视频'
    },
    title: {
      fr: 'Xôi Gà Mắm Nhĩ · Riz Gluant Poulet Caramélisé ($20)',
      vi: 'Xôi Gà Mắm Nhĩ Đậm Đà ($20)',
      en: 'Xôi Gà Mắm Nhĩ · Sticky Rice Fish Sauce Chicken ($20)',
      zh: '极品鱼露焖鸡糯米饭 Xôi Gà Mắm Nhĩ ($20)'
    },
    desc: {
      fr: 'Vidéo 9:16 : cuisse de poulet dorée caramélisée au nước mắm nhĩ première pression sur riz gluant parfumé, légumes marinés et coriandre fraîche.',
      vi: 'Video dọc 9:16 : đùi gà rim mắm nhĩ óng ánh phục vụ nóng hổi trên xôi nếp dẻo thấm sốt, kèm đồ chua và hành ngò tươi.',
      en: 'Vertical 9:16 reel: glossy first-press fish sauce caramelized chicken leg over warm sticky rice with pickled veggies and fresh herbs.',
      zh: '竖版 9:16 短视频：头道鱼露焦香焖鸡腿配热蒸软糯米饭、酸脆萝卜丝与鲜香菜。'
    }
  },
  {
    id: 'gal-store-feast',
    type: 'featured',
    category: 'ambiance',
    src: 'assets/images/hero-dzung-food.jpg',
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
    src: 'assets/images/menu-banh-mi-n1-thit-muoi.jpg',
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
    id: 'gal-hot-mi-ga-cay',
    type: 'photo',
    category: 'culinary',
    src: 'assets/images/menu-hot-mi-ga-cay-pho-mai.jpg',
    width: 1200,
    height: 900,
    badge: {
      fr: '🔥 Plat Chaud · 20$',
      vi: '🔥 Món Nóng Mới · 20$',
      en: '🔥 Hot Dish · $20',
      zh: '🔥 特色热菜 · 20$'
    },
    title: {
      fr: 'Nouilles Coréennes au Poulet Épicé & Fromage (20$)',
      vi: 'Mì Gà Cay Phô Mai Hàn Quốc (20$)',
      en: 'Korean Spicy Cheese Chicken Noodles ($20)',
      zh: '韩式芝士辣鸡面 (20$)'
    },
    desc: {
      fr: 'Cuisse de poulet entière laquée de sauce épicée coréenne et fromage gratiné fondant, nouilles ondulées, bok choy croquant et bouillon épicé servi à part (2 bols séparés à emporter).',
      vi: 'Nguyên đùi gà góc tư áo sốt cay ngọt Hàn Quốc phủ phô mai nướng chảy, mì xoăn dai ngon, cải thìa và tô nước súp nóng để riêng (2 hộp riêng khi mang đi).',
      en: 'Whole chicken leg quarter glazed in sweet-and-spicy Korean sauce with melted cheese, chewy wavy noodles, crisp bok choy, and hot spicy broth served separately (2-bowl takeout).',
      zh: '整只大鸡腿裹满韩式香辣酱与炙烤芝士，搭配劲道卷面、爽脆青江菜，另配热辣汤底（外带双碗分装）。'
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
  ensurePopoverPolyfill();
  initSiteHeaderHeightObserver();
  initLanguage();
  initHeroCtaExperiment();
  initNavbar();
  initMenuDisplayMode();
  initViewRouter();
  initHeroSlider();
  initHeroCinema();
  renderHomeFeaturedDishes();
  renderBapXaoAllergens();
  initTeaserReelPlayer();
  initLazyMedia(document);
  renderMenu(currentCategory);
  initMenuTabs();
  renderBanquetSetMenus();
  renderGallery(currentGalleryFilter);
  initGallery();
  initCart();
  updateStoreOpenStatus();
  initClosureNoticeModal();
  initLaw25Consent();
  initAnalyticsTracking();
});

function ensurePopoverPolyfill() {
  if (typeof HTMLElement === 'undefined' || Object.hasOwn(HTMLElement.prototype, 'popover')) {
    return;
  }
  import('https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js').catch(() => {});
}

let lastMeasuredHeaderH = 0;
function syncSiteHeaderHeight() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const h = Math.round(header.getBoundingClientRect().height);
  if (h > 0 && h !== lastMeasuredHeaderH) {
    lastMeasuredHeaderH = h;
    document.documentElement.style.setProperty('--site-header-h', `${h}px`);
    if (typeof initStickyMenuBarState === 'function') {
      initStickyMenuBarState();
    }
  }
}

function initSiteHeaderHeightObserver() {
  syncSiteHeaderHeight();
  const header = document.querySelector('.site-header');
  if (header && typeof ResizeObserver === 'function') {
    const ro = new ResizeObserver(() => syncSiteHeaderHeight());
    ro.observe(header);
  }
  window.addEventListener('resize', () => requestAnimationFrame(syncSiteHeaderHeight), { passive: true });
}

const AB_HERO_STORAGE_KEY = 'dzung_ab_hero_cta_v1';
let activeHeroVariant = 'A';
let hasTrackedInitialView = false;

function setClarityTag(key, value) {
  if (typeof window.clarity === 'function') {
    window.clarity('set', key, String(value));
  }
}

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function' && window.DZUNG_GA4_ID) {
    window.gtag('event', eventName, {
      ab_hero_cta: activeHeroVariant,
      view: currentView,
      lang: currentLang,
      ...params
    });
  }
}

function initHeroCtaExperiment() {
  const row = document.getElementById('hero-btn-row');
  const callBtn = document.getElementById('hero-cta-call');
  const menuBtn = document.getElementById('hero-cta-menu');
  if (!row || !callBtn || !menuBtn) return;

  let variant = null;
  try {
    const urlParam = new URLSearchParams(window.location.search).get('ab');
    if (urlParam && (urlParam.toUpperCase() === 'A' || urlParam.toUpperCase() === 'B')) {
      variant = urlParam.toUpperCase();
    } else {
      const saved = window.localStorage.getItem(AB_HERO_STORAGE_KEY);
      if (saved === 'A' || saved === 'B') {
        variant = saved;
      } else {
        variant = Math.random() < 0.5 ? 'A' : 'B';
        window.localStorage.setItem(AB_HERO_STORAGE_KEY, variant);
      }
    }
  } catch (_) {
    variant = 'A';
  }

  activeHeroVariant = variant;
  row.dataset.abVariant = variant;

  // Variant A (Control): Gold = Call to Order, Outline = Discover Menu
  // Variant B (Treatment): Gold = Discover Menu (first), Outline = Call to Order (second)
  if (variant === 'B') {
    menuBtn.classList.remove('btn-tactile-outline');
    menuBtn.classList.add('btn-tactile-gold');
    callBtn.classList.remove('btn-tactile-gold');
    callBtn.classList.add('btn-tactile-outline');
    row.insertBefore(menuBtn, callBtn);
  }

  if (typeof window.gtag === 'function' && window.DZUNG_GA4_ID) {
    window.gtag('set', 'user_properties', { ab_hero_cta: variant });
  }
  setClarityTag('ab_hero_cta', variant);
  trackEvent('experiment_exposure', {
    experiment_id: 'hero_cta_hierarchy_v1',
    variant
  });
}

function initAnalyticsTracking() {
  document.addEventListener('click', (e) => {
    const tracked = e.target.closest('[data-track]');
    if (!tracked) return;
    trackEvent(tracked.getAttribute('data-track'), {
      link_text: (tracked.textContent || '').trim().slice(0, 60),
      source_id: tracked.id || '',
      view: currentView,
      lang: currentLang
    });
  });
}

function getSavedConsent() {
  try {
    return window.localStorage.getItem(window.DZUNG_CONSENT_KEY || 'dzung_consent_v1');
  } catch (_) {
    return null;
  }
}

function updatePrivacyStatusPill() {
  const pill = document.getElementById('privacy-status-pill');
  if (!pill) return;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const status = getSavedConsent();
  if (status === 'granted') {
    pill.innerHTML = t.privacy_status_granted || '✅ Analytics cookies accepted';
  } else if (status === 'denied') {
    pill.innerHTML = t.privacy_status_denied || '🛡️ Analytics cookies declined';
  } else {
    pill.innerHTML = t.privacy_status_unset || '⏳ Pending your choice';
  }
}

function applyConsentChoice(choice) {
  const normalized = choice === 'granted' ? 'granted' : 'denied';
  try {
    window.localStorage.setItem(window.DZUNG_CONSENT_KEY || 'dzung_consent_v1', normalized);
  } catch (_) {}

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: normalized,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  if (normalized === 'granted') {
    if (typeof window.dzungLoadClarity === 'function') {
      window.dzungLoadClarity();
    }
    if (typeof window.clarity === 'function') {
      window.clarity('consent', true);
      window.clarity('set', 'ab_hero_cta', activeHeroVariant);
      window.clarity('set', 'active_view', currentView);
    }
    trackEvent('consent_updated', { consent_state: 'granted' });
  } else if (typeof window.clarity === 'function') {
    window.clarity('consent', false);
  }

  const banner = document.getElementById('consent-banner');
  if (banner) banner.hidden = true;
  updatePrivacyStatusPill();
}

function initLaw25Consent() {
  const banner = document.getElementById('consent-banner');
  const modal = document.getElementById('privacy-modal');
  const saved = getSavedConsent();

  if (banner && saved !== 'granted' && saved !== 'denied') {
    banner.hidden = false;
  }
  updatePrivacyStatusPill();

  const acceptHandler = () => {
    applyConsentChoice('granted');
    if (modal && modal.open) modal.close('accept');
  };
  const declineHandler = () => {
    applyConsentChoice('denied');
    if (modal && modal.open) modal.close('decline');
  };

  document.getElementById('consent-accept-btn')?.addEventListener('click', acceptHandler);
  document.getElementById('consent-decline-btn')?.addEventListener('click', declineHandler);
  document.getElementById('privacy-accept-btn')?.addEventListener('click', acceptHandler);
  document.getElementById('privacy-decline-btn')?.addEventListener('click', declineHandler);

  const openPrivacyModal = () => {
    if (!modal || modal.open) return;
    updatePrivacyStatusPill();
    modal.showModal();
  };

  document.getElementById('consent-policy-btn')?.addEventListener('click', openPrivacyModal);
  document.getElementById('footer-privacy-btn')?.addEventListener('click', openPrivacyModal);

  if (modal) {
    modal.addEventListener('close', () => {
      modal.returnValue = '';
    });

    // Safari fallback for <dialog closedby="any"> light-dismiss
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const isOutside = (e) => {
        const r = modal.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      modal.addEventListener('pointerdown', (e) => { pressedOutside = isOutside(e); });
      modal.addEventListener('pointerup', (e) => { if (pressedOutside && isOutside(e)) modal.close(); });
    }
  }
}

const VALID_VIEWS = new Set(['home', 'menu', 'catering', 'gallery', 'visit']);
const LEGACY_HASH_TO_VIEW = {
  home: 'home',
  accueil: 'home',
  menu: 'menu',
  thucdon: 'menu',
  'thuc-don': 'menu',
  catering: 'catering',
  traiteur: 'catering',
  'dat-tiec': 'catering',
  gallery: 'gallery',
  galerie: 'gallery',
  visit: 'visit',
  visiter: 'visit',
  story: 'visit',
  histoire: 'visit',
  reviews: 'visit',
  avis: 'visit',
  contact: 'visit'
};

function navigateToView(viewName, updateHash = true, shouldFocus = false) {
  const prevView = currentView;
  const normalizedView = LEGACY_HASH_TO_VIEW[viewName] || (VALID_VIEWS.has(viewName) ? viewName : 'home');
  currentView = normalizedView;

  const applyViewChange = () => {
    document.querySelectorAll('.app-view').forEach(section => {
      const isTarget = (section.id === `view-${normalizedView}`);
      section.classList.toggle('active', isTarget);
      section.hidden = !isTarget;
    });

    document.body.classList.toggle('is-menu-view', normalizedView === 'menu');
    closeMobileCategorySheet();

    document.querySelectorAll('.nav-link[data-nav-view], .nav-link[data-view]').forEach(link => {
      const linkView = link.getAttribute('data-nav-view') || link.getAttribute('data-view');
      link.classList.toggle('active', linkView === normalizedView);
    });

    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    if (mobileToggle) {
      mobileToggle.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }

    if (updateHash && window.location.hash !== `#${normalizedView}`) {
      history.pushState({ view: normalizedView }, '', `#${normalizedView}`);
    }

    setClarityTag('active_view', normalizedView);
    if (hasTrackedInitialView && prevView !== normalizedView) {
      trackEvent('view_change', {
        view_name: normalizedView,
        prev_view: prevView
      });
      if (typeof window.gtag === 'function' && window.DZUNG_GA4_ID) {
        window.gtag('event', 'page_view', {
          page_title: `Pâtisserie Dzung — ${normalizedView}`,
          page_location: window.location.href,
          page_path: `/#${normalizedView}`,
          ab_hero_cta: activeHeroVariant
        });
      }
    }
    hasTrackedInitialView = true;

    window.scrollTo({ top: 0, behavior: 'instant' });

    if (normalizedView === 'menu') {
      requestAnimationFrame(() => {
        syncSiteHeaderHeight();
        if (typeof initStickyMenuBarState === 'function') initStickyMenuBarState();
        if (typeof updateMenuTabsScrollCue === 'function') updateMenuTabsScrollCue();
        if (typeof syncMobileBarCategoryLabel === 'function') syncMobileBarCategoryLabel();
      });
    } else {
      const stickyBar = document.getElementById('menu-sticky-bar');
      if (stickyBar) stickyBar.classList.remove('is-stuck');
    }
  };

  const focusTargetHeading = () => {
    if (!shouldFocus) return;
    const heading = document.getElementById(`${normalizedView}-view-heading`);
    if (heading) {
      heading.focus({ preventScroll: true });
    }
  };

  if (typeof document.startViewTransition === 'function' && !document.hidden) {
    try {
      const transition = document.startViewTransition(() => {
        applyViewChange();
      });
      transition.ready?.catch(() => {});
      transition.updateCallbackDone?.catch(() => {});
      transition.finished.then(() => {
        focusTargetHeading();
      }).catch(() => {});
    } catch (_) {
      applyViewChange();
      focusTargetHeading();
    }
  } else {
    applyViewChange();
    focusTargetHeading();
  }
}

function initViewRouter() {
  let isInitialRoute = true;
  const applyFromLocation = () => {
    const rawHash = (window.location.hash || '').replace(/^#/, '').trim().toLowerCase();
    const pathSegment = (window.location.pathname || '')
      .replace(/^\/|\/$/g, '')
      .replace(/\.html$/, '')
      .trim()
      .toLowerCase();

    const lookupKey = rawHash || pathSegment;
    if (!lookupKey) {
      navigateToView('home', false, !isInitialRoute);
      isInitialRoute = false;
      return;
    }
    const targetView = LEGACY_HASH_TO_VIEW[lookupKey] || (VALID_VIEWS.has(lookupKey) ? lookupKey : 'home');
    navigateToView(targetView, false, !isInitialRoute);
    isInitialRoute = false;
  };

  applyFromLocation();
  window.addEventListener('hashchange', applyFromLocation);
  window.addEventListener('popstate', applyFromLocation);
}

function isTempClosureActive() {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Toronto',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short'
    });
    const parts = formatter.formatToParts(now);
    const year = (parts.find(p => p.type === 'year') || {}).value || '';
    const month = (parts.find(p => p.type === 'month') || {}).value || '';
    const day = (parts.find(p => p.type === 'day') || {}).value || '';
    const weekday = (parts.find(p => p.type === 'weekday') || {}).value || '';
    const ymd = `${year}-${month}-${day}`;

    // Active ONLY on Wednesday & Thursday of this closure window (up to 2026-10-29 23:59:59 America/Toronto).
    // Automatically disappears as soon as Friday begins (00:00 America/Toronto).
    const isWedOrThu = weekday.startsWith('Wed') || weekday.startsWith('Thu');
    return isWedOrThu && ymd <= '2026-10-29';
  } catch (err) {
    return false;
  }
}

function initClosureNoticeModal() {
  const dialog = document.getElementById('closure-notice-modal');
  if (!dialog) return;

  if (!isTempClosureActive()) {
    if (dialog.open) dialog.close();
    dialog.remove();
    return;
  }

  const closeBtn = document.getElementById('close-closure-modal-btn');
  const dismissBtn = document.getElementById('closure-dismiss-btn');
  const langBtns = dialog.querySelectorAll('[data-closure-lang]');

  function closeClosureDialog() {
    if (dialog.open) {
      dialog.close();
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeClosureDialog);
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', closeClosureDialog);
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-closure-lang');
      if (lang && typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) {
        switchLanguage(lang);
      }
    });
  });

  // Fallback for browsers without <dialog closedby="any"> support (e.g. Safari)
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

  // Open the pop-up automatically when entering the website on Wed/Thu
  setTimeout(() => {
    if (isTempClosureActive() && typeof dialog.showModal === 'function' && !dialog.open) {
      dialog.showModal();
    }
  }, 180);

  // Auto-expire live check in case the tab stays open past midnight into Friday
  const expiryTimer = setInterval(() => {
    if (!isTempClosureActive()) {
      clearInterval(expiryTimer);
      if (dialog.open) dialog.close();
      dialog.remove();
      updateStoreOpenStatus();
    }
  }, 30000);
}

function updateStoreOpenStatus() {
  const statusElements = Array.from(document.querySelectorAll('.live-store-status'));
  if (!statusElements.length) return;

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang])
    ? TRANSLATIONS[currentLang]
    : {};

  const applyStatus = (stateCls, text) => {
    statusElements.forEach(el => {
      el.classList.remove('is-open', 'is-closed');
      el.classList.add(stateCls);
      el.textContent = text;
    });
  };

  if (isTempClosureActive()) {
    applyStatus(
      'is-closed',
      t.status_temp_closed || "🕒 Fermé aujourd'hui & demain • Réouverture Vendredi 10h30"
    );
    return;
  }

  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Toronto',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
    const parts = formatter.formatToParts(now);
    const weekday = (parts.find(p => p.type === 'weekday') || {}).value || '';
    const hour = parseInt((parts.find(p => p.type === 'hour') || {}).value || '0', 10);
    const minute = parseInt((parts.find(p => p.type === 'minute') || {}).value || '0', 10);

    // Open Wednesday - Sunday, 10:30 (630 mins) to 20:00 (1200 mins)
    const openDays = new Set(['Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    const totalMinutes = (hour === 24 ? 0 : hour) * 60 + minute;
    const isOpen = openDays.has(weekday) && totalMinutes >= (10 * 60 + 30) && totalMinutes < (20 * 60);

    applyStatus(
      isOpen ? 'is-open' : 'is-closed',
      isOpen
        ? (t.status_open_now || "🟢 Ouvert maintenant • Aujourd'hui 10h30 – 20h00")
        : (t.status_closed_now || "🕒 Actuellement fermé • Mer – Dim 10h30 – 20h00")
    );
  } catch (err) {
    applyStatus(
      'is-open',
      t.status_open_now || "🟢 Mer – Dim : 10h30 – 20h00"
    );
  }
}

/* ==========================================================================
   1. MULTILINGUAL ENGINE (i18n)
   ========================================================================== */
function initLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const normalizedUrlLang = urlLang ? urlLang.toLowerCase().trim() : null;
  const savedLang = localStorage.getItem('patisserie_dzung_lang');

  if (normalizedUrlLang && TRANSLATIONS[normalizedUrlLang]) {
    currentLang = normalizedUrlLang;
    localStorage.setItem('patisserie_dzung_lang', currentLang);
  } else {
    currentLang = savedLang && TRANSLATIONS[savedLang] ? savedLang : 'fr';
  }

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
  syncHeroCinemaUI(lang);
  renderHomeFeaturedDishes();
  renderBapXaoAllergens();
  syncTeaserReelBtnText();
  renderMenu(currentCategory);
  if (typeof updateMenuTabCounts === 'function') updateMenuTabCounts();
  if (typeof renderMobileCategorySheet === 'function') renderMobileCategorySheet();
  if (typeof syncMobileBarCategoryLabel === 'function') syncMobileBarCategoryLabel();
  if (typeof updateMenuTabsScrollCue === 'function') requestAnimationFrame(updateMenuTabsScrollCue);
  if (typeof renderBanquetSetMenus === 'function') renderBanquetSetMenus();
  renderGallery(currentGalleryFilter);
  renderCartItems();
  updateStoreOpenStatus();
}

function updateLanguageUI(lang) {
  document.documentElement.lang = lang;

  const flagMap = {
    fr: { flag: '🇫🇷', code: 'FR' },
    vi: { flag: '🇻🇳', code: 'VI' },
    en: { flag: '🇨🇦', code: 'EN' },
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

  document.querySelectorAll('[data-closure-lang]').forEach(btn => {
    if (btn.getAttribute('data-closure-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function applyTranslations(lang) {
  if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
  const t = TRANSLATIONS[lang];
  const menuCount = typeof MENU_ITEMS !== 'undefined' ? String(MENU_ITEMS.length) : '39';

  if (t.page_title) {
    document.title = t.page_title;
  }

  // Text content replacements with dynamic MENU_ITEMS count
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      const value = typeof t[key] === 'string' ? t[key].replace(/\{\{COUNT\}\}/g, menuCount) : t[key];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.innerHTML = value;
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

  if (typeof updatePrivacyStatusPill === 'function') {
    updatePrivacyStatusPill();
  }
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
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('is-open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (header && !header.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
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

/* ==========================================================================
   3B. HERO LIVING CINEMA CONTROLS (SOUND TOGGLE & LIGHTBOX)
   ========================================================================== */
function syncHeroCinemaUI(lang = currentLang) {
  const video = document.getElementById('hero-cinema-video');
  const soundBtn = document.getElementById('hero-sound-btn');
  const expandBtn = document.getElementById('hero-fullscreen-btn');
  if (!video || !soundBtn) return;

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};
  const isUnmuted = !video.muted;
  const iconEl = soundBtn.querySelector('.dz-cinema-btn-icon');
  const labelEl = document.getElementById('hero-sound-label');

  soundBtn.setAttribute('aria-pressed', isUnmuted ? 'true' : 'false');
  soundBtn.setAttribute(
    'aria-label',
    isUnmuted
      ? (t.hero_cinema_sound_aria_off || 'Couper le son de la vidéo')
      : (t.hero_cinema_sound_aria_on || 'Activer le son de la vidéo')
  );

  if (iconEl) iconEl.textContent = isUnmuted ? '🔊' : '🔇';
  if (labelEl) {
    labelEl.textContent = isUnmuted
      ? (t.hero_cinema_sound_on || 'Muet')
      : (t.hero_cinema_sound_off || 'Son');
  }

  if (expandBtn && t.hero_cinema_expand_aria) {
    expandBtn.setAttribute('aria-label', t.hero_cinema_expand_aria);
  }
}

function initHeroCinema() {
  const heroVideo = document.getElementById('hero-cinema-video');
  const soundBtn = document.getElementById('hero-sound-btn');
  const expandBtn = document.getElementById('hero-fullscreen-btn');
  const modal = document.getElementById('hero-video-modal');
  const modalVideo = document.getElementById('hero-modal-video');
  const modalCloseBtn = document.getElementById('hero-modal-close-btn');

  if (!heroVideo) return;

  // Ensure muted inline autoplay reliably starts on mobile Safari & Chromium
  heroVideo.muted = true;
  heroVideo.playsInline = true;
  const playPromise = heroVideo.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {
      // Autoplay blocked cleanly falls back to the frame-0 crisp poster image
    });
  }

  syncHeroCinemaUI(currentLang);

  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      heroVideo.muted = !heroVideo.muted;
      if (heroVideo.paused) {
        heroVideo.play().catch(() => {});
      }
      syncHeroCinemaUI(currentLang);
    });
  }

  if (expandBtn && modal && modalVideo) {
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetTime = Number.isFinite(heroVideo.currentTime) ? heroVideo.currentTime : 0;
      heroVideo.pause();

      modalVideo.muted = false;
      try {
        modalVideo.currentTime = targetTime;
      } catch (_) {
        // Ignore seek failure before metadata settles
      }

      if (!modal.open && typeof modal.showModal === 'function') {
        modal.showModal();
      }
      modalVideo.play().catch(() => {});
    });
  }

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => modal.close());
  }

  if (modal) {
    modal.addEventListener('close', () => {
      if (modalVideo) modalVideo.pause();
      heroVideo.play().catch(() => {});
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      modal.addEventListener('click', (event) => {
        if (event.target !== modal) return;
        const rect = modal.getBoundingClientRect();
        const isInside = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isInside) modal.close();
      });
    }
  }
}

function setDishOption(dishId, choiceId) {
  selectedDishOptions[dishId] = choiceId;
  const containers = document.querySelectorAll(`.dish-options[data-dish-id="${dishId}"]`);
  containers.forEach(container => {
    const pills = container.querySelectorAll('.dish-option-pill');
    pills.forEach(pill => {
      if (pill.getAttribute('data-choice-id') === choiceId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  });

  // Update dynamic price if choice has its own price
  if (typeof MENU_ITEMS !== 'undefined') {
    const dish = MENU_ITEMS.find(item => item.id === dishId);
    if (dish && dish.options && Array.isArray(dish.options.choices)) {
      const choice = dish.options.choices.find(c => c.id === choiceId);
      if (choice && (choice.priceDisplay || choice.price !== undefined)) {
        const displayStr = choice.priceDisplay 
          ? (typeof choice.priceDisplay === 'object' ? (choice.priceDisplay[currentLang] || choice.priceDisplay.vi) : choice.priceDisplay)
          : formatPrice(choice.price);
        document.querySelectorAll(`.dish-price[data-dish-price-id="${dishId}"]`).forEach(priceElem => {
          priceElem.textContent = displayStr;
        });
      }
    }
  }
}

/* ==========================================================================
   4. MENU FILTER, DELI MENU-BOARD & HOME CURATED FAVORITES
   ========================================================================== */
/** Return 'cards' (large photo cards) by default on mobile viewports, 'deli' on desktop. */
function getDefaultMenuDisplayMode() {
  return window.matchMedia(`(max-width: ${MOBILE_MENU_BREAKPOINT_PX}px)`).matches ? 'cards' : 'deli';
}

function setMenuDisplayMode(mode, isUserAction = true) {
  if (isUserAction) {
    hasUserSelectedMenuMode = true;
  }
  currentMenuDisplayMode = mode === 'cards' ? 'cards' : 'deli';
  const menuContainer = document.getElementById('menu-items-grid');
  const deliBtns = [document.getElementById('btn-layout-deli'), document.getElementById('sheet-layout-deli')];
  const cardBtns = [document.getElementById('btn-layout-cards'), document.getElementById('sheet-layout-cards')];

  if (menuContainer) {
    menuContainer.classList.toggle('is-deli-board', currentMenuDisplayMode === 'deli');
    menuContainer.classList.toggle('is-card-grid', currentMenuDisplayMode === 'cards');
  }
  deliBtns.forEach(btn => {
    if (!btn) return;
    btn.classList.toggle('active', currentMenuDisplayMode === 'deli');
    btn.setAttribute('aria-pressed', String(currentMenuDisplayMode === 'deli'));
  });
  cardBtns.forEach(btn => {
    if (!btn) return;
    btn.classList.toggle('active', currentMenuDisplayMode === 'cards');
    btn.setAttribute('aria-pressed', String(currentMenuDisplayMode === 'cards'));
  });
  if (isUserAction) {
    closeMobileCategorySheet();
  }
}

function initMenuDisplayMode() {
  setMenuDisplayMode(getDefaultMenuDisplayMode(), false);

  const mobileMq = window.matchMedia(`(max-width: ${MOBILE_MENU_BREAKPOINT_PX}px)`);
  const handleViewportChange = () => {
    if (!hasUserSelectedMenuMode) {
      setMenuDisplayMode(getDefaultMenuDisplayMode(), false);
    }
  };
  if (typeof mobileMq.addEventListener === 'function') {
    mobileMq.addEventListener('change', handleViewportChange);
  }
}

function buildAllergenChipsHtml(allergens = [], dietary = [], portion = null) {
  const chips = [];

  if (portion) {
    const portionLabel = portion[currentLang] || portion.en || portion.fr;
    if (portionLabel) {
      chips.push(`<span class="allergen-chip is-portion">🤝 ${portionLabel}</span>`);
    }
  }

  (dietary || []).forEach(dietKey => {
    const meta = DIETARY_META[dietKey];
    if (!meta) return;
    const label = meta.labels[currentLang] || meta.labels.fr || meta.labels.en;
    chips.push(`<span class="allergen-chip is-${meta.tone}">${meta.icon} ${label}</span>`);
  });

  (allergens || []).forEach(algKey => {
    const meta = ALLERGEN_META[algKey];
    if (!meta) return;
    const label = meta.labels[currentLang] || meta.labels.fr || meta.labels.en;
    chips.push(`<span class="allergen-chip is-${meta.tone}">${meta.icon} ${label}</span>`);
  });

  return chips.join('');
}

function buildDishMetaHtml(item) {
  const chipsHtml = buildAllergenChipsHtml(item.allergens, item.dietary, item.portion);
  const noteText = item.customNote ? (item.customNote[currentLang] || item.customNote.en || item.customNote.fr) : '';
  const chipsRow = chipsHtml ? `<div class="dish-allergens-row">${chipsHtml}</div>` : '';
  const noteRow = noteText ? `<p class="dish-custom-note">💡 ${noteText}</p>` : '';

  return `${chipsRow}${noteRow}`;
}

function renderBapXaoAllergens() {
  const container = document.getElementById('bap-xao-allergens');
  if (!container) return;
  container.innerHTML = buildAllergenChipsHtml(['dairy', 'shellfish', 'pork', 'spicy'], []);
}

let lazyMediaObserver = null;

function restoreLazyMedia(media) {
  if (!media) return;
  let changed = false;
  if (media.dataset.poster) {
    media.poster = media.dataset.poster;
    delete media.dataset.poster;
    changed = true;
  }
  if (media.dataset.preload) {
    media.preload = media.dataset.preload;
    delete media.dataset.preload;
    changed = true;
  }
  if (media.dataset.src) {
    media.src = media.dataset.src;
    delete media.dataset.src;
    changed = true;
  }
  media.querySelectorAll('source[data-src]').forEach(source => {
    source.src = source.dataset.src;
    delete source.dataset.src;
    changed = true;
  });
  if (changed && typeof media.load === 'function') {
    media.load();
  }
}

function initLazyMedia(root = document) {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotionQuery.matches) {
    root.querySelectorAll('video[autoplay]').forEach(v => {
      v.removeAttribute('autoplay');
      v.pause();
    });
  }

  // Fallback for browsers without native <video loading="lazy"> (e.g. Firefox, Safari)
  if (typeof HTMLMediaElement === 'undefined' || Object.hasOwn(HTMLMediaElement.prototype, 'loading')) {
    return;
  }

  const lazyVideos = [...root.querySelectorAll('video[loading="lazy"], audio[loading="lazy"][controls]')].filter(
    el => !el.dataset.lazyBound
  );
  if (!lazyVideos.length || typeof IntersectionObserver === 'undefined') return;

  if (!lazyMediaObserver) {
    lazyMediaObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          restoreLazyMedia(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '200px 0px' }
    );
  }

  lazyVideos.forEach(media => {
    media.dataset.lazyBound = '1';
    if (media.hasAttribute('poster')) {
      media.dataset.poster = media.getAttribute('poster');
      media.removeAttribute('poster');
    }
    if (media.hasAttribute('preload') && media.getAttribute('preload') !== 'none') {
      media.dataset.preload = media.getAttribute('preload');
    }
    media.preload = 'none';
    lazyMediaObserver.observe(media);
  });
}

function syncTeaserReelBtnText() {
  const video = document.getElementById('bap-xao-teaser-video');
  const btn = document.getElementById('bap-xao-play-btn');
  const overlay = document.getElementById('bap-xao-play-overlay');
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  const isPlaying = !!(video && !video.paused && !video.ended);
  if (overlay) {
    overlay.hidden = isPlaying;
  }
  if (btn) {
    btn.textContent = isPlaying
      ? (t.bap_xao_btn_pause || '⏸ Mettre en pause')
      : (t.bap_xao_btn_play || '▶ Lire la vidéo 20s (avec son)');
  }
}

function initTeaserReelPlayer() {
  const video = document.getElementById('bap-xao-teaser-video');
  if (!video) return;
  ['play', 'pause', 'ended'].forEach(evt => {
    video.addEventListener(evt, syncTeaserReelBtnText);
  });
  syncTeaserReelBtnText();
}

function toggleTeaserReelPlay() {
  const video = document.getElementById('bap-xao-teaser-video');
  if (!video) return;
  restoreLazyMedia(video);
  if (video.paused || video.ended) {
    video.muted = false;
    video.play().catch(() => {});
    trackEvent('reel_play', { item: 'hot-bap-xao', source: 'home_teaser', lang: currentLang });
  } else {
    video.pause();
  }
}

function openReelInGallery() {
  const video = document.getElementById('bap-xao-teaser-video');
  if (video && !video.paused) {
    video.pause();
  }
  navigateToView('gallery');
  document.querySelectorAll('.gallery-filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-gallery-filter') === 'videos');
  });
  renderGallery('videos');
  openGalleryLightbox('gal-reel-bap-xao');
  trackEvent('reel_play', { item: 'hot-bap-xao', source: 'gallery_lightbox', lang: currentLang });
}

function handleDishTutorialToggle(detailsEl) {
  if (!detailsEl) return;
  const video = detailsEl.querySelector('video.dish-tutorial-video');
  if (!video) return;

  if (detailsEl.open) {
    restoreLazyMedia(video);
    const dishCard = detailsEl.closest('[data-dish-id]');
    trackEvent('tutorial_video_open', {
      dish_id: dishCard ? dishCard.getAttribute('data-dish-id') : 'unknown',
      lang: currentLang
    });
  } else if (!video.paused) {
    video.pause();
  }
}

function openDishTutorialFullscreen(btnEl, reelId) {
  const detailsEl = btnEl ? btnEl.closest('details.dish-tutorial-box') : null;
  const video = detailsEl ? detailsEl.querySelector('video.dish-tutorial-video') : null;
  if (video && !video.paused) {
    video.pause();
  }
  openDishVideoReel(reelId);
}

function buildDishCardHtml(item, btnAddText) {
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
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

  // Inline 4:5 Mixing Tutorial Video Box (if available on dish)
  let tutorialHtml = '';
  if (item.tutorialVideo && item.tutorialVideo.src) {
    const tv = item.tutorialVideo;
    const tvTitle = (tv.title && (tv.title[currentLang] || tv.title.fr || tv.title.vi)) || '🎬 Video 4:5';
    const tvHint = (tv.hint && (tv.hint[currentLang] || tv.hint.fr || tv.hint.vi)) || '';
    const tvOpenLabel = t.dish_tutorial_open || '▶ Voir';
    const tvCloseLabel = t.dish_tutorial_close || '▴ Fermer';
    const tvFsLabel = t.dish_tutorial_fullscreen || '⛶ Plein écran';
    const tvWidth = tv.width || 720;
    const tvHeight = tv.height || 900;
    const tvReelId = tv.reelId || item.videoReel || '';

    tutorialHtml = `
      <details class="dish-tutorial-box" ontoggle="handleDishTutorialToggle(this)">
        <summary class="dish-tutorial-summary">
          <span class="dish-tutorial-thumb-wrap" aria-hidden="true">
            <img class="dish-tutorial-thumb" src="${tv.poster || item.image}" alt="" loading="lazy" width="44" height="55" />
            <span class="dish-tutorial-thumb-play">▶</span>
          </span>
          <span class="dish-tutorial-meta">
            <span class="dish-tutorial-title">${tvTitle}</span>
            ${tvHint ? `<span class="dish-tutorial-hint">${tvHint}</span>` : ''}
          </span>
          <span class="dish-tutorial-toggle-pill">
            <span class="dish-tutorial-pill-open">${tvOpenLabel}</span>
            <span class="dish-tutorial-pill-close">${tvCloseLabel}</span>
          </span>
        </summary>
        <div class="dish-tutorial-player-wrap">
          <video
            class="dish-tutorial-video"
            controls
            loading="lazy"
            preload="none"
            playsinline
            width="${tvWidth}"
            height="${tvHeight}"
            ${tv.poster ? `poster="${tv.poster}"` : ''}
            aria-label="${tvTitle}"
          >
            <source src="${tv.src}" type="video/mp4" />
          </video>
          <div class="dish-tutorial-actions">
            <span class="dish-tutorial-ratio-tag">4:5 · VI · FR · EN</span>
            ${tvReelId ? `<button type="button" class="dish-tutorial-fs-btn" onclick="openDishTutorialFullscreen(this, '${tvReelId}')">${tvFsLabel}</button>` : ''}
          </div>
        </div>
      </details>
    `;
  }

  const baseReelBtnLabel = (t && t.dish_watch_reel) || '▶ Video 20s';
  const reelBtnLabel = item.videoReelDuration
    ? baseReelBtnLabel.replace(/20/, String(item.videoReelDuration))
    : baseReelBtnLabel;
  const reelShortText = reelBtnLabel.replace(/^▶\s*/, '');

  return `
    <div class="dish-card" data-category="${item.category}" data-dish-id="${item.id}">
      <div class="dish-image-wrapper">
        <img class="dish-img" src="${item.image}" alt="${name}" loading="lazy" onerror="this.src='assets/images/hero-dzung-food.jpg'" />
        ${item.badge && badgeText ? `<span class="dish-badge ${item.badge}">${badgeText}</span>` : ''}
        ${item.videoReel ? `<button type="button" class="dish-reel-pill" onclick="event.stopPropagation(); openDishVideoReel('${item.videoReel}')" aria-label="${name} — ${reelBtnLabel}"><span aria-hidden="true">▶</span><span class="dish-reel-label"> ${reelShortText}</span></button>` : ''}
      </div>
      <div class="dish-info">
        <div>
          <div class="dish-header">
            <h3 class="dish-name">${name}</h3>
            <span class="dish-price" data-dish-price-id="${item.id}">${priceDisplay}</span>
          </div>
          <p class="dish-desc" onclick="this.classList.toggle('expanded')">${desc}</p>
          ${buildDishMetaHtml(item)}
          ${optionsHtml}
          ${tutorialHtml}
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
}

function renderHomeFeaturedDishes() {
  const container = document.getElementById('home-featured-dishes');
  if (!container || typeof MENU_ITEMS === 'undefined') return;

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang])
    ? TRANSLATIONS[currentLang]
    : {};
  const btnAddText = t.btn_add_dish || '+ Thêm';
  const chefLoveText = t.spotlight_badge || ((currentLang === 'vi') ? '★ Món Ruột Của Chef' : ((currentLang === 'en') ? '★ Chef’s Favorite' : ((currentLang === 'zh') ? '★ 主厨私房力荐' : '★ Coup de Cœur du Chef')));
  const spotlightKicker = t.spotlight_kicker || ((currentLang === 'vi') ? 'Bánh Mì Ký Danh Số 1 Sài Gòn' : ((currentLang === 'en') ? 'Signature N°1 · Artisanal Bánh Mì' : ((currentLang === 'zh') ? '招牌第一号 · 越式传统法包' : 'Signature N°1 · Bánh Mì Artisanal')));

  const featuredItems = HOME_SIGNATURE_IDS
    .map(id => MENU_ITEMS.find(item => item.id === id))
    .filter(Boolean);

  if (featuredItems.length === 0) return;

  // #1 Dish: Spotlight (bm-n2: Baguette Boulettes & Oeuf Salé)
  const spotlightItem = featuredItems.find(i => i.id === 'bm-n2') || featuredItems[0];
  const satelliteItems = featuredItems.filter(i => i.id !== spotlightItem.id).slice(0, 4);

  const spName = spotlightItem.name[currentLang] || spotlightItem.name.fr || spotlightItem.name.vi;
  const spDesc = spotlightItem.desc[currentLang] || spotlightItem.desc.fr || spotlightItem.desc.vi;
  const spPrice = (typeof formatPrice === 'function') ? formatPrice(spotlightItem.price) : `${spotlightItem.price}$`;
  const spTags = spotlightItem.tags ? (spotlightItem.tags[currentLang] || spotlightItem.tags.fr || spotlightItem.tags.vi || []) : [];

  const chipBread = t.spotlight_chip_bread || "🥖 Bánh mì lò Montreal nướng giòn";
  const chipEgg = t.spotlight_chip_egg || "🥚 Trứng muối bùi béo nguyên lòng đỏ";
  const chipPate = t.spotlight_chip_pate || "🥩 Pâté & sốt bơ trứng gia truyền";
  const satellitesTitle = t.home_fav_satellites_title || "✦ 4 ĐẶC SẢN NỔI BẬT KHÁC CỦA TIỆM";

  const spotlightHtml = `
    <div class="dz-spotlight-card" data-category="${spotlightItem.category}" data-dish-id="${spotlightItem.id}">
      <div class="dz-spotlight-media">
        <img src="${spotlightItem.image}" alt="${spName}" loading="lazy" onerror="this.src='assets/images/hero-dzung-food.jpg'" />
        <span class="dz-spotlight-badge">${chefLoveText}</span>
      </div>
      <div class="dz-spotlight-body">
        <div class="dz-spotlight-head">
          <div class="dz-spotlight-title-group">
            <span class="dz-spotlight-kicker">${spotlightKicker}</span>
            <h3 class="dz-spotlight-name">${spName}</h3>
          </div>
          <span class="dz-spotlight-price">${spPrice}</span>
        </div>
        <p class="dz-spotlight-desc">${spDesc}</p>
        ${buildDishMetaHtml(spotlightItem)}
        <div class="dz-spotlight-chips">
          <span class="dz-spot-chip">${chipBread}</span>
          <span class="dz-spot-chip">${chipEgg}</span>
          <span class="dz-spot-chip">${chipPate}</span>
        </div>
        <div class="dz-spotlight-footer">
          <div class="dish-tags">
            ${spTags.map(tag => `<span>#${tag}</span>`).join(' ')}
          </div>
          <button class="btn-tactile btn-tactile-gold dz-spotlight-btn" onclick="addToCart('${spotlightItem.id}')">
            <span>🛒 ${btnAddText} · ${spPrice}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const satelliteHtml = `
    <div class="dz-satellite-head">
      <span class="lk-eyebrow">${satellitesTitle}</span>
    </div>
    <div class="dz-satellite-grid">
      ${satelliteItems.map(item => buildDishCardHtml(item, btnAddText)).join('')}
    </div>
  `;

  container.innerHTML = `
    <div class="dz-tasting-board">
      ${spotlightHtml}
      ${satelliteHtml}
    </div>
  `;
}

function matchesDietaryFilter(item, filter) {
  if (!filter || filter === 'all') return true;
  const dietary = item.dietary || [];
  if (filter === 'pork_free') {
    return dietary.includes('pork_free') || dietary.includes('pork_free_option');
  }
  return dietary.includes(filter);
}

function filterByDietary(filter = 'all') {
  currentDietaryFilter = filter;
  document.querySelectorAll('.dietary-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-dietary') === filter);
  });
  trackEvent('menu_filter', { filter_type: filter, category: currentCategory, lang: currentLang });
  renderMenu(currentCategory);
}

function buildVeganComingSoonBannerHtml(t) {
  return `
    <article class="coming-soon-dish-banner" aria-label="${t.coming_soon_title || 'Vegan Bánh Mì Coming Soon'}">
      <div class="coming-soon-icon" aria-hidden="true">🥖🌱</div>
      <div class="coming-soon-content">
        <span class="coming-soon-badge">${t.coming_soon_badge || '🌱 Coming Soon'}</span>
        <h3 class="coming-soon-title">${t.coming_soon_title || 'Bánh Mì Chay — Coming Soon'}</h3>
        <p class="coming-soon-desc">${t.coming_soon_desc || ''}</p>
      </div>
    </article>
  `;
}

function renderMenu(category = 'all') {
  currentCategory = category;
  const menuContainer = document.getElementById('menu-items-grid');
  if (!menuContainer || typeof MENU_ITEMS === 'undefined') return;

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang])
    ? TRANSLATIONS[currentLang]
    : {};

  const btnAddText = t.btn_add_dish || '+ Thêm';

  const categoryFiltered = category === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === category);

  const filteredItems = categoryFiltered.filter(item => matchesDietaryFilter(item, currentDietaryFilter));

  const showVeganTeaser = (category === 'all' || category === 'banhmi')
    && (currentDietaryFilter === 'all' || currentDietaryFilter === 'vegan');

  if (filteredItems.length === 0 && !showVeganTeaser) {
    const emptyMsg = currentLang === 'fr'
      ? 'Aucun plat ne correspond à ces critères pour cette catégorie.'
      : (currentLang === 'zh'
          ? '该分类下暂无符合筛选条件的菜品，试试“全部”吧！'
          : (currentLang === 'en'
              ? 'No items in this category match the selected dietary filter.'
              : 'Chưa có món nào trong mục này phù hợp bộ lọc, hãy thử xem « Tất cả » nhé!'));
    menuContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; color: var(--ink-muted);">
        <div style="font-size: 3rem; margin-bottom: 0.75rem;">🥣</div>
        <h3 style="color: var(--ink-pandan); font-size: 1.2rem; margin-bottom: 0.65rem; font-family: var(--font-serif);">${emptyMsg}</h3>
        <button type="button" class="btn-tactile btn-tactile-outline" onclick="filterByDietary('all')">${(t.filter_all || 'Tout').replace(/\{\{COUNT\}\}/g, String(MENU_ITEMS.length))}</button>
      </div>
    `;
    return;
  }

  const cardsHtml = filteredItems.map(item => buildDishCardHtml(item, btnAddText)).join('');
  const teaserHtml = showVeganTeaser ? buildVeganComingSoonBannerHtml(t) : '';
  menuContainer.innerHTML = `${cardsHtml}${teaserHtml}`;
  initLazyMedia(menuContainer);
}

let menuStickyObserver = null;
let menuTabsFadeObserver = null;

function isPopoverSheetOpen(sheet) {
  if (!sheet) return false;
  try {
    if (sheet.matches(':popover-open')) return true;
  } catch (_) {}
  return sheet.classList.contains(':popover-open');
}

function closeMobileCategorySheet() {
  const sheet = document.getElementById('mobile-cat-sheet');
  if (!sheet || !isPopoverSheetOpen(sheet)) return;
  if (typeof sheet.hidePopover === 'function') {
    try {
      sheet.hidePopover();
    } catch (_) {}
  }
}

function updateMenuTabCounts() {
  if (typeof MENU_ITEMS === 'undefined') return;
  const tabButtons = document.querySelectorAll('.menu-tab-btn[data-category]');
  tabButtons.forEach(btn => {
    const countEl = btn.querySelector('.menu-tab-count');
    if (!countEl) return;
    const category = btn.getAttribute('data-category');
    const count = category === 'all'
      ? MENU_ITEMS.length
      : MENU_ITEMS.filter(item => item.category === category).length;
    countEl.textContent = `(${count})`;
  });

  const badge = document.querySelector('#menu-stuck-sheet-btn .menu-stuck-sheet-badge');
  if (badge && tabButtons.length > 0) {
    badge.textContent = String(tabButtons.length);
  }
}

function updateMenuTabsScrollCue() {
  const shell = document.getElementById('menu-tabs-shell');
  const list = document.getElementById('menu-tabs-list');
  if (!shell || !list) return;

  const maxScroll = list.scrollWidth - list.clientWidth;
  shell.classList.toggle('can-scroll-left', list.scrollLeft > 8);
  shell.classList.toggle('can-scroll-right', maxScroll > 8 && list.scrollLeft < maxScroll - 8);
}

function scrollMenuTabs(direction) {
  const list = document.getElementById('menu-tabs-list');
  if (!list) return;
  const step = Math.max(180, Math.round(list.clientWidth * 0.65));
  list.scrollBy({ left: (direction < 0 ? -step : step), behavior: 'smooth' });
}

function getCategoryLabelFromTab(btn) {
  if (!btn) return '';
  const labelSpan = btn.querySelector('span[data-i18n]');
  return (labelSpan ? labelSpan.textContent : btn.textContent || '').trim();
}

function renderMobileCategorySheet() {
  const grid = document.getElementById('mobile-cat-sheet-grid');
  if (!grid) return;

  const tabButtons = Array.from(document.querySelectorAll('.menu-tab-btn[data-category]'));
  grid.innerHTML = tabButtons.map(btn => {
    const cat = btn.getAttribute('data-category');
    const label = getCategoryLabelFromTab(btn);
    const countText = (btn.querySelector('.menu-tab-count')?.textContent || '').replace(/[()]/g, '').trim();
    const isActive = cat === currentCategory;
    return `
      <button
        type="button"
        class="dz-cat-sheet-item${isActive ? ' active' : ''}"
        role="listitem"
        data-sheet-category="${cat}"
        ${isActive ? 'aria-current="true"' : ''}
      >
        <span class="dz-cat-sheet-item-label">${label}</span>
        ${countText ? `<span class="dz-cat-sheet-item-count">${countText}</span>` : ''}
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.dz-cat-sheet-item[data-sheet-category]').forEach(itemBtn => {
    itemBtn.addEventListener('click', () => {
      const cat = itemBtn.getAttribute('data-sheet-category');
      if (cat) {
        selectMenuCategory(cat, { scrollToGrid: true, closeSheet: true });
      }
    });
  });
}

function syncMobileBarCategoryLabel() {
  const labelEl = document.getElementById('mobile-bar-cats-label');
  if (!labelEl) return;

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) || {};
  if (currentCategory === 'all') {
    labelEl.textContent = t.menu_sheet_open_short || 'Catégories';
    return;
  }

  const activeTab = document.querySelector(`.menu-tab-btn[data-category="${currentCategory}"]`);
  const activeLabel = getCategoryLabelFromTab(activeTab);
  labelEl.textContent = activeLabel || (t.menu_sheet_open_short || 'Catégories');
}

function centerActiveMenuTab(activeBtn) {
  const list = document.getElementById('menu-tabs-list');
  if (!list || !activeBtn) return;
  const maxScroll = Math.max(0, list.scrollWidth - list.clientWidth);
  if (maxScroll <= 0) return;
  const targetLeft = activeBtn.offsetLeft - (list.clientWidth - activeBtn.offsetWidth) / 2;
  const clampedLeft = Math.max(0, Math.min(maxScroll, targetLeft));
  list.scrollTo({ left: clampedLeft, behavior: 'smooth' });
}

function scrollMenuGridIntoViewIfDeep() {
  const sentinel = document.getElementById('menu-sticky-sentinel');
  const stickyBar = document.getElementById('menu-sticky-bar');
  const anchor = document.getElementById('menu-items-grid');
  if (!sentinel || !stickyBar || !anchor) return;

  const headerH = lastMeasuredHeaderH || parseInt(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h'), 10) || 60;
  // Only smoothly reset scroll when the user has already scrolled down past the sticky bar top
  if (sentinel.getBoundingClientRect().top >= headerH - 4) {
    return;
  }

  const stickyH = Math.round(stickyBar.getBoundingClientRect().height) || 60;
  const anchorDocTop = window.scrollY + anchor.getBoundingClientRect().top;
  const targetY = Math.max(0, anchorDocTop - headerH - stickyH - 14);

  if (Math.abs(window.scrollY - targetY) > 12) {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }
}

function selectMenuCategory(category, { scrollToGrid = true, closeSheet = true } = {}) {
  const tabButtons = document.querySelectorAll('.menu-tab-btn[data-category]');
  let activeBtn = null;

  tabButtons.forEach(btn => {
    const isMatch = btn.getAttribute('data-category') === category;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', String(isMatch));
    btn.setAttribute('tabindex', isMatch ? '0' : '-1');
    if (isMatch) activeBtn = btn;
  });

  renderMenu(category);

  document.querySelectorAll('#mobile-cat-sheet-grid .dz-cat-sheet-item[data-sheet-category]').forEach(item => {
    const isMatch = item.getAttribute('data-sheet-category') === category;
    item.classList.toggle('active', isMatch);
    if (isMatch) {
      item.setAttribute('aria-current', 'true');
    } else {
      item.removeAttribute('aria-current');
    }
  });

  syncMobileBarCategoryLabel();

  if (closeSheet) {
    closeMobileCategorySheet();
  }

  requestAnimationFrame(() => {
    centerActiveMenuTab(activeBtn);
    updateMenuTabsScrollCue();
    if (scrollToGrid) {
      scrollMenuGridIntoViewIfDeep();
    }
  });
}

function initStickyMenuBarState() {
  const sentinel = document.getElementById('menu-sticky-sentinel');
  const stickyBar = document.getElementById('menu-sticky-bar');
  if (!sentinel || !stickyBar) return;

  // Native CSS @container scroll-state(stuck: top) handles Chromium; use IntersectionObserver fallback elsewhere
  const supportsScrollState = typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('container-type', 'scroll-state');
  if (supportsScrollState) {
    stickyBar.classList.remove('is-stuck');
    return;
  }

  if (menuStickyObserver) {
    menuStickyObserver.disconnect();
    menuStickyObserver = null;
  }

  if (typeof IntersectionObserver !== 'function') return;

  const headerH = lastMeasuredHeaderH || parseInt(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h'), 10) || 60;
  menuStickyObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      const menuView = document.getElementById('view-menu');
      const isMenuVisible = menuView && !menuView.hidden;
      const isStuck = Boolean(isMenuVisible && !entry.isIntersecting && entry.boundingClientRect.top <= headerH + 2);
      stickyBar.classList.toggle('is-stuck', isStuck);
    },
    {
      root: null,
      rootMargin: `-${headerH}px 0px 0px 0px`,
      threshold: 0
    }
  );
  menuStickyObserver.observe(sentinel);
}

function initMenuTabsScrollFades() {
  const list = document.getElementById('menu-tabs-list');
  if (!list) return;

  // Use IntersectionObserver fallback for scroll edge fades only when CSS scroll-driven animation-timeline is unsupported
  if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('animation-timeline', 'scroll()')) {
    list.classList.remove('more-start', 'more-end');
    return;
  }

  if (menuTabsFadeObserver) {
    menuTabsFadeObserver.disconnect();
    menuTabsFadeObserver = null;
  }

  const tabs = list.querySelectorAll('.menu-tab-btn');
  if (!tabs.length || typeof IntersectionObserver !== 'function') return;
  const firstTab = tabs[0];
  const lastTab = tabs[tabs.length - 1];

  menuTabsFadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.target === firstTab) {
          list.classList.toggle('more-start', !entry.isIntersecting);
        }
        if (entry.target === lastTab) {
          list.classList.toggle('more-end', !entry.isIntersecting);
        }
      });
    },
    { root: list, threshold: 0.99 }
  );
  menuTabsFadeObserver.observe(firstTab);
  menuTabsFadeObserver.observe(lastTab);
}

function initMenuTabs() {
  const tabButtons = Array.from(document.querySelectorAll('.menu-tab-btn[data-category]'));
  const list = document.getElementById('menu-tabs-list');

  updateMenuTabCounts();
  renderMobileCategorySheet();
  syncMobileBarCategoryLabel();
  initStickyMenuBarState();
  initMenuTabsScrollFades();

  tabButtons.forEach((btn, idx) => {
    const isInitialActive = btn.getAttribute('data-category') === currentCategory;
    btn.setAttribute('aria-selected', String(isInitialActive));
    btn.setAttribute('tabindex', isInitialActive ? '0' : '-1');

    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      if (category) {
        selectMenuCategory(category, { scrollToGrid: true, closeSheet: false });
      }
    });

    btn.addEventListener('keydown', (e) => {
      let nextIdx = -1;
      if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabButtons.length;
      else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabButtons.length) % tabButtons.length;
      else if (e.key === 'Home') nextIdx = 0;
      else if (e.key === 'End') nextIdx = tabButtons.length - 1;

      if (nextIdx >= 0) {
        e.preventDefault();
        const targetBtn = tabButtons[nextIdx];
        const category = targetBtn.getAttribute('data-category');
        if (category) {
          selectMenuCategory(category, { scrollToGrid: false, closeSheet: false });
          targetBtn.focus();
        }
      }
    });
  });

  if (list) {
    list.addEventListener('scroll', updateMenuTabsScrollCue, { passive: true });
  }
  window.addEventListener('resize', updateMenuTabsScrollCue, { passive: true });
  requestAnimationFrame(updateMenuTabsScrollCue);
}

/* ==========================================================================
   4A. BANQUET SET MENUS (3 Curated 5-Course Feasts for 10 Guests)
   ========================================================================== */
let activeBanquetSetId = 'set-01';
let banquetShowAllMobile = false;

function selectBanquetSet(setId) {
  activeBanquetSetId = setId;
  banquetShowAllMobile = false;
  renderBanquetSetMenus();
}

function toggleBanquetMobileCompare() {
  banquetShowAllMobile = !banquetShowAllMobile;
  renderBanquetSetMenus();
}

function renderBanquetSetMenus() {
  const grid = document.getElementById('banquet-sets-grid');
  const tabsWrap = document.getElementById('banquet-mobile-tabs');
  const compareBtn = document.getElementById('banquet-compare-toggle');
  if (!grid || typeof BANQUET_SET_MENUS === 'undefined' || !Array.isArray(BANQUET_SET_MENUS)) return;

  const lang = currentLang || 'fr';
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) || {};
  const priceLabel = t.banquet_price_label || 'Tarif sur demande · Selon saison & nombre de tables';

  if (tabsWrap) {
    tabsWrap.innerHTML = BANQUET_SET_MENUS.map((set, idx) => {
      const isSelected = !banquetShowAllMobile && set.id === activeBanquetSetId;
      const tabName = (set.name && (set.name[lang] || set.name.vi)) || set.code;
      const shortName = tabName.includes('·') ? tabName.split('·')[0].trim() : tabName;
      return `
        <button
          type="button"
          class="dz-banquet-tab-btn is-${set.tier}"
          role="tab"
          aria-selected="${String(isSelected)}"
          tabindex="${isSelected || (banquetShowAllMobile && idx === 0) ? '0' : '-1'}"
          data-banquet-tab="${set.id}"
        >
          <span class="dz-banquet-tab-code">${set.code}</span>
          <span class="dz-banquet-tab-name">${shortName}</span>
        </button>
      `;
    }).join('');

    const tabBtns = Array.from(tabsWrap.querySelectorAll('.dz-banquet-tab-btn'));
    tabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-banquet-tab');
        if (targetId) selectBanquetSet(targetId);
      });
      btn.addEventListener('keydown', (e) => {
        let nextIdx = -1;
        if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabBtns.length;
        else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabBtns.length) % tabBtns.length;
        if (nextIdx >= 0) {
          e.preventDefault();
          const nextBtn = tabBtns[nextIdx];
          const targetId = nextBtn.getAttribute('data-banquet-tab');
          if (targetId) {
            selectBanquetSet(targetId);
            const refreshed = tabsWrap.querySelector(`[data-banquet-tab="${targetId}"]`);
            refreshed?.focus();
          }
        }
      });
    });
  }

  if (compareBtn) {
    const compareLabel = banquetShowAllMobile
      ? (t.banquet_show_tabs_mobile || 'Revenir à la vue par onglets ▴')
      : (t.banquet_show_all_mobile || 'Comparer les 3 Sets en liste ▾');
    compareBtn.setAttribute('aria-pressed', String(banquetShowAllMobile));
    const span = compareBtn.querySelector('span');
    if (span) span.textContent = compareLabel;
    else compareBtn.textContent = compareLabel;
  }

  grid.classList.toggle('is-show-all', banquetShowAllMobile);

  grid.innerHTML = BANQUET_SET_MENUS.map(set => {
    const isMobileActive = set.id === activeBanquetSetId;
    const ribbonText = (set.ribbon && (set.ribbon[lang] || set.ribbon.vi)) || '';
    const setName = (set.name && (set.name[lang] || set.name.vi)) || set.code;
    const setMeaning = (set.meaning && (set.meaning[lang] || set.meaning.vi)) || '';
    const setServes = (set.serves && (set.serves[lang] || set.serves.vi)) || '';
    const ctaText = (set.ctaLabel && (set.ctaLabel[lang] || set.ctaLabel.vi)) || '📞 (514) 880-8388';
    const ctaBtnClass = set.tier === 'prestige'
      ? 'btn-tactile btn-tactile-gold dz-banquet-call-cta'
      : (set.tier === 'featured'
          ? 'btn-tactile btn-tactile-dark dz-banquet-call-cta'
          : 'btn-tactile btn-tactile-outline dz-banquet-call-cta');

    const coursesHtml = set.courses.map(course => {
      const cTitle = (course.title && (course.title[lang] || course.title.vi)) || '';
      const cBadge = course.badge ? (course.badge[lang] || course.badge.vi || '') : '';
      const itemsHtml = course.items.map(item => {
        const iName = (item.name && (item.name[lang] || item.name.vi)) || '';
        const iNote = item.note ? (item.note[lang] || item.note.vi || '') : '';
        return `
          <li class="dz-course-item">
            <span class="dz-course-diamond" aria-hidden="true">◆</span>
            <div class="dz-course-item-copy">
              <span class="dz-course-dish">${iName}</span>
              ${iNote ? `<span class="dz-course-note">${iNote}</span>` : ''}
            </div>
          </li>
        `;
      }).join('');

      return `
        <li class="dz-banquet-course">
          <div class="dz-course-head">
            <span class="dz-course-label">${course.num} · ${cTitle}</span>
            ${cBadge ? `<span class="dz-course-badge">${cBadge}</span>` : ''}
          </div>
          <ul class="dz-course-items">${itemsHtml}</ul>
        </li>
      `;
    }).join('');

    return `
      <article class="dz-banquet-card is-${set.tier}${isMobileActive ? ' is-mobile-active' : ''}" data-banquet-card="${set.id}">
        <div class="dz-banquet-card-top">
          ${ribbonText ? `<span class="dz-banquet-ribbon">${ribbonText}</span>` : ''}
          <span class="dz-banquet-code">${set.code}</span>
          <h3 class="dz-banquet-name">${setName}</h3>
          ${setMeaning ? `<p class="dz-banquet-meaning">${setMeaning}</p>` : ''}
          <span class="dz-banquet-serves">${setServes}</span>
        </div>

        <ol class="dz-banquet-courses">
          ${coursesHtml}
        </ol>

        <div class="dz-banquet-card-foot">
          <p class="dz-banquet-price-hint">${priceLabel}</p>
          <a href="tel:+15148808388" class="${ctaBtnClass}" data-track="catering_set_call_click">
            ${ctaText}
          </a>
        </div>
      </article>
    `;
  }).join('');
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
    ? `<video class="gallery-card-media-el" src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ''} width="${item.width || 720}" height="${item.height || 1280}" loading="lazy" preload="none" muted loop playsinline></video>
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

  const filterTitleMap = {
    all: t.gal_tab_all || '✨ Tout Explorer',
    posters: t.gal_tab_posters || '🎨 Affiches & Art',
    ambiance: t.gal_tab_ambiance || '🏮 Espace & Ambiance',
    culinary: t.gal_tab_culinary || '🥖 Créations Signature',
    videos: t.gal_tab_videos || '🎬 Vidéos & Reels'
  };
  const activeCategoryTitle = filterTitleMap[filter] || reelTitle;

  grid.innerHTML = `
    <div class="gallery-reel-wrapper">
      <div class="gallery-reel-header">
        <div class="gallery-reel-title-group">
          <span class="gallery-reel-title">${activeCategoryTitle}</span>
          <span class="gallery-reel-count-pill">${items.length}</span>
          <span class="gallery-reel-subtitle-hint">${reelTitle}</span>
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

  initLazyMedia(grid);

  // Enable hover video preview on video cards
  grid.querySelectorAll('.gallery-card.is-video').forEach(card => {
    const vid = card.querySelector('video');
    if (vid) {
      card.addEventListener('mouseenter', () => {
        restoreLazyMedia(vid);
        vid.play().catch(() => {});
      });
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
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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

function openDishVideoReel(reelId) {
  currentGalleryFilter = 'all';
  document.querySelectorAll('.gallery-filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-gallery-filter') === 'all');
  });
  trackEvent('reel_play', { item: reelId, source: 'menu_card', lang: currentLang });
  openGalleryLightbox(reelId);
}

function openGalleryLightbox(itemId) {
  let items = getFilteredGalleryItems(currentGalleryFilter);
  let idx = items.findIndex(i => i.id === itemId);
  if (idx < 0 && currentGalleryFilter !== 'all') {
    currentGalleryFilter = 'all';
    items = getFilteredGalleryItems('all');
    idx = items.findIndex(i => i.id === itemId);
  }
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
      const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const w = item.width || 720;
      const h = item.height || 1280;
      mediaContainer.innerHTML = `<video class="lightbox-media-el" src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ''} width="${w}" height="${h}" controls ${reducedMotion ? '' : 'autoplay'} playsinline></video>`;
    } else {
      mediaContainer.innerHTML = `<img class="lightbox-media-el" src="${item.src}" alt="${title}" />`;
    }
  }

  if (thumbsEl) {
    thumbsEl.innerHTML = items.map((it, i) => {
      const thumbSrc = it.type === 'video' ? (it.poster || 'assets/images/hero-dzung-food.jpg') : it.src;
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
   6. QUICK ORDER DIALOG (<dialog closedby="any"> + Pointer Outside Light Dismiss)
   ========================================================================== */
function isOutsideDialogRect(dialogEl, clientX, clientY) {
  const rect = dialogEl.getBoundingClientRect();
  return (
    clientX < rect.left ||
    clientX > rect.right ||
    clientY < rect.top ||
    clientY > rect.bottom
  );
}

function openOrderDialog() {
  const cartModal = document.getElementById('cart-modal');
  if (!cartModal) return;
  if (typeof cartModal.showModal === 'function') {
    if (!cartModal.open) cartModal.showModal();
  } else {
    cartModal.setAttribute('open', '');
  }
}

function closeOrderDialog() {
  const cartModal = document.getElementById('cart-modal');
  if (!cartModal) return;
  if (typeof cartModal.close === 'function' && cartModal.open) {
    cartModal.close();
  } else {
    cartModal.removeAttribute('open');
  }
}

function initCart() {
  const cartBtn = document.getElementById('cart-toggle');
  const cartModal = document.getElementById('cart-modal');
  const closeCartBtn = document.getElementById('close-cart-btn');

  if (!cartModal) return;

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderCartItems();
      openOrderDialog();
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeOrderDialog);
  }

  // Fallback ONLY for browsers lacking <dialog closedby="any"> (test pointer press & release position)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    let pointerDownOutside = false;
    cartModal.addEventListener('pointerdown', (event) => {
      pointerDownOutside = event.target === cartModal && isOutsideDialogRect(cartModal, event.clientX, event.clientY);
    });
    cartModal.addEventListener('pointerup', (event) => {
      if (pointerDownOutside && event.target === cartModal && isOutsideDialogRect(cartModal, event.clientX, event.clientY)) {
        closeOrderDialog();
      }
      pointerDownOutside = false;
    });
  }
}

function addToCart(dishId) {
  currentOrderDishId = dishId || null;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  renderCartItems();
  openOrderDialog();
  trackEvent('order_dialog_open', { dish_id: currentOrderDishId || 'general', lang: currentLang });
  showToast(t.toast_added || '📞 Appelez le (514) 880-8388 pour cueillette chaude ou commandez sur Uber Eats (Rive-Sud) !');
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
  const badgeText = t.order_locked_badge || '🚀 Commande web directe (UEat) bientôt disponible';

  let selectedDishHtml = '';
  if (currentOrderDishId && typeof MENU_ITEMS !== 'undefined') {
    const item = MENU_ITEMS.find(m => m.id === currentOrderDishId);
    if (item) {
      const itemName = item.name[currentLang] || item.name.fr || item.name.vi;
      let itemPrice = (item.priceDisplay && typeof item.priceDisplay === 'object')
        ? (item.priceDisplay[currentLang] || item.priceDisplay.fr || item.priceDisplay.vi)
        : (item.priceDisplay || formatPrice(item.price));
      let choiceName = '';

      if (item.options && Array.isArray(item.options.choices) && item.options.choices.length > 0) {
        const activeChoiceId = selectedDishOptions[item.id] || item.options.choices[0].id;
        const activeChoice = item.options.choices.find(c => c.id === activeChoiceId) || item.options.choices[0];
        if (activeChoice) {
          choiceName = (activeChoice.name && (activeChoice.name[currentLang] || activeChoice.name.fr || activeChoice.name.vi)) || '';
          if (activeChoice.priceDisplay || activeChoice.price !== undefined) {
            itemPrice = activeChoice.priceDisplay
              ? (typeof activeChoice.priceDisplay === 'object'
                  ? (activeChoice.priceDisplay[currentLang] || activeChoice.priceDisplay.fr || activeChoice.priceDisplay.vi)
                  : activeChoice.priceDisplay)
              : formatPrice(activeChoice.price);
          }
        }
      }

      const selectedSummary = choiceName
        ? (choiceName.includes(itemPrice) ? `${itemName} — ${choiceName}` : `${itemName} (${choiceName}) · ${itemPrice}`)
        : `${itemName} · ${itemPrice}`;

      selectedDishHtml = `
        <div class="order-selected-pill">
          <span class="order-selected-kicker">${t.order_selected_label || 'Article sélectionné :'}</span>
          <strong>${selectedSummary}</strong>
        </div>
      `;
    }
  }

  cartContainer.innerHTML = `
    ${selectedDishHtml}
    <div class="order-notice-card">
      <div class="order-notice-badge">
        ${badgeText}
      </div>
      <p class="order-notice-desc">
        ${t.cart_empty || ''}
      </p>
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
  trackEvent('call_click', { source: 'order_dialog', dish_id: currentOrderDishId || 'general', lang: currentLang });
  showToast(t.toast_added || '📞 Appelez le (514) 880-8388 !');
  window.location.href = 'tel:+15148808388';
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
