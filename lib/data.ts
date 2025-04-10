import type { Product } from "@/types/product"

// Calculate price with markup (MRP + 9)
const calculatePrice = (mrp: number) => mrp + 5

export const products: Product[] = [
  {
    id: "1",
    name: "Kurkure Masala Munch",
    description: "Crunchy and spicy corn puffs with a tangy masala flavor.",
    price: calculatePrice(20),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRfVD-G5QtwEunnp1-qhiTLVTcQS6y_kbHw&s",
    category: "snacks",
  },
  {
    id: "2",
    name: "Kurkure Chilli Chatka",
    description: "Spicy corn puffs with a fiery chilli flavor that packs a punch.",
    price: calculatePrice(20),
    image: "https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F2193%2F1691236059327.png%3Ftype%3Dpng&w=1080&q=75",
    category: "snacks",
  },
  {
    id: "3",
    name: "Tedhe Medhe Original",
    description: "Uniquely shaped savory snack with a blend of spices.",
    price: calculatePrice(30),
    image: "https://www.bigbasket.com/media/uploads/p/s/40226709_11-bingo-tedhe-medhe-snacks-with-corn-rice-dal-masala-tadka.jpg",
    category: "snacks",
  },
  {
    id: "4",
    name: "Too Yum Multigrain Chips",
    description: "Healthy multigrain chips with less oil and authentic flavors.",
    price: calculatePrice(40),
    image: "https://iprod.mishry.com/wp-content/uploads/2022/04/too-yumm-multigrain-chips-review-1-1024x768.png",
    category: "snacks",
  },
  {
    id: "5",
    name: "Coca Cola",
    description: "Refreshing cola drink in a convenient bottle.",
    price: calculatePrice(40),
    image: "https://halalcourses.com/651-large_default/coca-cola-50cl.jpg",
    category: "drinks",
  },
  {
    id: "6",
    name: "Pepsi",
    description: "Classic cola taste that refreshes instantly.",
    price: calculatePrice(40),
    image: "https://digitalcontent.api.tesco.com/v2/media/ghs/3ba09530-c08e-4e74-9faa-7d1ce7936780/fb5ddb31-7570-4204-a71e-9d28e030ea8c_799534937.jpeg?h=960&w=960",
    category: "drinks",
  },
  {
    id: "7",
    name: "Amul Lassi",
    description: "Healthy and refreshing drink that energizes you.",
    price: calculatePrice(20),
    image: "https://www.grocio.in/upload_images/product/big/8131548851251.jpg",
    category: "drinks",
  },
  {
    id: "8",
    name: "Sprite",
    description: "Crisp, refreshing lemon-lime flavored soft drink.",
    price: calculatePrice(40),
    image: "https://www.bigbasket.com/media/uploads/p/m/402837_1-sprite-soft-drink.jpg",
    category: "drinks",
  },
]

export const combos: Product[] = [
  {
    id: "c1",
    name: "Movie Night Combo",
    description: "Perfect snack combo for movie nights - includes chips and a refreshing drink.",
    price: calculatePrice(40), // Special discount on combos
    image: "https://www.bigbasket.com/media/uploads/p/xxl/1229493_1-bb-combo-kurkure-namkeen-masala-munch-70-g-pepsi-soft-drink-750-ml.jpg",
    category: "combos",
    type: "combo",
    items: [
      { id: "1", name: "Kurkure Masala Munch" },
      { id: "5", name: "Coca Cola" },
    ],
  },
  {
    id: "c2",
    name: "Party Pack",
    description: "Great for small gatherings - variety of snacks and drinks.",
    price: calculatePrice(100), // Special discount on combos
    image: "https://cdn.grofers.com/app/images/products/sliding_image/388056a.jpg",
    category: "combos",
    type: "combo",
    items: [
      { id: "1", name: "Kurkure Masala Munch" },
      { id: "3", name: "Tedhe Medhe Original" },
      { id: "5", name: "Coca Cola" },
      { id: "8", name: "Sprite" },
    ],
  },
  {
    id: "c3",
    name: "Healthy Munch Combo",
    description: "Guilt-free snacking with multigrain chips and a refreshing drink.",
    price: calculatePrice(90) - 10, // Special discount on combos
    image: "/placeholder.svg?height=300&width=300",
    category: "combos",
    type: "combo",
    items: [
      { id: "4", name: "Too Yum Multigrain Chips" },
      { id: "7", name: "Mountain Dew" },
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return [...products, ...combos].find((product) => product.id === id)
}

export function getAllProducts(): Product[] {
  return products
}

export function getAllCombos(): Product[] {
  return combos
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
