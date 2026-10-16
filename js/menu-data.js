/**
 * PATISSERIE DZUNG - MENU DATA
 * Bánh Mì & Vietnamese Street Food Selection
 */

const MENU_ITEMS = [
  // 🥖 BÁNH MÌ VIỆT NAM (Baguette & Sandwiches)
  {
    id: 'bm-01',
    name: 'Bánh Mì Pâtisserie Đặc Biệt',
    category: 'banhmi',
    price: 65000,
    priceDisplay: '65.000₫',
    badge: 'signature',
    badgeText: 'Signature',
    desc: 'Vỏ bánh nướng giòn rụm theo công thức Pháp - Việt, pate gan thủ công thượng hạng, bơ trứng béo ngậy, thịt xá xíu, chả lụa bì, dưa chua giòn sần sật, rau mùi tươi và ớt cay nồng.',
    tags: ['Best Seller', 'Pate Nhà Làm', 'Cay Vừa'],
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bm-02',
    name: 'Bánh Mì Heo Quay Da Giòn',
    category: 'banhmi',
    price: 60000,
    priceDisplay: '60.000₫',
    badge: 'bestseller',
    badgeText: 'Best Seller',
    desc: 'Thịt ba rọi heo quay nướng lửa hồng với lớp da giòn rôm rốp, chan nước sốt ngũ vị đậm đà, đồ chua củ cải cà rốt ngâm chua ngọt thanh mát.',
    tags: ['Da Giòn Rụm', 'Đậm Vị Sài Gòn'],
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bm-03',
    name: 'Bánh Mì Thịt Nướng Sả Mật Ong',
    category: 'banhmi',
    price: 55000,
    priceDisplay: '55.000₫',
    badge: null,
    badgeText: '',
    desc: 'Thịt nạc vai ướp sả ớt, mật ong hoa nhãn nướng than hoa thơm nức mũi, rưới mỡ hành lá phi thơm và sốt tương đen cay ngọt.',
    tags: ['Nướng Than Hoa', 'Thơm Mùi Sả'],
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bm-04',
    name: 'Bánh Mì Chảo Thượng Hạng',
    category: 'banhmi',
    price: 85000,
    priceDisplay: '85.000₫',
    badge: 'chef',
    badgeText: "Chef's Choice",
    desc: 'Chảo gang nóng hổi gồm 2 trứng ốp la lòng đào, pate gan áp chảo cháy xém, xíu mại tôm thịt sốt cà chua, xúc xích tươi và phô mai bò cười.',
    tags: ['Ăn Kèm Bánh Mì Nóng', 'Đầy Đặn'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'
  },

  // 🍢 ĐỒ ĂN VẶT ĐƯỜNG PHỐ (Street Food Snacks)
  {
    id: 'sn-01',
    name: 'Bánh Tráng Nướng Đà Lạt Đặc Biệt',
    category: 'streetfood',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: 'signature',
    badgeText: 'Pizza Việt Nam',
    desc: 'Bánh tráng nướng than hoa vàng giòn tan, phủ trứng gà, hành hoa, tép đỏ rim ngọt, khô bò sợi, phô mai kéo sợi và tương ớt sốt me cay ngọt.',
    tags: ['Nóng Giòn', 'Đặc Sản Đà Lạt'],
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sn-02',
    name: 'Nem Chua Rán Phố Cổ Hà Nội',
    category: 'streetfood',
    price: 55000,
    priceDisplay: '55.000₫',
    badge: 'bestseller',
    badgeText: 'Best Seller',
    desc: 'Nem chua tẩm bột chiên xù vàng ruộm, bên ngoài giòn rụm bên trong dẻo dai bùi béo, ăn kèm dưa leo mát lạnh và tương ớt rim đặc chế.',
    tags: ['Chuẩn Vị Hà Nội', 'Món Ăn Vặt Hot'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sn-03',
    name: 'Cá Viên Chiên Nước Mắm Tỏi Ớt',
    category: 'streetfood',
    price: 65000,
    priceDisplay: '65.000₫',
    badge: null,
    badgeText: '',
    desc: 'Mẹt cá viên, bò viên, xúc xích, đậu hũ phô mai chiên phồng xóc đẫm sốt nước mắm tỏi ớt kẹo sệt, thơm nức bơ bắp và rau muống giòn.',
    tags: ['Đậm Đà Cay Ngọt', 'Món Nhậu Vặt'],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sn-04',
    name: 'Bắp Xào Bơ Tép Hành Phi',
    category: 'streetfood',
    price: 35000,
    priceDisplay: '35.000₫',
    badge: null,
    badgeText: '',
    desc: 'Hạt bắp ngọt xào thơm phức cùng bơ béo ngậy, tép ruốc mặn ngọt và hành phi giòn tan, món ăn vặt đường phố Sài Gòn quen thuộc.',
    tags: ['Béo Thơm', 'Dễ Ăn'],
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80'
  },

  // 🥗 MÓN CUỐN & KHAI VỊ (Rolls & Starters)
  {
    id: 'roll-01',
    name: 'Gỏi Cuốn Tôm Thịt Truyền Thống',
    category: 'rolls',
    price: 50000,
    priceDisplay: '50.000₫',
    badge: 'chef',
    badgeText: 'Fresh & Healthy',
    desc: 'Cuốn bánh tráng mềm trong vắt bọc tôm sú tươi luộc đỏ au, thịt ba chỉ, bún tươi, hẹ lá và rau thơm nhiệt đới, chấm sốt tương đen đậu phộng béo bùi.',
    tags: ['Tươi Mát', 'Healthy', 'Chấm Tương Bơ Đậu'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roll-02',
    name: 'Chả Ram Tôm Đất Xứ Nẫu Giòn Tan',
    category: 'rolls',
    price: 65000,
    priceDisplay: '65.000₫',
    badge: null,
    badgeText: '',
    desc: 'Tôm đất tươi ngọt gói bánh tráng phơi sương chiên vàng giòn rụm nhiều giờ, cuốn rau sống chấm nước mắm tỏi ớt chua ngọt kẹo.',
    tags: ['Giòn Rụm Lâu', 'Đặc Sản Miền Trung'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },

  // ☕ ĐỒ UỐNG & TRÁNG MIỆNG (Beverages & Sweets)
  {
    id: 'dr-01',
    name: 'Cà Phê Trứng Hà Nội',
    category: 'drinks',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: 'signature',
    badgeText: 'Signature Drink',
    desc: 'Cốt cà phê Robusta Việt Nam đậm đà hòa quyện cùng lớp kem trứng đánh bông mịn như mây, thơm ngậy vị vani và mật ong không hề tanh.',
    tags: ['Béo Ngậy', 'Đặc Sản Hà Nội'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-02',
    name: 'Cà Phê Muối Cố Đô Xứ Huế',
    category: 'drinks',
    price: 42000,
    priceDisplay: '42.000₫',
    badge: 'bestseller',
    badgeText: 'Hot Trend',
    desc: 'Cà phê phin truyền thống thơm nồng kết hợp với lớp kem muối mặn mặn béo ngậy, tạo nên hậu vị cân bằng quyến rũ khó quên.',
    tags: ['Hậu Vị Muối Kem', 'Đậm Vị'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-03',
    name: 'Trà Đào Cam Sả Mát Lạnh',
    category: 'drinks',
    price: 45000,
    priceDisplay: '45.000₫',
    badge: null,
    badgeText: '',
    desc: 'Trà đen thanh dịu kết hợp cùng sả tươi đập dập, nước cốt cam sành mọng nước và miếng đào ngâm vàng giòn sần sật.',
    tags: ['Thanh Nhiệt', 'Đào Miếng Giòn'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-04',
    name: 'Chè Bưởi An Giang Thơm Nước Cốt Dừa',
    category: 'drinks',
    price: 38000,
    priceDisplay: '38.000₫',
    badge: null,
    badgeText: '',
    desc: 'Cùi bưởi giòn sần sật đã được khử đắng kỹ lưỡng nấu cùng đậu xanh bùi bùi và chan đẫm nước cốt dừa béo thơm ngát.',
    tags: ['Ngọt Thanh', 'Cùi Bưởi Giòn'],
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MENU_ITEMS;
}
