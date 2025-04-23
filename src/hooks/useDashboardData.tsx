
import { useQuery } from "@tanstack/react-query";
import { 
  getBedOccupancyData,
  getDashboardKpis, 
  getDepartmentMetricsData,
  getInfectionRateData, 
  getLengthOfStayData, 
  getMalnutritionData, 
  getMortalityRateData, 
  getNursingCareData,
  getPatientDemographicsData,
  getPatientFlowData,
  getStaffRatioData,
  getSurgicalEfficiencyData,
  getTBTreatmentData,
  getWaitingListData
} from "@/services/api";
import { DashboardFilters } from "@/types";

export const useDashboardData = (filters: DashboardFilters) => {
  // KPI Data
  const { data: kpis, isLoading: isLoadingKpis } = useQuery({
    queryKey: ['kpis', filters],
    queryFn: getDashboardKpis
  });

  // Bed Occupancy Data
  const { data: bedOccupancyData, isLoading: isLoadingBedOccupancy } = useQuery({
    queryKey: ['bedOccupancy', filters],
    queryFn: () => getBedOccupancyData(filters)
  });

  // Length of Stay Data
  const { data: lengthOfStayData, isLoading: isLoadingLengthOfStay } = useQuery({
    queryKey: ['lengthOfStay', filters],
    queryFn: () => getLengthOfStayData(filters)
  });

  // Surgical Efficiency Data
  const { data: surgicalEfficiencyData, isLoading: isLoadingSurgicalEfficiency } = useQuery({
    queryKey: ['surgicalEfficiency', filters],
    queryFn: () => getSurgicalEfficiencyData(filters)
  });

  // Mortality Rate Data
  const { data: mortalityRateData, isLoading: isLoadingMortalityRate } = useQuery({
    queryKey: ['mortalityRate', filters],
    queryFn: () => getMortalityRateData(filters)
  });

  // Waiting List Data
  const { data: waitingListData, isLoading: isLoadingWaitingList } = useQuery({
    queryKey: ['waitingList', filters],
    queryFn: () => getWaitingListData(filters)
  });

  // Infection Rate Data
  const { data: infectionRateData, isLoading: isLoadingInfectionRate } = useQuery({
    queryKey: ['infectionRate', filters],
    queryFn: () => getInfectionRateData(filters)
  });

  // TB Treatment Data
  const { data: tbTreatmentData, isLoading: isLoadingTbTreatment } = useQuery({
    queryKey: ['tbTreatment'],
    queryFn: getTBTreatmentData
  });

  // Nursing Care Data
  const { data: nursingCareData, isLoading: isLoadingNursingCare } = useQuery({
    queryKey: ['nursingCare'],
    queryFn: getNursingCareData
  });

  // Malnutrition Data
  const { data: malnutritionData, isLoading: isLoadingMalnutrition } = useQuery({
    queryKey: ['malnutrition'],
    queryFn: getMalnutritionData
  });

  // Patient Flow Data
  const { data: patientFlowData, isLoading: isLoadingPatientFlow } = useQuery({
    queryKey: ['patientFlow'],
    queryFn: getPatientFlowData
  });

  // Staff Ratio Data
  const { data: staffRatioData, isLoading: isLoadingStaffRatio } = useQuery({
    queryKey: ['staffRatio'],
    queryFn: getStaffRatioData
  });

  // Patient Demographics Data
  const { data: patientDemographicsData, isLoading: isLoadingPatientDemographics } = useQuery({
    queryKey: ['patientDemographics'],
    queryFn: getPatientDemographicsData
  });
  
  // Department Metrics Data
  const { data: departmentMetricsData, isLoading: isLoadingDepartmentMetrics } = useQuery({
    queryKey: ['departmentMetrics'],
    queryFn: getDepartmentMetricsData
  });

  return {
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
  };
};
