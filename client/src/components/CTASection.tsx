import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Headphones } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-orange opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="glass-card p-8 md:p-12 glow-orange">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            آماده شروع هستید؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            همین حالا سرویس مورد نظر خود را انتخاب کنید و از قدرت سرورهای ما لذت ببرید.
            تیم پشتیبانی ما ۲۴ ساعته در خدمت شماست.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="gradient-orange border-0 text-white" data-testid="button-cta-services">
                مشاهده سرویس‌ها
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="backdrop-blur-md" data-testid="button-cta-contact">
                <Headphones className="w-5 h-5 ml-2" />
                تماس با پشتیبانی
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
