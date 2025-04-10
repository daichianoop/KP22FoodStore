"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-nav py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="md:hidden" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-gradient">KP22</span>
            <span className="text-xl font-medium text-white">Food Store</span>
          </Link>
        </div>

        <nav
          className={cn(
            "absolute left-0 top-16 w-full glass-nav md:static md:w-auto md:bg-transparent md:backdrop-blur-none",
            isMenuOpen ? "block" : "hidden md:block",
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8">
            <li>
              <Link
                href="/"
                className="flex h-12 items-center px-4 font-medium transition-colors hover:text-folly md:h-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="flex h-12 items-center px-4 font-medium transition-colors hover:text-folly md:h-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/combos"
                className="flex h-12 items-center px-4 font-medium transition-colors hover:text-folly md:h-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                Combos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/cart">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "relative rounded-full border-folly/50 bg-black_bean/30 backdrop-blur-sm hover:bg-folly/20 hover:text-white transition-all duration-300",
                totalItems > 0 && "animate-pulse",
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-folly text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
