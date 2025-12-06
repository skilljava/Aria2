import { useState } from "react";
import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const pricingPlans = [
  {
    name: "پایه",
    price: "۹۹,۰۰۰",
    period: "ماهانه",
    description: "مناسب برای شروع",
    features: [
      "۱ هسته CPU",
      "۱ گیگابایت RAM",
      "۲۰ گیگابایت SSD",
      "۱ ترابایت ترافیک",
      "پشتیبانی ایمیلی",
    ],
  },
  {
    name: "استاندارد",
    price: "۱۴۹,۰۰۰",
    period: "ماهانه",
    description: "مناسب برای رشد",
    features: [
      "۲ هسته CPU",
      "۴ گیگابایت RAM",
      "۸۰ گیگابایت SSD",
      "ترافیک نامحدود",
      "پشتیبانی تلفنی",
    ],
  },
  {
    name: "حرفه‌ای",
    price: "۱۹۹,۰۰۰",
    period: "ماهانه",
    description: "مناسب برای پربازدید",
    features: [
      "۴ هسته CPU",
      "۸ گیگابایت RAM",
      "۱۶۰ گیگابایت SSD",
      "ترافیک نامحدود",
      "پشتیبانی ۲۴/۷",
    ],
    popular: true,
  },
  {
    name: "سازمانی",
    price: "۳۹۹,۰۰۰",
    period: "ماهانه",
    description: "مناسب برای سازمان‌ها",
    features: [
      "۸ هسته CPU",
      "۱۶ گیگابایت RAM",
      "۳۲۰ گیگابایت SSD",
      "ترافیک نامحدود",
      "مدیر اختصاصی",
    ],
  },
];

type ServiceType = "vps" | "hosting" | "game";

export default function PricingSection() {
  const [activeService, setActiveService] = useState<ServiceType>("vps");
  const { toast } = useToast();

  const handleSelectPlan = (planName: string) => {
    toast({
      title: "پلن انتخاب شد",
      description: `پلن ${planName} به سبد خرید اضافه شد.`,
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-orange">پلن‌ها</span> و قیمت‌ها
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            پلن مناسب خود را انتخاب کنید و همین حالا شروع کنید
          </p>

          <div className="inline-flex items-center gap-2 glass-card p-1">
            {[
              { id: "vps" as ServiceType, label: "سرور مجازی" },
              { id: "hosting" as ServiceType, label: "هاست وب" },
              { id: "game" as ServiceType, label: "سرور بازی" },
            ].map((service) => (
              <Button
                key={service.id}
                variant={activeService === service.id ? "default" : "ghost"}
                size="sm"
                className={activeService === service.id ? "gradient-orange border-0 text-white" : ""}
                onClick={() => setActiveService(service.id)}
                data-testid={`tab-${service.id}`}
              >
                {service.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PricingCard {...plan} onSelect={() => handleSelectPlan(plan.name)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
