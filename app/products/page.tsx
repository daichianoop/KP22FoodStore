import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/lib/data"

export default function ProductsPage() {
  // Group products by category
  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <div className="container py-12">
      <h1 className="mb-12 text-center text-4xl font-bold text-gradient">Our Products</h1>

      {categories.map((category) => (
        <section key={category} className="mb-16">
          <h2 className="mb-8 text-3xl font-bold capitalize">
            <span className="text-sunglow">{category}</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
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
      ))}
    </div>
  )
}
