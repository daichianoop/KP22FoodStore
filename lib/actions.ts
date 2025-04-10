"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type OrderData = {
  customerName: string
  customerEmail: string
  customerPhone: string
  items: OrderItem[]
  subtotal: number
}

// Email sending function
async function sendOrderEmail(orderData: OrderData) {
  try {
    // In a real application, you would use a service like Nodemailer, SendGrid, etc.
    // For this example, we'll just log the email content
    console.log("Sending email to: kuganoop2005@gmail.com")
    console.log("Order details:", orderData)

    // This would be replaced with actual email sending code
    // Example with Nodemailer or similar service would go here

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send order confirmation email" }
  }
}

// Form schema for checkout
const checkoutFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
})

export async function processOrder(formData: FormData) {
  // Parse and validate form data
  const validatedFields = checkoutFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Get cart items from form data
  const cartItemsJson = formData.get("cartItems") as string
  const subtotal = Number.parseFloat(formData.get("subtotal") as string)

  if (!cartItemsJson) {
    return {
      success: false,
      errors: { cart: ["Cart is empty"] },
    }
  }

  const cartItems = JSON.parse(cartItemsJson)

  // Prepare order data
  const orderData: OrderData = {
    customerName: validatedFields.data.name,
    customerEmail: validatedFields.data.email,
    customerPhone: validatedFields.data.phone,
    items: cartItems,
    subtotal,
  }

  // Send order email
  const emailResult = await sendOrderEmail(orderData)

  if (!emailResult.success) {
    return {
      success: false,
      errors: { email: [emailResult.error || "Failed to send order email"] },
    }
  }

  // Return success instead of redirecting
  revalidatePath("/")
  return { success: true }
}

// Admin actions
type ProductData = {
  id?: string
  name: string
  description: string
  price: number
  category: string
  image: string
  type?: "product" | "combo"
}

export async function addProduct(formData: FormData) {
  // In a real application, this would save to a database
  // For this example, we'll just log the product data
  const productData: ProductData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: Number.parseFloat(formData.get("price") as string),
    category: formData.get("category") as string,
    image: (formData.get("image") as string) || "/placeholder.svg?height=300&width=300",
    type: (formData.get("type") as "product" | "combo") || "product",
  }

  console.log("Adding new product:", productData)

  // In a real app, you would save this to a database

  revalidatePath("/admin/products")
  redirect("/admin/products")
}

export async function updateProduct(formData: FormData) {
  const id = formData.get("id") as string

  const productData: ProductData = {
    id,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: Number.parseFloat(formData.get("price") as string),
    category: formData.get("category") as string,
    image: formData.get("image") as string,
    type: (formData.get("type") as "product" | "combo") || "product",
  }

  console.log("Updating product:", productData)

  // In a real app, you would update this in a database

  revalidatePath("/admin/products")
  redirect("/admin/products")
}

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id") as string

  console.log("Deleting product with ID:", id)

  // In a real app, you would delete this from a database

  revalidatePath("/admin/products")
  redirect("/admin/products")
}
