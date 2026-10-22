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
      fr: "Poulet effiloché tendre, parfumé à l'ail frit croustillant, mélangé à une sauce addictive. Ingrédients complets : Baguette croustillante, pâté maison (foie de volaille et gras de porc), mayonnaise, légumes marinés, coriandre ; garni de poulet effiloché, d'ail frit et de notre sauce savoureuse (à base de sauce de poisson).",
      vi: 'Gà xé sợi dai ngọt, thơm nức mùi tỏi phi, quyện cùng nước sốt mặn ngọt ăn là ghiền. Thành phần trọn vẹn bao gồm: Vỏ bánh mì Baguette giòn rụm, phết patê nhà làm (gan gà và mỡ heo) béo ngậy cùng bơ béo (mayonnaise), thêm đồ chua, ngò rí thanh mát; kết hợp cùng nhân gà xé sợi mềm, tỏi phi thơm và chan nước sốt đậm vị (chiết xuất từ nước mắm).',
      en: 'Tender shredded chicken, fragrant fried garlic, tossed in an addictive savory sauce. Full ingredients: Crispy Baguette, creamy house-made pâté (chicken liver and pork fat), mayonnaise, pickled vegetables, cilantro; filled with shredded chicken, fried garlic, and a savory sauce (fish sauce based).',
      zh: '鲜嫩鸡肉丝，散发炸蒜的浓郁香气，搭配令人上瘾的鲜香酱汁。完整成分：酥脆越式法棍、秘制肉酱（鸡肝与猪板油）、蛋黄酱、酸洗萝卜、香菜；搭配鸡肉丝、炸蒜和秘制鲜香酱汁（鱼露基底）。'
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
      fr: 'Une collation basique mais addictive avec sa saveur épicée caractéristique. Ingrédients : galettes de riz, sauce saté aux crevettes et sauce saté pimentée originale.',
      vi: 'Món ăn vặt cơ bản nhưng cuốn hút với vị cay nồng đặc trưng. Thành phần gồm bánh tráng, sa tế tôm và sa tế cay nguyên bản.',
      en: 'A basic yet highly addictive snack with a signature spicy kick. Ingredients: rice paper, shrimp sate sauce, and original spicy sate.',
      zh: '简单却令人上瘾的零食，带有独特的辛辣风味。成分：米纸、虾米沙茶酱和原味辣沙茶酱。'
    },
    tags: {
      fr: ['Saté Crevettes', 'Épicé', 'Street Food'],
      vi: ['Sa Tế Tôm', 'Cay Đậm Đà', 'Ăn Vặt Sài Gòn'],
      en: ['Shrimp Satay', 'Spicy', 'Street Snack'],
      zh: ['沙茶虾味', '浓香微辣', '街头小吃']
    },
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
    image: 'assets/images/menu-dessert-n20.jpg'
  },
  {
    id: 'ds-n21',
    category: 'desserts',
    price: 10,
    priceDisplay: '10$',
    badge: 'bestseller',
    name: {
      fr: 'N21. Chè Mỹ (Dessert "Américain")',
      vi: 'N21. Chè Mỹ',
      en: 'N21. "American" Dessert (Chè Mỹ)',
      zh: 'N21. 美式甜汤（Chè Mỹ）'
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
      en: 'The refreshing, durian-free version of the Thai Sweet Soup. Ingredients: jackfruit, longan, lychee, Attap seeds, agar jelly, milk, and coconut milk.',
      zh: '无榴莲版本的泰式糖水，清凉解渴，老少咸宜。成分：菠萝蜜、龙眼、荔枝、亚答籽、燕菜果冻、牛奶和椰奶。'
    },
    tags: {
      fr: ['Rafraîchissant', 'Gelée Fruitée', 'Noix de Coco', 'Douceur'],
      vi: ['Thanh Mát', 'Thạch Trái Cây', 'Dừa Non', 'Giải Nhiệt'],
      en: ['Refreshing', 'Fruit Jelly', 'Young Coconut', 'Light Sweet'],
      zh: ['清凉解暑', '多重果冻', '鲜嫩椰肉', '香甜可口']
    },
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
      fr: 'Tofu fondement doux avec une touche de sirop de gingembre chaud. Ingrédients : tofu soyeux, sirop de gingembre et lait de coco.',
      vi: 'Tàu hủ mềm tan trong miệng, thoảng hương gừng ấm áp. Thành phần gồm tàu hủ mềm mịn, nước đường gừng, nước cốt dừa.',
      en: 'Melt-in-your-mouth silken tofu with a hint of warm ginger syrup. Ingredients: silken tofu, ginger syrup, and coconut milk.',
      zh: '入口即化的细腻豆腐花，散发着温暖的姜汁香气。成分：嫩滑豆腐花、姜汁糖水和椰奶。'
    },
    tags: {
      fr: ['Ultra Soyeux', 'Perles de Tapioca', 'Lait de Coco', 'Léger'],
      vi: ['Mềm Mịn Tan Chảy', 'Trân Châu Dẻo', 'Cốt Dừa Béo', 'Thanh Mát'],
      en: ['Silky Smooth', 'Chewy Boba', 'Coconut Cream', 'Refreshing'],
      zh: ['细腻滑嫩', 'Q弹波霸', '香浓椰浆', '健康清凉']
    },
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
      fr: 'Version améliorée avec du jeune riz gluant vert aromatique et moelleux. Ingrédients : tofu soyeux, jeune riz gluant vert et lait de coco.',
      vi: 'Phiên bản nâng cấp với hạt cốm xanh dẻo dẻo, thơm lừng. Thành phần gồm tàu hủ mềm mịn, cốm xanh dẻo thơm, nước cốt dừa.',
      en: 'Upgraded version featuring chewy and aromatic green sticky rice flakes. Ingredients: silken tofu, green sticky rice flakes, and coconut milk.',
      zh: '升级版本，加入软糯香甜的绿扁米。成分：嫩滑豆腐花、软糯绿扁米和椰奶。'
    },
    tags: {
      fr: ['Riz Vert Cốm', 'Tofu Fondant', 'Lait de Coco', 'Unique'],
      vi: ['Cốm Non Dẻo Thơm', 'Tàu Hủ Núng Nính', 'Cốt Dừa Béo', 'Thơm Ngọt'],
      en: ['Young Green Rice', 'Silky Tofu', 'Coconut Cream', 'Aromatic'],
      zh: ['软糯青糯米', '细腻豆腐花', '浓郁椰浆', '层次分明']
    },
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
      fr: ['Khúc Bạch Pastel', 'Fruits Frais', 'Fraises & Mangue', 'Ultra Frais'],
      vi: ['Khúc Bạch Cầu Vồng', 'Trái Cây Tươi', 'Dâu Tây & Xoài', 'Thanh Mát'],
      en: ['Rainbow Panna Cotta', 'Fresh Fruits', 'Strawberry & Mango', 'Chilled'],
      zh: ['彩虹奶酪冻', '丰富鲜果', '草莓芒果', '人气甜品']
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
      vi: 'Vị chua thanh lên men tự nhiên hòa quyện hoàn hảo cùng phô mai béo mịn. Thành phần gồm sữa chua lên men tự nhiên kết hợp phô mai béo mịn.',
      en: 'Natural fermented tanginess perfectly blended with creamy cheese. Ingredients: naturally fermented yogurt combined with creamy cheese.',
      zh: '天然发酵的清酸味与顺滑的芝士完美融合。成分：天然发酵酸奶结合浓郁芝士。'
    },
    tags: {
      fr: ['3$/Pot', 'Yaourt Maison', 'Fromage Crémeux', 'Naturel'],
      vi: ['3$/Hũ', 'Lên Men Tự Nhiên', 'Phô Mai Béo Mịn', 'Chua Ngọt Dịu'],
      en: ['3$/Jar', 'House Yogurt', 'Cream Cheese', 'Probiotic'],
      zh: ['3$/杯', '手工酸奶', '浓郁芝士', '天然发酵']
    },
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
      en: 'A rustic, thirst-quenching drink with fun-to-chew jelly-like textures. Ingredients: crunchy sterculia gum and refreshing kapok gum.',
      zh: '纯朴的天然解渴饮品，具有有趣的咀嚼口感，非常适合消暑。成分：爽脆胖大海树胶与清凉雪燕（木棉树胶）。'
    },
    tags: {
      fr: ['Sève Sterculia', 'Gomme Kapok', 'Désaltérant', 'Frais'],
      vi: ['Mủ Trôm Dòn Dai', 'Mủ Gòn Thanh Mát', 'Thanh Lọc', 'Giải Nhiệt'],
      en: ['Sterculia Gum', 'Kapok Gum', 'Thirst Quencher', 'Healthy'],
      zh: ['爽脆树胶', '天然雪燕', '清凉消暑', '润喉生津']
    },
    image: 'assets/images/menu-dessert-mu-trom.jpg'
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
      fr: 'Gâteau traditionnel moelleux, parfumé aux feuilles de pandan et aux haricots mungo. Ingrédients : haricots mungo, fécule de tapioca et farine de riz au parfum de pandan. ⚠️ Note : Sur commande préalable ou disponible en boutique uniquement les fins de semaine.',
      vi: 'Món bánh quê dẻo dai, thơm nức mùi lá dứa và bùi bùi vị đậu xanh. Thành phần gồm đậu xanh, bột năng & bột gạo dẻo thơm lá dứa. ⚠️ Lưu ý: Bánh cần đặt trước hoặc chỉ có sẵn tại tiệm vào các ngày cuối tuần.',
      en: 'A traditional chewy cake, fragrant with pandan leaves and nutty mung beans. Ingredients: mung bean, tapioca starch & rice flour with pandan flavor. ⚠️ Note: Pre-order required or available in-store on weekends only.',
      zh: '充满家乡风味的软糯糕点，散发着斑斓叶的清香与绿豆的醇厚。成分：绿豆、木薯粉与带有斑斓叶香味的粘米粉。⚠️ 温馨提示：需提前预订，或仅限周末到店供应。'
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
      fr: 'Croûte translucide et croquante enveloppant une garniture douce aux haricots mungo. Ingrédients : garniture douce aux haricots mungo, croûte translucide à la fécule de tapioca. ⚠️ Note : Sur commande préalable ou disponible en boutique uniquement les fins de semaine.',
      vi: 'Lớp vỏ trong vắt giòn sần sật ôm lấy nhân đậu xanh sên ngọt ngào. Thành phần gồm đậu xanh sên ngọt, lớp vỏ bột năng trong vắt, giòn sần sật. ⚠️ Lưu ý: Bánh cần đặt trước hoặc chỉ có sẵn tại tiệm vào các ngày cuối tuần.',
      en: 'Translucent, crunchy crust embracing a sweet mung bean filling. Ingredients: sweet mung bean filling, translucent and crunchy tapioca crust. ⚠️ Note: Pre-order required or available in-store on weekends only.',
      zh: '晶莹剔透、爽脆的外皮包裹着香甜的绿豆内陷。成分：香甜绿豆馅，晶莹剔透的脆木薯皮。⚠️ 温馨提示：需提前预订，或仅限周末到店供应。'
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
