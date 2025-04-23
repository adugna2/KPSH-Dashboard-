
// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Skeleton } from "../ui/skeleton";
// import { 
//   ResponsiveContainer, 
//   FunnelChart, 
//   Funnel, 
//   LabelList,
//   Tooltip
// } from "recharts";

// interface DepartmentData {
//   department: string;
//   value: number;
// }

// interface DepartmentMetricsChartProps {
//   title: string;
//   description: string;
//   data: DepartmentData[];
//   metric: string;
//   isLoading?: boolean;
//   className?: string;
// }

// export function DepartmentMetricsChart({
//   title,
//   description,
//   data,
//   metric,
//   isLoading,
//   className
// }: DepartmentMetricsChartProps) {
//   if (isLoading) {
//     return (
//       <Card className={className}>
//         <CardHeader>
//           <CardTitle>{title}</CardTitle>
//           <CardDescription>{description}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Skeleton className="h-[300px] w-full" />
//         </CardContent>
//       </Card>
//     );
//   }

//   // Sort data in descending order and format for funnel chart
//   const sortedData = [...data]
//     .sort((a, b) => b.value - a.value)
//     .map((item, index) => ({
//       ...item,
//       fill: index % 2 === 0 ? "#00A99E" : "#F26525"  // Alternate colors
//     }));

//   const renderCustomizedLabel = (props: any) => {
//     const { x, y, width, height, value, department } = props;
//     const radius = 10;
//     const fontSize = 12;
    
//     return (
//       <g>
//         <text
//           x={x + width / 2}
//           y={y + height / 2}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           className="fill-white font-medium"
//           fontSize={fontSize}
//         >
//           {`${value} ${metric}`}
//         </text>
//       </g>
//     );
//   };

//   return (
//     <Card className={className}>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ResponsiveContainer width="100%" height={400}>
//           <FunnelChart>
//             <Tooltip
//               formatter={(value: number) => [`${value} ${metric}`, 'Value']}
//               labelFormatter={(name: string) => `Department: ${name}`}
//             />
//             <Funnel
//               dataKey="value"
//               nameKey="department"
//               data={sortedData}
//               isAnimationActive
//             >
//               <LabelList
//                 position="inside"
//                 fill="#fff"
//                 stroke="none"
//                 dataKey="value"
//                 content={renderCustomizedLabel}
//               />
//             </Funnel>
//           </FunnelChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }
