
export type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

export type KpiData = {
  title: string;
  value: number | string;
  change: number;
  unit?: string;
  icon: string;
  color?: string;
};

export type ChartPeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export type BedOccupancyData = {
  date: string;
  rate: number;
};

export type LengthOfStayData = {
  department: string;
  days: number;
};

export type SurgicalEfficiencyData = {
  month: string;
  utilization: number;
  target: number;
};

export type MortalityRateData = {
  period: string;
  neonatal: number;
  icu: number;
};

export type WaitingListData = {
  specialty: string;
  count: number;
};

export type InfectionRateData = {
  month: string;
  vap: number; // Ventilator Associated Pneumonia
  average: number;
};

export type FilterOption = {
  label: string;
  value: string;
};

export type DashboardFilters = {
  dateRange: DateRange;
  department?: string;
  period: ChartPeriod;
};

export type TabItem = {
  title: string;
  value: string;
};

export type PatientFlowData = {
  month: string;
  admissions: number;
  discharges: number;
  referrals: number;
  deaths: number;
};

export type StaffRatioData = {
  name: string;
  value: number;
  ratio: string;
};

export type PatientDemographic = {
  category: string;
  male: number;
  female: number;
};

export type PatientByDepartment = {
  department: string;
  count: number;
};

export type TBTreatmentData = {
  quarter: string;
  success: number;
};

export type NursingCareData = {
  month: string;
  score: number;
};

export type MalnutritionData = {
  ward: string;
  rate: number;
};

export type PainManagementData = {
  month: string;
  score: number;
};

export type DepartmentMetricData = {
  department: string;
  bedOccupancy: number;
  mortalityRate: number;
  nursesRatio: number;
  physiciansRatio: number;
  nursingCareScore: number;
  avgLengthOfStay: number;
};
