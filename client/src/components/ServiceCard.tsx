import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, price, link }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-visible bg-card/50 backdrop-blur-sm border-white/10 transition-all duration-300 hover:border-primary/30 hover:glow-orange">
      <div className="absolute -top-4 right-6 w-12 h-12 rounded-lg gradient-orange flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <CardHeader className="pt-10">
        <h3 className="text-xl font-bold" data-testid={`service-title-${title}`}>{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div>
            <span className="text-sm text-muted-foreground">شروع از</span>
            <div className="text-xl font-bold text-gradient-orange">{price}</div>
          </div>
          <Link href={link}>
            <Button variant="outline" size="sm" data-testid={`button-service-${title}`}>
              مشاهده پلن‌ها
              <ArrowLeft className="w-4 h-4 mr-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
