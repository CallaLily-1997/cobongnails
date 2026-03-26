import Link from "next/link"
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "152 Thích Quảng Đức, Phú Cường, Thủ Dầu Một",
    highlight: true
  },
  {
    icon: Clock,
    title: "Giờ mở cửa",
    content: (
      <>
        <span className="block">Thứ 2 - Thứ 7: 9:00 - 20:00</span>
        <span className="block">Chủ nhật: 9:00 - 18:00</span>
      </>
    ),
    highlight: false
  },
  {
    icon: Phone,
    title: "Liên hệ",
    content: "Nhắn tin qua TikTok hoặc đến tiệm",
    highlight: false
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Liên hệ</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 tracking-tight text-balance">
            Ghé thăm studio của chúng tôi
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Đặt lịch hẹn hoặc ghé thăm trực tiếp để được tư vấn và trải nghiệm dịch vụ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 p-7 rounded-3xl transition-all duration-300 ${
                  info.highlight 
                    ? "bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 shadow-lg shadow-accent/5" 
                    : "bg-background border border-border/30 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                }`}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                  info.highlight 
                    ? "bg-accent/20 text-accent" 
                    : "bg-accent/10 text-accent"
                }`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{info.title}</h3>
                  <div className="text-muted-foreground leading-relaxed">{info.content}</div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-7 bg-background rounded-3xl border border-border/30 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <h3 className="font-semibold text-lg text-foreground mb-5">Theo dõi chúng tôi</h3>
              <Link
                href="https://www.tiktok.com/@cobong_nails48"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-6 py-4 bg-foreground text-card rounded-2xl hover:bg-primary transition-colors shadow-lg shadow-foreground/10 hover:shadow-primary/20"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <div className="flex-1">
                  <p className="font-semibold">TikTok</p>
                  <p className="text-sm opacity-80">@cobong_nails48</p>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden bg-muted min-h-[500px] shadow-2xl shadow-foreground/5 border border-border/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4524!2d106.6523!3d10.9804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU4JzQ5LjQiTiAxMDbCsDM5JzA4LjMiRQ!5e0!3m2!1svi!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cô Bông Nail Location"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cô Bông Nail Studio</p>
                  <p className="text-sm text-muted-foreground">152 Thích Quảng Đức, Phú Cường</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
