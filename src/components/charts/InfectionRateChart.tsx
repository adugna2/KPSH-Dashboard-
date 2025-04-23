
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InfectionRateData } from "@/types";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Skeleton } from "../ui/skeleton";

interface InfectionRateChartProps {
  data: InfectionRateData[];
  isLoading?: boolean;
  className?: string;
}

export function InfectionRateChart({ data, isLoading, className }: InfectionRateChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Ventilator Associated Pneumonia</CardTitle>
          <CardDescription>Monthly VAP rate compared to average</CardDescription>
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
        <CardTitle>Ventilator Associated Pneumonia</CardTitle>
        <CardDescription>Monthly VAP rate compared to average</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <defs>
                <linearGradient id="colorVap" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F26525" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F26525" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 'dataMax+1']} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number, name: string) => [
                  `${value.toFixed(1)}%`,
                  name === 'vap' ? 'VAP Rate' : 'Average'
                ]}
              />
              <Legend formatter={(value) => value === 'vap' ? 'VAP Rate' : 'Average Rate'} />
              <Area
                type="monotone"
                dataKey="vap"
                stroke="#F26525"
                fillOpacity={1}
                fill="url(#colorVap)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="average"
                stroke="#00A99E"
                fill="none"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
