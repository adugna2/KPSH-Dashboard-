
import {
  bedOccupancyData,
  departmentMetricsData,
  departmentOptions,
  infectionRateData,
  kpiData,
  lengthOfStayData,
  malnutritionData,
  mortalityRateData,
  nursingCareData,
  painManagementData,
  patientDemographicsByAge,
  patientDemographicsByDepartment,
  patientFlowData,
  periodOptions,
  staffRatioData,
  surgicalEfficiencyData,
  shorttbTreatmentData,
  waitingListData
} from "@/utils/mockData";
import { DashboardFilters, DepartmentMetricData } from "@/types";

// This is a mock API service 
// In a real application, these would be actual API calls to your Node.js backend

export const getDashboardKpis = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500));
  return kpiData;
};

export const getBedOccupancyData = async (filters: DashboardFilters) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 600));
  // In a real app, we'd filter based on the provided filters
  return bedOccupancyData;
};

export const getLengthOfStayData = async (filters: DashboardFilters) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 700));
  // In a real app, we'd filter based on the provided filters
  return lengthOfStayData;
};

export const getSurgicalEfficiencyData = async (filters: DashboardFilters) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, we'd filter based on the provided filters
  return surgicalEfficiencyData;
};

export const getMortalityRateData = async (filters: DashboardFilters) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 600));
  // In a real app, we'd filter based on the provided filters
  return mortalityRateData;
};

export const getWaitingListData = async (filters: DashboardFilters) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 800));
  // In a real app, we'd filter based on the provided filters
  return waitingListData;
};

export const getInfectionRateData = async (filters: DashboardFilters) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 700));
  // In a real app, we'd filter based on the provided filters
  return infectionRateData;
};

export const getTBTreatmentData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 600));
  return shorttbTreatmentData;
};

export const getMalnutritionData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 550));
  return malnutritionData;
};

export const getPainManagementData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 650));
  return painManagementData;
};

export const getNursingCareData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 600));
  return nursingCareData;
};

export const getPatientFlowData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500));
  return patientFlowData;
};

export const getStaffRatioData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 400));
  return staffRatioData;
};

export const getPatientDemographicsData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 600));
  return {
    ageData: patientDemographicsByAge,
    departmentData: patientDemographicsByDepartment
  };
};

export const getDepartmentMetricsData = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 700));
  return departmentMetricsData;
};

export const getFilterOptions = async () => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    departments: departmentOptions,
    periods: periodOptions,
  };
};
