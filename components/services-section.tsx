import { Brush, Footprints, Palette, Gem, GraduationCap, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Brush,
    title: "Manicure Cao Cấp",
    description: "Chăm sóc và làm đẹp móng tay với quy trình chuẩn spa 5 sao",
    price: "150.000đ",
    features: ["Sơn gel cao cấp", "Massage thư giãn", "Dưỡng da tay"]
  },
  {
    icon: Footprints,
    title: "Pedicure Thư Giãn",
    description: "Liệu trình chăm sóc móng chân toàn diện, thư giãn tuyệt đối",
    price: "180.000đ",
    features: ["Ngâm chân thảo dược", "Tẩy tế bào chết", "Massage chân"]
  },
  {
    icon: Palette,
    title: "Nail Art Nghệ Thuật",
    description: "Sáng tạo mẫu nail độc đáo theo phong cách riêng của bạn",
    price: "200.000đ+",
    features: ["Thiết kế riêng", "Vẽ tay tinh xảo", "Họa tiết 3D"]
  },
  {
    icon: Gem,
    title: "Gel Nails Premium",
    description: "Đắp gel cao cấp với độ bền vượt trội, giữ màu lên đến 4 tuần",
    price: "350.000đ",
    features: ["Gel nhập khẩu", "Bền màu 4 tuần", "An toàn cho móng"]
  },
  {
    icon: GraduationCap,
    title: "Khóa Đào Tạo",
    description: "Chương trình đào tạo chuyên nghiệp từ cơ bản đến nâng cao",
    price: "Liên hệ",
    features: ["1 kèm 1", "Thực hành thực tế", "Cấp chứng chỉ"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Gem className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Dịch vụ</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 tracking-tight text-balance">
            Dịch vụ cao cấp
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Trải nghiệm dịch vụ làm nail đẳng cấp với những sản phẩm tốt nhất
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border/30 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 text-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-sm font-semibold text-accent-foreground">{service.price}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                >
                  Đặt lịch ngay
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
