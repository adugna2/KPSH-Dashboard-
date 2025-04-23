
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Skeleton } from "../ui/skeleton";
// import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// interface MalnutritionData {
//   ward: string;
//   rate: number;
// }

// interface MalnutritionChartProps {
//   data: MalnutritionData[];
//   isLoading?: boolean;
//   className?: string;
// }

// export function MalnutritionChart({ data, isLoading, className }: MalnutritionChartProps) {
//   if (isLoading) {
//     return (
//       <Card className={className}>
//         <CardHeader>
//           <CardTitle>Inpatient Malnutrition Rate</CardTitle>
//           <CardDescription>Percentage of patients with malnutrition by ward</CardDescription>
//         </CardHeader>
//         <CardContent className="pl-2">
//           <Skeleton className="h-[300px] w-full" />
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card className={className}>
//       <CardHeader>
//         <CardTitle>Inpatient Malnutrition Rate</CardTitle>
//         <CardDescription>Percentage of patients with malnutrition by ward</CardDescription>
//       </CardHeader>
//       <CardContent className="pl-0">
//         <div className="h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
//               layout="vertical"
//             >
//               <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
//               <XAxis type="number" domain={[0, 'dataMax + 5']} unit="%" />
//               <YAxis dataKey="ward" type="category" width={100} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: 'white',
//                   borderRadius: '0.5rem',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//                 }}
//                 formatter={(value: number) => [`${value.toFixed(1)}%`, 'Malnutrition Rate']}
//               />
//               <Bar
//                 dataKey="rate"
//                 fill="#F26525"
//                 radius={[0, 4, 4, 0]}
//                 barSize={20}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
