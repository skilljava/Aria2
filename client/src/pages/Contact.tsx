import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "تلفن",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    description: "شنبه تا پنجشنبه ۹ صبح تا ۶ عصر",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "info@ariahost.ir",
    description: "پاسخگویی کمتر از ۲۴ ساعت",
  },
  {
    icon: MapPin,
    title: "آدرس",
    value: "تهران، خیابان ولیعصر",
    description: "پلاک ۱۲۳، طبقه ۵",
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    value: "۹:۰۰ - ۱۸:۰۰",
    description: "شنبه تا پنجشنبه",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-orange">تماس</span> با ما
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    ارسال پیام
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-white/10 transition-all duration-300 hover:border-primary/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-orange-subtle flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{info.title}</h3>
                        <p className="text-gradient-orange font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 glow-orange">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-orange flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">پشتیبانی ۲۴/۷</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده کمک به شماست
                  </p>
                  <p className="text-gradient-orange font-bold text-lg" dir="ltr">
                    ۰۲۱-۸۷۶۵۴۳۲۱
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 glass-card p-4 rounded-xl overflow-hidden">
            <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">نقشه محل دفتر - تهران، خیابان ولیعصر</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
