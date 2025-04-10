import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-black_bean/80 to-black_bean text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gradient">KP22 Food Store</h3>
            <p className="text-feldgrau-800">Your favorite snacks and drinks delivered to your doorstep.</p>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold text-sunglow">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-feldgrau-800 transition-colors hover:text-folly">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-feldgrau-800 transition-colors hover:text-folly">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/combos" className="text-feldgrau-800 transition-colors hover:text-folly">
                  Combos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold text-cambridge_blue">Contact Us</h3>
            <address className="not-italic text-feldgrau-800">
              <p>KP 22 Block A</p>
              <p>3rd floor, infront of room 322</p>
              <p className="mt-4 font-medium text-white">Email: kuganoop2005@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-feldgrau-800">
          <p>&copy; {new Date().getFullYear()} KP22 Food Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
