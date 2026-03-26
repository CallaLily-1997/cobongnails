import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#gallery", label: "Bộ sưu tập" },
  { href: "#training", label: "Đào tạo" },
  { href: "#contact", label: "Liên hệ" },
]

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-12 border-b border-card/10">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-foreground font-serif text-lg shadow-lg">
                CB
              </div>
              <span className="font-serif text-2xl font-medium">Cô Bông Nail</span>
            </Link>
            <p className="text-card/60 mt-3 max-w-xs">
              Tiệm nail cao cấp & đào tạo chuyên nghiệp tại Thủ Dầu Một
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-card/70 hover:text-card transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <Link
            href="https://www.tiktok.com/@cobong_nails48"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/10 hover:bg-card/20 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="font-medium">@cobong_nails48</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="pt-8 text-center">
          <p className="text-card/50 text-sm">
            © {new Date().getFullYear()} Cô Bông Nail Studio. Thiết kế với tình yêu.
          </p>
        </div>
      </div>
    </footer>
  )
}
