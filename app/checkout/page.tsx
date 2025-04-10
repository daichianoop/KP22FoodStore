"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { processOrder } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { cart, subtotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})

  if (cart.length === 0) {
    router.push("/cart")
    return null
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormErrors({})

    const formData = new FormData(event.currentTarget)
    formData.append("cartItems", JSON.stringify(cart))
    formData.append("subtotal", subtotal.toString())

    // Add dummy email and phone for the server action validation
    formData.append("email", "customer@example.com")
    formData.append("phone", "1234567890")

    try {
      const result = await processOrder(formData)

      if (!result.success) {
        setFormErrors(result.errors || {})
        toast({
          title: "Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      // Clear cart and redirect to confirmation page
      clearCart()
      router.push("/order-confirmation")
    } catch (error) {
      console.error("Checkout error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gradient">Checkout</h1>

      <div className="mx-auto max-w-4xl">
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-sunglow">Just One Step Away!</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="h-12 bg-black_bean/30 border-feldgrau/30 focus:border-folly focus:ring-folly text-lg"
                        placeholder="Enter your name"
                      />
                      {formErrors.name && <p className="text-sm text-folly">{formErrors.name[0]}</p>}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-black_bean/50 to-black_bean/30 p-6">
                  <h2 className="mb-4 text-xl font-bold text-white">Delivery Information</h2>
                  <p className="text-feldgrau-800">
                    Your order will be delivered to:{" "}
                    <strong className="text-white">3rd floor, infront of room 322, KP 22 Block A</strong>
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-gradient-to-r from-folly to-folly-600 hover:from-folly-600 hover:to-folly border-none glow-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </form>
            </div>

            <div className="md:col-span-2 bg-black_bean/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Order Summary</h2>

              <div className="space-y-6">
                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-white/10 pb-4">
                      <div className="h-16 w-16 overflow-hidden rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <p className="text-sm text-feldgrau-800">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sunglow">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-feldgrau-800">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-feldgrau-800">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex justify-between font-bold text-white">
                      <span>Total</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
