/**
 * PATISSERIE DZUNG - TRANSLATIONS (i18n)
 * Languages: French (Default / fr), Vietnamese (vi), English (en), Mandarin Chinese (zh)
 */

const TRANSLATIONS = {
  fr: {
    // Header & Navigation
    nav_home: "Accueil",
    nav_story: "Histoire",
    nav_menu: "Menu",
    nav_gallery: "Galerie",
    nav_reviews: "Avis",
    nav_contact: "Contact",
    btn_book_table: "Réserver",
    brand_tagline: "Street Food Vietnamienne & Bánh Mì",

    // Hero Section
    hero_subtitle: "Saveurs des Rues de Saigon • L'Artisanat du Bánh Mì",
    hero_title_prefix: "PÂTISSERIE",
    hero_btn_reservation: "RÉSERVATION",
    hero_btn_menu: "DÉCOUVRIR LE MENU",
    hero_highlight_1: "SAVEURS VIETNAMIENNES UNIQUES & RARES AU CANADA",
    hero_highlight_2: "ALLIANCE DE LA TRADITION POPULAIRE & DU STREET FOOD MODERNE",
    hero_highlight_3: "DES SPÉCIALITÉS DU VIETNAM INTROUVABLES AILLEURS AU CANADA",

    // Story Section
    story_tagline: "Notre Histoire",
    story_title: "SAVEURS VIETNAMIENNES RARES AU CANADA : DE LA TRADITION POPULAIRE AUX TENDANCES MODERNES",
    story_lead: "Chez <strong>Pâtisserie Dzung</strong>, nous sommes fiers de réunir <em>street food moderne tendance</em> et <em>mets populaires & pâtisseries traditionnelles du Vietnam</em> — des créations authentiques et rares, presque introuvables ailleurs au Canada.",
    story_text: "Installée à Brossard, Pâtisserie Dzung est le sanctuaire des amateurs de saveurs vietnamiennes authentiques. Des délices de rue emblématiques comme les Feuilles de riz assouplies à la rosée (Bánh Tráng Phơi Sương de Trảng Bàng) et rouleaux sauce beurre-tamarin, jusqu'aux pâtisseries ancestrales faites main : le gâteau étagé au pandan (Bánh Da Lợn) et le gâteau de fête traditionnel (Bánh Xu Xuê / Phu Thê). Le tout sublimé par nos baguettes artisanales au pâté maison et nos boissons signatures branchées : Thé au lait seau avec pudding 3D, Café à la crème de sel marin et Milo glacé.",
    story_f1_title: "Pâtisseries Traditionnelles Rares",
    story_f1_desc: "Bánh Da Lợn & Bánh Xu Xuê artisanaux faits main, introuvables ailleurs au Canada.",
    story_f2_title: "Street Food & Snacks Modernes",
    story_f2_desc: "Bánh tráng phơi sương, rouleaux sauce beurre et tamarin au goût authentique de Saigon.",
    story_f3_title: "Bánh Mì Croustillant & Pâté Maison",
    story_f3_desc: "Pain croustillant cuit en continu toute la journée, pâté de foie onctueux secret de famille.",
    story_f4_title: "Boissons Tendances & Signature",
    story_f4_desc: "Thé au lait spécial avec pudding 3D, café à la crème de sel marin et Milo glacé gourmand.",
    story_badge_text: "Saveurs Rares & Authentiques au Canada",

    // Menu Section
    menu_tagline: "Sélection Gastronomique",
    menu_title: "BÁNH MÌ & STREET FOOD VIETNAMIEN",
    tab_all: "Tous les plats",
    tab_banhmi: "🥖 Bánh Mì",
    tab_streetfood: "🍢 Street Food & Snacks",
    tab_drinks: "☕ Boissons",
    tab_desserts: "🍧 Desserts",
    tab_rolls: "🥮 Pâtisseries Traditionnelles VN",
    btn_add_dish: "+ Ajouter",

    // Gallery
    gallery_tagline: "Ambiance & Cadre",
    gallery_title: "SAIGON NIGHT VIBE",
    gallery_c1: "Lumières néon dorées & Ambiance nocturne",
    gallery_c2: "Bánh Mì chaud et croustillant chaque jour",
    gallery_c3: "Table conviviale entre amis",
    gallery_c4: "Street food savoureuse de Saigon",
    gallery_c5: "Café aux œufs artisanal",

    // Reviews
    reviews_tagline: "Témoignages & Avis",
    reviews_title: "CE QUE DISENT NOS CLIENTS",
    reviews_google_badge: "4.9 / 5.0 ⭐ sur Google Maps (Brossard, QC)",
    reviews_google_btn: "Voir & Laisser un Avis",
    review_1_text: "Le meilleur Bánh Mì sur la Rive-Sud de Montréal ! Pain ultra frais et croustillant à la perfection. Le sandwich au porc salé spécial (N1) et les boulettes xíu mại au jaune d'œuf salé (N2) sont divinement savoureux. Pâté onctueux maison et garniture très généreuse !",
    review_1_author: "Sophie Nguyen",
    review_1_meta: "Guide Local • 5★ sur Google Maps",
    review_2_text: "Une pépite incontournable pour les amateurs de street food vietnamienne ! Le papier de riz au saté de crevettes (N10) et les rouleaux sauce tamarin-beurre (N12) ont ce goût authentique incroyable. Accompagné du café au sel (N46), c'est un pur régal !",
    review_2_author: "Marc-André Tremblay",
    review_2_meta: "Guide Local • 5★ sur Google Maps",
    review_3_text: "Thé au lait d'une qualité remarquable, goût de thé riche et subtil sans être trop sucré. Le seau spécial N41 avec son pudding 3D adorable, son flan caramel maison et ses toppings variés est génial. Service rapide et emballage soigné !",
    review_3_author: "Vivian Chen",
    review_3_meta: "Critique Foodie • 5★ sur Google Maps",

    // Reservation CTA Banner
    banner_title: "COMMANDEZ EN LIGNE OU VENEZ NOUS VOIR",
    banner_desc: "Savourez nos baguettes vietnamiennes fraîches et croustillantes, nos snacks de rue authentiques et nos boissons rafraîchissantes à Brossard, QC.",
    banner_btn: "VOIR LE MENU & COMMANDER",

    // Footer
    footer_desc: "Pâtisserie Dzung — Le sanctuaire de la street food vietnamienne et de la haute tradition du Bánh Mì artisanal. L'ambiance nocturne envoûtante de Saigon au cœur de la ville.",
    footer_explore: "Découvrir",
    footer_hours: "Horaires d'Ouverture",
    footer_hours_week: "Mercredi - Dimanche: 10h30 - 20h00",
    footer_hours_weekend: "Fermé: Lundi & Mardi",
    footer_hours_note: "",
    footer_contact: "Contact",
    footer_address: "5918 Avenue Auteuil, Brossard, QC J4Z 1N2, Canada",
    footer_phone: "Téléphone: (514) 880-8388",
    footer_email: "patisseriedzung@gmail.com",
    footer_rights: "© 2026 Pâtisserie Dzung. Tous droits réservés. Créé avec passion pour la gastronomie vietnamienne.",
    footer_privacy: "Confidentialité",
    footer_terms: "Conditions d'utilisation",

    // Reservation Modal
    modal_res_title: "RÉSERVER UNE TABLE",
    modal_res_subtitle: "Vivez une expérience culinaire chaleureuse chez Pâtisserie Dzung",
    lbl_name: "Nom & Prénom *",
    lbl_phone: "Numéro de téléphone *",
    lbl_guests: "Nombre de convives *",
    lbl_date: "Date du repas *",
    lbl_time: "Heure d'arrivée *",
    lbl_seating: "Emplacement souhaité",
    opt_seating_street: "Près de la baie vitrée (Vue sur rue)",
    opt_seating_indoor: "Table sofa intérieure (Climatisée)",
    opt_seating_bar: "Comptoir bar face à la cuisine ouverte",
    lbl_note: "Remarques ou allergies",
    btn_confirm_res: "CONFIRMER LA RÉSERVATION",

    // Cart Modal
    modal_cart_title: "VOTRE COMMANDE",
    modal_cart_subtitle: "Bánh Mì & Street Food Pâtisserie Dzung",
    cart_empty: "Votre liste de plats est actuellement vide.<br>Découvrez nos délicieuses spécialités ci-dessous !",
    cart_total: "TOTAL :",
    btn_checkout: "ENVOYER LA COMMANDE",
    toast_added: "🥖 Ajouté à votre commande : ",
    toast_res_success: "✨ Réservation confirmée avec succès pour M./Mme "
  },

  vi: {
    // Header & Navigation
    nav_home: "Trang Chủ",
    nav_story: "Câu Chuyện",
    nav_menu: "Thực Đơn",
    nav_gallery: "Không Gian",
    nav_reviews: "Đánh Giá",
    nav_contact: "Liên Hệ",
    btn_book_table: "Đặt Bàn",
    brand_tagline: "Bánh Mì & Vietnamese Street Food",

    // Hero Section
    hero_subtitle: "Hương Vị Đường Phố Sài Gòn • Nghệ Thuật Bánh Mì",
    hero_title_prefix: "PÂTISSERIE",
    hero_btn_reservation: "ĐẶT BÀN",
    hero_btn_menu: "XEM THỰC ĐƠN",
    hero_highlight_1: "TINH HOA ẨM THỰC VIỆT NAM HIẾM CÓ TẠI CANADA",
    hero_highlight_2: "GIAO THOA ĐỘC ĐÁO: MÓN DÂN DÃ CỔ TRUYỀN & STREET FOOD HIỆN ĐẠI",
    hero_highlight_3: "HƯƠNG VỊ QUÊ NHÀ ĐẶC SẮC KHÓ TÌM THẤY TẠI CANADA",

    // Story Section
    story_tagline: "Câu Chuyện Của Chúng Tôi",
    story_title: "HƯƠNG VỊ VIỆT HIẾM CÓ TẠI CANADA: TỪ MÓN DÂN DÃ CỔ TRUYỀN ĐẾN STREET FOOD HIỆN ĐẠI",
    story_lead: "Tại <strong>Pâtisserie Dzung</strong>, chúng tôi tự hào mang đến sự kết hợp độc đáo giữa <em>món ăn hiện đại xu hướng</em> và <em>những món ăn dân dã, bánh truyền thống Việt Nam</em> — những hương vị cội nguồn đặc sắc mà bạn khó có thể tìm thấy ở bất cứ nơi nào khác tại Canada.",
    story_text: "Tọa lạc tại Brossard, Pâtisserie Dzung là điểm hẹn của những người yêu ẩm thực Việt tìm kiếm phong vị quê hương đích thực. Từ những món ăn vặt dân dã nức tiếng như Bánh Tráng Phơi Sương Trảng Bàng, Bánh Tráng Cuốn Sốt Bơ Me, đến các món bánh cổ truyền kỳ công như Bánh Da Lợn lá dứa dẻo thơm, Bánh Xu Xuê đượm hương hoa bưởi dừa non. Tất cả hòa quyện cùng Bánh Mì giòn rụm pate gan thủ công gia truyền và các thức uống 'hot trend' hiện đại như Trà Sữa Thau Đặc Biệt topping 3D, Cà Phê Muối béo mặn, Milo Dầm đậm đà.",
    story_f1_title: "Món Dân Dã & Cổ Truyền",
    story_f1_desc: "Bánh Da Lợn, Bánh Xu Xuê chuẩn vị cội nguồn, cực kỳ hiếm có tại Canada.",
    story_f2_title: "Ăn Vặt & Street Food Hiện Đại",
    story_f2_desc: "Bánh tráng phơi sương Trảng Bàng, bánh tráng cuốn sốt bơ me đậm đà chuẩn vị Sài Gòn.",
    story_f3_title: "Bánh Mì Giòn & Pate Gia Truyền",
    story_f3_desc: "Vỏ mỏng giòn rụm nướng nóng mỗi ngày, hòa quyện pate gan béo ngậy bí truyền.",
    story_f4_title: "Đồ Uống 'Trend' Đậm Bản Sắc",
    story_f4_desc: "Trà sữa topping 3D, cà phê muối béo mặn, milo dầm — hiện đại mà vương vấn khó quên.",
    story_badge_text: "Chuẩn Vị Việt Hiếm Có Tại Canada",

    // Menu Section
    menu_tagline: "Thực Đơn Tinh Tuyển",
    menu_title: "BÁNH MÌ & STREET FOOD VIỆT NAM",
    tab_all: "Tất Cả Món",
    tab_banhmi: "🥖 Bánh Mì Việt Nam",
    tab_streetfood: "🍢 Đồ Ăn Vặt Đường Phố",
    tab_drinks: "☕ Đồ Uống",
    tab_desserts: "🍧 Món Tráng Miệng",
    tab_rolls: "🥮 Món Bánh Truyền Thống VN",
    btn_add_dish: "+ Thêm",

    // Gallery
    gallery_tagline: "Không Gian & Trải Nghiệm",
    gallery_title: "SAIGON NIGHT VIBE",
    gallery_c1: "Ánh Đèn Vàng Neon & Không Gian Về Đêm",
    gallery_c2: "Bánh Mì Nóng Giòn Mỗi Ngày",
    gallery_c3: "Góc Bàn Ăn Ấm Cúng",
    gallery_c4: "Street Food Sài Gòn",
    gallery_c5: "Cà Phê Trứng Nghệ Nhân",

    // Reviews
    reviews_tagline: "Đánh Giá & Trải Nghiệm",
    reviews_title: "THỰC KHÁCH NÓI VỀ CHÚNG TÔI",
    reviews_google_badge: "4.9 / 5.0 ⭐ trên Google Maps (Brossard, QC)",
    reviews_google_btn: "Xem & Để Lại Đánh Giá",
    review_1_text: "Bánh mì ở tiệm Dzung thực sự là ngon nhất khu South Shore Brossard! Vỏ bánh nướng mới nóng hổi giòn rụm rôm rốp mà ruột mềm xốp. Bánh Mì Thịt Muối N1 và Xíu Mại Trứng Muối N2 nêm nếm cực kỳ vừa miệng, pate béo ngậy thơm nức. Đồ ăn chất lượng và sạch sẽ tuyệt đối!",
    review_1_author: "Sophie Nguyen",
    review_1_meta: "Local Guide • 5★ trên Google Maps",
    review_2_text: "Tín đồ ăn vặt Sài Gòn ở Quebec nhất định phải ghé tiệm này! Bánh tráng sa tế tôm N10 cay cay đậm đà chuẩn vị, còn món bánh tráng cuộn sốt bơ me sốt chấm béo bùi ngon nghiện luôn. Thêm hũ cà phê muối béo mặn nữa là trọn vẹn combo ăn vặt cuối tuần.",
    review_2_author: "Marc-André Tremblay",
    review_2_meta: "Local Guide • 5★ trên Google Maps",
    review_3_text: "Trà sữa ở đây siêu chất lượng, vị trà thơm đậm tự nhiên chứ không bị ngọt gắt hương liệu. Đỉnh nhất là thau Trà Sữa Đặc Biệt N41 có nguyên chú thạch thỏ 3D núng nính, pudding trứng và bánh flan béo ngậy. Quán làm món nhanh, đóng gói mang về rất sạch sẽ và chu đáo!",
    review_3_author: "Vivian Chen",
    review_3_meta: "Thực khách Brossard • 5★ trên Google Maps",

    // Reservation CTA Banner
    banner_title: "ĐẶT MÓN & GHÉ THĂM PÂTISSERIE DZUNG",
    banner_desc: "Thưởng thức bánh mì giòn tan nóng hổi vừa ra lò, các món ăn vặt đường phố đặc sản và đồ uống thơm ngon chuẩn vị tại Brossard, Quebec.",
    banner_btn: "XEM MENU & ĐẶT MÓN",

    // Footer
    footer_desc: "Pâtisserie Dzung - Nơi tôn vinh ẩm thực đường phố Việt Nam và bánh mì thủ công giòn tan thượng hạng tại Brossard, Quebec.",
    footer_explore: "Khám Phá",
    footer_hours: "Giờ Mở Cửa",
    footer_hours_week: "Thứ Tư – Chủ Nhật: 10:30 Sáng – 8:00 Tối",
    footer_hours_weekend: "Thứ Hai & Thứ Ba: Nghỉ (Closed)",
    footer_hours_note: "",
    footer_contact: "Liên Hệ",
    footer_address: "5918 Avenue Auteuil, Brossard, QC J4Z 1N2, Canada",
    footer_phone: "Hotline: (514) 880-8388",
    footer_email: "patisseriedzung@gmail.com",
    footer_rights: "© 2026 Pâtisserie Dzung. All Rights Reserved. Designed with passion for Vietnamese street food.",
    footer_privacy: "Chính Sách Bảo Mật",
    footer_terms: "Điều Khoản Dịch Vụ",

    // Reservation Modal
    modal_res_title: "ĐẶT BÀN TRƯỚC",
    modal_res_subtitle: "Trải nghiệm không gian ẩm thực ấm áp tại Pâtisserie Dzung",
    lbl_name: "Họ và Tên Quý Khách *",
    lbl_phone: "Số Điện Thoại *",
    lbl_guests: "Số Lượng Khách *",
    lbl_date: "Ngày Dùng Bữa *",
    lbl_time: "Giờ Đến *",
    lbl_seating: "Khu Vực Ngồi Ưa Thích",
    opt_seating_street: "Bàn gần cửa kính thoáng mát",
    opt_seating_indoor: "Khu vực bàn sofa trong nhà máy lạnh",
    opt_seating_bar: "Quầy bar bếp mở ngắm nướng bánh",
    lbl_note: "Ghi Chú Thêm",
    btn_confirm_res: "XÁC NHẬN ĐẶT BÀN",

    // Cart Modal
    modal_cart_title: "DANH SÁCH MÓN ĐÃ CHỌN",
    modal_cart_subtitle: "Bánh Mì & Đồ Ăn Vặt Pâtisserie Dzung",
    cart_empty: "Danh sách gọi món hiện đang trống.<br>Hãy chọn các món bánh mì và street food hấp dẫn bên dưới nhé!",
    cart_total: "TỔNG CỘNG :",
    btn_checkout: "GỬI ĐƠN MÓN / LIÊN HỆ ĐẶT",
    toast_added: "🥖 Đã thêm vào danh sách gọi món: ",
    toast_res_success: "✨ Đặt bàn thành công cho quý khách "
  },

  en: {
    // Header & Navigation
    nav_home: "Home",
    nav_story: "Story",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_reviews: "Press",
    nav_contact: "Contact",
    btn_book_table: "Book Table",
    brand_tagline: "Vietnamese Street Food & Bánh Mì",

    // Hero Section
    hero_subtitle: "Saigon Street Flavors • Artisanal Bánh Mì Craft",
    hero_title_prefix: "PÂTISSERIE",
    hero_btn_reservation: "RESERVATION",
    hero_btn_menu: "EXPLORE MENU",
    hero_highlight_1: "RARE & AUTHENTIC VIETNAMESE SPECIALTIES IN CANADA",
    hero_highlight_2: "HARMONY OF RUSTIC TRADITION & MODERN STREET FOOD",
    hero_highlight_3: "ICONIC HOMELAND FLAVORS SELDOM FOUND IN CANADA",

    // Story Section
    story_tagline: "Our Story",
    story_title: "RARE VIETNAMESE FLAVORS IN CANADA: FROM RUSTIC TRADITION TO MODERN STREET FOOD",
    story_lead: "At <strong>Pâtisserie Dzung</strong>, we take great pride in combining <em>trendy modern street food</em> with <em>authentic rustic dishes and traditional Vietnamese pastries</em> — rare culinary treasures rarely found anywhere else in Canada.",
    story_text: "Located in Brossard, Pâtisserie Dzung is the premier destination for food lovers craving authentic Vietnamese nostalgia. From hard-to-find street favorites like Trảng Bàng Dew-wetted Rice Paper (Bánh Tráng Phơi Sương) and savory tamarind butter rolls, to painstaking heritage pastries such as steamed Pandan Layer Cake (Bánh Da Lợn) and Husband & Wife Cake (Bánh Xu Xuê). All crafted alongside freshly baked crispy bánh mì with secret family liver pâté and modern viral beverages like 3D pudding milk tea, sea-salt cream coffee, and rich iced Milo.",
    story_f1_title: "Rare Traditional Pastries",
    story_f1_desc: "Handcrafted Bánh Da Lợn & Bánh Xu Xuê, authentic heritage gems rare in Canada.",
    story_f2_title: "Modern Street Food & Snacks",
    story_f2_desc: "Dew-wetted rice paper & tamarind butter rolls packed with true Saigon street flavor.",
    story_f3_title: "Crispy Bánh Mì & Secret Pâté",
    story_f3_desc: "Freshly baked warm baguettes with rich, velvety homemade family liver pâté.",
    story_f4_title: "Trendy Signature Beverages",
    story_f4_desc: "3D pudding milk tea bucket, Vietnamese sea-salt coffee & decadent iced Milo.",
    story_badge_text: "Authentic & Rare in Canada",

    // Menu Section
    menu_tagline: "Curated Selection",
    menu_title: "BÁNH MÌ & VIETNAMESE STREET FOOD",
    tab_all: "All Dishes",
    tab_banhmi: "🥖 Vietnamese Bánh Mì",
    tab_streetfood: "🍢 Street Food & Snacks",
    tab_drinks: "☕ Drinks",
    tab_desserts: "🍧 Desserts",
    tab_rolls: "🥮 Traditional VN Pastries",
    btn_add_dish: "+ Add",

    // Gallery
    gallery_tagline: "Atmosphere & Experience",
    gallery_title: "SAIGON NIGHT VIBE",
    gallery_c1: "Golden Neon Glow & Night Street Vibe",
    gallery_c2: "Warm Crispy Bánh Mì Baked Daily",
    gallery_c3: "Cozy Gathering Tables with Friends",
    gallery_c4: "Authentic Saigon Street Food Flavors",
    gallery_c5: "Artisanal Vietnamese Egg Coffee",

    // Reviews
    reviews_tagline: "Reviews & Experience",
    reviews_title: "WHAT OUR GUESTS SAY",
    reviews_google_badge: "4.9 / 5.0 ⭐ on Google Maps (Brossard, QC)",
    reviews_google_btn: "View & Leave a Review",
    review_1_text: "Hands down the best Bánh Mì in Brossard and Montreal's South Shore! Freshly baked baguettes with an ultra-crispy crust and soft crumb. The Special Salted Pork (N1) and Salted Egg Meatball (N2) are deeply flavorful with luscious homemade pâté. Pure perfection!",
    review_1_author: "Sophie Nguyen",
    review_1_meta: "Local Guide • 5★ on Google Maps",
    review_2_text: "A true gem for authentic Vietnamese street food! The shrimp satay rice paper (N10) and avocado-tamarind rolled rice paper (N12) hit that genuine Saigon street flavor spot-on. Pairing them with a creamy salted iced coffee (N46) makes for an unbeatable treat.",
    review_2_author: "Marc-André Tremblay",
    review_2_meta: "Local Guide • 5★ on Google Maps",
    review_3_text: "Top-notch bubble tea brewed with real premium tea fragrance, perfectly balanced sweetness. The N41 Special Bucket Milk Tea is incredible—loaded with artisanal jellies, rich caramel egg flan, and a cute 3D jelly. Friendly service and spotless takeout packaging!",
    review_3_author: "Vivian Chen",
    review_3_meta: "Local Foodie • 5★ on Google Maps",

    // Reservation CTA Banner
    banner_title: "ORDER ONLINE & VISIT PÂTISSERIE DZUNG",
    banner_desc: "Enjoy fresh crusty Vietnamese baguettes, authentic street snacks, and refreshing specialty drinks in Brossard, Quebec.",
    banner_btn: "EXPLORE MENU & ORDER",

    // Footer
    footer_desc: "Pâtisserie Dzung — Celebrating authentic Vietnamese street gastronomy and artisanal Bánh Mì excellence in Brossard, Quebec.",
    footer_explore: "Explore",
    footer_hours: "Opening Hours",
    footer_hours_week: "Wednesday – Sunday: 10:30 AM – 8:00 PM",
    footer_hours_weekend: "Closed: Monday & Tuesday",
    footer_hours_note: "",
    footer_contact: "Contact",
    footer_address: "5918 Avenue Auteuil, Brossard, QC J4Z 1N2, Canada",
    footer_phone: "Phone: (514) 880-8388",
    footer_email: "patisseriedzung@gmail.com",
    footer_rights: "© 2026 Pâtisserie Dzung. All Rights Reserved. Crafted with passion for Vietnamese food.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",

    // Reservation Modal
    modal_res_title: "TABLE RESERVATION",
    modal_res_subtitle: "Experience authentic Vietnamese gastronomy at Pâtisserie Dzung",
    lbl_name: "Full Name *",
    lbl_phone: "Phone Number *",
    lbl_guests: "Party Size *",
    lbl_date: "Dining Date *",
    lbl_time: "Arrival Time *",
    lbl_seating: "Seating Preference",
    opt_seating_street: "By the glass window (Street view)",
    opt_seating_indoor: "Indoor sofa dining (Air conditioned)",
    opt_seating_bar: "Open kitchen bakery counter",
    lbl_note: "Special Notes / Allergies",
    btn_confirm_res: "CONFIRM RESERVATION",

    // Cart Modal
    modal_cart_title: "SELECTED ITEMS",
    modal_cart_subtitle: "Bánh Mì & Vietnamese Street Food",
    cart_empty: "Your order tray is currently empty.<br>Explore our delicious menu items below!",
    cart_total: "TOTAL:",
    btn_checkout: "SEND ORDER / CONTACT",
    toast_added: "🥖 Added to your order: ",
    toast_res_success: "✨ Reservation confirmed for "
  },

  zh: {
    // Header & Navigation
    nav_home: "首页",
    nav_story: "品牌故事",
    nav_menu: "特色菜单",
    nav_gallery: "空间氛围",
    nav_reviews: "媒体好评",
    nav_contact: "联系我们",
    btn_book_table: "预订座位",
    brand_tagline: "越南地道街头美食与法包烘焙",

    // Hero Section
    hero_subtitle: "西贡街头风味 • 越式法包烘焙工艺",
    hero_title_prefix: "PÂTISSERIE",
    hero_btn_reservation: "在线预订",
    hero_btn_menu: "浏览菜单",
    hero_highlight_1: "加拿大难寻的地道越南特色美食精粹",
    hero_highlight_2: "传统民间风味与现代潮流街头小吃的绝妙融合",
    hero_highlight_3: "在加拿大难得一尝的越南纯正家乡美味",

    // Story Section
    story_tagline: "关于我们",
    story_title: "加拿大难寻的地道越味：从传统民间风味到潮流现代小吃",
    story_lead: "在 <strong>Pâtisserie Dzung</strong>，我们自豪地将<em>风靡当下的现代街头潮流美味</em>与<em>原汁原味的民间风味及越南传统糕点</em>完美融合——这些在加拿大极难寻觅的纯正家乡味道，如今在此尽享。",
    story_text: "坐落于加拿大布罗萨德（Brossard），Pâtisserie Dzung 是追寻地道越式美味与家乡回忆的最佳归宿。从在加拿大极为罕见的特色民间名吃——展榜露水软米纸（Bánh Tráng Phơi Sương）、浓郁黄油罗望子米纸卷，到匠心慢工的古法传统糕点（斑斓九层糕 Bánh Da Lợn、喜庆椰丝夫妻饼 Bánh Xu Xuê）。更有每日现烤酥脆法包配祖传秘方手工肝酱，以及引领潮流的人气特调：萌趣3D立体奶冻大桶奶茶、海盐咸奶盖冰咖啡与浓郁美禄冰沙。",
    story_f1_title: "稀有传统古法糕点",
    story_f1_desc: "纯手工制作斑斓九层糕与传统夫妻饼，加拿大难得一尝的地道古味。",
    story_f2_title: "现代潮流街头小吃",
    story_f2_desc: "越式特制露水米纸与黄油罗望子蘸酱，还原纯正西贡街头精髓。",
    story_f3_title: "现烤薄脆法包与秘制肝酱",
    story_f3_desc: "全天现烤金黄薄脆法包，搭配香浓细腻家传秘方特制肝酱。",
    story_f4_title: "高颜值人气特色饮品",
    story_f4_desc: "萌趣3D布丁特制奶茶、海盐咸奶盖咖啡与浓郁美禄，潮流又难忘。",
    story_badge_text: "加拿大难寻的地道越味",

    // Menu Section
    menu_tagline: "精选菜单",
    menu_title: "越南法包与街头小吃",
    tab_all: "全部菜品",
    tab_banhmi: "🥖 越南特色法包",
    tab_streetfood: "🍢 街头精选小吃",
    tab_drinks: "☕ 特色饮品",
    tab_desserts: "🍧 精致甜品",
    tab_rolls: "🥮 越南传统糕点",
    btn_add_dish: "+ 点单",

    // Gallery
    gallery_tagline: "空间体验",
    gallery_title: "SAIGON NIGHT VIBE",
    gallery_c1: "金黄霓虹灯光与温馨西贡夜景",
    gallery_c2: "每日现烤酥脆法包",
    gallery_c3: "好友相聚的舒适餐桌",
    gallery_c4: "原汁原味西贡街头美味",
    gallery_c5: "匠人手作越式蛋咖啡",

    // Reviews
    reviews_tagline: "顾客评价与体验",
    reviews_title: "顾客眼中的我们",
    reviews_google_badge: "4.9 / 5.0 ⭐ 谷歌地图认证评分 (魁省Brossard)",
    reviews_google_btn: "查看并留下好评",
    review_1_text: "南岸Brossard最好吃的越式法包Bánh Mì！现烤外皮超级酥脆掉渣，内里松软适口。招牌咸肉法包（N1）和咸蛋黄肉丸法包（N2）调味绝妙，自制肝酱浓郁喷香，配菜清脆爽口，回购无数次！",
    review_1_author: "Sophie Nguyen",
    review_1_meta: "本地向导 Local Guide • 谷歌 5★",
    review_2_text: "魁省不可多得的正宗越南街头风味！沙茶虾米拌米纸（N10）鲜香微辣，罗望子黄油酱卷米纸（N12）酸甜浓郁超上瘾。再搭配一杯咸甜丝滑的海盐咖啡（N46），治愈感满满！",
    review_2_author: "Marc-André Tremblay",
    review_2_meta: "本地向导 Local Guide • 谷歌 5★",
    review_3_text: "奶茶与甜点水准令人惊艳！茶香自然浓醇，甜度适中不甜腻。特制招牌大桶奶茶（N41）料超满超丰盛，整只萌趣3D布丁配上手工焦糖布丁，口感层次丰富。出餐迅速，打包非常干净贴心！",
    review_3_author: "Vivian Chen",
    review_3_meta: "美食达人 • 谷歌 5★",

    // Reservation CTA Banner
    banner_title: "在线点餐与光临 PÂTISSERIE DZUNG",
    banner_desc: "在魁北克Brossard品尝新鲜出炉的酥脆越式法包、正宗特色街头小吃与清爽特调饮品。",
    banner_btn: "查看菜单并点餐",

    // Footer
    footer_desc: "Pâtisserie Dzung — 致敬正宗越南街头小吃与匠心手工法包，位于魁北克Brossard。",
    footer_explore: "浏览发现",
    footer_hours: "营业时间",
    footer_hours_week: "周三至周日: 10:30 – 20:00",
    footer_hours_weekend: "周一与周二: 休息（不营业）",
    footer_hours_note: "",
    footer_contact: "联系方式",
    footer_address: "5918 Avenue Auteuil, Brossard, QC J4Z 1N2, 加拿大",
    footer_phone: "电话: (514) 880-8388",
    footer_email: "patisseriedzung@gmail.com",
    footer_rights: "© 2026 Pâtisserie Dzung. 版权所有。倾心呈献地道越南美味。",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",

    // Reservation Modal
    modal_res_title: "在线预订座位",
    modal_res_subtitle: "在 Pâtisserie Dzung 享受舒适温馨的用餐体验",
    lbl_name: "贵宾姓名 *",
    lbl_phone: "联系电话 *",
    lbl_guests: "用餐人数 *",
    lbl_date: "用餐日期 *",
    lbl_time: "到店时间 *",
    lbl_seating: "座位偏好",
    opt_seating_street: "靠窗景观位（观赏街景）",
    opt_seating_indoor: "室内沙发座（舒适空调）",
    opt_seating_bar: "开放式烘焙吧台位",
    lbl_note: "特殊要求或忌口",
    btn_confirm_res: "确认提交预订",

    // Cart Modal
    modal_cart_title: "已选菜品清单",
    modal_cart_subtitle: "Pâtisserie Dzung 越南法包与街头小吃",
    cart_empty: "您的点单清单目前为空。<br>快去挑选喜欢的法包和小吃吧！",
    cart_total: "合计金额：",
    btn_checkout: "发送订单 / 确认下单",
    toast_added: "🥖 已添加至点单清单：",
    toast_res_success: "✨ 预订成功！期待贵宾光临："
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRANSLATIONS;
}
