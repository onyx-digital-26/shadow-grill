// app/data.js

// --- 1. HOME PAGE GRID ---
export const homeGridItems = [
  {
    src: "/images/hero-wood.jpg",
    title: "Wood Fired",
    subtitle: "Ancient techniques, modern presentation",
  },
  {
    src: "/images/hero-wine.jpg",
    title: "Curated Wine",
    subtitle: "Sommelier selected vintage pairings",
  },
  {
    src: "/images/hero-artisian.jpg",
    title: "Artisan Chefs",
    subtitle: "Crafting Masterpieces daily",
  },
];

// --- 2. MENU PAGE ---
export const menuCategories = [
  "All",
  "Steaks",
  "Seafood",
  "Mains",
  "Drinks",
  "Dessert",
];

export const menuItems = [
  {
    id: 1,
    name: "Signature Ribeye",
    category: "Steaks",
    price: "$49.99",
    desc: "20oz bone-in ribeye, dry-aged for 45 days, served with truffle butter.",
    longDesc:
      "Our crown jewel. This 20oz bone-in ribeye is dry-aged in-house for 45 days to concentrate the flavor, then seared over open oak logs. Finished with a dollop of house-made black truffle butter that melts into the crust.",
    flavorProfile: ["Rich", "Smokey", "Umami"],
    pairing: "Vintage Cabernet",
    image: "/images/item-steak.jpg",
  },
  {
    id: 2,
    name: "Smoked Short Ribs",
    category: "Steaks",
    price: "$60",
    desc: "Slow-cooked for 12 hours, glazed in our house bourbon BBQ sauce.",
    longDesc:
      "Patience is the main ingredient here. These ribs are rubbed with a secret spice blend and smoked low and slow over hickory wood for 12 hours until the meat literally falls off the bone.",
    flavorProfile: ["Tender", "Sweet & Spicy", "Smokey"],
    pairing: "Craft Stout or Cola",
    image: "/images/item-ribs.jpg",
  },
  {
    id: 3,
    name: "Cedar Plank Salmon",
    category: "Seafood",
    price: "$29",
    desc: "Fresh Atlantic salmon grilled on cedar wood with lemon dill glaze.",
    longDesc:
      "Freshly caught Atlantic salmon, grilled directly on a soaked cedar plank. The steam from the wood infuses the fish with a subtle woody aroma, perfectly balancing the zesty lemon dill glaze.",
    flavorProfile: ["Fresh", "Zesty", "Light"],
    pairing: "Chardonnay or Sparkling Water",
    image: "/images/item-salmon.jpg",
  },
  {
    id: 4,
    name: "The Shadow Burger",
    category: "Mains",
    price: "$40",
    desc: "Wagyu beef blend, black garlic aioli, smoked cheddar, brioche bun.",
    longDesc:
      "Not your average burger. We use a custom blend of Wagyu brisket and short rib. Topped with melted smoked cheddar and our signature black garlic aioli for a deep, savory punch.",
    flavorProfile: ["Juicy", "Savory", "Cheesy"],
    pairing: "Classic Milkshake",
    image: "/images/item-burger.jpg",
  },
  {
    id: 5,
    name: "Vintage Cabernet",
    category: "Drinks",
    price: "$5",
    desc: "A bold red from Napa Valley, pairing perfectly with our steaks. (Alcohol Free)",
    longDesc:
      "A premium non-alcoholic dealcoholized wine sourced from Napa Valley grapes. It retains the deep notes of blackberry, dark chocolate, and oak without the alcohol.",
    flavorProfile: ["Bold", "Fruity", "Dry"],
    pairing: "Signature Ribeye",
    image: "/images/item-wine.jpg",
  },
  {
    id: 6,
    name: "Molten Gold Cake",
    category: "Dessert",
    price: "$25",
    desc: "Dark chocolate fondant with a liquid gold caramel center.",
    longDesc:
      "A decadent end to your meal. This dark chocolate fondant is baked fresh to order. Break the shell to reveal a flowing river of salted caramel 'liquid gold'.",
    flavorProfile: ["Sweet", "Decadent", "Warm"],
    pairing: "Espresso",
    image: "/images/item-cake.jpg",
  },
  {
    id: 7,
    name: "Truffle Fries",
    category: "Mains",
    price: "$12",
    desc: "Hand-cut fries tossed in white truffle oil and parmesan dust.",
    longDesc:
      "Crispy double-fried potatoes tossed in premium white truffle oil, rosemary, and aged parmesan cheese. Served with a side of garlic aioli.",
    flavorProfile: ["Crispy", "Earthy", "Salty"],
    pairing: "The Shadow Burger",
    image: "/images/item-fries.jpg",
  },
  {
    id: 8,
    name: "Smoked Old Fashioned",
    category: "Drinks",
    price: "$9.99",
    desc: "Zero-proof bourbon, maple syrup, orange peel, hickory smoke.",
    longDesc:
      "The theatre of dining. We smoke this drink tableside using hickory chips to infuse the non-alcoholic bourbon with a deep, campfire aroma.",
    flavorProfile: ["Smokey", "Sweet", "Citrus"],
    pairing: "Smoked Short Ribs",
    image: "/images/item-drink.jpg",
  },
];

// --- 3. SPECIALS PAGE ---
export const specialsData = [
  {
    id: 1,
    title: "The Golden Tomahawk",
    tag: "Signature Dish",
    desc: "A massive 40oz Wagyu Tomahawk steak, wrapped in edible 24k gold leaf and seared over white oak charcoal. Served with roasted bone marrow and truffle chimichurri.",
    price: "PKR 4999",
    pairing: "Cabernet Sauvignon 2018",
    image: "/images/special-tomahawk.jpg",
  },
  {
    id: 2,
    title: "Midnight Lobster Thermidor",
    tag: "Seafood Delicacy",
    desc: "Wild-caught Maine lobster, poached in cognac cream sauce with gruyère cheese and wild mushrooms. Finished under the broiler for a golden crust.",
    price: "PKR 9000",
    pairing: "Vintage Champagne",
    image: "/images/special-lobster.jpg",
  },
  {
    id: 3,
    title: "Shadow Beef Wellington",
    tag: "Classic Revival",
    desc: "Center-cut filet mignon coated in duxelles and prosciutto, wrapped in a puff pastry lattice. Baked to medium-rare perfection and served with a red wine reduction.",
    price: "PKR 5999",
    pairing: "Pinot Noir",
    image: "/images/special-wellington.jpg",
  },
];

// --- 4. ABOUT PAGE (CHEFS) ---
export const chefData = [
  {
    name: "Antonio Russo",
    role: "Executive Chef",
    img: "/images/chef-head.jpg",
  },
  { name: "Sarah Chen", role: "Head Sommelier", img: "/images/chef-sous.jpg" },
  {
    name: "Marcus Thorne",
    role: "Grill Master",
    img: "/images/chef-pastry.jpg",
  },
];

// --- 5. REVIEWS PAGE ---
export const reviewsData = [
  {
    id: 1,
    name: "Abdul Hadi",
    role: "Food Critic",
    image: "/images/user-1.jpg",
    rating: 5,
    text: "I have dined in Paris, Tokyo, and New York, but the Tomahawk steak at Shadow Grill is in a league of its own. The atmosphere is intoxicating.",
  },
  {
    id: 2,
    name: "Abdul Hadi Faheem",
    role: "Verified Guest",
    image: "/images/user-2.jpg",
    rating: 5,
    text: "The service was impeccable. It felt like a private dining experience even though the room was full. The smoked cocktails are a must-try.",
  },
  {
    id: 3,
    name: "Abdul Hadi",
    role: "Anniversary Couple",
    image: "/images/user-3.jpg",
    rating: 5,
    text: "A perfect venue for our anniversary. The lighting, the music, the food—everything was orchestrated to perfection. We will be back.",
  },
];

// --- 6. FAQ PAGE ---
export const faqData = [
  {
    id: 1,
    question: "Is there a dress code?",
    answer:
      "Yes. We request a 'Smart Casual' or 'Elegant' dress code. Jackets are recommended for gentlemen. We kindly ask guests to avoid sportswear, flip-flops, and baseball caps.",
  },
  {
    id: 2,
    question: "Do I need a reservation?",
    answer:
      "While we do accept walk-ins based on availability, Shadow Grill is often fully booked weeks in advance. We highly recommend securing a table via our Reservation page.",
  },
  {
    id: 3,
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Absolutely. While we are a steakhouse, our chefs are skilled in preparing vegetarian, gluten-free, and dairy-free options. Please mention any allergies when booking.",
  },
  {
    id: 4,
    question: "Is there valet parking?",
    answer:
      "Yes, complimentary valet parking is available for all dinner guests starting at 5:00 PM located at the main entrance.",
  },
  {
    id: 5,
    question: "Can I host a private event?",
    answer:
      "Yes. We have a private VIP cellar that seats up to 20 guests. For larger inquiries, please contact us directly via the Contact page.",
  },
];

// --- 7. GALLERY PAGE ---
export const galleryItems = [
  {
    id: 1,
    title: "Mastery",
    desc: "Precision in every grain.",
    image: "/images/gallery-1.png",
    category: "Kitchen",
  },
  {
    id: 2,
    title: "Ambiance",
    desc: "Dining in luxury.",
    image: "/images/gallery-2.jpg",
    category: "Interior",
  },
  {
    id: 3,
    title: "Alchemy",
    desc: "Smoked cocktails.",
    image: "/images/gallery-3.jpg",
    category: "Bar",
  },
  {
    id: 4,
    title: "Quality",
    desc: "A5 Wagyu Beef.",
    image: "/images/gallery-4.png",
    category: "Ingredients",
  },
  {
    id: 5,
    title: "Intimacy",
    desc: "Moments to remember.",
    image: "/images/gallery-5.jpg",
    category: "Atmosphere",
  },
  {
    id: 6,
    title: "The Element",
    desc: "Born from fire.",
    image: "/images/gallery-6.jpg",
    category: "Kitchen",
  },
];

// --- 8. FOMO NOTIFICATIONS ---
export const fomoBookings = [
  { name: "Sarah J.", location: "Downtown", party: "Table for 2" },
  { name: "Michael K.", location: "West End", party: "VIP Cellar" },
  {
    name: "David & Emma",
    location: "Shadow City",
    party: "Anniversary Dinner",
  },
  { name: "The Thompson Family", location: "North Side", party: "Table for 5" },
  { name: "James L.", location: "Business District", party: "Table for 4" },
];
