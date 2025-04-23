
import { KpiData } from "@/types";
import { KpiCard } from "@/components/KpiCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KpiSectionProps {
  kpis: KpiData[] | undefined;
  isLoading: boolean;
}

export function KpiSection({ kpis, isLoading }: KpiSectionProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-7 w-16 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis?.map((kpi, index) => (
        <KpiCard key={index} data={kpi} />
      ))}
    </div>
  );
}
