"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import { getProductById } from "@/lib/data"

export default function ComboPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const combo = getProductById(params.id)

  if (!combo || combo.type !== "combo") {
    return (
      <div className="container flex min-h-[50vh] flex-col items-center justify-center py-12">
        <h1 className="mb-4 text-2xl font-bold">Combo Not Found</h1>
        <Button onClick={() => router.push("/combos")}>Back to Combos</Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(combo, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} × ${combo.name} added to your cart.`,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" className="mb-8" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sunglow/10 to-cambridge_blue/10 rounded-3xl blur-3xl"></div>
          <div className="glass-card overflow-hidden rounded-3xl relative z-10">
            <Image
              src={combo.image || "/placeholder.svg"}
              alt={combo.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-3">
            <h1 className="text-4xl font-bold text-white">{combo.name}</h1>
            <Badge className="bg-folly border-none text-white">Special Combo</Badge>
          </div>

          <p className="mb-6 text-3xl font-bold text-sunglow">₹{combo.price.toFixed(2)}</p>
          <p className="mb-8 text-sm text-folly">Special discount applied!</p>

          <div className="mb-8 glass-card rounded-xl p-6">
            <h2 className="mb-4 text-xl font-bold text-sunglow">Description</h2>
            <p className="text-feldgrau-800 text-lg leading-relaxed">{combo.description}</p>
          </div>

          {combo.items && combo.items.length > 0 && (
            <div className="mb-8 glass-card rounded-xl p-6">
              <h2 className="mb-4 text-xl font-bold text-sunglow">Includes</h2>
              <ul className="space-y-3 text-feldgrau-800">
                {combo.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cambridge_blue text-white text-xs">
                      ✓
                    </span>
                    <span className="text-white">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8 glass-card rounded-xl p-6">
            <h2 className="mb-4 text-xl font-bold text-sunglow">Quantity</h2>
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                className="h-12 w-12 rounded-full border-feldgrau/30 bg-black_bean/30 hover:bg-sunglow/20 hover:text-white"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <span className="w-12 text-center text-2xl font-bold text-white">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={increaseQuantity}
                className="h-12 w-12 rounded-full border-feldgrau/30 bg-black_bean/30 hover:bg-sunglow/20 hover:text-white"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-auto h-14 text-lg bg-gradient-to-r from-sunglow to-sunglow-600 hover:from-sunglow-600 hover:to-sunglow text-black_bean border-none glow-button font-medium"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-3 h-6 w-6" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
