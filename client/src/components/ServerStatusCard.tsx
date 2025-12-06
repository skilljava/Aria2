import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Activity } from "lucide-react";

interface ServerStatusCardProps {
  name: string;
  location: string;
  status: "online" | "offline" | "maintenance";
  uptime: string;
  load: number;
  responseTime: string;
}

const statusConfig = {
  online: { label: "آنلاین", color: "bg-green-500", pulse: true },
  offline: { label: "آفلاین", color: "bg-red-500", pulse: false },
  maintenance: { label: "تعمیرات", color: "bg-yellow-500", pulse: true },
};

export default function ServerStatusCard({
  name,
  location,
  status,
  uptime,
  load,
  responseTime,
}: ServerStatusCardProps) {
  const config = statusConfig[status];

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 transition-all duration-300 hover:border-primary/30">
      <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gradient-orange-subtle flex items-center justify-center">
            <Server className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold" data-testid={`server-name-${name}`}>{name}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${config.color} ${config.pulse ? "animate-pulse" : ""}`} />
          <Badge variant="secondary">
            {config.label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">آپتایم</p>
            <p className="text-lg font-bold text-gradient-orange">{uptime}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">بار سرور</p>
            <div className="flex items-center justify-center gap-1">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-lg font-bold">{load}%</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">زمان پاسخ</p>
            <p className="text-lg font-bold">{responseTime}</p>
          </div>
        </div>

        <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              load > 80 ? "bg-red-500" : load > 50 ? "bg-yellow-500" : "bg-green-500"
            }`}
            style={{ width: `${load}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
