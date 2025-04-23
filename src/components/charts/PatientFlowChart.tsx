
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

interface PatientFlowData {
  month: string;
  admissions: number;
  discharges: number;
  referrals: number;
  deaths: number;
}

interface PatientFlowChartProps {
  data: PatientFlowData[];
  isLoading?: boolean;
  className?: string;
}

export function PatientFlowChart({ data, isLoading, className }: PatientFlowChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Monthly Patient Flow</CardTitle>
          <CardDescription>Admissions, discharges, referrals, and deaths per month</CardDescription>
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
        <CardTitle>Monthly Patient Flow</CardTitle>
        <CardDescription>Admissions, discharges, referrals, and deaths per month</CardDescription>
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
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number, name: string) => {
                  const labels = {
                    admissions: "Admissions",
                    discharges: "Discharges",
                    referrals: "Referrals",
                    deaths: "Deaths"
                  };
                  return [value, labels[name as keyof typeof labels]];
                }}
              />
              <Legend />
              <Bar dataKey="admissions" name="Admissions" fill="#00A99E" radius={[4, 4, 0, 0]} />
              <Bar dataKey="discharges" name="Discharges" fill="#4DB6AC" radius={[4, 4, 0, 0]} />
              <Bar dataKey="referrals" name="Referrals" fill="#FFB74D" radius={[4, 4, 0, 0]} />
              <Bar dataKey="deaths" name="Deaths" fill="#F26525" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
