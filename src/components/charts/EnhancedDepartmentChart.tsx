
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  Legend
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartTooltip, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface DepartmentData {
  department: string;
  value: number;
  totalBeds?: number; // Optional for bed occupancy
  deaths?: number;    // Optional for mortality rate
}

interface EnhancedDepartmentChartProps {
  data: DepartmentData[];
  title: string;
  description: string;
  metric: string;
  isLoading?: boolean;
  className?: string;
  type: "bedOccupancy" | "mortality";
}

const COLORS = [
  "#F26525", // Primary orange
  "#00A99E", // Secondary green
  "#6E59A5", // Tertiary Purple
  "#D6BCFA", // Light Purple
  "#33C3F0", // Sky Blue
  "#F97316", // Bright Orange
  "#0EA5E9", // Ocean Blue
  "#D946EF", // Magenta Pink
];

export function EnhancedDepartmentChart({ 
  data, 
  title, 
  description, 
  metric, 
  isLoading, 
  className,
  type 
}: EnhancedDepartmentChartProps) {
  
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  // Sort data for better visualization
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // Customize tooltip content based on chart type
  const customTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-md shadow-lg">
          <p className="font-medium text-sm">{data.department}</p>
          {type === "bedOccupancy" ? (
            <>
              <p className="text-xs text-gray-600">
                <span className="font-semibold text-purple-600">{data.value}%</span> occupancy rate
              </p>
              {data.totalBeds && (
                <p className="text-xs text-gray-600">
                  Based on {data.totalBeds} total beds
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-xs text-gray-600">
                <span className="font-semibold text-purple-600">{data.value}%</span> mortality rate
              </p>
              {data.deaths && (
                <p className="text-xs text-gray-600">
                  {data.deaths} deaths recorded
                </p>
              )}
            </>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
              <XAxis 
                type="number" 
                domain={[0, 100]} 
                tickFormatter={(value) => `${value}${metric}`} 
              />
              <YAxis 
                type="category" 
                dataKey="department" 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={customTooltip} />
              <Legend />
              <Bar 
                dataKey="value" 
                name={type === "bedOccupancy" ? "Occupancy Rate" : "Mortality Rate"}
                radius={[0, 4, 4, 0]}
                barSize={20}
              >
                {sortedData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
