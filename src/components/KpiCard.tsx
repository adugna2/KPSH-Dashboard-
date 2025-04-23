
import { KpiData } from "@/types";
import { cn } from "@/lib/utils";
import {
  Activity,
  Bed,
  Calendar,
  Clock,
  Stethoscope,
  UserRound,
  ArrowUp,
  ArrowDown,
  Thermometer,
  Users,
  Shield,
  LineChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface KpiCardProps {
  data: KpiData;
  className?: string;
}

export function KpiCard({ data, className }: KpiCardProps) {
  const icons = {
    bed: Bed,
    calendar: Calendar,
    stethoscope: Stethoscope,
    activity: Activity,
    clock: Clock,
    user: UserRound,
    users: Users,
    thermometer: Thermometer,
    shield: Shield,
     chart: LineChart,
  };

  // Pick the appropriate icon or default to Activity
  const IconComponent = icons[data.icon as keyof typeof icons] || Activity;
  
  // Determine if change is positive, negative, or neutral
  const isPositive = data.change > 0;
  const isNeutral = data.change === 0;
  
  // Determine background color based on title
  let bgColorClass = "bg-healthcare-teal/10";
  let iconColorClass = "text-healthcare-teal";
  
  if (data.color === "healthcare-orange") {
    bgColorClass = "bg-healthcare-orange/10";
    iconColorClass = "text-healthcare-orange";
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{data.title}</CardTitle>
        <div className={cn("rounded-full p-2", bgColorClass)}>
          <IconComponent className={cn("h-4 w-4", iconColorClass)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {data.value}
          {data.unit && <span className="text-xs ml-1">{data.unit}</span>}
        </div>
        <p className="text-xs text-muted-foreground mt-2 flex items-center">
          {!isNeutral && (
            <>
              {isPositive ? (
                <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3 text-rose-500" />
              )}
              <span
                className={
                  isPositive 
                    ? "text-emerald-500" 
                    : "text-rose-500"
                }
              >
                {Math.abs(data.change)}%
              </span>
            </>
          )}
          <span className="ml-1 text-muted-foreground">from last period</span>
        </p>
      </CardContent>
    </Card>
  );
}
