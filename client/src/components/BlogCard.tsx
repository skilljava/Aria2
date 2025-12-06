import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  category,
  author,
  date,
  image,
}: BlogCardProps) {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 transition-all duration-300 hover:border-primary/30 hover:glow-orange">
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge className="gradient-orange border-0 text-white">{category}</Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2" data-testid={`blog-title-${id}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
          </div>
          <Link href={`/blog/${id}`}>
            <span className="text-primary text-sm flex items-center gap-1 hover:underline">
              ادامه مطلب
              <ArrowLeft className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
