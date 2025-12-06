import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, Shield, ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">سرویس‌های با کیفیت و پایدار</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient-orange">سرعت بی‌وقفه</span>
          <br />
          <span className="text-foreground">قدرت بی‌حد</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          آریاهاست، ارائه‌دهنده خدمات هاستینگ، سرور مجازی، VDS و سرور بازی با بالاترین کیفیت، امنیت و پشتیبانی ۲۴ ساعته
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Link href="/services">
            <Button size="lg" className="gradient-orange border-0 text-white glow-orange" data-testid="button-hero-services">
              مشاهده سرویس‌ها
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="backdrop-blur-md" data-testid="button-hero-contact">
              تماس با ما
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "۹۹.۹%", label: "آپتایم تضمینی" },
            { value: "۲۴/۷", label: "پشتیبانی" },
            { value: "+۵۰۰۰", label: "مشتری فعال" },
            { value: "+۲۰", label: "دیتاسنتر" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center" data-testid={`stat-${index}`}>
              <div className="text-2xl md:text-3xl font-bold text-gradient-orange">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
