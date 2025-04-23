
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface PatientDemographic {
  category: string;
  male: number;
  female: number;
}

interface PatientByDepartment {
  department: string;
  count: number;
}

interface PatientDemographicsChartProps {
  ageData: PatientDemographic[];
  departmentData: PatientByDepartment[];
  isLoading?: boolean;
  className?: string;
}

export function PatientDemographicsChart({ 
  ageData, 
  departmentData, 
  isLoading, 
  className 
}: PatientDemographicsChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Patient Demographics</CardTitle>
          <CardDescription>Distribution by age, gender, and department</CardDescription>
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
        <CardTitle>Patient Demographics</CardTitle>
        <CardDescription>Distribution by age, gender, and department</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="age">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="age">By Age & Gender</TabsTrigger>
            <TabsTrigger value="department">March admission By Department</TabsTrigger>
          </TabsList>
          <TabsContent value="age">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    formatter={(value: number, name: string) => [value, name === 'male' ? 'Male' : 'Female']}
                  />
                  <Legend formatter={(value) => value === 'male' ? 'Male' : 'Female'} />
                  <Bar dataKey="male" fill="#00A99E" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="female" fill="#F26525" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="department">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="department" width={120} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    formatter={(value: number) => [value, 'Patients']}
                  />
                  <Bar dataKey="count" fill="#4DB6AC" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
