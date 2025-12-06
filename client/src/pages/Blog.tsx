import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";

const categories = ["همه", "آموزش", "امنیت", "مقایسه", "اخبار", "راهنما"];

const blogPosts = [
  {
    id: "1",
    title: "راهنمای انتخاب بهترین سرور مجازی برای کسب‌وکار شما",
    excerpt: "در این مقاله به بررسی نکات مهم در انتخاب سرور مجازی مناسب می‌پردازیم و تفاوت‌های VPS و VDS را شرح می‌دهیم.",
    category: "آموزش",
    author: "تیم آریاهاست",
    date: "۱۵ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
  },
  {
    id: "2",
    title: "۱۰ نکته طلایی برای افزایش امنیت سرور",
    excerpt: "امنیت سرور یکی از مهم‌ترین جنبه‌های مدیریت زیرساخت IT است. در این مقاله ۱۰ نکته کاربردی را بررسی می‌کنیم.",
    category: "امنیت",
    author: "تیم آریاهاست",
    date: "۱۲ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=450&fit=crop",
  },
  {
    id: "3",
    title: "مقایسه هاست لینوکس و ویندوز",
    excerpt: "کدام سیستم عامل برای میزبانی وبسایت شما مناسب‌تر است؟ مزایا و معایب هر کدام را بررسی می‌کنیم.",
    category: "مقایسه",
    author: "تیم آریاهاست",
    date: "۱۰ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
  },
  {
    id: "4",
    title: "آشنایی با CDN و مزایای آن",
    excerpt: "شبکه توزیع محتوا چیست و چگونه می‌تواند سرعت وبسایت شما را افزایش دهد؟",
    category: "آموزش",
    author: "تیم آریاهاست",
    date: "۸ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
  },
  {
    id: "5",
    title: "راهنمای نصب وردپرس روی هاست",
    excerpt: "آموزش گام به گام نصب وردپرس روی هاست با استفاده از cPanel و نصب خودکار.",
    category: "راهنما",
    author: "تیم آریاهاست",
    date: "۵ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
  },
  {
    id: "6",
    title: "بروزرسانی‌های جدید دیتاسنتر آریاهاست",
    excerpt: "با افتخار اعلام می‌کنیم که دیتاسنتر جدید ما در تهران راه‌اندازی شد.",
    category: "اخبار",
    author: "تیم آریاهاست",
    date: "۱ آذر ۱۴۰۳",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "همه" || post.category === activeCategory;
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-orange">وبلاگ</span> آریاهاست
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              آخرین مقالات، آموزش‌ها و اخبار در زمینه هاستینگ و سرور
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category ? "gradient-orange border-0 text-white" : ""}
                  onClick={() => setActiveCategory(category)}
                  data-testid={`category-${category}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="جستجو..."
                className="pr-10 glass-card border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-blog"
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">مطلبی یافت نشد.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
