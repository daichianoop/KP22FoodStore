export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  type?: "product" | "combo"
  items?: { id: string; name: string }[] // For combo products
}
