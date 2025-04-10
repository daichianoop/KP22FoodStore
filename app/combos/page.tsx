import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { combos } from "@/lib/data"

export default function CombosPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gradient">Special Combos</h1>
        <p className="text-feldgrau-800 text-lg">Save more with our specially curated combos!</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {combos.map((combo) => (
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
                <div className="mb-2 flex items-center gap-2">
                  <CardTitle className="text-white">{combo.name}</CardTitle>
                  <Badge className="bg-folly border-none">Save!</Badge>
                </div>
                <p className="mb-4 flex-1 text-sm text-feldgrau-800">{combo.description}</p>

                {combo.items && combo.items.length > 0 && (
                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-semibold text-sunglow">Includes:</h3>
                    <ul className="text-sm text-feldgrau-800">
                      {combo.items.map((item) => (
                        <li key={item.id} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-cambridge_blue"></span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
    </div>
  )
}
