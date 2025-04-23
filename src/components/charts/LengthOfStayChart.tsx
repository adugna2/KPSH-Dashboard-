
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LengthOfStayData } from "@/types";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Skeleton } from "../ui/skeleton";

interface LengthOfStayChartProps {
  data: LengthOfStayData[];
  isLoading?: boolean;
  className?: string;
}

export function LengthOfStayChart({ data, isLoading, className }: LengthOfStayChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Length of Stay by Department</CardTitle>
          <CardDescription>Average number of days patients stay in each department</CardDescription>
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
        <CardTitle>Length of Stay by Department</CardTitle>
        <CardDescription>Average number of days patients stay in each department</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
              <XAxis type="number" domain={[0, 'dataMax']} />
              <YAxis
                dataKey="department"
                type="category"
                width={120}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderColor: '#F26525',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number) => [`${value.toFixed(1)} days`, 'Avg. Length of Stay']}
              />
              <Bar
                dataKey="days"
                fill="#F26525"
                radius={[0, 4, 4, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
