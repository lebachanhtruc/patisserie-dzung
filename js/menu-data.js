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



  // ☕ ĐỒ UỐNG (BOISSONS / DRINKS / 饮品 - 9 MÓN CHÍNH THỨC)
  {
    id: 'dr-n40',
    category: 'drinks',
    price: 10,
    priceDisplay: '10$',
    badge: 'bestseller',
    name: {
      fr: 'N40. Thé au Lait (Milk Tea)',
      vi: 'N40. Trà Sữa',
      en: 'N40. Milk Tea',
      zh: 'N40. 经典奶茶'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Popular',
      en: 'Popular',
      zh: '人气热销'
    },
    options: {
      label: {
        fr: 'Saveur au choix :',
        vi: 'Chọn vị trà sữa:',
        en: 'Choose flavor:',
        zh: '选择风味：'
      },
      choices: [
        {
          id: 'traditional',
          name: {
            fr: 'Truyền Thống (Traditionnel)',
            vi: 'Truyền Thống',
            en: 'Traditional',
            zh: '经典原味'
          }
        },
        {
          id: 'jasmine_oolong',
          name: {
            fr: 'Ô Long Lài (Oolong Jasmin)',
            vi: 'Ô Long Lài',
            en: 'Jasmine Oolong',
            zh: '茉莉乌龙'
          }
        }
      ]
    },
    desc: {
      fr: 'Thé au lait onctueux et parfumé, infusé de thé de qualité supérieure et lait velouté. 2 saveurs au choix : Truyền Thống (Traditionnel) ou Ô Long Lài (Oolong Jasmin). Extra toppings au choix.',
      vi: 'Trà sữa thơm ngậy béo bùi từ cốt trà hảo hạng hòa cùng sữa tươi ngọt thanh dịu mát. Gồm 2 vị tùy chọn: Truyền Thống hoặc Ô Long Lài. Thêm Extra Topping trân châu, thạch hấp dẫn.',
      en: 'Classic rich and velvety milk tea brewed fresh with creamy milk. 2 flavor choices: Traditional or Jasmine Oolong (Ô Long Lài). Extra toppings available.',
      zh: '精选上等茶底与鲜奶特调，奶香浓郁丝滑，甜而不腻。提供2种风味可选：经典原味（Truyền Thống）或 茉莉乌龙（Ô Long Lài）。可自选添加丰富配料。'
    },
    tags: {
      fr: ['2 Saveurs', 'Truyền Thống', 'Ô Long Lài'],
      vi: ['2 Vị Lựa Chọn', 'Truyền Thống', 'Ô Long Lài'],
      en: ['2 Flavors', 'Traditional', 'Jasmine Oolong'],
      zh: ['双风味可选', '经典原味', '茉莉乌龙']
    },
    image: 'assets/images/menu-drink-n40.jpg'
  },
  {
    id: 'dr-n41',
    category: 'drinks',
    price: 12,
    priceDisplay: '12$',
    badge: 'signature',
    name: {
      fr: 'N41. Thé au Lait Spécial',
      vi: 'N41. Trà Sữa Đặc Biệt',
      en: 'N41. Special Milk Tea',
      zh: 'N41. 特制奶茶'
    },
    badgeText: {
      fr: 'Spécial',
      vi: 'Đặc Biệt',
      en: 'Special',
      zh: '招牌特调'
    },
    options: {
      label: {
        fr: 'Saveur au choix :',
        vi: 'Chọn vị trà sữa:',
        en: 'Choose flavor:',
        zh: '选择风味：'
      },
      choices: [
        {
          id: 'traditional',
          name: {
            fr: 'Truyền Thống (Traditionnel)',
            vi: 'Truyền Thống',
            en: 'Traditional',
            zh: '经典原味'
          }
        },
        {
          id: 'jasmine_oolong',
          name: {
            fr: 'Ô Long Lài (Oolong Jasmin)',
            vi: 'Ô Long Lài',
            en: 'Jasmine Oolong',
            zh: '茉莉乌龙'
          }
        }
      ]
    },
    desc: {
      fr: 'Recette signature généreusement garnie de flan crémeux, gelées assorties, orge perlé et pudding décoratif 3D. 2 saveurs au choix : Truyền Thống (Traditionnel) ou Ô Long Lài (Oolong Jasmin).',
      vi: 'Trà sữa đặc biệt đỉnh cao ngập tràn full topping: thạch tạo hình 3D xinh xắn, bánh flan béo ngậy, hạt bo bo dẻo thơm và các loại thạch thanh mát. Gồm 2 vị tùy chọn: Truyền Thống hoặc Ô Long Lài.',
      en: 'Signature bucket milk tea packed with cute 3D jelly pudding, rich egg flan, artisanal jellies, and chewy pearl barley. 2 flavor choices: Traditional or Jasmine Oolong (Ô Long Lài).',
      zh: '招牌特制大桶奶茶，配料豪华丰盛：萌趣3D立体奶冻、浓郁焦糖布丁、Q弹薏米仁与精选特色奶冻。提供2种风味可选：经典原味（Truyền Thống）或 茉莉乌龙（Ô Long Lài）。'
    },
    tags: {
      fr: ['2 Saveurs', 'Truyền Thống', 'Ô Long Lài'],
      vi: ['2 Vị Lựa Chọn', 'Truyền Thống', 'Ô Long Lài'],
      en: ['2 Flavors', 'Traditional', 'Jasmine Oolong'],
      zh: ['双风味可选', '经典原味', '茉莉乌龙']
    },
    image: 'assets/images/menu-drink-n41.jpg'
  },
  {
    id: 'dr-n42',
    category: 'drinks',
    price: 9,
    priceDisplay: '9$',
    badge: null,
    name: {
      fr: 'N42. Thé aux Fruits',
      vi: 'N42. Trà Trái Cây',
      en: 'N42. Fruit Tea',
      zh: 'N42. 缤纷水果茶'
    },
    badgeText: { fr: '', vi: '', en: '', zh: '' },
    desc: {
      fr: 'Infusion rafraîchissante de thé au jasmin mariée à une sélection de fruits frais tropicaux juteux, légère et désaltérante.',
      vi: 'Trà hoa quả nhiệt đới tươi mát chiết xuất từ cốt trà lài thơm ngát kết hợp cùng các loại trái cây tươi mọng nước, thanh nhiệt giải khát tuyệt hảo.',
      en: 'Refreshing tropical fruit iced tea brewed with fragrant jasmine tea and infused with juicy fresh fruits. Vibrant and revitalizing.',
      zh: '清香茉莉绿茶茶汤搭配精选鲜切热带多汁水果，果香馥郁，清爽解渴消暑。'
    },
    tags: {
      fr: ['Fruits Frais', 'Désaltérant', 'Léger'],
      vi: ['Trái Cây Tươi', 'Thanh Mát', 'Giải Khát'],
      en: ['Fresh Fruits', 'Refreshing', 'Crisp'],
      zh: ['鲜切水果', '清爽解腻', '维C满满']
    },
    image: 'assets/images/menu-drink-n42.jpg'
  },
  {
    id: 'dr-n43',
    category: 'drinks',
    price: 10,
    priceDisplay: '10$',
    badge: 'signature',
    name: {
      fr: 'N43. Milo Glacé Gourmand',
      vi: 'N43. Milo Dầm',
      en: 'N43. Crushed Ice Milo',
      zh: 'N43. 冰沙美禄'
    },
    badgeText: {
      fr: 'Gourmand',
      vi: 'Món Hot',
      en: 'Popular',
      zh: '经典甜点'
    },
    desc: {
      fr: 'Dessert glacé réconfortant à base de glace pilée, sauce chocolat cacao Milo onctueuse, poudre Milo parfumée et biscuits croquants.',
      vi: 'Món tráng miệng tuổi thơ đậm chất đường phố: đá bào nhuyễn dầm cùng sốt Milo cacao đặc sánh, bột Milo thơm nức, bánh cookie giòn tan và trân châu.',
      en: 'Nostalgic street sweet treat featuring crushed ice drizzled with thick chocolate Milo fudge, extra Milo powder, crunchy cookie bits, and pearls.',
      zh: '地道怀旧街头冰品：细绵冰沙浇淋浓稠美禄可可酱，撒上大量美禄可可粉与香脆曲奇脆片。'
    },
    tags: {
      fr: ['Chocolat Milo', 'Glace Pilée', 'Cacao'],
      vi: ['Milo Dầm', 'Đậm Vị Cacao', 'Ăn Vặt Hot'],
      en: ['Chocolate Milo', 'Crushed Ice', 'Sweet'],
      zh: ['香浓可可', '冰沙甜品', '香脆爽口']
    },
    image: 'assets/images/menu-drink-n43.jpg'
  },
  {
    id: 'dr-n44',
    category: 'drinks',
    price: 7,
    priceDisplay: '7$',
    badge: null,
    name: {
      fr: 'N44. Café Noir Glacé',
      vi: 'N44. Cà Phê Đá',
      en: 'N44. Iced Black Coffee',
      zh: 'N44. 越式冰黑咖啡'
    },
    badgeText: { fr: '', vi: '', en: '', zh: '' },
    desc: {
      fr: 'Café vietnamien authentique extrait au filtre phin traditionnel, intense, corsé et profond avec une belle persistance en bouche.',
      vi: 'Cà phê phin nguyên chất truyền thống Việt Nam, hương thơm nồng nàn, vị đắng đậm đà mạnh mẽ với hậu vị ngọt tinh tế quyến rũ.',
      en: 'Traditional Vietnamese drip coffee served over ice, bold, intense, and aromatic with a pleasant bittersweet finish.',
      zh: '传统越式慢滴黑咖啡，香气浓郁醇厚，苦度适中带自然回甘，提神醒脑。'
    },
    tags: {
      fr: ['Café Filtre Phin', 'Corsé', 'Authentique'],
      vi: ['Phin Truyền Thống', 'Đậm Đà', 'Tỉnh Táo'],
      en: ['Traditional Phin', 'Bold & Strong', 'Coffee'],
      zh: ['传统滴漏', '浓郁苦香', '提神原味']
    },
    image: 'assets/images/menu-drink-n44-ca-phe-da.jpg'
  },
  {
    id: 'dr-n45',
    category: 'drinks',
    price: 7,
    priceDisplay: '7$',
    badge: 'bestseller',
    name: {
      fr: 'N45. Café au Lait Glacé',
      vi: 'N45. Cà Phê Sữa Đá',
      en: 'N45. Iced Milk Coffee',
      zh: 'N45. 冰炼乳咖啡'
    },
    badgeText: {
      fr: 'Incontournable',
      vi: 'Best Seller',
      en: 'Best Seller',
      zh: '招牌推荐'
    },
    desc: {
      fr: 'Le grand classique vietnamien : café filtre phin puissant adouci par du lait concentré sucré onctueux sur un lit de glaçons.',
      vi: 'Biểu tượng ẩm thực đường phố Việt Nam: cốt cà phê phin đen sánh đậm hòa quyện cùng sữa đặc ngọt béo và đá mát lạnh, tạo nên hương vị say đắm.',
      en: 'The world-famous Vietnamese iced coffee: robust dark roast coffee perfectly balanced with creamy sweetened condensed milk over crushed ice.',
      zh: '风靡全球的经典越式滴漏咖啡：浓郁炭焙香与香甜炼乳黄金配比，醇厚甜美，回味悠长。'
    },
    tags: {
      fr: ['Lait Concentré', 'Classique', 'Glace'],
      vi: ['Cà Phê Sữa Đá', 'Sữa Đặc Béo', 'Quốc Hồn Quốc Túy'],
      en: ['Condensed Milk', 'Iconic Coffee', 'Creamy'],
      zh: ['香甜炼乳', '经典越式', '冰爽醇香']
    },
    image: 'assets/images/menu-drink-n45.jpg'
  },
  {
    id: 'dr-n46',
    category: 'drinks',
    price: 7,
    priceDisplay: '7$',
    badge: 'signature',
    name: {
      fr: 'N46. Café Salé',
      vi: 'N46. Cà Phê Muối',
      en: 'N46. Salted Coffee',
      zh: 'N46. 海盐咖啡'
    },
    badgeText: {
      fr: 'Tendance',
      vi: 'Hot Trend',
      en: 'Trending',
      zh: '人气海盐'
    },
    desc: {
      fr: "Café traditionnel intense surmonté d'une onctueuse crème fouettée au sel marin, créant une harmonie sucrée-salée irrésistible.",
      vi: 'Cà phê phin đậm đặc kết hợp với lớp kem sữa muối mặn mà béo ngậy phía trên, vị mặn nhẹ đánh thức vị giác và cân bằng vị đắng ngọt hài hòa.',
      en: 'Bold slow-drip coffee crowned with a velvety lightly salted milk cream layer, bringing out a rich, buttery sweet-savory harmony.',
      zh: '香浓滴漏咖啡搭配顶部细腻绵密微咸海盐奶盖，微咸烘托出咖啡的浓醇与焦糖甜香。'
    },
    tags: {
      fr: ['Crème Salée', 'Harmonieuse', 'Tendance'],
      vi: ['Kem Muối Biển', 'Béo Mặn Hài Hòa', 'Hot Trend'],
      en: ['Salted Cream', 'Velvety', 'Trending'],
      zh: ['海盐奶盖', '咸甜交织', '热门推荐']
    },
    image: 'assets/images/menu-drink-n46.jpg'
  },
  {
    id: 'dr-n47',
    category: 'drinks',
    price: 7,
    priceDisplay: '7$',
    badge: null,
    name: {
      fr: 'N47. Bạc Xỉu (Lait avec Nuage de Café)',
      vi: 'N47. Bạc Xỉu',
      en: 'N47. Bạc Xỉu (Vietnamese-Style Latte)',
      zh: 'N47. 越式拿铁（Bạc Xỉu）'
    },
    badgeText: { fr: '', vi: '', en: '', zh: '' },
    desc: {
      fr: "Boisson douce et crémeuse composée de beaucoup de lait doux et d'une délicate touche de café parfumé. Idéale pour les amateurs de douceur.",
      vi: 'Thức uống thanh tao dành cho người yêu vị ngọt dịu: nhiều sữa tươi và sữa đặc béo ngậy, điểm xuyết một chút cốt cà phê phin thơm nhẹ nhàng.',
      en: 'A sweet and milky treat beloved in Saigon: rich sweetened milk base topped with a gentle splash of aromatic drip coffee.',
      zh: '西贡经典的温柔滋味：浓郁香滑牛奶与炼乳为底，点缀微量芬芳咖啡，奶香馥郁，甘甜适口。'
    },
    tags: {
      fr: ['Doux & Lacté', 'Style Latte', 'Délicat'],
      vi: ['Bạc Xỉu Sài Gòn', 'Ngọt Dịu', 'Nhiều Sữa'],
      en: ['Milky Latte', 'Sweet & Smooth', 'Mild Coffee'],
      zh: ['奶香浓郁', '微苦甘甜', '西贡风味']
    },
    image: 'assets/images/menu-drink-n47.jpg'
  },
  {
    id: 'dr-n48',
    category: 'drinks',
    price: 6,
    priceDisplay: '6$',
    badge: 'bestseller',
    name: {
      fr: 'N48. Thé Glacé au Kumquat',
      vi: 'N48. Trà Tắc',
      en: 'N48. Kumquat Ice Tea',
      zh: 'N48. 金桔冰茶'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Popular',
      en: 'Popular',
      zh: '解暑首选'
    },
    desc: {
      fr: 'Thé au jasmin infusé glacé relevé par le jus acidulé et vivifiant de kumquats frais, ultra rafraîchissant et parfait en toute saison.',
      vi: 'Trà lài ướp hương thơm mát hòa cùng nước cốt tắc (quất) tươi chua thanh, ngọt dịu giải nhiệt tức thì, thức uống đường phố quen thuộc số 1.',
      en: 'Crisp iced jasmine tea infused with freshly squeezed tart kumquat juice and a hint of sweetness. The ultimate thirst-quencher.',
      zh: '清幽茉莉冰茶融入新鲜现榨酸甜小金桔汁，果酸爽口生津，冰凉解暑消渴。'
    },
    tags: {
      fr: ['Populaire', 'Kumquat Frais', 'Rafraîchissant'],
      vi: ['Popular', 'Trà Tắc Tươi', 'Giải Nhiệt'],
      en: ['Popular', 'Fresh Kumquat', 'Refreshing'],
      zh: ['人气推荐', '鲜榨金桔', '清凉解渴']
    },
    image: 'assets/images/menu-drink-n48.jpg'
  },

  // 🥮 MÓN BÁNH TRUYỀN THỐNG VN (PÂTISSERIES TRADITIONNELLES VN - 2 MÓN CHÍNH THỨC)
  {
    id: 'pst-01',
    category: 'rolls',
    price: 3,
    priceDisplay: {
      fr: '3$ / pièce',
      vi: '3$ / cái',
      en: '3$ / pc',
      zh: '3$ / 个'
    },
    badge: 'weekend',
    name: {
      fr: 'Gâteau Étage Pandan & Haricot Mungo (Bánh Da Lợn)',
      vi: 'Bánh Da Lợn',
      en: 'Steamed Pandan & Mung Bean Layer Cake (Bánh Da Lợn)',
      zh: '斑斓绿豆九层糕（Bánh Da Lợn）'
    },
    badgeText: {
      fr: 'Sur Commande / Week-end',
      vi: 'Đặt Trước / Cuối Tuần',
      en: 'Pre-order / Weekend',
      zh: '需预订 / 周末限定'
    },
    desc: {
      fr: 'Gâteau traditionnel vietnamien à la vapeur, fines couches de tapioca au parfum de pandan frais mixé maison et haricot mungo au lait de coco onctueux. 100% ingrédients naturels sans colorant artificiel. ⚠️ Note : Sur commande préalable ou disponible en boutique uniquement les fins de semaine.',
      vi: 'Bánh da lợn dẻo dai thơm lừng với từng lớp lá dứa tươi xay xanh ngát xen kẽ đậu xanh nước cốt dừa béo ngậy ngọt thanh, 100% màu và hương từ lá dứa tươi tự nhiên. ⚠️ Lưu ý: Bánh cần đặt trước hoặc chỉ có sẵn tại tiệm vào các ngày cuối tuần.',
      en: 'Traditional Vietnamese steamed layer cake featuring vibrant fresh-blended pandan jelly and creamy mung bean coconut paste. 100% natural color and fragrance. ⚠️ Note: Pre-order required or available in-store on weekends only.',
      zh: '经典越式传统蒸糕，100%鲜榨斑斓汁制作，晶莹翠绿粉层与香浓椰奶绿豆泥层层相间，口感软糯Q弹清甜。⚠️ 温馨提示：需提前预订，或仅限周末到店供应。'
    },
    tags: {
      fr: ['3$/pièce', '100% Pandan Frais', 'Sur Commande', 'Week-ends'],
      vi: ['3$/cái', '100% Lá Dứa Tươi', 'Cần Đặt Trước', 'Có Vào Cuối Tuần'],
      en: ['3$/pc', '100% Fresh Pandan', 'Pre-order', 'Weekends Only'],
      zh: ['3$/个', '100%鲜榨斑斓', '提前预订', '周末供应']
    },
    image: 'assets/images/menu-banh-da-lon.jpg'
  },
  {
    id: 'pst-02',
    category: 'rolls',
    price: 3,
    priceDisplay: {
      fr: '3$ / pièce',
      vi: '3$ / cái',
      en: '3$ / pc',
      zh: '3$ / 个'
    },
    badge: 'weekend',
    name: {
      fr: 'Gâteau Traditionnel Xu Xuê au Pandan & Haricot Mungo',
      vi: 'Bánh Xu Xuê Lá Dứa Đậu Xanh (Bánh Phu Thê)',
      en: 'Vietnamese Pandan & Mung Bean Husband & Wife Cake (Bánh Xu Xuê)',
      zh: '鲜榨斑斓绿豆传统喜饼（Bánh Xu Xuê）'
    },
    badgeText: {
      fr: 'Sur Commande / Week-end',
      vi: 'Đặt Trước / Cuối Tuần',
      en: 'Pre-order / Weekend',
      zh: '需预订 / 周末限定'
    },
    desc: {
      fr: 'Pâtisserie traditionnelle emblématique : sublime couleur vert émeraude obtenue à partir de 100% de jus de feuilles de pandan fraîches mixées maison (sans arôme ni colorant artificiel), pâte de tapioca translucide croquante aux lanières de noix de coco fraîche et farce onctueuse de haricot mungo. ⚠️ Note : Sur commande préalable ou disponible en boutique uniquement les fins de semaine.',
      vi: 'Món bánh cổ truyền trứ danh: màu xanh ngọc bích từ 100% nước cốt lá dứa tươi xay nhuyễn tự nhiên (nói không với phẩm màu hay hương liệu bột), vỏ bánh bột năng trong suốt giòn dai điểm sợi dừa non sần sật ôm trọn nhân đậu xanh thơm bùi ngọt thanh. ⚠️ Lưu ý: Bánh cần đặt trước hoặc chỉ có sẵn tại tiệm vào các ngày cuối tuần.',
      en: 'Iconic heritage delicacy: beautiful emerald color crafted from 100% fresh pandan leaves blended in-house (zero artificial flavors or food coloring), chewy translucent tapioca jelly with young coconut shreds wrapping velvety sweet mung bean paste. ⚠️ Note: Pre-order required or available in-store on weekends only.',
      zh: '极具象征意义的越式传统名点：甄选100%鲜榨斑斓叶汁调配（绝非香精色素），晶莹剔透Q弹外皮揉入爽脆嫩椰丝，包裹香甜绵密绿豆蓉。⚠️ 温馨提示：需提前预订，或仅限周末到店供应。'
    },
    tags: {
      fr: ['3$/pièce', '100% Pandan Frais', 'Sur Commande', 'Week-ends'],
      vi: ['3$/cái', '100% Lá Dứa Tươi', 'Cần Đặt Trước', 'Có Vào Cuối Tuần'],
      en: ['3$/pc', '100% Fresh Pandan', 'Pre-order', 'Weekends Only'],
      zh: ['3$/个', '100%鲜榨斑斓', '提前预订', '周末供应']
    },
    image: 'assets/images/menu-banh-xu-xue.jpg'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MENU_ITEMS;
}
