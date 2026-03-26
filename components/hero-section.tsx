"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxurious background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-card" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-accent/30 shadow-lg shadow-accent/5 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent-foreground tracking-wide">Premium Nail Salon</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 tracking-tight">
            <span className="block">Cô Bông</span>
            <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Nail Studio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-light text-pretty">
            Trải nghiệm dịch vụ làm nail cao cấp và đào tạo chuyên nghiệp tại không gian sang trọng, thoải mái
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-10 py-6 text-base font-medium shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]">
              <Link href="#contact">Đặt lịch hẹn</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 text-base font-medium border-2 border-foreground/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
              <Link href="#services">Khám phá dịch vụ</Link>
            </Button>
          </div>
          
          {/* Luxury stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-20 pt-12">
            <div className="text-center group">
              <p className="font-serif text-4xl md:text-5xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-500">3,500+</p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-3" />
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Khách hàng tin tưởng</p>
            </div>
            <div className="text-center group">
              <p className="font-serif text-4xl md:text-5xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-500">1,100+</p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-3" />
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Mẫu thiết kế</p>
            </div>
            <div className="text-center group">
              <p className="font-serif text-4xl md:text-5xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-500">5+</p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-3" />
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Năm kinh nghiệm</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Khám phá</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent relative">
          <div className="absolute top-0 w-px h-4 bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
