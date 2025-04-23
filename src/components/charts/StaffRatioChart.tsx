
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import { 
  Cell, 
  Legend, 
  Pie, 
  PieChart, 
  ResponsiveContainer, 
  Tooltip 
} from "recharts";

interface StaffRatioData {
  name: string;
  value: number;
  ratio: string;
}

interface StaffRatioChartProps {
  data: StaffRatioData[];
  isLoading?: boolean;
  className?: string;
}

export function StaffRatioChart({ data, isLoading, className }: StaffRatioChartProps) {
   if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Staff-to-Patient Ratio</CardTitle>
          <CardDescription>Physician and nurse ratios to patients</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  const COLORS = ['#00A99E', '#F26525', '#4DB6AC', '#FFB74D'];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Staff-to-Patient Ratio</CardTitle>
        <CardDescription>Physician and nurse ratios tototal Staff</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, ratio }) => `${name}: ${ratio}`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => {
                  return [props.payload.ratio, props.payload.name];
                }}
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
