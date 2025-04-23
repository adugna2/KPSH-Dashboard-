
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WaitingListData } from "@/types";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Skeleton } from "../ui/skeleton";

interface WaitingListChartProps {
  data: WaitingListData[];
  isLoading?: boolean;
  className?: string;
}

const COLORS = ['#00A99E', '#F26525', '#5DB8FA', '#FFB74D', '#7986CB', '#4DB6AC'];

export function WaitingListChart({ data, isLoading, className }: WaitingListChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Surgical Waiting List</CardTitle>
          <CardDescription>Patients waiting by specialty</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  // Total number of patients
  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle> Sep-Mar 2017 Surgical Waiting List</CardTitle>
        <CardDescription>Patients waiting by specialty</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center pl-0">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="specialty"
                label={(entry) => `${((entry.count / total) * 100).toFixed(1)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => [`${value} patients`, name]}
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
          {data.map((item, index) => (
            <div key={item.specialty} className="flex items-center">
              <div
                className="h-3 w-3 mr-1 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="mr-1">{item.specialty}:</span>
              <span className="font-semibold">{item.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
