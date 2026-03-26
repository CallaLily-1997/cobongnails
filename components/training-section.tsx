import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, GraduationCap, Star, Users, Trophy, ArrowRight } from "lucide-react"

const benefits = [
  { text: "Học từ cơ bản đến nâng cao", icon: GraduationCap },
  { text: "Thực hành trên khách hàng thật", icon: Users },
  { text: "Giáo viên giàu kinh nghiệm", icon: Star },
  { text: "Cấp chứng nhận sau khóa học", icon: Trophy },
  { text: "Hỗ trợ tìm việc làm", icon: CheckCircle2 },
  { text: "Ưu đãi học phí hấp dẫn", icon: CheckCircle2 }
]

export function TrainingSection() {
  return (
    <section id="training" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground tracking-wide">Đào tạo</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 tracking-tight text-balance">
              Trở thành nghệ nhân nail chuyên nghiệp
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 font-light">
              Chương trình đào tạo toàn diện từ cơ bản đến nâng cao, được thiết kế bởi 
              các chuyên gia hàng đầu. Học viên sẽ được thực hành trực tiếp và nhận 
              chứng chỉ được công nhận sau khi hoàn thành.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/30 hover:border-accent/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-10 py-6 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group">
              <Link href="#contact" className="flex items-center gap-2">
                Đăng ký tư vấn miễn phí
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-primary/10 to-secondary overflow-hidden p-12 shadow-2xl shadow-accent/10">
              <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />
              
              <div className="relative z-10 text-center">
                {/* Decorative icon */}
                <div className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-accent to-primary/50 flex items-center justify-center shadow-xl shadow-accent/30">
                  <GraduationCap className="w-12 h-12 text-card" />
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                  Khai giảng liên tục
                </h3>
                <p className="text-muted-foreground text-lg mb-8 font-light">
                  Đăng ký ngay để nhận ưu đãi đặc biệt dành cho học viên mới
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm">
                    <p className="font-serif text-4xl font-medium text-primary mb-2">50+</p>
                    <p className="text-sm text-muted-foreground">Học viên đã tốt nghiệp</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm">
                    <p className="font-serif text-4xl font-medium text-accent-foreground mb-2">100%</p>
                    <p className="text-sm text-muted-foreground">Có việc làm sau khóa học</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorations */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-accent/40 backdrop-blur-sm" />
            <div className="absolute bottom-1/4 -left-4 w-6 h-6 rounded-full bg-primary/30 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
