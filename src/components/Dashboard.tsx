
import { useState } from "react";
import { DateRange, ChartPeriod } from "@/types";
import { defaultFilters } from "@/utils/mockData";
import { useDashboardData } from "@/hooks/useDashboardData";
import { DashboardHeader } from "./dashboard/DashboardHeader";
import { KpiSection } from "./dashboard/KpiSection";
import { DashboardCharts } from "./dashboard/DashboardCharts";
import { DashboardFooter } from "./dashboard/DashboardFooter";

export function Dashboard() {
  const [dateRange, setDateRange] = useState<DateRange>(defaultFilters.dateRange);
  const [department, setDepartment] = useState<string>(defaultFilters.department);
  const [period, setPeriod] = useState<ChartPeriod>(defaultFilters.period);

  const filters = {
    dateRange,
    department,
    period
  };

  // Use the custom hook to fetch all dashboard data
  const {
    kpis,
    isLoadingKpis,
    bedOccupancyData,
    isLoadingBedOccupancy,
    lengthOfStayData,
    isLoadingLengthOfStay,
    surgicalEfficiencyData,
    isLoadingSurgicalEfficiency,
    mortalityRateData,
    isLoadingMortalityRate,
    waitingListData,
    isLoadingWaitingList,
    infectionRateData,
    isLoadingInfectionRate,
    tbTreatmentData,
    isLoadingTbTreatment,
    nursingCareData,
    isLoadingNursingCare,
    malnutritionData,
    isLoadingMalnutrition,
    patientFlowData,
    isLoadingPatientFlow,
    staffRatioData,
    isLoadingStaffRatio,
    patientDemographicsData,
    isLoadingPatientDemographics,
    departmentMetricsData,
    isLoadingDepartmentMetrics
  } = useDashboardData(filters);

  return (
    <div className="space-y-6">
      {/* Dashboard Header with Filters */}
      <DashboardHeader 
        dateRange={dateRange}
        setDateRange={setDateRange}
        department={department}
        setDepartment={setDepartment}
        period={period}
        setPeriod={setPeriod}
      />

      {/* KPI Cards */}
      <KpiSection kpis={kpis} isLoading={isLoadingKpis} />
      
      {/* All Dashboard Charts */}
      <DashboardCharts 
        patientFlowData={patientFlowData}
        isLoadingPatientFlow={isLoadingPatientFlow}
        patientDemographicsData={patientDemographicsData}
        isLoadingPatientDemographics={isLoadingPatientDemographics}
        staffRatioData={staffRatioData}
        isLoadingStaffRatio={isLoadingStaffRatio}
        bedOccupancyData={bedOccupancyData}
        isLoadingBedOccupancy={isLoadingBedOccupancy}
        surgicalEfficiencyData={surgicalEfficiencyData}
        isLoadingSurgicalEfficiency={isLoadingSurgicalEfficiency}
        mortalityRateData={mortalityRateData}
        isLoadingMortalityRate={isLoadingMortalityRate}
        infectionRateData={infectionRateData}
        isLoadingInfectionRate={isLoadingInfectionRate}
        lengthOfStayData={lengthOfStayData}
        isLoadingLengthOfStay={isLoadingLengthOfStay}
        waitingListData={waitingListData}
        isLoadingWaitingList={isLoadingWaitingList}
        tbTreatmentData={tbTreatmentData}
        isLoadingTbTreatment={isLoadingTbTreatment}
        // nursingCareData={nursingCareData}
        // isLoadingNursingCare={isLoadingNursingCare}
        malnutritionData={malnutritionData}
        isLoadingMalnutrition={isLoadingMalnutrition}
        departmentMetricsData={departmentMetricsData}
        isLoadingDepartmentMetrics={isLoadingDepartmentMetrics}
      />

      {/* Dashboard Footer */}
      <DashboardFooter />
    </div>
  );
}
