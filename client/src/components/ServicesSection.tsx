import ServiceCard from "./ServiceCard";
import { Server, HardDrive, Globe, Gamepad2, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "هاست وب",
    description: "میزبانی وب با کیفیت و پایدار برای وبسایت‌های شما",
    features: ["فضای SSD نامحدود", "SSL رایگان", "پشتیبانی از PHP/MySQL", "بکاپ روزانه"],
    price: "۲۹,۰۰۰ تومان",
    link: "/services/hosting",
  },
  {
    icon: Server,
    title: "سرور مجازی VPS",
    description: "سرورهای مجازی قدرتمند با منابع اختصاصی",
    features: ["پردازنده Intel Xeon", "دیسک SSD NVMe", "پهنای باند نامحدود", "دسترسی Root"],
    price: "۹۹,۰۰۰ تومان",
    link: "/services/vps",
  },
  {
    icon: HardDrive,
    title: "سرور اختصاصی VDS",
    description: "سرورهای اختصاصی مجازی با قدرت بالا",
    features: ["منابع تضمین شده", "آپتایم ۹۹.۹%", "ترافیک نامحدود", "مدیریت کامل"],
    price: "۲۴۹,۰۰۰ تومان",
    link: "/services/vds",
  },
  {
    icon: Gamepad2,
    title: "سرور بازی",
    description: "سرورهای بازی با پینگ پایین و کارایی بالا",
    features: ["لوکیشن ایران", "Anti-DDoS", "پنل مدیریت", "نصب آسان"],
    price: "۷۹,۰۰۰ تومان",
    link: "/services/game",
  },
  {
    icon: Cloud,
    title: "فضای ابری",
    description: "فضای ذخیره‌سازی ابری امن و سریع",
    features: ["دسترسی از همه جا", "رمزگذاری AES-256", "همگام‌سازی خودکار", "اشتراک‌گذاری آسان"],
    price: "۴۹,۰۰۰ تومان",
    link: "/services/cloud",
  },
  {
    icon: Shield,
    title: "گواهی SSL",
    description: "گواهینامه‌های امنیتی SSL برای وبسایت‌ها",
    features: ["نصب رایگان", "تمدید خودکار", "پشتیبانی Wildcard", "ضمانت بازگشت وجه"],
    price: "۱۴۹,۰۰۰ تومان",
    link: "/services/ssl",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-orange">خدمات</span> ما
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مجموعه کاملی از خدمات هاستینگ و سرور برای تمام نیازهای شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
