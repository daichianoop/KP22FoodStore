"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { cart, updateQuantity, removeFromCart, subtotal, clearCart } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      })
      return
    }

    router.push("/checkout")
  }

  if (cart.length === 0) {
    return (
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-12">
        <div className="mb-6 rounded-full bg-black_bean/30 p-6">
          <ShoppingBag className="h-16 w-16 text-feldgrau-600" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gradient">Your cart is empty</h1>
        <p className="mb-8 max-w-md text-center text-feldgrau-800">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-folly to-folly-600 hover:from-folly-600 hover:to-folly border-none glow-button"
        >
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gradient">Your Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="hidden border-b border-white/10 pb-4 md:grid md:grid-cols-6">
                <div className="col-span-3 font-medium text-white">Product</div>
                <div className="text-center font-medium text-white">Price</div>
                <div className="text-center font-medium text-white">Quantity</div>
                <div className="text-right font-medium text-white">Total</div>
              </div>

              <div className="divide-y divide-white/10">
                {cart.map((item) => (
                  <div key={item.id} className="py-6 md:grid md:grid-cols-6 md:items-center">
                    <div className="col-span-3 flex items-center gap-4">
                      <div className="h-20 w-20 overflow-hidden rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <p className="text-sm text-feldgrau-800">{item.type === "combo" ? "Combo" : "Single Item"}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-1 h-auto p-0 text-sm text-folly hover:bg-transparent hover:text-folly-600 md:hidden"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          Remove
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 text-center md:mt-0">
                      <p className="text-sm font-medium text-sunglow md:text-base">₹{item.price.toFixed(2)}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-center md:mt-0">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-feldgrau/30 bg-black_bean/30 hover:bg-folly/20 hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-white">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-feldgrau/30 bg-black_bean/30 hover:bg-folly/20 hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between md:mt-0 md:justify-end">
                      <span className="font-medium text-white md:hidden">Total:</span>
                      <span className="font-medium text-sunglow">₹{(item.price * item.quantity).toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 hidden md:inline-flex hover:bg-folly/20 hover:text-white"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-folly" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              onClick={() => router.push("/products")}
              className="border-feldgrau/30 bg-black_bean/30 hover:bg-feldgrau/20 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
            <Button
              variant="outline"
              onClick={() => clearCart()}
              className="border-folly/30 bg-black_bean/30 hover:bg-folly/20 hover:text-white"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Cart
            </Button>
          </div>
        </div>

        <div>
          <div className="glass-card rounded-xl p-6">
            <h2 className="mb-6 text-2xl font-bold text-gradient">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-feldgrau-800">
                <span>Subtotal</span>
                <span className="text-white">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-feldgrau-800">
                <span>Delivery</span>
                <span className="text-cambridge_blue">Free</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-sunglow text-xl">₹{subtotal.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-xs text-feldgrau-800">Including all taxes and delivery charges</p>
              </div>
            </div>

            <Button
              className="mt-8 w-full bg-gradient-to-r from-folly to-folly-600 hover:from-folly-600 hover:to-folly border-none glow-button h-12 text-lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
