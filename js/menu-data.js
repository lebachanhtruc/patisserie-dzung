/**
 * PATISSERIE DZUNG - MULTILINGUAL MENU DATA
 * Languages: fr (French - Default), vi (Vietnamese), en (English), zh (Mandarin Chinese)
 */

const MENU_ITEMS = [
  // 🥖 BÁNH MÌ VIETNAMIEN (5 MÓN THỰC ĐƠN CHÍNH THỨC CỦA TIỆM)
  {
    id: 'bm-n1',
    category: 'banhmi',
    price: 11,
    priceDisplay: '11$',
    badge: 'signature',
    name: {
      fr: 'N1. Baguette Spéciale au Porc Salé',
      vi: 'N1. Bánh Mì Thịt Muối Đặc Biệt',
      en: 'N1. Special Salted Pork Bánh Mì',
      zh: 'N1. 特制咸肉法包'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Popular',
      en: 'Popular',
      zh: '人气推荐'
    },
    desc: {
      fr: 'Baguette artisanale croustillante garnie de porc salé spécial maison, pâté de foie onctueux, beurre frais, pickles croquants et herbes fraîches. Combo Bánh Mì + Boisson.',
      vi: 'Vỏ bánh mì giòn rụm kết hợp thịt muối đặc biệt đậm đà, pate gan béo ngậy, bơ thơm lừng, dưa chua thanh mát và ngò rí. Combo gồm Bánh Mì + Nước Uống.',
      en: 'Crispy artisan baguette stuffed with special house salted pork, rich savory pâté, fresh whipped butter, crisp pickles and cilantro. Combo includes Bánh Mì + Drink.',
      zh: '现烤香脆法包，搭配独家特制咸肉、醇厚手工肝酱、香滑黄油与爽口酸甜腌萝卜。法包+饮料特惠套餐。'
    },
    tags: {
      fr: ['Populaire', 'Porc Salé', 'Combo Boisson'],
      vi: ['Popular', 'Thịt Muối Đặc Biệt', 'Combo Nước'],
      en: ['Popular', 'Salted Pork', 'Combo Drink'],
      zh: ['人气推荐', '特制咸肉', '含饮料']
    },
    image: 'assets/images/menu-banh-mi-n1-thit-muoi.jpg'
  },
  {
    id: 'bm-n2',
    category: 'banhmi',
    price: 11,
    priceDisplay: '11$',
    badge: 'signature',
    name: {
      fr: "N2. Baguette aux Boulettes et Jaune d'Œuf Salé",
      vi: 'N2. Bánh Mì Xíu Mại Trứng Muối',
      en: 'N2. Meatball & Salted Egg Yolk Bánh Mì',
      zh: 'N2. 咸蛋黄肉丸法包'
    },
    badgeText: {
      fr: 'Gourmand',
      vi: 'Đặc Biệt',
      en: "Chef's Choice",
      zh: '浓香主打'
    },
    desc: {
      fr: "Boulettes de porc tendres et juteuses mijotées dans une sauce tomate parfumée, cœur coulant de jaune d'œuf salé savoureux, herbes et pickles. Combo Bánh Mì + Boisson.",
      vi: 'Xíu mại viên tôm thịt mềm mọng nước sốt đậm đà, bọc nhân trứng muối bùi béo dẻo quánh, ăn cùng pate béo và rau thơm giòn ngọt. Combo gồm Bánh Mì + Nước Uống.',
      en: 'Tender pork meatballs simmered in rich aromatic sauce, filled with creamy savory salted egg yolk, house pâté and fresh herbs. Combo includes Bánh Mì + Drink.',
      zh: '鲜嫩多汁手工肉丸包裹浓香咸蛋黄，淋上秘制番茄卤汁，搭配清爽香菜与脆口腌菜。法包+饮料特惠套餐。'
    },
    tags: {
      fr: ["Jaune d'Œuf Salé", 'Boulettes', 'Combo Boisson'],
      vi: ['Trứng Muối', 'Xíu Mại', 'Combo Nước'],
      en: ['Salted Egg Yolk', 'Meatballs', 'Combo Drink'],
      zh: ['咸蛋黄', '多汁肉丸', '含饮料']
    },
    image: 'assets/images/menu-banh-mi-n2-xiu-mai.jpg'
  },
  {
    id: 'bm-n3',
    category: 'banhmi',
    price: 10,
    priceDisplay: '10$',
    badge: null,
    name: {
      fr: 'N3. Baguette au Poulet Effiloché, Beurre et Ail',
      vi: 'N3. Bánh Mì Gà Xé Bơ Tỏi',
      en: 'N3. Shredded Chicken with Garlic Butter Bánh Mì',
      zh: 'N3. 蒜香牛油手撕鸡法包'
    },
    badgeText: {
      fr: '',
      vi: '',
      en: '',
      zh: ''
    },
    desc: {
      fr: "Poulet effiloché moelleux et tendre sauté au beurre d'ail doré parfumé, garniture fraîche de carottes marinées, concombre croquant et coriandre. Combo Bánh Mì + Boisson.",
      vi: 'Thịt gà xé sợi dai ngọt tự nhiên quyện sốt bơ tỏi phi vàng thơm lừng nức mũi, thêm dưa leo tươi mát, ngò rí và sốt đậm đà. Combo gồm Bánh Mì + Nước Uống.',
      en: 'Tender shredded chicken tossed in aromatic golden garlic butter, layered with crisp pickles, cucumber, and house special sauce. Combo includes Bánh Mì + Drink.',
      zh: '细嫩手撕鸡肉融入金黄浓香蒜油，蒜香浓郁扑鼻，搭配清甜黄瓜、爽脆腌萝卜与特调酱汁。法包+饮料特惠套餐。'
    },
    tags: {
      fr: ['Beurre Ail', 'Poulet Effiloché', 'Combo Boisson'],
      vi: ['Bơ Tỏi Phi', 'Gà Xé', 'Combo Nước'],
      en: ['Garlic Butter', 'Shredded Chicken', 'Combo Drink'],
      zh: ['蒜香牛油', '手撕鸡肉', '含饮料']
    },
    image: 'assets/images/menu-banh-mi-n3-ga-xe.jpg'
  },
  {
    id: 'bm-n4',
    category: 'banhmi',
    price: 10,
    priceDisplay: '10$',
    badge: 'signature',
    name: {
      fr: "N4. Baguette Grillée au Sel Pimenté et à l'Effiloché de Porc Séché",
      vi: 'N4. Bánh Mì Muối Ớt Chà Bông',
      en: 'N4. Grilled Baguette with Chili Salt & Pork Floss',
      zh: 'N4. 辣椒盐肉松烤法包'
    },
    badgeText: {
      fr: 'Spécialité',
      vi: 'Món Hot',
      en: 'Specialty',
      zh: '地道小吃'
    },
    desc: {
      fr: 'Baguette toastée et aplatie au charbon badigeonnée de sel pimenté, recouverte de porc séché (chà bông) aérien, ciboule et sauce onctueuse. Combo Bánh Mì + Boisson.',
      vi: 'Bánh mì ép nướng giòn rụm phết sốt muối ớt cay tê tê đậm đà, ngập tràn chà bông heo tơi xốp, mỡ hành phi và tương sốt béo ngậy. Combo gồm Bánh Mì + Nước Uống.',
      en: 'Crispy pressed grilled baguette brushed with spicy chili salt, topped with savory pork floss (chà bông), scallion oil, and rich drizzle. Combo includes Bánh Mì + Drink.',
      zh: '香脆压烤法棍涂抹特制香辣沙茶辣椒盐，铺满蓬松咸香猪肉松与翠绿葱油，酥脆微辣。法包+饮料特惠套餐。'
    },
    tags: {
      fr: ['Sel Pimenté', 'Porc Séché', 'Combo Boisson'],
      vi: ['Muối Ớt Cay Tê', 'Chà Bông Heo', 'Combo Nước'],
      en: ['Chili Salt', 'Pork Floss', 'Combo Drink'],
      zh: ['香辣辣椒盐', '猪肉松', '含饮料']
    },
    image: 'assets/images/menu-banh-mi-n4-muoi-ot.jpg'
  },
  {
    id: 'bm-n5',
    category: 'banhmi',
    price: 9.5,
    priceDisplay: '9.50$',
    badge: 'bestseller',
    name: {
      fr: 'N5. Baguette au Porc Grillé',
      vi: 'N5. Bánh Mì Thịt Nướng',
      en: 'N5. Grilled Pork Bánh Mì',
      zh: 'N5. 烤猪肉法棍三明治'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Popular',
      en: 'Popular',
      zh: '人气热销'
    },
    desc: {
      fr: 'Porc mariné à la citronnelle fraîche et miel, grillé sur la braise, sauce barbecue douce-pimentée, concombre et pickles croquants. Combo Bánh Mì + Boisson.',
      vi: 'Thịt heo nạc dăm ướp sả ớt mật ong nướng than hoa thơm lừng, rưới nước sốt tương đen cay ngọt truyền thống, dưa leo và đồ chua giòn rụm. Combo gồm Bánh Mì + Nước Uống.',
      en: 'Flame-grilled lemongrass pork marinated with wild blossom honey, drizzled with sweet-chili sauce, fresh pickles and herbs. Combo includes Bánh Mì + Drink.',
      zh: '炭火慢烤经典香茅猪肉，外焦里嫩肉香四溢，搭配爽脆酸甜腌菜与特调秘制甜辣酱。法包+饮料特惠套餐。'
    },
    tags: {
      fr: ['Populaire', 'Porc Grillé', 'Combo Boisson'],
      vi: ['Popular', 'Nướng Than Hoa', 'Combo Nước'],
      en: ['Popular', 'Charcoal Grilled', 'Combo Drink'],
      zh: ['人气热销', '炭火现烤', '含饮料']
    },
    image: 'assets/images/menu-banh-mi-n5-thit-nuong.jpg'
  },

  // 🍢 ĐỒ ĂN VẶT ĐƯỜNG PHỐ (STREET FOOD & SNACKS - 4 MÓN CHÍNH THỨC)
  {
    id: 'sn-n10',
    category: 'streetfood',
    price: 10,
    priceDisplay: '10$',
    badge: 'signature',
    name: {
      fr: 'N10. Feuilles de Riz au Saté de Crevettes',
      vi: 'N10. Bánh Tráng Sa Tế Tôm',
      en: 'N10. Rice Paper with Shrimp Satay',
      zh: 'N10. 沙茶虾米拌米纸'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Món Hot',
      en: 'Popular',
      zh: '热销街味'
    },
    desc: {
      fr: 'Fines lanières de feuilles de riz assaisonnées au saté pimenté de crevettes séchées, sel de Tây Ninh et échalotes croustillantes. Extra topping au choix.',
      vi: 'Bánh tráng sợi dẻo dai hòa quyện sa tế tôm cay nồng đậm đà, tép rim ngọt, muối tôm Tây Ninh hảo hạng và hành phi giòn rụm. Có thể thêm Extra Topping tùy chọn.',
      en: 'Chewy rice paper strips tossed in aromatic spicy shrimp satay oil, savory baby shrimp, Tây Ninh shrimp salt and crispy fried shallots. Extra toppings available.',
      zh: '柔韧米纸条拌入香辣浓郁沙茶虾油、特级西宁虾盐与酥脆红葱酥，香辣开胃。可自选添加丰富配料。'
    },
    tags: {
      fr: ['Saté Crevettes', 'Épicé', 'Street Food'],
      vi: ['Sa Tế Tôm', 'Cay Đậm Đà', 'Ăn Vặt Sài Gòn'],
      en: ['Shrimp Satay', 'Spicy', 'Street Snack'],
      zh: ['沙茶虾味', '浓香微辣', '街头小吃']
    },
    image: 'assets/images/menu-banh-trang-n10-full.jpg'
  },
  {
    id: 'sn-n11',
    category: 'streetfood',
    price: 25,
    priceDisplay: '25$',
    badge: 'bestseller',
    name: {
      fr: 'N11. Rouleaux de Riz Garnis Complets',
      vi: 'N11. Bánh Tráng Cuốn Full Topping',
      en: 'N11. Rice Paper Rolls with Full Toppings',
      zh: 'N11. 全配料米纸卷'
    },
    badgeText: {
      fr: 'Best Seller',
      vi: 'Best Seller',
      en: 'Best Seller',
      zh: '全料招牌'
    },
    desc: {
      fr: 'Plateau complet de rouleaux de riz garnis de bœuf séché, œufs de caille, crevettes séchées, ciboule et double sauce beurre onctueux et tamarin acidulé.',
      vi: 'Mẹt bánh tráng cuốn ngập tràn đầy đủ topping: bò khô hảo hạng, trứng cút bùi béo, ruốc tép, hành phi, rau răm và chấm sốt bơ me chua ngọt béo ngậy thần thánh.',
      en: 'Loaded rice paper roll feast packed with savory beef jerky, quail eggs, dried baby shrimp, fragrant herbs, and the signature rich egg butter & tamarind dipping sauce.',
      zh: '全配料豪华米纸卷拼盘：精选牛肉干、香卤鹌鹑蛋、香脆虾皮、翠绿芫荽，搭配秘制香浓黄油蛋黄酱与酸甜罗望子蘸汁。'
    },
    tags: {
      fr: ['Full Topping', 'Sauce Beurre Me', 'Incontournable'],
      vi: ['Full Topping', 'Sốt Bơ Me', 'Best Seller'],
      en: ['Full Topping', 'Tamarind Butter', 'Best Seller'],
      zh: ['全配料', '黄油罗望子', '招牌热销']
    },
    image: 'assets/images/menu-banh-trang-n11-full.jpg'
  },
  {
    id: 'sn-n12',
    category: 'streetfood',
    price: 15,
    priceDisplay: '15$',
    badge: 'signature',
    name: {
      fr: 'N12. Kit Feuilles de Riz à Mélanger (DIY)',
      vi: 'N12. Bánh Tráng Tự Trộn',
      en: 'N12. DIY Mixed Rice Paper Kit',
      zh: 'N12. 自拌米纸套餐'
    },
    badgeText: {
      fr: 'Kit Maison',
      vi: 'DIY Kit',
      en: 'DIY Kit',
      zh: 'DIY 自拌'
    },
    desc: {
      fr: 'Kit prêt-à-mélanger chez soi : feuilles de riz prédécoupées, boîtes individuelles de bœuf séché, calmars, œufs de caille, mangue verte, saté et sauce secrète.',
      vi: 'Set hộp kit bánh tráng tự trộn tại nhà chuẩn vị: bánh tráng cắt sẵn dẻo ngon, các hộp topping riêng biệt gồm bò khô, khô mực, trứng cút, tép đỏ, xoài, sa tế và nước sốt đặc biệt.',
      en: 'Complete DIY mixed rice paper kit to toss at home: pre-cut chewy rice paper, separate containers of beef jerky, shredded squid, quail eggs, green mango, satay oil, and secret house dressing.',
      zh: '家庭自拌米纸便携套盒：分装剪裁好的柔韧米纸、风味牛肉干、鱿鱼丝、鹌鹑蛋、酸甜青芒丝、独家秘制拌酱与香辣沙茶油。'
    },
    tags: {
      fr: ['Kit DIY', 'Frais & Ludique', 'À Partager'],
      vi: ['Tự Trộn Tại Nhà', 'Đầy Đủ Topping', 'Tiện Lợi'],
      en: ['DIY Kit', 'Fun to Mix', 'Fresh'],
      zh: ['DIY套盒', '自拌美味', '新鲜丰富']
    },
    image: 'assets/images/menu-banh-trang-n12-full.jpg'
  },
  {
    id: 'sn-n13',
    category: 'streetfood',
    price: 20,
    priceDisplay: '20$ - 25$',
    badge: 'bestseller',
    name: {
      fr: 'N13. Rouleaux de Riz Garnis Assouplies à la Rosée',
      vi: 'N13. Bánh Tráng Cuốn Phơi Sương',
      en: 'N13. Dew-wetted Rice Paper Rolls',
      zh: 'N13. 露水米纸卷'
    },
    badgeText: {
      fr: '2 Tailles',
      vi: '2 Size',
      en: '2 Sizes',
      zh: '双规格'
    },
    desc: {
      fr: "Feuilles de riz assouplies à la rosée de Trảng Bàng, moelleuses et parfumées, garnies d'ingrédients savoureux avec trempette au beurre et calamansi. 2 tailles : Petite 20$ / Grande 25$.",
      vi: 'Bánh tráng phơi sương Trảng Bàng dẻo thơm đặc trưng cuốn kèm các loại nhân thịt đậm đà, chấm nước sốt tắc bơ hành phi chua cay béo ngậy. Có 2 kích cỡ: Size nhỏ 20$ / Size lớn 25$.',
      en: 'Special dewy soft Trảng Bàng rice paper rolls filled with savory meats and herbs, paired with rich calamansi butter & shallot dip. Available in 2 sizes: Small 20$ / Large 25$.',
      zh: '特制越式露水软米纸卷，口感柔韧软糯，包裹鲜香肉料与香草，配酸甜金桔黄油葱油蘸酱。提供2种规格：小份 20$ / 大份 25$。'
    },
    tags: {
      fr: ['Petite 20$', 'Grande 25$', 'Feuilles Rosée'],
      vi: ['Size Nhỏ 20$', 'Size Lớn 25$', 'Phơi Sương'],
      en: ['Small 20$', 'Large 25$', 'Dew-wetted'],
      zh: ['小份20$', '大份25$', '露水米纸']
    },
    image: 'assets/images/menu-banh-trang-n13-full.png'
  },



  // ☕ BOISSONS & DESSERTS
  {
    id: 'dr-01',
    category: 'drinks',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: 'signature',
    name: {
      fr: 'Café aux Œufs Traditionnel de Hanoï (Cà Phê Trứng)',
      vi: 'Cà Phê Trứng Hà Nội',
      en: 'Hanoi Traditional Egg Coffee (Cà Phê Trứng)',
      zh: '河内经典法式蛋黄奶沫咖啡'
    },
    badgeText: {
      fr: 'Signature',
      vi: 'Signature',
      en: 'Signature Drink',
      zh: '经典招牌'
    },
    desc: {
      fr: 'Café Robusta vietnamien intense surmonté d’une crème de jaune d’œuf battue en mousse aérée comme un sabayon, douce et vanillée.',
      vi: 'Cốt cà phê Robusta Việt Nam đậm đà hòa quyện cùng lớp kem trứng đánh bông mịn như mây, thơm ngậy vị vani và mật ong không hề tanh.',
      en: 'Bold Vietnamese Robusta coffee crowned with an airy, velvety whipped egg yolk custard cream infused with vanilla and honey.',
      zh: '浓郁越式罗布斯塔咖啡，覆以细腻如云朵般的香草蜂蜜打发蛋黄奶泡，香甜丝滑无腥味。'
    },
    tags: {
      fr: ['Onctueux', 'Recette Historique'],
      vi: ['Béo Ngậy', 'Đặc Sản Hà Nội'],
      en: ['Velvety Rich', 'Hanoi Heritage'],
      zh: ['醇厚丝滑', '河内传奇']
    },
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-02',
    category: 'drinks',
    price: 42000,
    priceDisplay: '42.000₫',
    badge: 'bestseller',
    name: {
      fr: 'Café à la Crème Salée de Hué (Cà Phê Muối)',
      vi: 'Cà Phê Muối Cố Đô Xứ Huế',
      en: 'Imperial Hué Salted Cream Coffee (Cà Phê Muối)',
      zh: '顺化皇城咸奶油黑咖啡'
    },
    badgeText: {
      fr: 'Tendance',
      vi: 'Hot Trend',
      en: 'Hot Trend',
      zh: '当季热门'
    },
    desc: {
      fr: 'Café filtre traditionnel à la saveur intense associé à une délicate crème fouettée légèrement salée, créant un équilibre parfait en bouche.',
      vi: 'Cà phê phin truyền thống thơm nồng kết hợp với lớp kem muối mặn mặn béo ngậy, tạo nên hậu vị cân bằng quyến rũ khó quên.',
      en: 'Traditional slow-drip phin coffee blended with a lightly salted velvety cream top, producing an addictive sweet-savory balance.',
      zh: '传统慢滴慢滤浓黑咖啡，顶部淋上一层微咸浓郁奶盖，甜苦与微咸完美平衡。'
    },
    tags: {
      fr: ['Équilibre Sucré-Salé', 'Tendance'],
      vi: ['Hậu Vị Muối Kem', 'Đậm Vị'],
      en: ['Salted Cream', 'Rich Aftertaste'],
      zh: ['海盐奶盖', '回味无穷']
    },
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-03',
    category: 'drinks',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: null,
    name: {
      fr: 'Thé Glacé Pêche, Orange & Citronnelle',
      vi: 'Trà Đào Cam Sả Mát Lạnh',
      en: 'Iced Peach Orange Lemongrass Tea',
      zh: '清爽蜜桃橙香柠檬草冰茶'
    },
    badgeText: { fr: '', vi: '', en: '', zh: '' },
    desc: {
      fr: 'Infusion de thé noir parfumé à la citronnelle fraîche pilée, jus d’orange frais et quartiers de pêche croquants.',
      vi: 'Trà đen thanh dịu kết hợp cùng sả tươi đập dập, nước cốt cam sành mọng nước và miếng đào ngâm vàng giòn sần sật.',
      en: 'Refreshing black tea brewed with crushed lemongrass stalks, fresh squeezed orange juice, and crisp sweet peach slices.',
      zh: '清香红茶萃取，融入鲜捣柠檬草清香与现榨橙汁，附大片酥脆蜜桃果肉。'
    },
    tags: {
      fr: ['Désaltérant', 'Fruits Frais'],
      vi: ['Thanh Nhiệt', 'Đào Miếng Giòn'],
      en: ['Refreshing', 'Crisp Peach'],
      zh: ['清爽解腻', '酥脆蜜桃果肉']
    },
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-04',
    category: 'drinks',
    price: 38000,
    priceDisplay: '38.000₫',
    badge: null,
    name: {
      fr: 'Soupe Douce au Pamplemousse & Lait de Coco (Chè Bưởi)',
      vi: 'Chè Bưởi An Giang Thơm Nước Cốt Dừa',
      en: 'Sweet Pomelo Pith Soup with Coconut Milk (Chè Bưởi)',
      zh: '椰香绿豆爽脆柚子甜汤（Chè Bưởi）'
    },
    badgeText: { fr: '', vi: '', en: '', zh: '' },
    desc: {
      fr: 'Écorce de pamplemousse confite croquante mijotée avec des graines de soja mungo douces, nappée de lait de coco crémeux et parfumé.',
      vi: 'Cùi bưởi giòn sần sật đã được khử đắng kỹ lưỡng nấu cùng đậu xanh bùi bùi và chan đẫm nước cốt dừa béo thơm ngát.',
      en: 'Crispy crunchy candied pomelo rind cooked with tender mung beans and drizzled with fragrant rich coconut cream.',
      zh: '去苦工序精制的爽脆柚皮肉，与软糯绿豆仁慢熬成羹，淋上香浓椰浆。'
    },
    tags: {
      fr: ['Dessert Traditionnel', 'Lait de Coco'],
      vi: ['Ngọt Thanh', 'Cùi Bưởi Giòn'],
      en: ['Vietnamese Sweet', 'Crunchy Pith'],
      zh: ['传统甜品', '浓郁椰浆']
    },
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-05',
    category: 'drinks',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: 'signature',
    name: {
      fr: 'Chè Thái aux Fruits Tropicaux & Lait de Coco',
      vi: 'Chè Thái Sầu Riêng Thập Cẩm',
      en: 'Vietnamese Chè Thái with Durian & Tropical Fruits',
      zh: '榴莲热带水果越式杂锦甜汤（Chè Thái）'
    },
    badgeText: {
      fr: 'Chè Vietnamien',
      vi: 'Chè Đặc Sắc',
      en: 'Signature Chè',
      zh: '招牌甜汤'
    },
    desc: {
      fr: 'Dessert traditionnel vietnamien rafraîchissant garni de perles d’eau de châtaigne croquantes, gelée pandan parfumée, pulpe de durian fondante, jacquier et lait de coco glacé onctueux.',
      vi: 'Món chè trứ danh với thạch hạt lựu củ năng giòn sần sật, sương sa lá dứa, mít nghệ chín vàng, cơm sầu riêng béo thơm chan nước cốt dừa đá lạnh.',
      en: 'Famous Vietnamese sweet dessert soup layered with crunchy water chestnut ruby pearls, pandan jelly, sweet jackfruit, creamy durian pulp, and rich iced coconut milk.',
      zh: '经典越式甜汤，汇聚爽脆马蹄红宝石、斑兰果冻、香甜波罗蜜与浓郁榴莲果肉，淋上冰镇鲜椰浆。'
    },
    tags: {
      fr: ['Dessert Rafraîchissant', 'Chè VN'],
      vi: ['Đặc Sản Chè VN', 'Thơm Béo Cốt Dừa'],
      en: ['Iconic Vietnamese Chè', 'Tropical Sweet'],
      zh: ['地道越式甜点', '浓郁椰香榴莲']
    },
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },

  // 🥮 MÓN BÁNH TRUYỀN THỐNG VN (PÂTISSERIES TRADITIONNELLES VN)
  {
    id: 'roll-01',
    category: 'rolls',
    price: 50000,
    priceDisplay: '50.000₫',
    badge: 'chef',
    name: {
      fr: 'Rouleaux de Printemps Frais aux Crevettes & Porc (Gỏi Cuốn)',
      vi: 'Gỏi Cuốn Tôm Thịt Truyền Thống',
      en: 'Traditional Vietnamese Fresh Spring Rolls (Gỏi Cuốn)',
      zh: '越南鲜虾猪肉鲜米春卷（Gỏi Cuốn）'
    },
    badgeText: {
      fr: 'Frais & Léger',
      vi: 'Tươi Mát',
      en: 'Fresh & Light',
      zh: '清爽健康'
    },
    desc: {
      fr: 'Feuille de riz translucide garnie de crevettes pochées, poitrine de porc, vermicelles de riz et herbes fraîches. Trempés dans une onctueuse sauce cacahuète maison.',
      vi: 'Cuốn bánh tráng mềm trong vắt bọc tôm sú tươi luộc đỏ au, thịt ba chỉ, bún tươi, hẹ lá và rau thơm nhiệt đới, chấm sốt tương đen đậu phộng béo bùi.',
      en: 'Delicate translucent rice paper rolled with fresh steamed prawns, pork belly, rice vermicelli and fresh herbs, served with homemade peanut dipping sauce.',
      zh: '薄透米纸包裹新鲜大虾、薄切五花肉、米粉与清香香草，配以秘制香浓花生沾酱。'
    },
    tags: {
      fr: ['Frais', 'Healthy', 'Sauce Cacahuète'],
      vi: ['Tươi Mát', 'Healthy', 'Chấm Tương Bơ Đậu'],
      en: ['Fresh & Healthy', 'Peanut Sauce'],
      zh: ['清爽不腻', '健康轻食', '特调花生酱']
    },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roll-02',
    category: 'rolls',
    price: 65000,
    priceDisplay: '65.000₫',
    badge: null,
    name: {
      fr: 'Chả Ram Tôm Đất Croustillants du Centre',
      vi: 'Chả Ram Tôm Đất Xứ Nẫu Giòn Tan',
      en: 'Central Vietnam Crispy Mini Prawn Rolls (Chả Ram)',
      zh: '中部特色酥脆迷你鲜虾春卷'
    },
    badgeText: { fr: '', vi: '', en: '', zh: '' },
    desc: {
      fr: 'Petites crevettes fraîches enveloppées dans une fine feuille de riz croustillante, frites jusqu’à perfection dorée. Servies avec herbes et sauce nuoc-mâm aigre-douce.',
      vi: 'Tôm đất tươi ngọt gói bánh tráng phơi sương chiên vàng giòn rụm nhiều giờ, cuốn rau sống chấm nước mắm tỏi ớt chua ngọt kẹo.',
      en: 'Sweet wild prawns wrapped in paper-thin rice sheets, fried to an exceptional prolonged crunch, dipped in sweet-sour garlic chili fish sauce.',
      zh: '鲜甜野生小土虾裹以薄米纸炸至酥脆，配新鲜生菜包食，蘸以酸甜蒜辣鱼露。'
    },
    tags: {
      fr: ['Ultra Croustillant', 'Centre du Vietnam'],
      vi: ['Giòn Rụm Lâu', 'Đặc Sản Miền Trung'],
      en: ['Super Crunchy', 'Central Delicacy'],
      zh: ['极致酥脆', '越南中部名产']
    },
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roll-03',
    category: 'rolls',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: 'bestseller',
    name: {
      fr: 'Bánh Tráng Cuốn (Rouleaux de Papier de Riz Sauce Beurre & Tamarin)',
      vi: 'Bánh Tráng Cuốn Sốt Bơ Me',
      en: 'Bánh Tráng Cuốn (Rice Paper Rolls with Tamarind Butter Dip)',
      zh: '越式酱香米纸卷（Bánh Tráng Cuốn）'
    },
    badgeText: {
      fr: 'Coup de Cœur',
      vi: 'Best Seller',
      en: 'Best Seller',
      zh: '人气热销'
    },
    desc: {
      fr: 'Feuille de riz souple enroulée avec bœuf séché, œufs de caille, échalotes frites, crevettes séchées et herbes rau răm. Servi avec une double sauce beurre onctueux et tamarin caramélisé.',
      vi: 'Bánh tráng dẻo cuốn nhân khô bò, trứng cút, hành phi giòn tan, ruốc tép và rau răm thơm nồng, chấm đẫm sốt bơ trứng béo ngậy cùng sốt me chua ngọt.',
      en: 'Soft chewy rice paper rolled with beef jerky, quail eggs, crispy shallots, dried shrimp and Vietnamese coriander, served with rich egg butter dip and tangy sweet tamarind glaze.',
      zh: '柔韧薄米纸卷入香辣牛肉干、卤鹌鹑蛋、香酥红葱头与鲜香虾米，佐以浓郁鸡蛋黄油酱与酸甜罗望子酱。'
    },
    tags: {
      fr: ['Sauce Beurre Me', 'Gourmand'],
      vi: ['Sốt Bơ Béo Ngậy', 'Ăn Là Mê'],
      en: ['Tamarind Butter', 'Street Favorite'],
      zh: ['黄油罗望子酱', '越吃越上头']
    },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MENU_ITEMS;
}
