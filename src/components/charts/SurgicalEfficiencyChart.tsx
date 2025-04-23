
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SurgicalEfficiencyData } from "@/types";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Skeleton } from "../ui/skeleton";

interface SurgicalEfficiencyChartProps {
  data: SurgicalEfficiencyData[];
  isLoading?: boolean;
  className?: string;
}

export function SurgicalEfficiencyChart({ data, isLoading, className }: SurgicalEfficiencyChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Surgical Table Efficiency</CardTitle>
          <CardDescription>Monthly utilization rates compared to target</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Surgical Table Efficiency</CardTitle>
        <CardDescription>Monthly utilization rates compared to target</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number, name: string) => [`${value}%`, name === 'utilization' ? 'Utilization' : 'Target']}
              />
              <Legend formatter={(value) => value === 'utilization' ? 'Utilization' : 'Target'} />
              <ReferenceLine y={80} stroke="#F26525" strokeDasharray="3 3" label="Target" />
              <Bar
                dataKey="utilization"
                fill="#00A99E"
                radius={[4, 4, 0, 0]}
                name="Utilization"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
