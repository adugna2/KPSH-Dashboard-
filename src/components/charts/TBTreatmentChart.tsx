
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { TBTreatmentData } from "@/types";

interface TBTreatmentChartProps {
  data: TBTreatmentData[];
  isLoading?: boolean;
  className?: string;
}

export function TBTreatmentChart({ data, isLoading, className }: TBTreatmentChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>TB Treatment Success Rate</CardTitle>
          <CardDescription>MDR-TB treatment success by quarter</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  const chartData = data.map(item => ({
    quarter: item.quarter,
    success: item.success
  }));

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Short regimen TB Treatment Success Rate</CardTitle>
        <CardDescription>MDR-TB treatment success by quarter</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis 
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <Tooltip formatter={(value) => [`${value}%`, 'Success Rate']} />
              <Bar dataKey="success" fill="#00A99E">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#00A99E" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
