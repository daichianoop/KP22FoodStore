import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { products, combos } from "@/lib/data"
import { ArrowRight, ShoppingBag, Truck, Clock } from "lucide-react"

export default function Home() {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4)

  // Get featured combos (first 2)
  const featuredCombos = combos.slice(0, 2)

  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-black_bean via-black_bean/90 to-folly/30 p-6 text-white md:p-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
              <span className="text-gradient">Delicious</span> Snacks <br />
              <span className="text-sunglow">Delivered Fast</span>
            </h1>
            <p className="mb-8 text-lg text-feldgrau-800 md:text-xl">
              Discover a wide range of delicious snacks and refreshing drinks at KP22 Food Store.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-folly to-folly-600 hover:from-folly-600 hover:to-folly text-white border-none glow-button"
              >
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-sunglow text-sunglow hover:bg-sunglow/10">
                <Link href="/combos">View Combos</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-folly/20 to-sunglow/20 blur-3xl"></div>
              <Image
                src="https://5.imimg.com/data5/SELLER/Default/2023/5/308933514/HR/IS/WC/116880623/kurkure-masala-munch-500x500.png"
                alt="Snacks and Drinks"
                width={400}
                height={400}
                className="float relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-folly/20">
            <ShoppingBag className="h-6 w-6 text-folly" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Premium Selection</h3>
          <p className="text-feldgrau-800">Curated selection of the best snacks and drinks</p>
        </div>
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sunglow/20">
            <Truck className="h-6 w-6 text-sunglow" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Fast Delivery</h3>
          <p className="text-feldgrau-800">Quick delivery to your doorstep</p>
        </div>
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cambridge_blue/20">
            <Clock className="h-6 w-6 text-cambridge_blue" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Convenient Hours</h3>
          <p className="text-feldgrau-800">Available when you need your favorite snacks</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">Featured</span> Products
          </h2>
          <Link href="/products" className="group flex items-center text-folly hover:text-folly-600">
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="product-card glass-card border-none overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1 text-white">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="line-clamp-2 text-sm text-feldgrau-800">{product.description}</p>
                <p className="mt-2 text-xl font-bold text-folly">₹{product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-folly to-folly-600 hover:from-folly-600 hover:to-folly border-none"
                >
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Combos */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            <span className="text-sunglow">Special</span> Combos
          </h2>
          <Link href="/combos" className="group flex items-center text-sunglow hover:text-sunglow-600">
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredCombos.map((combo) => (
            <Card key={combo.id} className="product-card glass-card border-none overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={combo.image || "/placeholder.svg"}
                    alt={combo.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <CardTitle className="mb-2 text-white">{combo.name}</CardTitle>
                  <p className="mb-4 flex-1 text-sm text-feldgrau-800">{combo.description}</p>
                  <div className="mb-4">
                    <p className="text-xl font-bold text-sunglow">₹{combo.price.toFixed(2)}</p>
                    <p className="text-sm text-folly">Special Discount Applied!</p>
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-sunglow to-sunglow-600 hover:from-sunglow-600 hover:to-sunglow text-black_bean border-none font-medium"
                  >
                    <Link href={`/combos/${combo.id}`}>View Combo</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Store Info */}
      <section className="glass-card rounded-2xl p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gradient">Visit Our Store</h2>
            <address className="not-italic text-lg">
              <p className="mb-2 text-white">KP 22 Block A</p>
              <p className="mb-6 text-feldgrau-800">3rd floor, infront of room 322</p>
              <p className="font-medium text-cambridge_blue">Contact: kuganoop2005@gmail.com</p>
            </address>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-sunglow">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cambridge_blue text-white">
                  ✓
                </span>
                <span className="text-lg">Wide variety of snacks and drinks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cambridge_blue text-white">
                  ✓
                </span>
                <span className="text-lg">Special combo offers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cambridge_blue text-white">
                  ✓
                </span>
                <span className="text-lg">Convenient location</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
