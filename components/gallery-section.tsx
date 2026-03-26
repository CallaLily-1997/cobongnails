"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn, Sparkles } from "lucide-react"

const galleryImages = [
  { src: "/gallery/nail-1.jpg", alt: "Mẫu nail nghệ thuật hoa", category: "Nghệ thuật" },
  { src: "/gallery/nail-2.jpg", alt: "Mẫu nail gel French", category: "French" },
  { src: "/gallery/nail-3.jpg", alt: "Mẫu nail ombre", category: "Ombre" },
  { src: "/gallery/nail-4.jpg", alt: "Mẫu nail đính đá", category: "Đính đá" },
  { src: "/gallery/nail-5.jpg", alt: "Mẫu nail minimalist", category: "Minimalist" },
  { src: "/gallery/nail-6.jpg", alt: "Mẫu nail vẽ nghệ thuật", category: "Nghệ thuật" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent-foreground tracking-wide">Bộ sưu tập</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 tracking-tight text-balance">
            Tác phẩm nổi bật
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Khám phá những mẫu nail tinh xảo được tạo nên bởi đội ngũ nghệ nhân tài năng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-foreground/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="px-4 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm mb-3">
                  <span className="text-xs font-medium text-accent-foreground">{image.category}</span>
                </div>
                <div className="flex items-center gap-2 text-card">
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-sm font-medium">Xem chi tiết</span>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/10 backdrop-blur-sm text-card hover:bg-card/20 transition-colors flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-4xl aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt="Selected nail design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
