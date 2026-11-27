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
      fr: 'Riche et savoureux, avec du porc salé tendre et la touche sucrée-salée du rousong. Ingrédients complets : Baguette croustillante, pâté maison (foie de volaille et gras de porc) onctueux, mayonnaise, légumes marinés, coriandre fraîche ; garni de porc salé, rousong (porc effiloché) et de notre sauce aux herbes exclusive.',
      vi: 'Đậm đà, lạ miệng với thịt heo muối dai mềm, xen lẫn vị mặn ngọt của chà bông. Thành phần trọn vẹn bao gồm: Vỏ bánh mì Baguette giòn rụm, phết patê nhà làm (gan gà và mỡ heo) béo ngậy cùng bơ béo (mayonnaise), thêm đồ chua, ngò rí thanh mát; kết hợp cùng nhân thịt heo muối, chà bông heo và chan sốt thảo mộc độc quyền.',
      en: 'Rich and savory, featuring tender salted pork and the sweet-salty touch of pork floss. Full ingredients: Crispy Baguette, creamy house-made pâté (chicken liver and pork fat), mayonnaise, pickled vegetables, fresh cilantro; filled with salted pork, pork floss, and our exclusive herbal sauce.',
      zh: '浓郁可口，肉质鲜嫩的咸猪肉与咸甜适中的猪肉松完美结合。完整成分：酥脆越式法棍面包、秘制肉酱（鸡肝与猪板油）、香滑蛋黄酱、酸洗萝卜丝、新鲜香菜；搭配咸猪肉、猪肉松以及独家香草酱。'
    },
    tags: {
      fr: ['Populaire', 'Porc Salé', 'Combo Boisson'],
      vi: ['Popular', 'Thịt Muối Đặc Biệt', 'Combo Nước'],
      en: ['Popular', 'Salted Pork', 'Combo Drink'],
      zh: ['人气推荐', '特制咸肉', '含饮料']
    },
    allergens: ['gluten', 'egg', 'soy', 'pork'],
    dietary: ['peanut_free_recipe'],
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
      fr: "Boulettes de porc fondantes au cœur d'œuf salé savoureux, mariées à une sauce tomate aigre-douce. Ingrédients complets : Baguette croustillante, pâté maison (foie de volaille et gras de porc), mayonnaise, légumes marinés, coriandre ; garni de boulettes au cœur d'œuf salé et nappé d'une généreuse sauce tomate maison.",
      vi: 'Viên xíu mại mềm tan, nhân trứng muối bùi béo, hòa quyện cùng sốt cà chua chua ngọt cực đưa vị. Thành phần trọn vẹn bao gồm: Vỏ bánh mì Baguette giòn rụm, phết patê nhà làm (gan gà và mỡ heo) béo ngậy cùng bơ béo (mayonnaise), thêm đồ chua, ngò rí thanh mát; kết hợp cùng nhân xíu mại bọc trứng muối và chan đẫm sốt cà chua ngọt nhà làm.',
      en: 'Melt-in-your-mouth pork meatballs with a rich salted egg yolk core, paired with a sweet and sour tomato sauce. Full ingredients: Crispy Baguette, creamy house-made pâté (chicken liver and pork fat), mayonnaise, pickled vegetables, cilantro; filled with salted egg core meatballs and drenched in house-made tomato sauce.',
      zh: '入口即化的猪肉丸搭配咸香的咸蛋黄内芯，淋上酸甜开胃的番茄酱。完整成分：酥脆越式法棍、秘制肉酱（鸡肝与猪板油）、蛋黄酱、酸洗萝卜、香菜；搭配咸蛋黄肉丸，淋上自制番茄酱。'
    },
    tags: {
      fr: ["Jaune d'Œuf Salé", 'Boulettes', 'Combo Boisson'],
      vi: ['Trứng Muối', 'Xíu Mại', 'Combo Nước'],
      en: ['Salted Egg Yolk', 'Meatballs', 'Combo Drink'],
      zh: ['咸蛋黄', '多汁肉丸', '含饮料']
    },
    allergens: ['gluten', 'egg', 'soy', 'pork'],
    dietary: ['peanut_free_recipe'],
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
      fr: "Poulet effiloché tendre, parfumé à l'ail frit croustillant et beurre d'ail. Ingrédients complets : Baguette croustillante, pâté maison (foie de volaille et gras de porc — peut être retiré sur demande), mayonnaise, légumes marinés, coriandre ; garni de poulet effiloché, d'ail frit et de notre sauce savoureuse (à base de sauce de poisson).",
      vi: 'Gà xé sợi dai ngọt, thơm nức mùi bơ tỏi phi, quyện cùng nước sốt mặn ngọt ăn là ghiền. Thành phần trọn vẹn bao gồm: Vỏ bánh mì Baguette giòn rụm, patê nhà làm (gan gà & mỡ heo — có thể bỏ patê theo yêu cầu), bơ béo (mayonnaise), đồ chua, ngò rí; nhân gà xé sợi mềm, tỏi phi thơm và nước sốt đậm vị (chiết xuất từ nước mắm).',
      en: 'Tender shredded chicken tossed in fragrant roasted garlic butter. Full ingredients: Crispy Baguette, house-made pâté (chicken liver & pork fat — can be omitted upon request), mayonnaise, pickled vegetables, cilantro; filled with shredded chicken, crispy fried garlic, and savory fish-sauce glaze.',
      zh: '鲜嫩手撕鸡肉，散发蒜香黄油与炸蒜的浓郁香气。完整成分：酥脆越式法棍、秘制肉酱（鸡肝与猪板油——可按要求去肉酱）、蛋黄酱、酸洗萝卜、香菜；搭配手撕鸡肉丝、炸蒜及鲜香鱼露酱汁。'
    },
    tags: {
      fr: ['Beurre Ail', 'Poulet Effiloché', 'Combo Boisson'],
      vi: ['Bơ Tỏi Phi', 'Gà Xé', 'Combo Nước'],
      en: ['Garlic Butter', 'Shredded Chicken', 'Combo Drink'],
      zh: ['蒜香牛油', '手撕鸡肉', '含饮料']
    },
    allergens: ['gluten', 'egg', 'dairy', 'fish', 'soy', 'pork'],
    dietary: ['peanut_free_recipe', 'pork_free_option'],
    customNote: {
      fr: 'Option sans porc : demandez « Sans pâté » lors de la commande — 100% sans porc.',
      vi: 'Tùy chọn không thịt heo: dặn tiệm « Bỏ patê » khi đặt — hoàn toàn không dính tới heo.',
      en: 'Pork-Free Option: Ask for "No Pâté" when ordering — 100% pork-free.',
      zh: '无猪肉选项：点餐时说明「不要肉酱（No Pâté）」即可完全不含猪肉。'
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
      fr: "Épicé, salé et croustillant avec une croûte grillée au beurre et sel pimenté, remplie de rousong savoureux. Ingrédients complets : Baguette grillée enduite de beurre et sel pimenté à l'extérieur ; garnie à l'intérieur de pâté maison (foie de volaille et gras de porc), mayonnaise, légumes marinés, coriandre et rousong (porc effiloché).",
      vi: 'Cay cay, mặn mặn, giòn rụm với lớp vỏ nướng bơ muối ớt, ngập nhân chà bông đậm đà bên trong. Thành phần trọn vẹn bao gồm: Vỏ bánh mì Baguette nướng giòn rụm phết sốt bơ muối ớt bên ngoài; bên trong kẹp patê nhà làm (gan gà và mỡ heo) béo ngậy, bơ béo (mayonnaise), đồ chua, ngò rí thanh mát và nhân chà bông heo.',
      en: 'Spicy, salty, and crispy with a butter and chili salt toasted crust, generously filled with savory pork floss. Full ingredients: Baguette toasted with a butter and chili salt coating on the outside; filled inside with house-made pâté (chicken liver and pork fat), mayonnaise, pickled vegetables, cilantro, and pork floss.',
      zh: '香辣咸脆，外层涂满黄油与辣椒盐烤制，内陷夹满咸香肉松。完整成分：外层涂抹黄油与辣椒盐烤脆的法棍；内含秘制肉酱（鸡肝与猪板油）、蛋黄酱、酸洗萝卜、香菜及猪肉松。'
    },
    tags: {
      fr: ['Sel Pimenté', 'Porc Séché', 'Combo Boisson'],
      vi: ['Muối Ớt Cay Tê', 'Chà Bông Heo', 'Combo Nước'],
      en: ['Chili Salt', 'Pork Floss', 'Combo Drink'],
      zh: ['香辣辣椒盐', '猪肉松', '含饮料']
    },
    allergens: ['gluten', 'egg', 'dairy', 'soy', 'pork', 'spicy'],
    dietary: ['peanut_free_recipe'],
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
      fr: "L'arôme irrésistible du porc grillé à la citronnelle, avec des morceaux tendres imprégnés d'épices. Ingrédients complets : Baguette croustillante, pâté maison (foie de volaille et gras de porc), mayonnaise, légumes marinés, coriandre ; garni de porc grillé à la citronnelle et de notre sauce savoureuse (à base de sauce de poisson).",
      vi: 'Thơm lừng mùi sả nướng, miếng thịt heo mềm, thấm đẫm gia vị, đậm chất đường phố. Thành phần trọn vẹn bao gồm: Vỏ bánh mì Baguette giòn rụm, phết patê nhà làm (gan gà và mỡ heo) béo ngậy cùng bơ béo (mayonnaise), thêm đồ chua, ngò rí thanh mát; kết hợp cùng nhân thịt heo nướng sả thơm lừng và chan nước sốt đậm vị (chiết xuất từ nước mắm).',
      en: 'The irresistible aroma of grilled lemongrass pork, featuring tender, perfectly marinated slices. Full ingredients: Crispy Baguette, creamy house-made pâté (chicken liver and pork fat), mayonnaise, pickled vegetables, cilantro; filled with grilled lemongrass pork and a savory sauce (fish sauce based).',
      zh: '无法抗拒的香茅烤肉香气，鲜嫩多汁，充满正宗街头风味。完整成分：酥脆越式法棍、秘制肉酱（鸡肝与猪板油）、蛋黄酱、酸洗萝卜、香菜；搭配香茅烤猪肉及鲜香酱汁（鱼露基底）。'
    },
    tags: {
      fr: ['Populaire', 'Porc Grillé', 'Combo Boisson'],
      vi: ['Popular', 'Nướng Than Hoa', 'Combo Nước'],
      en: ['Popular', 'Charcoal Grilled', 'Combo Drink'],
      zh: ['人气热销', '炭火现烤', '含饮料']
    },
    allergens: ['gluten', 'egg', 'fish', 'soy', 'pork'],
    dietary: ['peanut_free_recipe'],
    image: 'assets/images/menu-banh-mi-n5-thit-nuong.jpg'
  },

  // 🔥 MÓN NÓNG (PLATS CHAUDS / HOT DISHES - 3 MÓN ĐẶC BIỆT)
  {
    id: 'hot-xoi-ga',
    category: 'hot',
    price: 20,
    priceDisplay: '20$',
    badge: 'hot',
    badgeText: {
      fr: '🔥 Plat Chaud · Nouveau',
      vi: '🔥 Món Nóng · Mới',
      en: '🔥 Hot Dish · New',
      zh: '🔥 特色热菜 · 新品'
    },
    name: {
      fr: 'Xôi Gà Mắm Nhĩ · Riz Gluant Poulet Caramélisé',
      vi: 'Xôi Gà Mắm Nhĩ',
      en: 'Xôi Gà Mắm Nhĩ · Sticky Rice & Fish Sauce Chicken',
      zh: '极品鱼露焖鸡糯米饭（Xôi Gà Mắm Nhĩ）'
    },
    desc: {
      fr: 'Plat chaud préparé à la commande : cuisse de poulet dorée et caramélisée dans notre glaçage maison au nước mắm nhĩ grand cru, servie sur riz gluant parfumé moelleux avec légumes marinés (đồ chua), coriandre fraîche et ciboulette.',
      vi: 'Món nóng phục vụ nóng hổi: đùi gà góc tư rim nước mắm nhĩ thượng hạng óng ánh đậm đà, đặt trên xôi nếp dẻo thơm thấm đẫm sốt mắm nhĩ, ăn kèm đồ chua củ cải cà rốt giòn thanh, ngò rí và hành lá.',
      en: 'Served piping hot: tender whole chicken leg quarter glazed in caramelized first-press fish sauce (nước mắm nhĩ), nestled over fragrant steamed sticky rice with crunchy pickled daikon & carrot, cilantro, and scallions.',
      zh: '热气腾腾现做呈献：整只鸡腿以特调头道鱼露慢火焖至油亮焦香，铺在软糯弹牙的香蒸糯米饭上，佐以爽脆酸白红萝卜丝、鲜香菜与翠绿葱花。'
    },
    tags: {
      fr: ['20$ · Plat Chaud', 'Glaçage Mắm Nhĩ', 'Riz Gluant Moelleux'],
      vi: ['20$ · Món Nóng', 'Gà Rim Mắm Nhĩ', 'Xôi Nếp Dẻo'],
      en: ['$20 · Hot Dish', 'Fish Sauce Glaze', 'Sticky Rice'],
      zh: ['20$ · 热食', '头道鱼露鸡腿', '软糯香米饭']
    },
    allergens: ['fish'],
    dietary: ['peanut_free_recipe', 'pork_free', 'dairy_free'],
    portion: { fr: 'Bol généreux chaud', vi: 'Tô lớn nóng hổi', en: 'Hearty hot bowl', zh: '热腾腾大碗装' },
    videoReel: 'gal-reel-xoi-ga',
    image: 'assets/images/menu-hot-xoi-ga.jpg'
  },
  {
    id: 'hot-mi-ga-cay-pho-mai',
    category: 'hot',
    price: 20,
    priceDisplay: '20$',
    badge: 'hot',
    badgeText: {
      fr: '🔥 Plat Chaud · Nouveau',
      vi: '🔥 Món Nóng · Mới',
      en: '🔥 Hot Dish · New',
      zh: '🔥 特色热菜 · 新品'
    },
    name: {
      fr: 'Nouilles Coréennes au Poulet Épicé & Fromage',
      vi: 'Mì Gà Cay Phô Mai Hàn Quốc',
      en: 'Korean Spicy Cheese Chicken Noodles',
      zh: '韩式芝士辣鸡面'
    },
    desc: {
      fr: "Repas complet préparé chaud : cuisse de poulet entière nappée de sauce épicée coréenne et de fromage gratiné fondant, servie avec des nouilles coréennes ondulées, du bok choy croquant et un bol de soupe épicée chaude à part (coffret 2 bols séparés pour emporter). Ingrédients : cuisse de poulet entière, fromage fondant, sauce épicée coréenne, nouilles ondulées, bok choy croquant et soupe épicée.",
      vi: 'Phần ăn nóng hổi đầy đặn gồm nguyên đùi gà góc tư áo sốt cay ngọt kiểu Hàn, phủ phô mai nướng chảy béo ngậy, ăn cùng sợi mì xoăn Hàn Quốc dai ngon, cải thìa giòn ngọt và tô nước súp nóng để riêng (đóng gói 2 hộp riêng khi mang đi để giữ trọn độ dai của mì). Thành phần gồm đùi gà góc tư, phô mai nướng chảy, sốt cay ngọt Hàn Quốc, mì xoăn Hàn Quốc, cải thìa giòn ngọt và nước dùng cay đậm đà.',
      en: 'A hearty piping-hot meal featuring a whole chicken leg quarter glazed in sweet-and-spicy Korean sauce and topped with melted gratinated cheese, served with chewy wavy Korean noodles, crisp bok choy, and a separate bowl of hot spicy soup (packed in 2 separate bowls for takeout to keep noodles bouncy). Ingredients: whole chicken leg quarter, melted cheese, Korean sweet-and-spicy sauce, wavy Korean noodles, crisp bok choy, and rich spicy soup.',
      zh: '热气腾腾的丰盛韩式套餐：整只大鸡腿裹满韩式香辣微甜酱汁并铺上炙烤芝士，搭配劲道韩式卷面与爽脆青江菜，另配一碗热腾腾的香辣汤（外带采用双碗分装，完美保留面条劲道口感）。成分：整只大鸡腿、炙烤芝士、韩式香辣甜酱、韩式卷面、爽脆青江菜和浓郁香辣汤。'
    },
    tags: {
      fr: ['20$ · Plat Chaud', 'Fromage Fondant', '2 Bols Séparés (To-Go)'],
      vi: ['20$ · Món Nóng', 'Phô Mai Nướng Chảy', '2 Hộp Riêng Mang Đi'],
      en: ['$20 · Hot Dish', 'Melted Cheese', '2-Bowl Takeout'],
      zh: ['20$ · 热食', '炙烤芝士', '外带双碗分装']
    },
    allergens: ['gluten', 'dairy', 'soy', 'spicy'],
    dietary: ['peanut_free_recipe', 'pork_free'],
    portion: {
      fr: 'Assiette généreuse ou 2 bols séparés (à emporter)',
      vi: 'Dĩa lớn tại bàn · 2 hộp riêng khi mang đi',
      en: 'Hearty plate or 2 separate bowls (takeout)',
      zh: '堂食大盘 · 外带双碗分装'
    },
    customNote: {
      fr: 'À emporter : livré en 2 bols séparés (nouilles & poulet au fromage + bouillon épicé chaud à part) pour préserver toute la texture des nouilles. Recette sans porc et sans arachides.',
      vi: 'Khi mang đi gồm 2 hộp riêng biệt (hộp mì đùi gà phô mai + hộp súp cay nóng) giúp sợi mì luôn dai ngon đến khi dùng. Công thức không thịt heo & không đậu phộng.',
      en: 'Takeout comes in 2 separate bowls (cheesy chicken & noodles + hot spicy broth) so noodles stay perfectly bouncy until you pour. Pork-free & peanut-free recipe.',
      zh: '外带提供双碗分装（芝士辣鸡面碗 + 热辣汤碗），食用前现浇汤底保持面条劲道。配方不含猪肉及花生。'
    },
    image: 'assets/images/menu-hot-mi-ga-cay-pho-mai.jpg'
  },
  {
    id: 'hot-bap-xao',
    category: 'hot',
    price: 12,
    priceDisplay: '12$',
    badge: 'hot',
    badgeText: {
      fr: '🔥 Plat Chaud · Nouveau',
      vi: '🔥 Món Nóng · Mới',
      en: '🔥 Hot Dish · New',
      zh: '🔥 特色热菜 · 新品'
    },
    name: {
      fr: 'Maïs Sauté au Beurre, Crevettes Séchées & Couennes Croustillantes',
      vi: 'Bắp Xào Bơ Tép Khô & Da Heo Giòn',
      en: 'Sizzling Saigon Butter Corn & Crispy Pork Rinds',
      zh: '西贡黄油虾米脆猪皮炒玉米'
    },
    desc: {
      fr: "Un grand classique de la street food de Saigon préparé chaud à la commande : maïs doux doré au wok avec beurre parfumé à l'ail, crevettes séchées savoureuses, ciboulette fraîche et généreux topping de couennes de porc soufflées ultra-croustillantes — servi avec notre sauce saté maison légèrement pimentée. Pas besoin de réserver 24h à l'avance (~15 min de préparation chaude sur place).",
      vi: 'Hương vị đường phố Sài Gòn nóng hổi giữa lòng Brossard : từng hạt bắp Mỹ ngọt dẻo xào thơm lừng cùng bơ tỏi béo ngậy, quyện tép khô rang đậm vị, hành lá xanh tươi và topping da heo nổ giòn rụm, ăn kèm chén sốt sa tế nhà làm cay nhẹ cực cuốn. Không cần đặt trước 24h — gọi tại tiệm xào nóng ~15 phút (khuyên gọi đặt trước 1 tiếng).',
      en: 'A true Saigon street-food favorite freshly wok-tossed to warm perfection: sweet golden corn glazed in fragrant garlic butter with savory dried shrimp, crisp green scallions, crunchy puffed pork rinds, and a side of house-made chili saté sauce. No 24h pre-order required (~15 min freshly wok-tossed when ordered in-store).',
      zh: '地道西贡街头热食，鲜甜玉米粒搭配浓香蒜蓉黄油、鲜味虾米、翠绿葱花与现炸香脆猪皮碎，淋上秘制微辣沙茶酱。无需提前 24 小时预订，到店下单现炒约 15 分钟出锅（建议提前约 1 小时致电预订免久等）。'
    },
    tags: {
      fr: ['12$ · Plat Chaud', 'Prêt en ~15 min', 'Sans Arachides'],
      vi: ['12$ · Món Nóng', 'Xào Nóng 15 Phút', 'Không Đậu Phộng'],
      en: ['$12 · Hot Dish', 'Fresh ~15 Min', 'Peanut-Free'],
      zh: ['12$ · 热食', '现炒约15分钟', '无花生']
    },
    allergens: ['dairy', 'shellfish', 'pork', 'spicy'],
    dietary: ['peanut_free_recipe'],
    portion: {
      fr: 'Boîte chaude généreuse',
      vi: 'Hộp lớn nóng hổi',
      en: 'Hot generous box',
      zh: '热腾腾大份装'
    },
    customNote: {
      fr: 'Sans précommande 24h : préparé chaud en ~15 min sur place. Conseil : appelez le (514) 880-8388 ~1 h avant pour récupérer chaud sans attente ! Recette sans arachides.',
      vi: 'Không cần đặt trước 24h : ghé tiệm gọi món xào nóng mất ~15 phút. Khuyên bạn nên gọi (514) 880-8388 hoặc inbox IG @patisseriedzung đặt trước ~1 tiếng để lấy nóng liền khỏi chờ ! Công thức không đậu phộng.',
      en: 'No 24h pre-order required: freshly cooked in ~15 min at the shop. Tip: call (514) 880-8388 ~1 hour ahead for zero-wait pickup! Peanut-free recipe.',
      zh: '无需提前 24 小时预订：到店下单现炒约需 15 分钟。建议提前约 1 小时致电 (514) 880-8388 预约取餐免久等！配方不含花生。'
    },
    videoReel: 'gal-reel-bap-xao',
    image: 'assets/images/menu-hot-bap-xao.jpg'
  },

  // 🍽️ MÓN ĂN BÀN TIỆC VIỆT NAM (PLATS DE FÊTE VN - 2 MÓN ĐẶC BIỆT)
  {
    id: 'feast-lau-thai-tom-yum',
    category: 'feast',
    price: 60,
    priceDisplay: {
      fr: '60$',
      vi: '60$',
      en: '$60',
      zh: '60$'
    },
    badge: 'feast',
    badgeText: {
      fr: '🍲 Fondue Fête · 2 Tailles',
      vi: '🍲 Lẩu Tiệc · 2 Size',
      en: '🍲 Party Hotpot · 2 Sizes',
      zh: '🍲 宴席火锅 · 双规格'
    },
    name: {
      fr: 'Lẩu Thái Tom-Yum · Fondue Thaïlandaise Tom-Yum',
      vi: 'Lẩu Thái Tom-Yum',
      en: 'Lẩu Thái Tom-Yum · Thai Tom-Yum Hotpot Set',
      zh: '泰式冬阴功海鲜肥牛火锅（Lẩu Thái Tom-Yum）'
    },
    desc: {
      fr: "Coffret fondue Tom-Yum généreux prêt à savourer à la maison ! Bouillon Tom-Yum thaïlandais riche et parfumé (citronnelle, feuilles de combava, pointe de piment), accompagné d'un grand plateau garni frais : grosses crevettes tigrées (Black Tiger) entières, tranches de bœuf persillé roulées, moules vertes, calmar, bâtonnets de crabe, maïs sucré, champignons variés, bok choy, chou napa et nouilles aux œufs dorées.",
      vi: 'Set Lẩu Thái Tom-Yum mang về đầy đặn chuẩn bàn tiệc! Nước lẩu Tom-Yum chua cay đậm đà thơm mùi sả, lá chanh, ăn kèm mâm đồ bổi tươi sống chất lượng: tôm Tiger nguyên con to chắc thịt, thịt bò cuộn lát, vẹm xanh, mực khứa, thanh cua, bắp Mỹ, nấm rơm, nấm linh chi/kim châm, cải thìa, cải thảo và khay mì trứng vàng sợi mảnh.',
      en: 'Generous take-home Thai Tom-Yum hotpot feast ready to simmer and share! Rich aromatic spicy-tangy Tom-Yum broth infused with lemongrass and kaffir lime leaves, paired with an abundant fresh platter of jumbo whole Black Tiger prawns, rolled marbled beef slices, green-lipped mussels, scored squid, crab sticks, sweet corn, assorted mushrooms, bok choy, napa cabbage, and golden curly egg noodles.',
      zh: '丰盛的家庭聚会外带泰式冬阴功火锅套餐！浓郁酸辣的泰式冬阴功汤底，散发香茅与青柠叶清香，搭配新鲜丰盛大拼盘：整只特大黑虎虾（Black Tiger）、雪花肥牛卷、青口贝、鲜鱿鱼花、蟹柳、甜玉米、草菇及多种鲜菌、青江菜、大白菜与金黄鸡蛋面。'
    },
    options: {
      icon: '🍲',
      label: {
        fr: 'Choisir le format de fondue :',
        vi: 'Chọn size phần lẩu:',
        en: 'Choose hotpot size:',
        zh: '选择火锅规格：'
      },
      choices: [
        {
          id: 'hotpot_3_4',
          price: 60,
          priceDisplay: {
            fr: '60$',
            vi: '60$',
            en: '$60',
            zh: '60$'
          },
          name: {
            fr: 'Format 3–4 pers. (60$)',
            vi: 'Size 3–4 người (60$)',
            en: 'Size 3–4 ppl ($60)',
            zh: '3–4人份 (60$)'
          }
        },
        {
          id: 'hotpot_8_10',
          price: 150,
          priceDisplay: {
            fr: '150$',
            vi: '150$',
            en: '$150',
            zh: '150$'
          },
          name: {
            fr: 'Grand format 8–10 pers. (150$)',
            vi: 'Size 8–10 người (150$)',
            en: 'Party Size 8–10 ppl ($150)',
            zh: '8–10人宴席大份 (150$)'
          }
        }
      ]
    },
    tags: {
      fr: ['60$ (3–4p) · 150$ (8–10p)', 'Crevettes Tiger & Bœuf', 'Bouillon & Nouilles Inclus'],
      vi: ['60$ (3–4ng) · 150$ (8–10ng)', 'Tôm Tiger & Bò Cuộn', 'Kèm Nước Lẩu & Mì Trứng'],
      en: ['$60 (3–4p) · $150 (8–10p)', 'Black Tiger Prawns & Beef', 'Broth & Noodles Included'],
      zh: ['60$(3–4人) · 150$(8–10人)', '黑虎虾与肥牛卷', '附冬阴功汤底与鸡蛋面']
    },
    allergens: ['shellfish', 'fish', 'beef_fresh', 'gluten', 'egg', 'spicy'],
    dietary: ['peanut_free_recipe', 'pork_free', 'dairy_free'],
    portion: {
      fr: '3–4 pers. (60$) ou 8–10 pers. (150$)',
      vi: 'Size 3–4 người (60$) hoặc 8–10 người (150$)',
      en: '3–4 ppl ($60) or 8–10 ppl ($150)',
      zh: '3–4人份 (60$) 或 8–10人份 (150$)'
    },
    customNote: {
      fr: 'Livré en coffret complet (bouillon Tom-Yum, plateau frais garni de crevettes Tiger & bœuf, nouilles aux œufs) — il suffit de faire bouillir et déguster ! Recette sans porc et sans arachides. Appelez le (514) 880-8388 ou écrivez sur IG @patisseriedzung pour commander.',
      vi: 'Đóng gói trọn bộ 3 phần gọn sạch (hũ nước lẩu Tom-Yum, tô topping tôm Tiger & bò cuộn rau nấm, khay mì trứng) — về nhà chỉ cần đun sôi là dùng ngay! Công thức không thịt heo & không đậu phộng. Gọi (514) 880-8388 hoặc inbox IG @patisseriedzung để đặt nhé.',
      en: 'Packed cleanly as a complete 3-part take-home feast (rich Tom-Yum broth, fresh Black Tiger prawn & beef platter, golden egg noodles) — just simmer and enjoy! Pork-free & peanut-free recipe. Call (514) 880-8388 or DM @patisseriedzung to order.',
      zh: '全套三件精致分装外带（冬阴功汤底、黑虎虾肥牛鲜蔬拼盘、鸡蛋面），回家煮沸即可享用！配方不含猪肉及花生。欢迎致电 (514) 880-8388 或私信 IG @patisseriedzung 预订。'
    },
    videoReel: 'gal-reel-lau-thai',
    videoReelDuration: '20',
    image: 'assets/images/menu-feast-lau-thai-tom-yum.jpg'
  },
  {
    id: 'feast-goi-bo-khoai-mon',
    category: 'feast',
    price: 45,
    priceDisplay: {
      fr: '45$',
      vi: '45$',
      en: '$45',
      zh: '45$'
    },
    badge: 'feast',
    badgeText: {
      fr: '🍽️ Plateau Fête · 2 Tailles',
      vi: '🍽️ Bàn Tiệc · 2 Size',
      en: '🍽️ Party Platter · 2 Sizes',
      zh: '🍽️ 宴席拼盘 · 双规格'
    },
    name: {
      fr: 'Gỏi Bò Khoai Môn · Salade de Bœuf & Taro Croustillant',
      vi: 'Gỏi Bò Khoai Môn',
      en: 'Gỏi Bò Khoai Môn · Crispy Taro & Beef Salad Platter',
      zh: '越式炸芋丝牛肉凉拌拼盘（Gỏi Bò Khoai Môn）'
    },
    desc: {
      fr: "Grand classique des tables de fête vietnamiennes ! Bœuf tendre mariné et sauté, fins filaments de taro frits ultra-croustillants, herbes fraîches, légumes marinés croquants et arachides grillées. Servi non mélangé avec notre sauce nuoc-mâm maison à part et chips aux crevettes incluses (bánh phồng tôm) pour garder tout le croquant jusqu’au service — regardez la vidéo guide 4:5 (28s) ci-dessous avant de déguster !",
      vi: 'Món gỏi khai vị trứ danh không thể thiếu trên bàn tiệc Việt Nam! Thịt bò xào thấm vị mềm ngọt, sợi khoai môn chiên vàng giòn rụm, rau thơm tươi xanh, đồ chua hài hòa và đậu phộng rang bùi béo. Tiệm giao phần gỏi chưa trộn, kèm sẵn nước mắm pha và bánh phồng tôm giòn để khách tự trộn trước khi ăn cho trọn độ giòn — xem ngay video hướng dẫn 4:5 (28s) bên dưới!',
      en: 'A signature centerpiece of Vietnamese family feasts! Tender marinated beef, airy golden crispy shredded taro, fresh herbs, crisp pickled veggies, and roasted peanuts. Packed unmixed with house nuoc-mam dressing on the side and shrimp crackers (bánh phồng tôm) included so every bite stays ultra-crunchy — watch our 28s 4:5 mixing guide below before tossing!',
      zh: '越南宴席餐桌必点招牌凉拌拼盘！鲜嫩腌炒牛肉、金黄酥脆炸芋头丝、新鲜香草、爽口酸菜与香脆烤花生。为保持最佳酥脆口感，拼盘与秘制鱼露酱汁分装，并附赠酥脆虾片（Bánh Phồng Tôm）——食用前请点击下方 4:5 拌制视频指南！'
    },
    options: {
      icon: '🍽️',
      label: {
        fr: 'Choisir la taille du plateau :',
        vi: 'Chọn kích cỡ khay tiệc:',
        en: 'Choose platter size:',
        zh: '选择宴席拼盘规格：'
      },
      choices: [
        {
          id: 'tray_3_4',
          price: 45,
          priceDisplay: {
            fr: '45$',
            vi: '45$',
            en: '$45',
            zh: '45$'
          },
          name: {
            fr: 'Plateau 3–4 pers. (45$)',
            vi: 'Khay 3–4 người (45$)',
            en: 'Platter 3–4 ppl ($45)',
            zh: '3–4人份拼盘 (45$)'
          }
        },
        {
          id: 'tray_9_10',
          price: 100,
          priceDisplay: {
            fr: '100$',
            vi: '100$',
            en: '$100',
            zh: '100$'
          },
          name: {
            fr: 'Grand plateau 9–10 pers. (100$)',
            vi: 'Khay tiệc 9–10 người (100$)',
            en: 'Party Platter 9–10 ppl ($100)',
            zh: '9–10人宴席大盘 (100$)'
          }
        }
      ]
    },
    tags: {
      fr: ['45$ (3–4p) · 100$ (9–10p)', 'Sauce & Chips Incluses', 'Mélanger Avant Service'],
      vi: ['45$ (3–4ng) · 100$ (9–10ng)', 'Kèm Mắm & Bánh Phồng Tôm', 'Trộn Khi Ăn Giòn Rụm'],
      en: ['$45 (3–4p) · $100 (9–10p)', 'Sauce & Crackers Included', 'Toss Fresh to Serve'],
      zh: ['45$(3–4人) · 100$(9–10人)', '附鱼露酱与虾片', '吃前现拌更酥脆']
    },
    allergens: ['beef_fresh', 'fish', 'shellfish', 'peanuts', 'spicy'],
    dietary: ['pork_free', 'dairy_free'],
    portion: {
      fr: '3–4 pers. (45$) ou 9–10 pers. (100$)',
      vi: 'Khay 3–4 người (45$) hoặc 9–10 người (100$)',
      en: '3–4 ppl ($45) or 9–10 ppl ($100)',
      zh: '3–4人份 (45$) 或 9–10人份 (100$)'
    },
    customNote: {
      fr: 'Livré non mélangé avec sauce nuoc-mâm maison & chips aux crevettes incluses ! Prévenez-nous si vous souhaitez les arachides à part ou sans piment. Appelez le (514) 880-8388 pour réserver votre plateau.',
      vi: 'Tiệm giao gỏi chưa trộn kèm nước mắm pha sẵn & bánh phồng tôm giòn! Có thể dặn để riêng đậu phộng hoặc không cay. Gọi (514) 880-8388 hoặc inbox IG @patisseriedzung để đặt khay tiệc nhé.',
      en: 'Packed unmixed with house nuoc-mam dressing & shrimp crackers included! Let us know if you prefer peanuts on the side or no chili. Call (514) 880-8388 to reserve your platter.',
      zh: '拼盘与秘制鱼露酱、虾片均随餐附赠分装，食用前拌匀最佳！如需花生分装或免辣请告知，欢迎致电 (514) 880-8388 预订。'
    },
    videoReel: 'gal-tutorial-goi-bo-khoai-mon',
    videoReelDuration: '28',
    tutorialVideo: {
      src: 'assets/videos/goi-bo-khoai-mon-huong-dan.mp4',
      poster: 'assets/images/goi-bo-khoai-mon-huong-dan-poster.jpg',
      width: 720,
      height: 900,
      reelId: 'gal-tutorial-goi-bo-khoai-mon',
      title: {
        fr: '🎬 Vidéo 4:5 : Comment mélanger la salade (28s)',
        vi: '🎬 Video 4:5 Hướng Dẫn Trộn Gỏi Trước Khi Ăn (28s)',
        en: '🎬 4:5 Video Guide: How to Toss Before Eating (28s)',
        zh: '🎬 4:5 拌制视频指南：食用前3步拌匀 (28秒)'
      },
      hint: {
        fr: 'Guide VI · FR · EN : versez le nuoc-mâm, mélangez délicatement de bas en haut et savourez avec les chips aux crevettes !',
        vi: 'Hướng dẫn 3 bước (Việt · Pháp · Anh): rưới đều nước mắm pha, trộn nhẹ từ dưới lên & ăn kèm bánh phồng tôm giòn!',
        en: '3 quick trilingual steps (VI · FR · EN): pour dressing, toss gently from bottom up & enjoy with included shrimp crackers!',
        zh: '三语示范（越·法·英）：淋匀鱼露酱、轻柔翻拌、搭配附赠虾片享用！'
      }
    },
    image: 'assets/images/menu-feast-goi-bo-khoai-mon.jpg'
  },

  // 🍢 ĐỒ ĂN VẶT ĐƯỜNG PHỐ (STREET FOOD & SNACKS - 5 MÓN CHÍNH THỨC)
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
      fr: 'Une collation basique mais addictive avec sa saveur épicée et parfumée aux cacahuètes. Ingrédients : galettes de riz, sauce saté aux crevettes avec cacahuètes grillées et sauce saté pimentée.',
      vi: 'Món ăn vặt cơ bản nhưng cuốn hút với vị cay nồng đặc trưng và đậu phộng rang bùi béo. Thành phần gồm bánh tráng, sa tế tôm (có đậu phộng) và sa tế cay nguyên bản.',
      en: 'An addictive Southern street snack with shrimp chili sate and roasted peanuts. Ingredients: rice paper, shrimp sate sauce (contains peanuts), and original spicy sate.',
      zh: '简单却令人上瘾的街头零食，带有独特香辣风味与花生碎。成分：米纸、沙茶虾米酱（含花生）和原味辣沙茶酱。'
    },
    tags: {
      fr: ['Saté Crevettes', 'Épicé', 'Street Food'],
      vi: ['Sa Tế Tôm', 'Cay Đậm Đà', 'Ăn Vặt Sài Gòn'],
      en: ['Shrimp Satay', 'Spicy', 'Street Snack'],
      zh: ['沙茶虾味', '浓香微辣', '街头小吃']
    },
    allergens: ['peanuts', 'shellfish', 'spicy'],
    dietary: ['dairy_free', 'pork_free'],
    image: 'assets/images/menu-banh-trang-n10.jpg'
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
      fr: 'Roulés de galettes de riz moelleuses avec une garniture complète et savoureuse. Ingrédients : galettes de riz, œufs de caille, bœuf séché, couennes de porc croustillantes, coriandre vietnamienne, mangue aigre. Assaisonnement : sauce saté (crevettes et piment), sel pimenté, ail frit, mayonnaise et sauce kumquat.',
      vi: 'Cuốn bánh tráng dẻo dai bùng nổ hương vị với ngập tràn topping ăn vặt. Thành phần gồm bánh tráng, trứng cút, khô bò, da heo giòn, rau răm, xoài chua. Gia vị trộn kèm: Sa tế (tôm & cay), muối cay, tỏi phi, bơ béo và sốt tắc.',
      en: 'Chewy rice paper rolls bursting with flavors and loaded with savory toppings. Ingredients: rice paper, quail eggs, beef jerky, crispy pork rinds, Vietnamese coriander, sour mango. Seasoning: sate sauce (shrimp & chili), chili salt, fried garlic, mayonnaise, and kumquat sauce.',
      zh: '充满嚼劲的米纸卷，搭配满满的丰富配料，味道爆发。成分：米纸、鹌鹑蛋、牛肉干、炸猪皮、越南香菜、酸芒果。调料：沙茶酱（虾与辣椒）、辣椒盐、炸蒜、蛋黄酱和金桔酱。'
    },
    tags: {
      fr: ['Full Topping', 'Sauce Beurre Tamarin', 'Incontournable'],
      vi: ['Full Topping', 'Sốt Bơ Me', 'Best Seller'],
      en: ['Full Topping', 'Butter Tamarind', 'Best Seller'],
      zh: ['全配料', '黄油罗望子', '招牌热销']
    },
    allergens: ['shellfish', 'egg', 'soy', 'pork', 'beef', 'spicy'],
    dietary: ['peanut_free_recipe', 'dairy_free'],
    portion: { fr: 'À partager · 2–3 pers.', vi: 'Phần lớn · 2–3 người', en: 'Sharing · 2–3 pers.', zh: '分享装 · 2–3人份' },
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
      fr: 'Mélangez vous-même ces garnitures croustillantes, épicées et savoureuses. Ingrédients : galettes de riz coupées, œufs de caille, bœuf séché, couennes de porc croustillantes, coriandre vietnamienne, mangue aigre. Assaisonnement : sauce saté (crevettes et piment) et sel pimenté.',
      vi: 'Tự tay trộn đều các loại topping giòn cay mặn ngọt để thưởng thức theo cách riêng. Thành phần gồm bánh tráng cắt sẵn, trứng cút, khô bò, da heo giòn, rau răm, xoài chua, ăn kèm gia vị sa tế (tôm & cay) và muối cay.',
      en: 'Mix your own crunchy, spicy, and savory toppings to enjoy your way. Ingredients: pre-cut rice paper, quail eggs, beef jerky, crispy pork rinds, Vietnamese coriander, sour mango. Seasoning: sate sauce (shrimp & chili) and chili salt.',
      zh: '亲手拌匀各种酥脆香辣的配料，享受属于你的风味。成分：切片米纸、鹌鹑蛋、牛肉干、炸猪皮、越南香菜、酸芒果。调料：沙茶酱（虾与辣椒）和辣椒盐。'
    },
    tags: {
      fr: ['Kit DIY', 'Frais & Ludique', 'À Partager'],
      vi: ['Tự Trộn Tại Nhà', 'Đầy Đủ Topping', 'Tiện Lợi'],
      en: ['DIY Kit', 'Fun to Mix', 'Fresh'],
      zh: ['DIY套盒', '自拌美味', '新鲜丰富']
    },
    allergens: ['shellfish', 'egg', 'soy', 'pork', 'beef', 'spicy'],
    dietary: ['peanut_free_recipe', 'dairy_free'],
    portion: { fr: 'À partager · 1–2 pers.', vi: 'Phần 1–2 người', en: 'Sharing · 1–2 pers.', zh: '分享装 · 1–2人份' },
    image: 'assets/images/menu-banh-trang-n12.jpg'
  },
  {
    id: 'sn-n13',
    category: 'streetfood',
    price: 20,
    priceDisplay: '20$',
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
    options: {
      icon: '🥢',
      label: {
        fr: 'Choisir la taille :',
        vi: 'Chọn kích cỡ:',
        en: 'Choose size:',
        zh: '选择规格：'
      },
      choices: [
        {
          id: 'small',
          price: 20,
          priceDisplay: '20$',
          name: {
            fr: 'Petite Taille (20$)',
            vi: 'Size Nhỏ (20$)',
            en: 'Small Size (20$)',
            zh: '小份 (20$)'
          }
        },
        {
          id: 'large',
          price: 25,
          priceDisplay: '25$',
          name: {
            fr: 'Grande Taille (25$)',
            vi: 'Size Lớn (25$)',
            en: 'Large Size (25$)',
            zh: '大份 (25$)'
          }
        }
      ]
    },
    desc: {
      fr: 'Galettes de riz assouplies à la rosée, roulées avec une garniture généreuse. Ingrédients : galettes de riz moelleuses, œufs de caille, bœuf séché, couennes de porc croustillantes, coriandre vietnamienne, mangue aigre. Assaisonnement : sauce saté (crevettes et piment), sel pimenté, ail frit, mayonnaise et sauce kumquat. 2 tailles au choix : Petite (20$) / Grande (25$).',
      vi: 'Bánh tráng phơi sương dẻo mềm, cuộn đầy ắp topping đậm vị. Thành phần gồm bánh tráng phơi sương mềm dai, trứng cút, khô bò, da heo giòn, rau răm, xoài chua. Gia vị trộn kèm: Sa tế (tôm & cay), muối cay, tỏi phi, bơ béo (mayonnaise) và sốt tắc. Có 2 kích cỡ: Size nhỏ (20$) / Size lớn (25$).',
      en: 'Dew-wetted soft rice paper, rolled with a generous, flavorful filling. Ingredients: soft dew-wetted rice paper, quail eggs, beef jerky, crispy pork rinds, Vietnamese coriander, sour mango. Seasoning: sate sauce (shrimp & chili), chili salt, fried garlic, mayonnaise, and kumquat sauce. 2 sizes: Small (20$) / Large (25$).',
      zh: '柔韧的露水米纸，卷满丰富可口的配料。成分：柔软露水米纸、鹌鹑蛋、牛肉干、炸猪皮、越南香菜、酸芒果。调料：沙茶酱（虾与辣椒）、辣椒盐、炸蒜、蛋黄酱和金桔酱。提供2种规格：小份 (20$) / 大份 (25$)。'
    },
    tags: {
      fr: ['Petite 20$', 'Grande 25$', 'Feuilles Rosée'],
      vi: ['Size Nhỏ 20$', 'Size Lớn 25$', 'Phơi Sương'],
      en: ['Small 20$', 'Large 25$', 'Dew-wetted'],
      zh: ['小份20$', '大份25$', '露水米纸']
    },
    allergens: ['shellfish', 'egg', 'soy', 'pork', 'beef', 'spicy'],
    dietary: ['peanut_free_recipe', 'dairy_free'],
    portion: { fr: 'À partager · 2–3 pers.', vi: 'Phần lớn · 2–3 người', en: 'Sharing · 2–3 pers.', zh: '分享装 · 2–3人份' },
    image: 'assets/images/menu-banh-trang-n13.jpg'
  },
  {
    id: 'sn-n14',
    category: 'streetfood',
    price: 20,
    priceDisplay: '20$',
    badge: 'signature',
    name: {
      fr: 'Riz Croustillant au Rousong (Cơm Cháy Chà Bông)',
      vi: 'Cơm Cháy Chà Bông',
      en: 'Crispy Rice with Pork Floss (Cơm Cháy Chà Bông)',
      zh: '锅巴肉松（Cơm Cháy Chà Bông）'
    },
    badgeText: {
      fr: 'Spécialité',
      vi: 'Món Hot',
      en: 'Specialty',
      zh: '经典小吃'
    },
    desc: {
      fr: "Morceaux de riz croustillant recouverts de rousong moelleux et d'huile à la ciboulette. Ingrédients : riz croustillant, huile à la ciboulette, rousong (porc effiloché) et sauce trempette salée-sucrée.",
      vi: 'Từng miếng cơm cháy giòn rụm phủ đầy chà bông tơi xốp và mỡ hành béo ngậy. Thành phần gồm cơm cháy giòn rụm, mỡ hành, chà bông heo tơi xốp và sốt chấm mặn ngọt.',
      en: 'Pieces of crunchy rice crackers topped with fluffy pork floss and rich scallion oil. Ingredients: crispy rice crackers, scallion oil, pork floss, and a sweet-savory dipping sauce.',
      zh: '酥脆的锅巴铺满蓬松的猪肉松和香浓的葱油。成分：香脆锅巴、葱油、猪肉松和咸甜蘸酱。'
    },
    tags: {
      fr: ['20$', 'Riz Croustillant', 'Rousong', 'Ciboulette'],
      vi: ['20$/Phần', 'Cơm Cháy Giòn', 'Chà Bông Heo', 'Mỡ Hành Béo'],
      en: ['20$', 'Crispy Rice', 'Pork Floss', 'Scallion Oil'],
      zh: ['20$', '香脆锅巴', '蓬松肉松', '咸甜蘸酱']
    },
    allergens: ['pork', 'fish', 'soy'],
    dietary: ['peanut_free_recipe', 'dairy_free'],
    portion: { fr: 'À partager · 2–3 pers.', vi: 'Phần lớn · 2–3 người', en: 'Sharing · 2–3 pers.', zh: '分享装 · 2–3人份' },
    image: 'assets/images/menu-streetfood-com-chay.jpg'
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
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
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
    allergens: ['dairy', 'egg'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
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
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
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
    allergens: ['dairy', 'gluten', 'soy'],
    dietary: ['vegetarian', 'pork_free', 'peanut_free_recipe'],
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
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-drink-n44.jpg'
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
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
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
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
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
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
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
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-drink-n48.jpg'
  },



  // 🍧 MÓN TRÁNG MIỆNG (DESSERTS VIETNAMIENS - 10 MÓN CHÍNH THỨC N20 - N29)
  {
    id: 'ds-n20',
    category: 'desserts',
    price: 12,
    priceDisplay: '12$',
    badge: 'signature',
    name: {
      fr: 'N20. Chè Thái Đặc Biệt (Dessert Thaïlandais Spécial)',
      vi: 'N20. Chè Thái Đặc Biệt',
      en: 'N20. Thai Dessert Special (Chè Thái Đặc Biệt)',
      zh: 'N20. 招牌泰式甜汤（Chè Thái Đặc Biệt）'
    },
    badgeText: {
      fr: 'Spécialité Maison',
      vi: 'Đặc Biệt',
      en: 'House Special',
      zh: '招牌推荐'
    },
    desc: {
      fr: 'Dessert crémeux et parfumé au durian, combiné avec des gelées et des fruits rafraîchissants. Ingrédients : durian, jacquier, longane, litchi, graines de palmier (Attap), gelée, lait et lait de coco.',
      vi: 'Ly chè béo ngậy thơm lừng sầu riêng, kết hợp cùng các loại thạch và trái cây thanh mát. Thành phần gồm sầu riêng, mít, nhãn, trái vải, hạt đác, rau câu, thạch, sữa, nước cốt dừa.',
      en: 'Creamy dessert infused with fragrant durian, combined with refreshing jellies and tropical fruits. Ingredients: durian, jackfruit, longan, lychee, Attap seeds, agar jelly, milk, and coconut milk.',
      zh: '充满榴莲香气的浓郁甜品，搭配清凉的果冻与热带水果。成分：榴莲、菠萝蜜、龙眼、荔枝、亚答籽、燕菜果冻、牛奶和椰奶。'
    },
    tags: {
      fr: ['Durian Frais', 'Jacquier', 'Lait de Coco', 'Gourmand'],
      vi: ['Sầu Riêng Tươi', 'Mít Vàng', 'Thạch Dừa', 'Cốt Dừa Béo'],
      en: ['Fresh Durian', 'Jackfruit', 'Coconut Milk', 'Popular'],
      zh: ['新鲜榴莲', '香甜波罗蜜', '浓郁椰浆', '热带风味']
    },
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n20.jpg'
  },
  {
    id: 'ds-n21',
    category: 'desserts',
    price: 10,
    priceDisplay: '10$',
    badge: 'bestseller',
    name: {
      fr: 'N21. Chè Mỹ (Dessert Tropical au Lait de Coco)',
      vi: 'N21. Chè Mỹ',
      en: 'N21. Tropical Fruit & Jelly Bowl (Chè Mỹ)',
      zh: 'N21. 美式热带糖水（Chè Mỹ）'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Bán Chạy',
      en: 'Popular',
      zh: '热销推荐'
    },
    desc: {
      fr: 'La version rafraîchissante du Chè Thái sans durian, facile à déguster. Ingrédients : jacquier, longane, litchi, graines de palmier (Attap), gelée, lait et lait de coco.',
      vi: 'Phiên bản thanh mát không sầu riêng của Chè Thái, dễ ăn và giải nhiệt cực tốt. Thành phần gồm mít, nhãn, trái vải, hạt đác, rau câu, thạch, sữa, nước cốt dừa.',
      en: 'The refreshing, durian-free cousin of Chè Thái with sweet tropical fruits. Ingredients: jackfruit, longan, lychee, Attap seeds, agar jelly, milk, and coconut milk.',
      zh: '无榴莲版本的泰式糖水，清凉解渴，老少咸宜。成分：菠萝蜜、龙眼、荔枝、亚答籽、燕菜果冻、牛奶和椰奶。'
    },
    tags: {
      fr: ['Rafraîchissant', 'Gelée Fruitée', 'Noix de Coco', 'Douceur'],
      vi: ['Thanh Mát', 'Thạch Trái Cây', 'Dừa Non', 'Giải Nhiệt'],
      en: ['Refreshing', 'Fruit Jelly', 'Young Coconut', 'Light Sweet'],
      zh: ['清凉解暑', '多重果冻', '鲜嫩椰肉', '香甜可口']
    },
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n21.jpg'
  },
  {
    id: 'ds-n22',
    category: 'desserts',
    price: 5.5,
    priceDisplay: '5.50$',
    badge: null,
    name: {
      fr: 'N22. Tàu Hủ Lạnh (Pudding De Tofu Froid)',
      vi: 'N22. Tàu Hủ Lạnh',
      en: 'N22. Cold Tofu Pudding (Tàu Hủ Lạnh)',
      zh: 'N22. 冷豆腐布丁（Tàu Hủ Lạnh）'
    },
    desc: {
      fr: 'Tofu fondant doux avec une touche de sirop de gingembre parfumé et lait de coco. Ingrédients : tofu soyeux (soja), sirop de gingembre et lait de coco.',
      vi: 'Tàu hủ mềm tan trong miệng, thoảng hương gừng ấm áp. Thành phần gồm tàu hủ mềm mịn, nước đường gừng, nước cốt dừa.',
      en: 'Melt-in-your-mouth silken tofu topped with fragrant ginger syrup and creamy coconut milk. Ingredients: silken tofu (soy), ginger syrup, and coconut milk.',
      zh: '入口即化的细腻豆腐花，散发着温暖的姜汁香气。成分：嫩滑豆腐花（大豆）、姜汁糖水和椰奶。'
    },
    tags: {
      fr: ['Ultra Soyeux', 'Sirop Gingembre', 'Lait de Coco', 'Léger'],
      vi: ['Mềm Mịn Tan Chảy', 'Đường Gừng', 'Cốt Dừa Béo', 'Thanh Mát'],
      en: ['Silky Smooth', 'Ginger Syrup', 'Coconut Cream', 'Refreshing'],
      zh: ['细腻滑嫩', '姜汁清香', '香浓椰浆', '健康清凉']
    },
    allergens: ['soy'],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n22.jpg'
  },
  {
    id: 'ds-n23',
    category: 'desserts',
    price: 6,
    priceDisplay: '6$',
    badge: 'signature',
    name: {
      fr: 'N23. Tàu Hủ Cốm (Pudding De Tofu Au Riz Vert)',
      vi: 'N23. Tàu Hủ Cốm',
      en: 'N23. Green Rice Tofu Pudding (Tàu Hủ Cốm)',
      zh: 'N23. 绿糯米豆腐布丁（Tàu Hủ Cốm）'
    },
    badgeText: {
      fr: 'Nouveauté',
      vi: 'Hương Vị Mới',
      en: 'New',
      zh: '特色推荐'
    },
    desc: {
      fr: 'Version améliorée avec du jeune riz gluant vert aromatique et moelleux. Ingrédients : tofu soyeux (soja), jeune riz gluant vert et lait de coco.',
      vi: 'Phiên bản nâng cấp với hạt cốm xanh dẻo dẻo, thơm lừng. Thành phần gồm tàu hủ mềm mịn, cốm xanh dẻo thơm, nước cốt dừa.',
      en: 'Upgraded version featuring chewy and aromatic young green sticky rice flakes. Ingredients: silken tofu (soy), green sticky rice flakes, and coconut milk.',
      zh: '升级版本，加入软糯香甜的绿扁米。成分：嫩滑豆腐花（大豆）、软糯绿扁米和椰奶。'
    },
    tags: {
      fr: ['Riz Vert Cốm', 'Tofu Fondant', 'Lait de Coco', 'Unique'],
      vi: ['Cốm Non Dẻo Thơm', 'Tàu Hủ Núng Nính', 'Cốt Dừa Béo', 'Thơm Ngọt'],
      en: ['Young Green Rice', 'Silky Tofu', 'Coconut Cream', 'Aromatic'],
      zh: ['软糯青糯米', '细腻豆腐花', '浓郁椰浆', '层次分明']
    },
    allergens: ['soy'],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n23.jpg'
  },
  {
    id: 'ds-n24',
    category: 'desserts',
    price: 5,
    priceDisplay: '5$',
    badge: 'bestseller',
    name: {
      fr: 'N24. Bánh Flan (Crème Caramel Flan)',
      vi: 'N24. Bánh Flan',
      en: 'N24. Caramel Custard Flan (Bánh Flan)',
      zh: 'N24. 焦糖布丁（Bánh Flan）'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Bán Chạy',
      en: 'Popular',
      zh: '人气热销'
    },
    desc: {
      fr: 'Dessert crémeux aux œufs et au lait, mélangé à la légère amertume du caramel. Ingrédients : œufs frais, lait riche, caramel.',
      vi: 'Món tráng miệng mềm mịn, béo ngậy vị trứng sữa quyện cùng chút đắng nhẹ của caramel. Thành phần gồm trứng tươi, sữa béo ngậy, caramel.',
      en: 'Smooth, creamy egg and milk dessert paired with the slight bitterness of caramel. Ingredients: fresh eggs, rich milk, caramel.',
      zh: '丝滑细腻的蛋奶甜品，融合了焦糖的微苦风味。成分：新鲜鸡蛋、浓郁牛奶、焦糖。'
    },
    tags: {
      fr: ['Œufs Frais', 'Caramel Doré', 'Fondant Absolu', 'Café'],
      vi: ['Trứng Sữa Tươi', 'Caramel Óng Ánh', 'Mềm Mịn Tan Chảy', 'Cà Phê Thơm'],
      en: ['Fresh Custard', 'Rich Caramel', 'Velvety Smooth', 'Classic'],
      zh: ['新鲜蛋奶', '浓郁焦糖', '丝滑口感', '经典甜品']
    },
    allergens: ['egg', 'dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n24.jpg'
  },
  {
    id: 'ds-n25',
    category: 'desserts',
    price: 9,
    priceDisplay: '9$',
    badge: 'bestseller',
    name: {
      fr: 'N25. Chè Khúc Bạch (Gelée De Lait Aux Amandes)',
      vi: 'N25. Chè Khúc Bạch',
      en: 'N25. Almond Panna Cotta Sweet Soup (Chè Khúc Bạch)',
      zh: 'N25. 杏仁意式奶冻甜汤（Chè Khúc Bạch）'
    },
    badgeText: {
      fr: 'Populaire',
      vi: 'Bán Chạy',
      en: 'Popular',
      zh: '人气热销'
    },
    desc: {
      fr: 'Cubes de panna cotta fondants et crémeux servis dans un sirop léger au sucre candi. Ingrédients : panna cotta moelleuse (Khuc Bach), litchi, amandes effilées, sirop léger de sucre candi et gélatine.',
      vi: 'Những viên khúc bạch núng nính, béo ngậy tan trong nước đường phèn thanh tao. Thành phần gồm khúc bạch dẻo béo, trái vải, hạt hạnh nhân lát, nước đường phèn nhạt và gelatin.',
      en: 'Jiggly, creamy panna cotta cubes swimming in a delicate rock sugar syrup. Ingredients: chewy creamy Khuc Bach, lychee, sliced almonds, light rock sugar syrup, and gelatin.',
      zh: '柔软细腻的奶冻块漂浮在清甜的冰糖水中。成分：香滑白玉奶冻、荔枝、杏仁片、清淡冰糖水和吉利丁。'
    },
    tags: {
      fr: ['Khúc Bạch', 'Amandes Effilées', 'Litchi Frais', 'Ultra Frais'],
      vi: ['Khúc Bạch', 'Hạnh Nhân Lát', 'Trái Vải', 'Thanh Mát'],
      en: ['Almond Panna Cotta', 'Lychee', 'Sliced Almonds', 'Chilled'],
      zh: ['白玉奶冻', '香脆杏仁片', '鲜甜荔枝', '人气甜品']
    },
    allergens: ['dairy', 'tree_nuts'],
    dietary: ['gluten_free', 'peanut_free_recipe'],
    customNote: {
      fr: 'Contient des amandes effilées et de la gélatine.',
      vi: 'Có hạnh nhân lát và gelatin.',
      en: 'Contains sliced almonds & gelatin.',
      zh: '含杏仁片与食用吉利丁。'
    },
    image: 'assets/images/menu-dessert-n25.jpg'
  },
  {
    id: 'ds-n26',
    category: 'desserts',
    price: 20,
    priceDisplay: '20$',
    badge: 'signature',
    name: {
      fr: 'N26. Rau Câu (Gelée Fruitée)',
      vi: 'N26. Rau Câu (Hộp / Khay)',
      en: 'N26. Artisan Fruit Jelly Box (Rau Câu)',
      zh: 'N26. 手工水果什锦果冻盒装（Rau Câu）'
    },
    badgeText: {
      fr: 'Boîte Familiale',
      vi: 'Hộp Lớn',
      en: 'Family Box',
      zh: '家庭装'
    },
    desc: {
      fr: 'Bloc de gelée frais et croquant avec diverses options de saveurs. Ingrédients : poudre de gelée d\'agar, lait, arômes naturels (Pandan / Cacao / Café).',
      vi: 'Khối thạch mát lạnh, giòn sực với nhiều lựa chọn hương vị đa dạng. Thành phần gồm bột rau câu, sữa, hương vị tự nhiên (Lá dứa / Cacao / Cà phê).',
      en: 'Cool and crunchy jelly block with a variety of flavor options. Ingredients: agar powder, milk, natural flavors (Pandan / Cocoa / Coffee).',
      zh: '清凉爽脆的果冻块，提供多种风味选择。成分：燕菜粉、牛奶、天然香料（斑斓叶 / 可可 / 咖啡）。'
    },
    tags: {
      fr: ['20$/Boîte', 'Pandan & Coco', 'Café & Fleurs', 'À Partager'],
      vi: ['20$/Hộp', 'Hoa Rau Câu', 'Lá Dứa & Cốt Dừa', 'Cà Phê'],
      en: ['20$/Box', 'Floral Jelly', 'Pandan & Coconut', 'To Share'],
      zh: ['20$/大盒', '立体花形', '斑斓椰香', '家庭分享']
    },
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
    portion: { fr: 'Boîte familiale · 4–6 pers.', vi: 'Hộp gia đình · 4–6 người', en: 'Family Box · 4–6 pers.', zh: '家庭大盒 · 4–6人份' },
    image: 'assets/images/menu-dessert-n26.jpg'
  },
  {
    id: 'ds-n27',
    category: 'desserts',
    price: 8,
    priceDisplay: '8$',
    badge: 'signature',
    name: {
      fr: 'N27. Chè Cốm Bưởi (Dessert Pamplemousse & Riz Gluant Vert)',
      vi: 'N27. Chè Cốm Bưởi',
      en: 'N27. Pomelo & Green Sticky Rice Sweet Soup (Chè Cốm Bưởi)',
      zh: 'N27. 柚子绿糯米甜汤（Chè Cốm Bưởi）'
    },
    badgeText: {
      fr: '100% Pamplemousse Frais',
      vi: '100% Cùi Bưởi Thật',
      en: 'Real Pomelo Rind',
      zh: '真柚子肉'
    },
    desc: {
      fr: "La combinaison parfaite du jeune riz gluant vert aromatique et de l'écorce de pomélo croquante. Ingrédients : jeune riz gluant (Cốm), écorces de pomélo, fécule de tapioca, haricots mungo et lait de coco.",
      vi: 'Sự kết hợp hoàn hảo giữa hương cốm mùa thu dẻo thơm và cùi bưởi giòn tan. Thành phần gồm cốm dẻo, cùi bưởi, bột năng, đậu xanh, nước cốt dừa.',
      en: 'The perfect combination of aromatic green sticky rice flakes and crunchy pomelo peel. Ingredients: green sticky rice flakes (Cốm), pomelo peel, tapioca starch, mung bean, and coconut milk.',
      zh: '充满秋季香气的软糯绿扁米与爽脆柚子皮的完美结合。成分：软糯绿扁米、柚子皮、木薯粉、绿豆和椰奶。'
    },
    tags: {
      fr: ['Vrai Pamplemousse', 'Riz Vert Cốm', 'Croquant', 'Sans Additifs'],
      vi: ['100% Cùi Bưởi Thật', 'Cốm Xanh Dẻo', 'Giòn Sần Sật', 'Không Hóa Chất'],
      en: ['Real Pomelo Rind', 'Green Sticky Rice', 'Crunchy', '100% Natural'],
      zh: ['真柚子肉', '清香青糯米', '爽脆可口', '天然纯手工']
    },
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n27.jpg'
  },
  {
    id: 'ds-n28',
    category: 'desserts',
    price: 8,
    priceDisplay: '8$',
    badge: 'bestseller',
    name: {
      fr: 'N28. Chè Bưởi (Dessert Au Pamplemousse Et Haricots Mungo)',
      vi: 'N28. Chè Bưởi',
      en: 'N28. Pomelo & Mung Bean Sweet Dessert (Chè Bưởi)',
      zh: 'N28. 柚子绿豆甜汤（Chè Bưởi）'
    },
    badgeText: {
      fr: '100% Pamplemousse Frais',
      vi: '100% Cùi Bưởi Thật',
      en: 'Real Pomelo Rind',
      zh: '真柚子肉'
    },
    desc: {
      fr: 'Écorces de pomélo croquantes enrobées, mélangées dans une soupe de haricots mungo onctueuse et lait de coco. Ingrédients : écorces de pomélo, haricots mungo, lait de coco et fécule de tapioca.',
      vi: 'Cùi bưởi giòn sần sật, quyện trong lớp chè đậu xanh sánh mịn và cốt dừa béo ngậy. Thành phần gồm cùi bưởi, đậu xanh, nước cốt dừa và BỘT NĂNG.',
      en: 'Crunchy pomelo peel coated in tapioca, mixed in a smooth mung bean and rich coconut milk base. Ingredients: pomelo peel, mung bean, coconut milk, and tapioca starch.',
      zh: '爽脆的柚子皮包裹着木薯粉，融入柔滑的绿豆糊与浓郁椰奶中。成分：柚子皮、绿豆、椰奶和木薯粉。'
    },
    tags: {
      fr: ['Vrai Pamplemousse', 'Haricot Mungo', 'Lait de Coco', 'Traditionnel'],
      vi: ['100% Cùi Bưởi Thật', 'Đậu Xanh Bùi Bở', 'Nước Cốt Dừa Tươi', 'Truyền Thống'],
      en: ['Real Pomelo', 'Mung Beans', 'Coconut Milk', 'Traditional'],
      zh: ['纯正真柚子', '脱皮绿豆', '现榨椰奶', '越式经典']
    },
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n28.jpg'
  },
  {
    id: 'ds-n29',
    category: 'desserts',
    price: 9,
    priceDisplay: '9$',
    badge: 'signature',
    name: {
      fr: 'N29. Sâm Bổ Lượng (Cocktail De Racines Et Fruits Séchés)',
      vi: 'N29. Sâm Bổ Lượng',
      en: 'N29. Ching Bo Leung Tonic Sweet Soup (Sâm Bổ Lượng)',
      zh: 'N29. 清补凉（Sâm Bổ Lượng）'
    },
    badgeText: {
      fr: 'Revitalisant',
      vi: 'Thanh Nhiệt & Bổ Dưỡng',
      en: 'Herbal Tonic',
      zh: '清热养生'
    },
    desc: {
      fr: 'Boisson rafraîchissante, douce et nourrissante aux herbes médicinales. Ingrédients : racine de lotus, graines de lotus, baies de goji, jujubes, varech, longane séché et sirop léger.',
      vi: 'Ly sâm thanh mát, ngọt dịu, kết hợp nhiều loại thảo mộc bồi bổ. Thành phần gồm củ sen, hạt sen, kỷ tử, táo tàu, phổ tai, LONG NHÃN và nước đường mát.',
      en: 'A refreshing, mildly sweet, and nourishing herbal drink. Ingredients: lotus root, lotus seeds, goji berries, jujubes, kelp, dried longan, and light syrup.',
      zh: '清凉微甜的养生草本饮品，滋补润肺。成分：莲藕、莲子、枸杞、红枣、海带、桂圆和清甜糖水。'
    },
    tags: {
      fr: ['Jujubes & Longanes', 'Graines de Lotus', 'Algues Croquantes', 'Bien-être'],
      vi: ['Thanh Nhiệt', 'Hạt Sen & Táo Đỏ', 'Long Nhãn', 'Rong Biển Giòn'],
      en: ['Red Dates', 'Lotus Seeds', 'Seaweed', 'Super Refreshing'],
      zh: ['养生清补', '红枣莲子', '桂圆龙眼', '清热解暑']
    },
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n29.jpg'
  },
  {
    id: 'ds-n30',
    category: 'desserts',
    price: 9,
    priceDisplay: '9$',
    badge: 'bestseller',
    name: {
      fr: "N30. Chè Sương Sâm Sương Sáo (Dessert aux Gelées d'Herbes)",
      vi: 'N30. Chè Sương Sâm Sương Sáo',
      en: 'N30. Herbal Jellies Sweet Soup (Chè Sương Sâm Sương Sáo)',
      zh: 'N30. 仙草绿草冻糖水（Chè Sương Sâm Sương Sáo）'
    },
    badgeText: {
      fr: 'Rafraîchissant',
      vi: 'Thanh Nhiệt',
      en: 'Cooling',
      zh: '清凉解暑'
    },
    desc: {
      fr: "Boisson rustique et rafraîchissante, parfaite pour les journées chaudes. Ingrédients : gelée d'herbe Tiliacora (verte), gelée noire, haricots mungo décortiqués, écorces de pomélo, lait et lait de coco.",
      vi: 'Thức uống giải nhiệt dân dã, mát lạnh ngày hè. Thành phần gồm sâm lá, sương sáo, đậu xanh cà vỏ, cùi bưởi, sữa, nước cốt dừa.',
      en: 'A rustic and refreshing drink, perfect for cooling down on summer days. Ingredients: green grass jelly (Tiliacora), black grass jelly, peeled mung beans, pomelo peel, milk, and coconut milk.',
      zh: '充满民间风味的消暑饮品，夏日清凉首选。成分：绿草冻、仙草冻、去皮绿豆、柚子皮、牛奶和椰奶。'
    },
    tags: {
      fr: ['Gelée Verte', 'Gelée Noire', 'Cùi Bưởi Thật', 'Lait de Coco'],
      vi: ['Sâm Lá Tươi', 'Sương Sáo', 'Cùi Bưởi Thật', 'Đậu Xanh Cà'],
      en: ['Green Grass Jelly', 'Black Grass Jelly', 'Real Pomelo Rind', 'Coconut Milk'],
      zh: ['天然绿草冻', '清爽仙草', '真柚子肉', '香浓椰浆']
    },
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-n30.jpg'
  },
  {
    id: 'ds-sua-chua',
    category: 'desserts',
    price: 3,
    priceDisplay: '3$',
    badge: 'signature',
    name: {
      fr: 'Sữa Chua Phô Mai (Yaourt au Fromage)',
      vi: 'Sữa Chua Phô Mai (Da Ua)',
      en: 'Cheese Yogurt (Sữa Chua Phô Mai)',
      zh: '芝士酸奶（Sữa Chua Phô Mai）'
    },
    badgeText: {
      fr: 'Artisanal',
      vi: 'Lên Men Tự Nhiên',
      en: 'Artisan',
      zh: '纯手工'
    },
    desc: {
      fr: "L'acidité douce fermentée naturellement se marie parfaitement avec le fromage onctueux. Ingrédients : yaourt fermenté naturellement combiné à du fromage crémeux.",
      vi: 'Vị chua thanh lên men tự nhiên hòa quyện hoàn quyện cùng phô mai béo mịn. Thành phần gồm sữa chua lên men tự nhiên kết hợp phô mai béo mịn.',
      en: 'Natural fermented tanginess perfectly blended with creamy cheese. Ingredients: naturally fermented yogurt combined with creamy cheese.',
      zh: '天然发酵的清酸味与顺滑的芝士完美融合。成分：天然发酵酸奶结合浓郁芝士。'
    },
    tags: {
      fr: ['3$/Pot', 'Yaourt Maison', 'Fromage Crémeux', 'Naturel'],
      vi: ['3$/Hũ', 'Lên Men Tự Nhiên', 'Phô Mai Béo Mịn', 'Chua Ngọt Dịu'],
      en: ['3$/Jar', 'House Yogurt', 'Cream Cheese', 'Probiotic'],
      zh: ['3$/杯', '手工酸奶', '浓郁芝士', '天然发酵']
    },
    allergens: ['dairy'],
    dietary: ['vegetarian', 'gluten_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-sua-chua.jpg'
  },
  {
    id: 'ds-mu-trom',
    category: 'desserts',
    price: 9,
    priceDisplay: '9$',
    badge: 'signature',
    name: {
      fr: 'Mủ Trôm Mủ Gòn (Sève de Sterculia & Gomme Kapok)',
      vi: 'Mủ Trôm Mủ Gòn',
      en: 'Sterculia & Kapok Gum Drink (Mủ Trôm Mủ Gòn)',
      zh: '胖大海雪燕饮（Mủ Trôm Mủ Gòn）'
    },
    badgeText: {
      fr: 'Désaltérant',
      vi: 'Giải Nhiệt',
      en: 'Refreshing',
      zh: '清凉解渴'
    },
    desc: {
      fr: 'Boisson rustique et rafraîchissante, très efficace pour se désaltérer. Ingrédients : sève de sterculia croquante et gomme de kapok rafraîchissante.',
      vi: 'Thức uống mộc mạc, nhai dòn dai vui miệng, giải nhiệt cực tốt. Thành phần gồm mủ trôm dòn dai, mủ gòn thanh mát.',
      en: 'A rustic, thirst-quenching botanical drink with fun-to-chew natural plant jelly textures. Ingredients: crunchy sterculia gum and refreshing kapok gum.',
      zh: '纯朴的天然解渴饮品，具有有趣的咀嚼口感，非常适合消暑。成分：爽脆胖大海树胶与清凉雪燕（木棉树胶）。'
    },
    tags: {
      fr: ['Sève Sterculia', 'Gomme Kapok', 'Désaltérant', 'Frais'],
      vi: ['Mủ Trôm Dòn Dai', 'Mủ Gòn Thanh Mát', 'Thanh Lọc', 'Giải Nhiệt'],
      en: ['Sterculia Gum', 'Kapok Gum', 'Thirst Quencher', 'Healthy'],
      zh: ['爽脆树胶', '天然雪燕', '清凉消暑', '润喉生津']
    },
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-dessert-mu-trom.jpg'
  },

  // 🥮 MÓN BÁNH TRUYỀN THỐNG VN (PÂTISSERIES TRADITIONNELLES VN - 3 MÓN CHÍNH THỨC)
  {
    id: 'pst-03',
    category: 'rolls',
    price: 20,
    priceDisplay: {
      fr: '20$ / boîte',
      vi: '20$ / hộp',
      en: '$20 / box',
      zh: '20$ / 盒'
    },
    badge: 'new',
    name: {
      fr: 'Gâteau Éponge aux Œufs Salés (Bánh Bông Lan Trứng Muối)',
      vi: 'Bánh Bông Lan Trứng Muối',
      en: 'Vietnamese Salted Egg Sponge Cake (Bánh Bông Lan Trứng Muối)',
      zh: '越式咸蛋黄肉松蛋糕（Bánh Bông Lan Trứng Muối）'
    },
    badgeText: {
      fr: '📅 Précommande 24h / Appeler',
      vi: '📅 Đặt Trước 1 Ngày / Gọi Hỏi',
      en: '📅 24h Pre-Order / Call Ahead',
      zh: '📅 提前1天预订 / 致电询现货'
    },
    desc: {
      fr: "Un grand classique adoré pour son équilibre parfait entre douceur et saveurs salées ! Une génoise légère et aérienne fraîchement cuite, généreusement garnie de notre sauce maison onctueuse aux jaunes d’œufs et fromage, d’effiloché de porc savoureux (chà bông) et de jaunes d’œufs salés dorés et fondants (20$ / boîte). Précommande 1 jour à l'avance, ou appelez le (514) 880-8388 avant de passer pour vérifier la disponibilité du jour.",
      vi: 'Chiếc bánh "gây thương nhớ" với cốt bánh bông lan nướng mới mềm mịn, xốp nhẹ thơm hương bơ sữa, phủ tràn sốt dầu trứng phô mai béo ngậy tan chảy, chà bông heo tơi sợi đậm đà cùng trứng muối hoàng kim bùi béo mằn mặn cực kỳ bắt vị (hộp đầy đặn 20$). Vui lòng đặt trước 1 ngày, hoặc gọi trước (514) 880-8388 để hỏi xem tiệm có sẵn bánh trong ngày không nhé!',
      en: 'Soft, creamy, savory-sweet perfection! A pillowy-light golden vanilla sponge freshly baked and topped generously with luscious house-made egg-yolk & cheese glaze, fluffy savory pork floss (chà bông), and rich, crumbly golden salted egg yolks ($20 / box). Please pre-order 1 day in advance, or call (514) 880-8388 beforehand to check same-day availability.',
      zh: '甜咸交织的人气经典越式蛋糕！新鲜现烤的松软黄金海绵蛋糕，满满淋上秘制香浓蛋黄芝士酱，铺满蓬松咸香猪肉松（Chà Bông）与沙糯金黄咸蛋黄（20$ / 盒）。请提前 1 天预订，或提前致电 (514) 880-8388 询问当天是否有现货。'
    },
    tags: {
      fr: ['20$ / Boîte', 'Précommande 24h', 'Sauce Œufs & Fromage', 'Sans Arachides'],
      vi: ['20$ / Hộp', 'Đặt Trước 1 Ngày', 'Sốt Trứng Phô Mai', 'Không Đậu Phộng'],
      en: ['$20 / Box', '24h Pre-Order', 'Egg & Cheese Glaze', 'Peanut-Free'],
      zh: ['20$ / 盒', '提前1天预订', '蛋黄芝士酱', '无花生配方']
    },
    allergens: ['egg', 'dairy', 'gluten', 'pork'],
    dietary: ['peanut_free_recipe'],
    portion: {
      fr: 'Boîte généreuse (à partager)',
      vi: 'Hộp đầy đặn',
      en: 'Generous sharing box',
      zh: '满满一整盒（适合分享）'
    },
    customNote: {
      fr: '📅 Précommande 1 jour (24h) à l’avance recommandée — ou appelez le (514) 880-8388 avant de passer pour vérifier si nous en avons de disponible aujourd’hui ! Recette sans arachides.',
      vi: '📅 Bánh cần đặt trước 1 ngày — hoặc gọi trước (514) 880-8388 để hỏi xem hôm nay tiệm có sẵn không nhé! Công thức không đậu phộng.',
      en: '📅 Please pre-order 1 day (24h) in advance — or call (514) 880-8388 ahead of time to check if we have boxes available today! Peanut-free recipe.',
      zh: '📅 建议提前 1 天（24小时）预订 — 或到店前先致电 (514) 880-8388 询问当天是否有现货！配方不含花生。'
    },
    videoReel: 'gal-reel-bltm',
    videoReelDuration: '30',
    image: 'assets/images/menu-banh-bong-lan-trung-muoi.jpg'
  },
  {
    id: 'pst-01',
    category: 'rolls',
    price: 8,
    priceDisplay: {
      fr: '8$ / boîte (3 mcx)',
      vi: '8$ / hộp 3 cái',
      en: '8$ / box of 3',
      zh: '8$ / 3个装'
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
    options: {
      icon: '📦',
      label: {
        fr: 'Choisir le format boîte :',
        vi: 'Chọn quy cách hộp:',
        en: 'Choose box size:',
        zh: '选择包装规格：'
      },
      choices: [
        {
          id: 'box_3',
          price: 8,
          priceDisplay: {
            fr: '8$ / boîte (3 mcx)',
            vi: '8$ / hộp 3 cái',
            en: '8$ / box of 3',
            zh: '8$ / 3个装'
          },
          name: {
            fr: 'Boîte de 3 (8$)',
            vi: 'Hộp 3 cái (8$)',
            en: 'Box of 3 ($8)',
            zh: '3个装 (8$)'
          }
        },
        {
          id: 'box_6',
          price: 15,
          priceDisplay: {
            fr: '15$ / boîte (6 mcx)',
            vi: '15$ / hộp 6 cái',
            en: '15$ / box of 6',
            zh: '15$ / 6个装'
          },
          name: {
            fr: 'Boîte de 6 (15$)',
            vi: 'Hộp 6 cái (15$)',
            en: 'Box of 6 ($15)',
            zh: '6个装 (15$)'
          }
        }
      ]
    },
    desc: {
      fr: 'Gâteau traditionnel moelleux, parfumé aux feuilles de pandan et aux haricots mungo. Ingrédients : haricots mungo, fécule de tapioca et farine de riz au parfum de pandan. Vendu par boîte de 3 pièces (8$) ou 6 pièces (15$). ⚠️ Note : Sur commande préalable ou disponible en boutique uniquement les fins de semaine.',
      vi: 'Món bánh quê dẻo dai, thơm nức mùi lá dứa và bùi bùi vị đậu xanh. Thành phần gồm đậu xanh, bột năng & bột gạo dẻo thơm lá dứa. Bán theo hộp: 3 cái 8$, 6 cái 15$. ⚠️ Lưu ý: Bánh cần đặt trước hoặc chỉ có sẵn tại tiệm vào các ngày cuối tuần.',
      en: 'A traditional chewy cake, fragrant with pandan leaves and nutty mung beans. Ingredients: mung bean, tapioca starch & rice flour with pandan flavor. Sold in boxes of 3 pcs ($8) or 6 pcs ($15). ⚠️ Note: Pre-order required or available in-store on weekends only.',
      zh: '充满家乡风味的软糯糕点，散发着斑斓叶的清香与绿豆的醇厚。成分：绿豆、木薯粉与带有斑斓叶香味的粘米粉。按盒售卖：3个装 8$、6个装 15$。⚠️ 温馨提示：需提前预订，或仅限周末到店供应。'
    },
    tags: {
      fr: ['Boîte 3 mcx 8$', 'Boîte 6 mcx 15$', '100% Pandan Frais', 'Week-ends'],
      vi: ['Hộp 3 cái 8$', 'Hộp 6 cái 15$', '100% Lá Dứa Tươi', 'Có Vào Cuối Tuần'],
      en: ['Box of 3 ($8)', 'Box of 6 ($15)', '100% Fresh Pandan', 'Weekends Only'],
      zh: ['3个装 8$', '6个装 15$', '100%鲜榨斑斓', '周末供应']
    },
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-banh-da-lon.jpg'
  },
  {
    id: 'pst-02',
    category: 'rolls',
    price: 10,
    priceDisplay: {
      fr: '10$ / boîte (3 mcx)',
      vi: '10$ / hộp 3 cái',
      en: '10$ / box of 3',
      zh: '10$ / 3个装'
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
    options: {
      icon: '📦',
      label: {
        fr: 'Choisir le format boîte :',
        vi: 'Chọn quy cách hộp:',
        en: 'Choose box size:',
        zh: '选择包装规格：'
      },
      choices: [
        {
          id: 'box_3',
          price: 10,
          priceDisplay: {
            fr: '10$ / boîte (3 mcx)',
            vi: '10$ / hộp 3 cái',
            en: '10$ / box of 3',
            zh: '10$ / 3个装'
          },
          name: {
            fr: 'Boîte de 3 (10$)',
            vi: 'Hộp 3 cái (10$)',
            en: 'Box of 3 ($10)',
            zh: '3个装 (10$)'
          }
        },
        {
          id: 'box_5',
          price: 15,
          priceDisplay: {
            fr: '15$ / boîte (5 mcx)',
            vi: '15$ / hộp 5 cái',
            en: '15$ / box of 5',
            zh: '15$ / 5个装'
          },
          name: {
            fr: 'Boîte de 5 (15$)',
            vi: 'Hộp 5 cái (15$)',
            en: 'Box of 5 ($15)',
            zh: '5个装 (15$)'
          }
        }
      ]
    },
    desc: {
      fr: 'Croûte translucide et croquante enveloppant une garniture douce aux haricots mungo. Ingrédients : garniture douce aux haricots mungo, croûte translucide à la fécule de tapioca. Vendu par boîte de 3 pièces (10$) ou 5 pièces (15$). ⚠️ Note : Sur commande préalable ou disponible en boutique uniquement les fins de semaine.',
      vi: 'Lớp vỏ trong vắt giòn sần sật ôm lấy nhân đậu xanh sên ngọt ngào. Thành phần gồm đậu xanh sên ngọt, lớp vỏ bột năng trong vắt, giòn sần sật. Bán theo hộp: 3 cái 10$, 5 cái 15$. ⚠️ Lưu ý: Bánh cần đặt trước hoặc chỉ có sẵn tại tiệm vào các ngày cuối tuần.',
      en: 'Translucent, crunchy crust embracing a sweet mung bean filling. Ingredients: sweet mung bean filling, translucent and crunchy tapioca crust. Sold in boxes of 3 pcs ($10) or 5 pcs ($15). ⚠️ Note: Pre-order required or available in-store on weekends only.',
      zh: '晶莹剔透、爽脆的外皮包裹着香甜的绿豆内陷。成分：香甜绿豆馅，晶莹剔透的脆木薯皮。按盒售卖：3个装 10$、5个装 15$。⚠️ 温馨提示：需提前预订，或仅限周末到店供应。'
    },
    tags: {
      fr: ['Boîte 3 mcx 10$', 'Boîte 5 mcx 15$', '100% Pandan Frais', 'Week-ends'],
      vi: ['Hộp 3 cái 10$', 'Hộp 5 cái 15$', '100% Lá Dứa Tươi', 'Có Vào Cuối Tuần'],
      en: ['Box of 3 ($10)', 'Box of 5 ($15)', '100% Fresh Pandan', 'Weekends Only'],
      zh: ['3个装 10$', '5个装 15$', '100%鲜榨斑斓', '周末供应']
    },
    allergens: [],
    dietary: ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'pork_free', 'peanut_free_recipe'],
    image: 'assets/images/menu-banh-xu-xue.jpg'
  }
];

const BANQUET_SET_MENUS = [
  {
    id: 'set-01',
    code: 'SET 01',
    tier: 'classic',
    ribbon: {
      vi: 'Ấm Cúng · Gia Đình',
      fr: 'Convivial · Famille',
      en: 'Warm & Classic',
      zh: '经典温馨'
    },
    name: {
      vi: 'SUM VẦY',
      fr: 'SUM VẦY',
      en: 'SUM VẦY',
      zh: '团圆宴 · SUM VẦY'
    },
    meaning: {
      vi: 'Tiệc Gia Đình & Liên Hoan',
      fr: 'Convivialité & Partage',
      en: 'Family Gathering',
      zh: '合家欢聚 · 温馨团圆'
    },
    serves: {
      vi: 'Bàn 10 khách · 5 món tròn vị',
      fr: 'Table de 10 convives · 5 services',
      en: 'Table for 10 Guests · 5 Courses',
      zh: '10人桌席 · 五道全宴'
    },
    ctaLabel: {
      vi: '📞 Hỏi giá Set 01 · (514) 880-8388',
      fr: '📞 Tarif Set 01 · (514) 880-8388',
      en: '📞 Quote Set 01 · (514) 880-8388',
      zh: '📞 询套餐一报价 · (514) 880-8388'
    },
    courses: [
      {
        num: '01',
        title: { vi: 'GỎI / KHAI VỊ', fr: 'SALADE / ENTRÉE', en: 'SALAD / APPETIZER', zh: '开胃凉菜' },
        items: [
          {
            name: {
              vi: 'Gỏi gà xé bắp cải',
              fr: 'Salade de poulet effiloché au chou croquant (Gỏi gà xé bắp cải)',
              en: 'Shredded Chicken & Crunchy Cabbage Salad (Gỏi Gà Xé Bắp Cải)',
              zh: '越式手撕鸡丝包菜沙拉'
            }
          }
        ]
      },
      {
        num: '02',
        title: { vi: 'SÚP', fr: 'SOUPE', en: 'SOUP', zh: '汤品' },
        items: [
          {
            name: {
              vi: 'Súp bắp cua',
              fr: 'Velouté de crabe et maïs doux (Súp bắp cua)',
              en: 'Sweet Corn & Crab Meat Soup (Súp Bắp Cua)',
              zh: '蟹肉玉米羹'
            }
          }
        ]
      },
      {
        num: '03',
        title: { vi: 'MÓN CHÍNH', fr: 'PLATS PRINCIPAUX', en: 'MAIN COURSES', zh: '主菜' },
        items: [
          {
            name: {
              vi: 'Gà nướng muối ớt + Xôi',
              fr: 'Poulet grillé au sel pimenté + Riz gluant parfumé',
              en: 'Chili-Salt Grilled Chicken + Sticky Rice',
              zh: '椒盐烤鸡配香糯米饭'
            }
          },
          {
            name: {
              vi: 'Bò (hoặc Sườn) nấu lagu rau củ',
              fr: 'Ragoût mijoté au bœuf (ou côtes de porc) et légumes (Lagu)',
              en: 'Vietnamese Beef (or Pork Rib) Vegetable Ragout (Lagu)',
              zh: '越式茄汁蔬菜炖牛肉（或炖排骨）'
            }
          }
        ]
      },
      {
        num: '04',
        title: { vi: 'LẨU', fr: 'FONDUE / HOTPOT', en: 'HOTPOT', zh: '火锅' },
        items: [
          {
            name: {
              vi: 'Lẩu hải sản nấm',
              fr: 'Fondue aux fruits de mer et champignons',
              en: 'Seafood & Mushroom Hotpot',
              zh: '菌菇海鲜火锅'
            },
            note: {
              vi: '(tôm, mực, hải sản theo mùa · kèm Mì trứng)',
              fr: '(crevettes, calmar, fruits de mer de saison · nouilles aux œufs)',
              en: '(shrimp, squid, seasonal seafood · served with egg noodles)',
              zh: '（大虾、鱿鱼、时令海鲜 · 配鸡蛋面）'
            }
          }
        ]
      },
      {
        num: '05',
        title: { vi: 'TRÁNG MIỆNG', fr: 'DESSERT', en: 'DESSERT', zh: '甜品' },
        items: [
          {
            name: {
              vi: '10 tofu nhỏ',
              fr: '10 douceurs de tofu soyeux',
              en: '10 Individual Silken Tofu Puddings',
              zh: '10份手工嫩豆花'
            },
            note: {
              vi: '(hoặc Chè sâm bổ lượng / Da Ua)',
              fr: '(ou Chè sâm bổ lượng / Yaourt maison)',
              en: '(or Sâm Bổ Lượng Sweet Soup / House Yogurt)',
              zh: '（或可换清补凉 / 手工酸奶）'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'set-02',
    code: 'SET 02',
    tier: 'featured',
    ribbon: {
      vi: '★ Được Chọn Nhiều',
      fr: '★ Le Plus Populaire',
      en: '★ Most Popular',
      zh: '★ 人气首选'
    },
    name: {
      vi: 'PHÚ QUÝ',
      fr: 'PHÚ QUÝ',
      en: 'PHÚ QUÝ',
      zh: '富贵宴 · PHÚ QUÝ'
    },
    meaning: {
      vi: 'Tiệc Đãi Khách & Mừng Thọ',
      fr: 'Prospérité & Célébration',
      en: 'Prosperity Feast',
      zh: '宾主尽欢 · 富贵满堂'
    },
    serves: {
      vi: 'Bàn 10 khách · 5 món đặc sắc',
      fr: 'Table de 10 convives · 5 services',
      en: 'Table for 10 Guests · 5 Courses',
      zh: '10人桌席 · 五道臻宴'
    },
    ctaLabel: {
      vi: '📞 Hỏi giá Set 02 · (514) 880-8388',
      fr: '📞 Tarif Set 02 · (514) 880-8388',
      en: '📞 Quote Set 02 · (514) 880-8388',
      zh: '📞 询套餐二报价 · (514) 880-8388'
    },
    courses: [
      {
        num: '01',
        title: { vi: 'KHAI VỊ', fr: 'ENTRÉES', en: 'APPETIZERS', zh: '开胃拼盘' },
        badge: { vi: '3 món', fr: '3 choix', en: '3 dishes', zh: '三拼' },
        items: [
          {
            name: {
              vi: 'Gỏi bò khoai môn',
              fr: 'Salade de bœuf au taro croustillant (Gỏi bò khoai môn)',
              en: 'Crispy Taro & Beef Salad (Gỏi Bò Khoai Môn)',
              zh: '炸芋丝牛肉凉拌'
            },
            note: {
              vi: '(khoai môn chiên + rau thơm)',
              fr: '(taro frit doré + herbes fraîches)',
              en: '(crispy fried taro + fresh herbs)',
              zh: '（金黄炸芋丝 + 新鲜香草）'
            }
          },
          {
            name: {
              vi: 'Gỏi cuốn tôm thịt',
              fr: 'Rouleaux de printemps frais aux crevettes et porc',
              en: 'Fresh Shrimp & Pork Summer Rolls (Gỏi Cuốn)',
              zh: '越式鲜虾猪肉春卷'
            }
          },
          {
            name: {
              vi: 'Nem nướng',
              fr: 'Brochettes de porc grillé parfumé (Nem nướng)',
              en: 'Grilled Vietnamese Pork Skewers (Nem Nướng)',
              zh: '炭烤越式香肠串（Nem Nướng）'
            }
          }
        ]
      },
      {
        num: '02',
        title: { vi: 'SÚP', fr: 'SOUPE', en: 'SOUP', zh: '汤品' },
        items: [
          {
            name: {
              vi: 'Súp hải sản chua cay',
              fr: 'Soupe aigre-piquante aux fruits de mer',
              en: 'Hot & Sour Seafood Soup',
              zh: '酸辣海鲜汤'
            }
          }
        ]
      },
      {
        num: '03',
        title: { vi: 'MÓN CHÍNH', fr: 'PLATS PRINCIPAUX', en: 'MAIN COURSES', zh: '主菜' },
        items: [
          {
            name: {
              vi: 'Sườn hầm pate + Bánh mì',
              fr: 'Côtes de porc mijotées au pâté maison + Baguettes',
              en: 'Braised Pork Ribs in House Pâté + Crusty Baguettes',
              zh: '秘制肝酱炖排骨配脆皮法包'
            }
          },
          {
            name: {
              vi: 'Sườn bò nướng đặc biệt',
              fr: 'Côtes de bœuf grillées spécialité du chef',
              en: "Chef's Signature Grilled Beef Short Ribs",
              zh: '招牌特制炭烤牛小排'
            }
          }
        ]
      },
      {
        num: '04',
        title: { vi: 'LẨU', fr: 'FONDUE / HOTPOT', en: 'HOTPOT', zh: '火锅' },
        items: [
          {
            name: {
              vi: 'Lẩu Thái hải sản',
              fr: 'Fondue thaïlandaise aux fruits de mer',
              en: 'Thai-Style Seafood Hotpot',
              zh: '泰式冬阴功海鲜火锅'
            },
            note: {
              vi: '(kèm Bún tươi)',
              fr: '(accompagnée de vermicelles de riz frais)',
              en: '(served with fresh rice vermicelli)',
              zh: '（配新鲜米粉）'
            }
          }
        ]
      },
      {
        num: '05',
        title: { vi: 'TRÁNG MIỆNG', fr: 'DESSERT', en: 'DESSERT', zh: '甜品' },
        items: [
          {
            name: {
              vi: 'Bánh Flan',
              fr: 'Flan au caramel fondant (Bánh Flan)',
              en: 'Silky Caramel Custard Flan (Bánh Flan)',
              zh: '手工焦糖布丁'
            },
            note: {
              vi: '(hoặc Chè Khúc Bạch / chọn từ Set 1)',
              fr: '(ou Chè Khúc Bạch / au choix depuis le Set 01)',
              en: '(or Chè Khúc Bạch / any Set 01 dessert)',
              zh: '（或可换杏仁豆腐糖水 / 任选套餐一甜品）'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'set-03',
    code: 'SET 03',
    tier: 'prestige',
    ribbon: {
      vi: '✦ Đẳng Cấp Thượng Hạng',
      fr: '✦ Grand Prestige',
      en: '✦ Imperial Prestige',
      zh: '✦ 至尊御宴'
    },
    name: {
      vi: 'THƯỢNG HẠNG',
      fr: 'THƯỢNG HẠNG',
      en: 'THƯỢNG HẠNG',
      zh: '至尊御宴 · THƯỢNG HẠNG'
    },
    meaning: {
      vi: 'Đại Tiệc & Sự Kiện Trọng Đại',
      fr: 'Prestige & Grandes Réceptions',
      en: 'Imperial Celebration',
      zh: '山珍海味 · 至尊礼遇'
    },
    serves: {
      vi: 'Bàn 10 khách · 5 món hảo hạng',
      fr: 'Table de 10 convives · 5 services d’exception',
      en: 'Table for 10 Guests · 5 Prestige Courses',
      zh: '10人桌席 · 五道至尊御宴'
    },
    ctaLabel: {
      vi: '📞 Hỏi giá Set 03 · (514) 880-8388',
      fr: '📞 Tarif Set 03 · (514) 880-8388',
      en: '📞 Quote Set 03 · (514) 880-8388',
      zh: '📞 询套餐三报价 · (514) 880-8388'
    },
    courses: [
      {
        num: '01',
        title: { vi: 'KHAI VỊ', fr: 'ENTRÉES', en: 'APPETIZERS', zh: '开胃拼盘' },
        badge: { vi: '3 món', fr: '3 choix', en: '3 dishes', zh: '三拼' },
        items: [
          {
            name: {
              vi: 'Gỏi bưởi tai heo, tôm',
              fr: 'Salade de pomélo frais, crevettes et oreille de porc croquante',
              en: 'Fresh Pomelo, Shrimp & Crispy Pork Ear Salad',
              zh: '鲜柚鲜虾脆耳沙拉'
            }
          },
          {
            name: {
              vi: 'Chạo tôm',
              fr: 'Mousse de crevettes grillées sur canne à sucre (Chạo tôm)',
              en: 'Grilled Sugarcane Shrimp Paste (Chạo Tôm)',
              zh: '越式甘蔗虾'
            }
          },
          {
            name: {
              vi: 'Bò bía',
              fr: 'Rouleaux Bò Bía traditionnels de Saigon',
              en: 'Saigon-Style Popiah Fresh Rolls (Bò Bía)',
              zh: '西贡传统薄饼卷（Bò Bía）'
            }
          }
        ]
      },
      {
        num: '02',
        title: { vi: 'SÚP', fr: 'SOUPE', en: 'SOUP', zh: '汤品' },
        items: [
          {
            name: {
              vi: 'Súp sơn hào hải vị',
              fr: 'Soupe impériale aux trésors de la mer',
              en: 'Imperial Eight-Treasure Seafood Soup',
              zh: '海味珍品皇汤'
            },
            note: {
              vi: '(tôm, bào ngư, bong bóng cá, sò điệp)',
              fr: '(crevettes, ormeau, vessie de poisson, pétoncles)',
              en: '(shrimp, abalone, fish maw, scallops)',
              zh: '（大虾、鲍鱼、花胶、鲜带子）'
            }
          }
        ]
      },
      {
        num: '03',
        title: { vi: 'MÓN CHÍNH', fr: 'PLATS PRINCIPAUX', en: 'MAIN COURSES', zh: '主菜' },
        items: [
          {
            name: {
              vi: 'Cá hấp Hồng Kông (Cá hồi hoặc Cá mú)',
              fr: 'Poisson vapeur façon Hong Kong (Saumon ou Mérou)',
              en: 'Hong Kong-Style Steamed Fish (Salmon or Grouper)',
              zh: '港式清蒸鲜鱼（三文鱼或石斑鱼）'
            }
          },
          {
            name: {
              vi: 'Sườn non BBQ',
              fr: 'Travers de porc tendres laqués BBQ',
              en: 'Glazed BBQ Baby Back Pork Ribs',
              zh: '蜜汁炭烤猪肋排'
            }
          }
        ]
      },
      {
        num: '04',
        title: { vi: 'LẨU', fr: 'FONDUE / HOTPOT', en: 'HOTPOT', zh: '火锅' },
        items: [
          {
            name: {
              vi: 'Lẩu bò mắm ruốc Huế',
              fr: 'Fondue de bœuf impériale de Hué au mắm ruốc',
              en: 'Hue-Style Beef & Fermented Shrimp Paste Hotpot',
              zh: '顺化虾酱牛肉火锅'
            },
            note: {
              vi: '(hoặc Lẩu riêu cua bắp bò)',
              fr: '(ou Fondue au crabe d’eau douce et jarret de bœuf)',
              en: '(or Crab Paste & Beef Shank Hotpot)',
              zh: '（或可换蟹膏牛腱火锅）'
            }
          }
        ]
      },
      {
        num: '05',
        title: { vi: 'TRÁNG MIỆNG', fr: 'DESSERT', en: 'DESSERT', zh: '甜品' },
        items: [
          {
            name: {
              vi: 'Chè Mỹ',
              fr: 'Chè Mỹ gourmand aux fruits et gelées',
              en: 'House Special Chè Mỹ Dessert',
              zh: '招牌越式美式糖水（Chè Mỹ）'
            },
            note: {
              vi: '(hoặc Chè Thái / chọn từ Set 1 & 2)',
              fr: '(ou Chè Thái / au choix depuis les Sets 01 & 02)',
              en: '(or Chè Thái / any dessert from Sets 01 & 02)',
              zh: '（或可换泰式糖水 / 任选套餐一、二甜品）'
            }
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MENU_ITEMS;
}
