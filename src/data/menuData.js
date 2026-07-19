const DISH_IMAGES = {
  1: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
  2: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
  3: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80',
  4: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
  5: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  6: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
  7: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
  8: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  9: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80',
  10: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80',
  11: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
  12: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',
  13: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
  14: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80',
  15: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80',
};

export const menuItems = [
  {
    id: 1,
    name: 'Tandoori Chicken',
    category: 'main',
    isVeg: false,
    description:
      'Succulent chicken marinated in yogurt and spices, roasted in a clay oven until charred and juicy.',
    fullDescription:
      'Succulent chicken marinated in yogurt, ginger-garlic paste, and aromatic spices, then roasted in a traditional clay tandoor until perfectly charred on the outside and juicy inside. Served with mint chutney and onion rings.',
    image: DISH_IMAGES[1],
    ingredients: [
      { name: 'Chicken (bone-in)', quantity: '500 g' },
      { name: 'Hung curd', quantity: '1/2 cup' },
      { name: 'Kashmiri chilli', quantity: '1 tsp' },
      { name: 'Garam masala', quantity: '1/2 tsp' },
      { name: 'Mustard oil', quantity: '2 tbsp' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 2,
    name: 'Dal Makhani',
    category: 'main',
    isVeg: true,
    description:
      'Slow-cooked black lentils simmered overnight with butter, cream, and warming spices.',
    fullDescription:
      'Creamy black lentils slow-cooked for hours with tomatoes, butter, and cream until rich and velvety. A classic Punjabi comfort dish finished with kasuri methi.',
    image: DISH_IMAGES[2],
    ingredients: [
      { name: 'Black urad dal', quantity: '1 cup' },
      { name: 'Butter', quantity: '3 tbsp' },
      { name: 'Fresh cream', quantity: '1/4 cup' },
      { name: 'Tomato puree', quantity: '1/2 cup' },
      { name: 'Ginger-garlic paste', quantity: '1 tbsp' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 3,
    name: 'Paneer Tikka',
    category: 'starter',
    isVeg: true,
    description:
      'Cubes of cottage cheese grilled with bell peppers and onion in spiced marinade.',
    fullDescription:
      'Soft paneer cubes and vegetables marinated in hung curd and tandoori masala, skewered and grilled until lightly smoky. Served with lemon and chaat masala.',
    image: DISH_IMAGES[3],
    ingredients: [
      { name: 'Paneer', quantity: '250 g' },
      { name: 'Bell pepper', quantity: '1 Pc' },
      { name: 'Onion', quantity: '1 Pc' },
      { name: 'Tandoori masala', quantity: '2 tsp' },
      { name: 'Hung curd', quantity: '1/2 cup' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 4,
    name: 'Gulab Jamun',
    category: 'desert',
    isVeg: true,
    description:
      'Soft milk-solid dumplings soaked in rose-scented sugar syrup.',
    fullDescription:
      'Golden-fried khoya dumplings simmered in warm cardamom and rose-flavoured syrup until melt-in-the-mouth tender. A timeless Indian dessert for celebrations.',
    image: DISH_IMAGES[4],
    ingredients: [
      { name: 'Khoya', quantity: '200 g' },
      { name: 'All-purpose flour', quantity: '2 tbsp' },
      { name: 'Sugar', quantity: '1 cup' },
      { name: 'Rose water', quantity: '1 tsp' },
      { name: 'Cardamom powder', quantity: '1/2 tsp' },
    ],
    servings: 'For 4 people',
  },
  {
    id: 5,
    name: 'Garden Salad',
    category: 'sides',
    isVeg: true,
    description:
      'Crisp lettuce, cucumber, and cherry tomatoes with a light vinaigrette.',
    fullDescription:
      'A refreshing mix of seasonal greens, cucumber ribbons, cherry tomatoes, and red onion tossed in a lemon-olive oil dressing. Perfect alongside rich mains.',
    image: DISH_IMAGES[5],
    ingredients: [
      { name: 'Lettuce', quantity: '2 cups' },
      { name: 'Cucumber', quantity: '1 Pc' },
      { name: 'Cherry tomatoes', quantity: '1/2 cup' },
      { name: 'Olive oil', quantity: '2 tbsp' },
      { name: 'Lemon juice', quantity: '1 tbsp' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 6,
    name: 'Chicken Seekh Kebab',
    category: 'starter',
    isVeg: false,
    description:
      'Minced chicken skewers spiced with herbs and grilled until smoky.',
    fullDescription:
      'Finely minced chicken blended with coriander, mint, and garam masala, shaped on skewers and char-grilled for a juicy, flavour-packed starter.',
    image: DISH_IMAGES[6],
    ingredients: [
      { name: 'Minced chicken', quantity: '400 g' },
      { name: 'Onion', quantity: '1 Pc' },
      { name: 'Fresh coriander', quantity: '1/4 cup' },
      { name: 'Garam masala', quantity: '1 tsp' },
      { name: 'Ginger-garlic paste', quantity: '1 tbsp' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 7,
    name: 'Vegetable Biryani',
    category: 'main',
    isVeg: true,
    description:
      'Fragrant basmati rice layered with spiced vegetables and saffron.',
    fullDescription:
      'Long-grain basmati rice cooked dum-style with mixed vegetables, fried onions, and whole spices. Finished with saffron milk and fresh mint.',
    image: DISH_IMAGES[7],
    ingredients: [
      { name: 'Basmati rice', quantity: '2 cups' },
      { name: 'Mixed vegetables', quantity: '2 cups' },
      { name: 'Saffron', quantity: 'pinch' },
      { name: 'Biryani masala', quantity: '2 tbsp' },
      { name: 'Ghee', quantity: '3 tbsp' },
    ],
    servings: 'For 4 people',
  },
  {
    id: 8,
    name: 'Butter Chicken',
    category: 'main',
    isVeg: false,
    description:
      'Tender chicken in a rich, buttery tomato gravy with a hint of fenugreek.',
    fullDescription:
      'Char-grilled chicken tikka simmered in a velvety tomato-butter sauce with cream and kasuri methi. Served with naan or steamed rice.',
    image: DISH_IMAGES[8],
    ingredients: [
      { name: 'Chicken', quantity: '500 g' },
      { name: 'Butter', quantity: '4 tbsp' },
      { name: 'Tomato puree', quantity: '1 cup' },
      { name: 'Fresh cream', quantity: '1/4 cup' },
      { name: 'Kasuri methi', quantity: '1 tsp' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 9,
    name: 'Samosa Chaat',
    category: 'starter',
    isVeg: true,
    description:
      'Crushed samosas topped with chutneys, yogurt, and sev for a tangy bite.',
    fullDescription:
      'Crispy samosas broken and layered with spiced chickpeas, tamarind chutney, mint chutney, yogurt, and crunchy sev. A street-food favourite elevated for parties.',
    image: DISH_IMAGES[9],
    ingredients: [
      { name: 'Samosas', quantity: '4 Pc' },
      { name: 'Chickpeas', quantity: '1 cup' },
      { name: 'Tamarind chutney', quantity: '3 tbsp' },
      { name: 'Mint chutney', quantity: '3 tbsp' },
      { name: 'Sev', quantity: '1/4 cup' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 10,
    name: 'Garlic Naan',
    category: 'sides',
    isVeg: true,
    description:
      'Soft leavened flatbread brushed with garlic butter from the tandoor.',
    fullDescription:
      'Freshly baked naan slathered with garlic-infused butter and coriander. Pillowy, aromatic, and perfect for scooping curries.',
    image: DISH_IMAGES[10],
    ingredients: [
      { name: 'All-purpose flour', quantity: '2 cups' },
      { name: 'Yeast', quantity: '1 tsp' },
      { name: 'Garlic', quantity: '4 cloves' },
      { name: 'Butter', quantity: '2 tbsp' },
      { name: 'Yogurt', quantity: '1/4 cup' },
    ],
    servings: 'For 4 people',
  },
  {
    id: 11,
    name: 'Fish Amritsari',
    category: 'starter',
    isVeg: false,
    description:
      'Batter-fried fish fillets with ajwain and carom seeds, Amritsari style.',
    fullDescription:
      'Fresh fish marinated in ginger, garlic, and ajwain, coated in a spiced gram-flour batter and deep-fried until golden. Served with mint chutney.',
    image: DISH_IMAGES[11],
    ingredients: [
      { name: 'Fish fillets', quantity: '400 g' },
      { name: 'Gram flour', quantity: '1/2 cup' },
      { name: 'Ajwain', quantity: '1 tsp' },
      { name: 'Red chilli powder', quantity: '1 tsp' },
      { name: 'Lemon juice', quantity: '1 tbsp' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 12,
    name: 'Rasmalai',
    category: 'desert',
    isVeg: true,
    description:
      'Soft cheese discs soaked in sweetened, cardamom-scented milk.',
    fullDescription:
      'Delicate chenna patties poached in saffron milk and garnished with pistachios. A light, elegant dessert to end a festive meal.',
    image: DISH_IMAGES[12],
    ingredients: [
      { name: 'Chenna', quantity: '200 g' },
      { name: 'Full-fat milk', quantity: '2 cups' },
      { name: 'Sugar', quantity: '1/2 cup' },
      { name: 'Saffron', quantity: 'pinch' },
      { name: 'Pistachios', quantity: '2 tbsp' },
    ],
    servings: 'For 4 people',
  },
  {
    id: 13,
    name: 'Jeera Rice',
    category: 'sides',
    isVeg: true,
    description:
      'Basmati rice tempered with cumin seeds and whole spices.',
    fullDescription:
      'Fluffy basmati rice sautéed with cumin, bay leaf, and ghee for a fragrant side that pairs with any curry.',
    image: DISH_IMAGES[13],
    ingredients: [
      { name: 'Basmati rice', quantity: '1 cup' },
      { name: 'Cumin seeds', quantity: '1 tsp' },
      { name: 'Ghee', quantity: '1 tbsp' },
      { name: 'Bay leaf', quantity: '1 Pc' },
      { name: 'Salt', quantity: 'to taste' },
    ],
    servings: 'For 2 people',
  },
  {
    id: 14,
    name: 'Lamb Rogan Josh',
    category: 'main',
    isVeg: false,
    description:
      'Kashmiri lamb curry slow-cooked in a rich, aromatic red gravy.',
    fullDescription:
      'Tender lamb braised with fennel, ginger, and Kashmiri chilli in a deep, flavourful gravy. A showstopper main for special gatherings.',
    image: DISH_IMAGES[14],
    ingredients: [
      { name: 'Lamb', quantity: '500 g' },
      { name: 'Yogurt', quantity: '1/2 cup' },
      { name: 'Kashmiri chilli', quantity: '2 tsp' },
      { name: 'Fennel powder', quantity: '1 tsp' },
      { name: 'Ginger-garlic paste', quantity: '2 tbsp' },
    ],
    servings: 'For 4 people',
  },
  {
    id: 15,
    name: 'Kheer',
    category: 'desert',
    isVeg: true,
    description:
      'Creamy rice pudding simmered with milk, sugar, and cardamom.',
    fullDescription:
      'Short-grain rice slow-cooked in full-fat milk until thick and creamy, sweetened and scented with cardamom. Garnished with almonds and saffron.',
    image: DISH_IMAGES[15],
    ingredients: [
      { name: 'Basmati rice', quantity: '1/4 cup' },
      { name: 'Full-fat milk', quantity: '1 litre' },
      { name: 'Sugar', quantity: '1/2 cup' },
      { name: 'Cardamom powder', quantity: '1/2 tsp' },
      { name: 'Almonds', quantity: '2 tbsp' },
    ],
    servings: 'For 4 people',
  },
];

export function filterMenuItems({ category = 'all', diet = 'all', name = '' }) {
  return menuItems.filter((item) => {
    const categoryMatch =
      category === 'all' || item.category === category;

    const dietMatch =
      diet === 'all' ||
      (diet === 'veg' && item.isVeg) ||
      (diet === 'nonveg' && !item.isVeg);

    const nameMatch =
      !name ||
      item.name.toLowerCase().includes(name.trim().toLowerCase());

    return categoryMatch && dietMatch && nameMatch;
  });
}

export function getMenuItemById(id) {
  const numericId = Number(id);
  return menuItems.find((item) => item.id === numericId);
}
