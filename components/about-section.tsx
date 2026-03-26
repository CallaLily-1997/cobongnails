import { Sparkles, Heart, Award, Diamond } from "lucide-react"

const features = [
  {
    icon: Diamond,
    title: "Chất lượng cao cấp",
    description: "Sử dụng sản phẩm nhập khẩu chính hãng từ Hàn Quốc & Nhật Bản, an toàn tuyệt đối"
  },
  {
    icon: Heart,
    title: "Tận tâm chu đáo",
    description: "Đội ngũ nghệ nhân nail giàu kinh nghiệm, phục vụ tận tình như người thân"
  },
  {
    icon: Award,
    title: "Đẳng cấp chuyên nghiệp",
    description: "Đào tạo học viên bài bản với chứng nhận được công nhận toàn quốc"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent-foreground tracking-wide">Về chúng tôi</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 tracking-tight text-balance">
            Nơi vẻ đẹp được tôn vinh
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty font-light">
            Cô Bông Nail là điểm đến sang trọng dành cho những người yêu cái đẹp tại Thủ Dầu Một. 
            Với không gian được thiết kế tinh tế và đội ngũ nghệ nhân tài năng, chúng tôi cam kết 
            mang đến trải nghiệm làm đẹp đẳng cấp cho mỗi khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-3xl p-10 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-accent/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 via-primary/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 text-accent mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/10">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
