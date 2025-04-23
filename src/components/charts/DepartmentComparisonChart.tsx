
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Skeleton } from "../ui/skeleton";
// import { ScrollArea } from "../ui/scroll-area";
// import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface DepartmentData {
  department: string;
  value: number;
}

interface DepartmentComparisonChartProps {
  title: string;
  description: string;
  data: DepartmentData[];
  unit: string;
  isLoading?: boolean;
  className?: string;
  maxBarCount?: number;
}

export function DepartmentComparisonChart({ 
  title, 
  description, 
  data, 
  unit, 
  isLoading,
  className,
  maxBarCount = 8
}: DepartmentComparisonChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          {/* <Skeleton className="h-[300px] w-full" /> */}
        </CardContent>
      </Card>
    );
  }

  // Sort data by value in descending order
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const getBarColor = (value: number, index: number) => {
    // Alternate between two colors based on index
    return index % 2 === 0 ? "#00A99E" : "#F26525";
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        {/* <ScrollArea className="h-[300px] w-full">
          <div className="min-h-[300px] min-w-[500px]">
            <ResponsiveContainer width="100%" height={Math.max(300, sortedData.length * 40)}>
              <BarChart
                data={sortedData}
                margin={{ top: 20, right: 30, left: 100, bottom: 10 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                <XAxis type="number" domain={[0, 'dataMax']} />
                <YAxis 
                  dataKey="department" 
                  type="category" 
                  width={90} 
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                  formatter={(value: number) => [`${value.toFixed(1)} ${unit}`, title]}
                />
                <Bar
                  dataKey="value"
                  radius={[0, 4, 4, 0]}
                  barSize={30}
                >
                  {sortedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.value, index)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollArea> */}
      </CardContent>
    </Card>
  );
}
