import { Zap, Shield, Clock, Headphones, Server, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "سرعت فوق‌العاده",
    description: "با استفاده از آخرین تکنولوژی‌های SSD NVMe و شبکه پرسرعت",
  },
  {
    icon: Shield,
    title: "امنیت بالا",
    description: "محافظت Anti-DDoS و فایروال پیشرفته برای تمام سرویس‌ها",
  },
  {
    icon: Clock,
    title: "آپتایم ۹۹.۹%",
    description: "تضمین دسترسی پایدار با نظارت ۲۴ ساعته بر سرورها",
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم متخصص ما در تمام ساعات شبانه‌روز در خدمت شماست",
  },
  {
    icon: Server,
    title: "دیتاسنترهای متعدد",
    description: "لوکیشن‌های متنوع در ایران، اروپا و آمریکا",
  },
  {
    icon: Globe,
    title: "پهنای باند نامحدود",
    description: "بدون محدودیت ترافیک و پهنای باند در تمام پلن‌ها",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            چرا <span className="text-gradient-orange">آریاهاست</span>؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ما با ارائه بهترین خدمات و پشتیبانی، رضایت شما را تضمین می‌کنیم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-6 text-center transition-all duration-300 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`feature-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-orange-subtle flex items-center justify-center group-hover:glow-orange transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
