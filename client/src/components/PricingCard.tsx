import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  onSelect: () => void;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  onSelect,
}: PricingCardProps) {
  return (
    <Card
      className={`relative overflow-visible bg-card/50 backdrop-blur-sm transition-all duration-300 ${
        popular
          ? "border-primary/50 glow-orange scale-105"
          : "border-white/10 hover:border-primary/30"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 right-1/2 translate-x-1/2">
          <Badge className="gradient-orange border-0 text-white">پیشنهاد ویژه</Badge>
        </div>
      )}

      <CardHeader className="text-center pt-8">
        <h3 className="text-xl font-bold" data-testid={`plan-name-${name}`}>{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gradient-orange">{price}</span>
          <span className="text-muted-foreground text-sm"> / {period}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full mt-6 ${popular ? "gradient-orange border-0 text-white" : ""}`}
          variant={popular ? "default" : "outline"}
          onClick={onSelect}
          data-testid={`button-select-${name}`}
        >
          انتخاب پلن
        </Button>
      </CardContent>
    </Card>
  );
}
