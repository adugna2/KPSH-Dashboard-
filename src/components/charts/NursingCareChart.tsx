
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// import { Skeleton } from "../ui/skeleton";

// interface NursingCareData {
//   month: string;
//   score: number;
// }

// interface NursingCareChartProps {
//   data: NursingCareData[];
//   isLoading?: boolean;
//   className?: string;
// }

// export function NursingCareChart({ data, isLoading, className }: NursingCareChartProps) {
//   if (isLoading) {
//     return (
//       <Card className={className}>
//         <CardHeader>
//           <CardTitle>Nursing Care Audit Score</CardTitle>
//           <CardDescription>Monthly audit scores for nursing care quality</CardDescription>
//         </CardHeader>
//         <CardContent className="pl-2">
//           <Skeleton className="h-[300px] w-full" />
//         </CardContent>
//       </Card>
//     );
//   }

//   const getBarColor = (score: number) => {
//     if (score >= 90) return "#00A99E";
//     if (score >= 80) return "#4DB6AC";
//     if (score >= 70) return "#FFB74D";
//     return "#F26525";
//   };

//   return (
//     <Card className={className}>
//       <CardHeader>
//         <CardTitle>Nursing Care Audit Score</CardTitle>
//         <CardDescription>Monthly audit scores for nursing care quality</CardDescription>
//       </CardHeader>
//       <CardContent className="pl-0">
//         <div className="h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
//               <XAxis dataKey="month" />
//               <YAxis domain={[0, 100]} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: 'white',
//                   borderRadius: '0.5rem',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//                 }}
//                 formatter={(value: number) => [`${value} / 100`, 'Score']}
//               />
//               <Bar
//                 dataKey="score"
//                 radius={[4, 4, 0, 0]}
//                 name="Score"
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={getBarColor(entry.score)} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
