
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MortalityRateData } from "@/types";
import { Line, LineChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Skeleton } from "../ui/skeleton";

interface MortalityRateChartProps {
  data: MortalityRateData[];
  isLoading?: boolean;
  className?: string;
}

export function MortalityRateChart({ data, isLoading, className }: MortalityRateChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Mortality Rates</CardTitle>
          <CardDescription>ICU and Neonatal mortality rates over time</CardDescription>
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
        <CardTitle>Mortality Rates</CardTitle>
        <CardDescription>ICU and Neonatal mortality rates over time</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number, name: string) => {
                  return [`${value}%`, name === 'neonatal' ? 'Neonatal' : 'ICU'];
                }}
              />
              <Legend formatter={(value) => value === 'neonatal' ? 'Neonatal' : 'ICU'} />
              <Line
                type="monotone"
                dataKey="icu"
                stroke="#F26525"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                name="ICU"
              />
              <Line
                type="monotone"
                dataKey="neonatal"
                stroke="#00A99E"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                name="Neonatal"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
