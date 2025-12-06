import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";

const latestPosts = [
  {
    id: "1",
    title: "راهنمای انتخاب بهترین سرور مجازی برای کسب‌وکار شما",
    excerpt: "در این مقاله به بررسی نکات مهم در انتخاب سرور مجازی مناسب می‌پردازیم.",
    category: "آموزش",
    author: "تیم آریاهاست",
    date: "۱۵ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
  },
  {
    id: "2",
    title: "۱۰ نکته طلایی برای افزایش امنیت سرور",
    excerpt: "امنیت سرور یکی از مهم‌ترین جنبه‌های مدیریت زیرساخت IT است.",
    category: "امنیت",
    author: "تیم آریاهاست",
    date: "۱۲ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=450&fit=crop",
  },
  {
    id: "3",
    title: "مقایسه هاست لینوکس و ویندوز",
    excerpt: "کدام سیستم عامل برای میزبانی وبسایت شما مناسب‌تر است؟",
    category: "مقایسه",
    author: "تیم آریاهاست",
    date: "۱۰ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <PricingSection />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              آخرین <span className="text-gradient-orange">مطالب وبلاگ</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              جدیدترین مقالات و آموزش‌های تخصصی در زمینه هاستینگ و سرور
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
