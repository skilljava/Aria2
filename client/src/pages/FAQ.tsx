import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle } from "lucide-react";

const faqCategories = [
  { id: "general", label: "عمومی" },
  { id: "hosting", label: "هاست وب" },
  { id: "vps", label: "سرور مجازی" },
  { id: "billing", label: "مالی" },
  { id: "support", label: "پشتیبانی" },
];

const faqData = {
  general: [
    {
      question: "آریاهاست چه خدماتی ارائه می‌دهد؟",
      answer: "آریاهاست ارائه‌دهنده خدمات هاستینگ وب، سرور مجازی VPS، سرور اختصاصی VDS، سرور بازی، فضای ابری و گواهی SSL است. تمام خدمات با پشتیبانی ۲۴ ساعته و ضمانت آپتایم ۹۹.۹٪ ارائه می‌شود.",
    },
    {
      question: "آیا امکان تست رایگان وجود دارد؟",
      answer: "بله، برای اکثر سرویس‌های ما ضمانت بازگشت وجه ۷ روزه وجود دارد. در صورت عدم رضایت، می‌توانید درخواست استرداد وجه دهید.",
    },
    {
      question: "دیتاسنترهای شما در کجا قرار دارند؟",
      answer: "دیتاسنترهای ما در ایران (تهران و مشهد)، آلمان (فرانکفورت)، هلند (آمستردام)، فرانسه (پاریس) و آمریکا (نیویورک) قرار دارند.",
    },
  ],
  hosting: [
    {
      question: "تفاوت هاست لینوکس و ویندوز چیست؟",
      answer: "هاست لینوکس مناسب برای وبسایت‌های PHP/MySQL مانند وردپرس است و هزینه کمتری دارد. هاست ویندوز برای وبسایت‌های ASP.NET و SQL Server مناسب است.",
    },
    {
      question: "آیا SSL رایگان ارائه می‌دهید؟",
      answer: "بله، گواهی SSL Let's Encrypt رایگان برای تمام پلن‌های هاستینگ ارائه می‌شود و به صورت خودکار نصب و تمدید می‌گردد.",
    },
    {
      question: "چگونه می‌توانم وردپرس نصب کنم؟",
      answer: "از طریق پنل مدیریت cPanel می‌توانید با چند کلیک وردپرس را نصب کنید. همچنین تیم پشتیبانی ما آماده کمک به شما است.",
    },
  ],
  vps: [
    {
      question: "تفاوت VPS و VDS چیست؟",
      answer: "VPS از منابع مشترک استفاده می‌کند در حالی که VDS منابع کاملاً اختصاصی و تضمین شده دارد. VDS برای کاربردهای حرفه‌ای و پربار مناسب‌تر است.",
    },
    {
      question: "آیا دسترسی Root دارم؟",
      answer: "بله، تمام سرورهای مجازی با دسترسی Root کامل ارائه می‌شوند و شما کنترل کامل سرور را دارید.",
    },
    {
      question: "چه سیستم عامل‌هایی پشتیبانی می‌شود؟",
      answer: "اوبونتو، دبیان، CentOS، AlmaLinux، Rocky Linux و ویندوز سرور پشتیبانی می‌شود. همچنین امکان نصب ISO دلخواه وجود دارد.",
    },
  ],
  billing: [
    {
      question: "چه روش‌های پرداختی پشتیبانی می‌شود؟",
      answer: "درگاه پرداخت آنلاین، کارت به کارت، انتقال بانکی و ارزهای دیجیتال پشتیبانی می‌شود.",
    },
    {
      question: "آیا امکان پرداخت ماهانه وجود دارد؟",
      answer: "بله، تمام پلن‌ها با قابلیت پرداخت ماهانه، سه ماهه، شش ماهه و سالانه ارائه می‌شوند. پرداخت‌های طولانی‌مدت تخفیف ویژه دارند.",
    },
    {
      question: "سیاست بازگشت وجه چگونه است؟",
      answer: "برای هاست وب و سرور مجازی ضمانت بازگشت وجه ۷ روزه بدون قید و شرط وجود دارد.",
    },
  ],
  support: [
    {
      question: "پشتیبانی شما چگونه است؟",
      answer: "تیم پشتیبانی ما ۲۴ ساعته و ۷ روز هفته از طریق تیکت، تلفن و چت آنلاین در خدمت شماست.",
    },
    {
      question: "زمان پاسخگویی چقدر است؟",
      answer: "میانگین زمان پاسخگویی برای تیکت‌ها کمتر از ۳۰ دقیقه و برای چت آنلاین کمتر از ۵ دقیقه است.",
    },
    {
      question: "آیا خدمات مدیریت سرور ارائه می‌دهید؟",
      answer: "بله، خدمات مدیریت کامل سرور شامل نصب، پیکربندی، بروزرسانی و مانیتورینگ ارائه می‌شود.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const currentFAQs = faqData[activeCategory as keyof typeof faqData] || [];
  
  const filteredFAQs = currentFAQs.filter(
    (faq) => faq.question.includes(searchQuery) || faq.answer.includes(searchQuery)
  );

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-orange flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-orange">سوالات</span> متداول
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              پاسخ سوالات رایج درباره خدمات آریاهاست را اینجا بیابید
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto mb-8">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="جستجو در سوالات..."
              className="pr-12 glass-card border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-faq"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                className={activeCategory === category.id ? "gradient-orange border-0 text-white" : ""}
                onClick={() => setActiveCategory(category.id)}
                data-testid={`faq-category-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-3">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-white/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-right hover:no-underline" data-testid={`faq-q-${index}`}>
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">سوالی یافت نشد.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
