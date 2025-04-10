"use client"

import Link from "next/link"
import { CheckCircle, Home, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-8 relative">
        <div className="absolute inset-0 rounded-full bg-cambridge_blue/20 blur-3xl"></div>
        <div className="relative z-10 rounded-full bg-gradient-to-r from-cambridge_blue/30 to-cambridge_blue/10 p-6">
          <CheckCircle className="h-24 w-24 text-cambridge_blue" />
        </div>
      </div>

      <h1 className="mb-4 text-4xl font-bold text-gradient">Order Confirmed!</h1>

      <p className="mb-8 max-w-md text-feldgrau-800 text-lg">
        Thank you for your order. We have sent a confirmation email to your email address.
      </p>

      <div className="mb-12 glass-card rounded-xl p-8 text-left max-w-md w-full">
        <h2 className="mb-6 text-2xl font-bold text-sunglow">Delivery Information</h2>
        <p className="mb-4 text-feldgrau-800">Your order will be delivered to:</p>
        <address className="not-italic bg-black_bean/30 p-4 rounded-lg border border-white/10">
          <p className="font-medium text-white text-lg">3rd floor, infront of room 322</p>
          <p className="text-feldgrau-800">KP 22 Block A</p>
        </address>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          className="bg-gradient-to-r from-folly to-folly-600 hover:from-folly-600 hover:to-folly border-none glow-button"
        >
          <Link href="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-sunglow text-sunglow hover:bg-sunglow/10">
          <Link href="/products" className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  )
}
