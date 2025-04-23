import { addDays, format, subDays, subMonths } from 'date-fns';
import { 
  BedOccupancyData, 
  ChartPeriod, 
  DateRange, 
  FilterOption, 
  InfectionRateData, 
  KpiData, 
  LengthOfStayData, 
  MortalityRateData, 
  NursingCareData, 
  PainManagementData, 
  PatientByDepartment, 
  PatientDemographic, 
  PatientFlowData,
  StaffRatioData, 
  SurgicalEfficiencyData, 
  TBTreatmentData,
  WaitingListData,
  MalnutritionData
} from '@/types';

// Default filter values
export const defaultFilters = {
  dateRange: {
    from: subMonths(new Date(), 6),
    to: new Date(),
  } as DateRange,
  department: 'all',
  period: 'monthly' as ChartPeriod,
};

// Mock KPI Data
export const kpiData: KpiData[] = [
  {
    title: 'Bed Occupancy',
    value: 85.6,
    change: + 3.2,
    unit: '%',
    icon: 'bed',
    color: 'healthcare-teal',
  },
  {
    title: 'Average Length of Stay',
    value: 4.5,
    change: + 0.1,
    unit: 'days',
    icon: 'calendar',
    color: 'healthcare-orange',
  },
  {
    title: 'Mortality Rate',
    value: 2.1,
    change: -0.3,
    unit: '%',
    icon: 'activity',
    color: 'healthcare-teal',
  },
  {
    title: 'Total Visits',
    value: 23130,
    change: +1.23,
    unit: 'patients',
    icon: 'clock',
    color: 'healthcare-orange',
  },
];

// Mock Bed Occupancy Data
export const bedOccupancyData: BedOccupancyData[] = [
   { date: 'Sep', rate: 58.98 },
  { date: 'Oct', rate: 70.92 },
  { date: 'Nov', rate: 72.92 },
  { date: 'Dec', rate: 75.58 },
  { date: 'Jan', rate: 82.27},
  { date: 'Feb', rate: 81.12 },
  { date: 'Mar', rate: 85.6},
  // { date: 'Apr', rate: 76 },
  // //  { date: 'May', rate: 81 },
  // { date: 'Jun', rate: 82 },
  // { date: 'Jul', rate: 85 },
  // { date: 'Aug', rate: 88 },
 
];

// Mock Length of Stay Data
export const lengthOfStayData: LengthOfStayData[] = [
  { department: 'General Medicine', days: 9},
  { department: 'Surgery', days: 4.6 },
  { department: 'Pediatrics', days: 6.5 },
  { department: 'Obstetrics', days: 1.6 },
  { department: 'Cardiology', days: 2.9 },
   { department: 'Gyn', days: 3.7 },
  // { department: 'Neurology', days: 5.9 },
  // { department: 'Orthopedics', days: 4.6 },
  {department: 'Psychiatric', days: 14.9 },
{department: 'ICU',  days: 11.3 },
  { department: 'Toxco', days: 2.3 },
  { department: 'NICU', days: 5.6 },
  { department: 'MDR', days: 157.5 },
 
];

// Mock Surgical Efficiency Data
export const surgicalEfficiencyData: SurgicalEfficiencyData[] = [
  // { month: 'Sep', utilization: 66.6, target: 100 },
  // { month: 'Oct', utilization: 80, target: 80 },
  // { month: 'Nov', utilization: 78, target: 80 },
  // { month: 'Dec', utilization: 76, target: 80 },
  { month: 'Jan', utilization: 71, target: 100 },
  { month: 'Feb', utilization: 84, target: 100 },
  { month: 'Mar', utilization: 71, target: 100 },
  { month: 'Apr', utilization: 71, target: 100},
  // { month: 'May', utilization: 75, target: 80 },
  // { month: 'Jun', utilization: 79, target: 80 },
  // { month: 'Jul', utilization: 82, target: 80 },
  // { month: 'Aug', utilization: 85, target: 80 },
  
];

// Mock Mortality Rate Data
export const mortalityRateData: MortalityRateData[] = [
  { period: 'Sep', neonatal: 33.9, icu: 28 },
  { period: 'Oct', neonatal:27, icu: 45.7 },
  { period: 'Nov', neonatal: 15.6, icu: 48.7 },
  { period: 'Dec', neonatal: 23, icu: 38 },
  { period: 'Jan', neonatal: 26.9, icu: 30 },
  { period: 'Feb', neonatal: 16, icu: 41 },
  { period: 'Mar', neonatal: 12.6, icu: 26 },
  // { period: 'Apr', neonatal: 1.6, icu: 5.8 },
  // { period: 'May', neonatal: 1.5, icu: 5.5 },
  // { period: 'Jun', neonatal: 1.4, icu: 5.2 },
  // { period: 'Jul', neonatal: 1.2, icu: 4.8 },
  // { period: 'Aug', neonatal: 1.3, icu: 5.0 },
 
];

// Mock Waiting List Data
export const waitingListData: WaitingListData[] = [
  { specialty: 'Orthopedics', count: 29},
  { specialty: 'Cardiology', count: 8 },
  { specialty: 'Neurology', count: 46 },
  { specialty: 'Maxillo', count: 6 },
  { specialty: 'ENT', count: 37 },
  { specialty: 'Urology', count: 57 },
  { specialty: 'Plastic', count: 25 },
    { specialty:'VASCULAR', count:14 },
       { specialty:'HEPATOBILARY',count: 19 },
        { specialty: 'General', count: 275 },
];

// Mock Infection Rate Data
export const infectionRateData: InfectionRateData[] = [
   { month: 'Sep', vap: 2.1, average: 2.5 },
  { month: 'Oct', vap: 2.4, average: 2.5 },
  { month: 'Nov', vap: 2.6, average: 2.5 },
  { month: 'Dec', vap: 2.7, average: 2.5 },
  { month: 'Jan', vap: 2.8, average: 2.5 },
  { month: 'Feb', vap: 3.0, average: 2.5 },
  { month: 'Mar', vap: 2.9, average: 2.5 },
  { month: 'Apr', vap: 2.7, average: 2.5 },
  // { month: 'May', vap: 2.5, average: 2.5 },
  // { month: 'Jun', vap: 2.3, average: 2.5 },
  // { month: 'Jul', vap: 2.2, average: 2.5 },
  // { month: 'Aug', vap: 2.0, average: 2.5 },
 
];

// Mock TB Treatment Success Rate Data
export const shorttbTreatmentData: TBTreatmentData[] = [
  { quarter: 'Q1', success: 70 },
  { quarter: 'Q2', success: 58 },
  { quarter: 'Q3', success: 100 },
  // { quarter: 'Q4', success: 86 },
];

// Mock Nursing Care Audit Score Data
export const nursingCareData: NursingCareData[] = [
  { month: 'Sep', score: 90 },
  { month: 'Oct', score: 89 },
  { month: 'Nov', score: 86 },
  { month: 'Dec', score: 85 },
  { month: 'Jan', score: 82 },
  { month: 'Feb', score: 84 },
  { month: 'Mar', score: 85 },
  { month: 'Apr', score: 88 },
  // { month: 'May', score: 90 },
  // { month: 'Jun', score: 91 },
  // { month: 'Jul', score: 93 },
  // { month: 'Aug', score: 92 },
  
];

// Mock Pain Management Data
export const painManagementData: PainManagementData[] = [
   { month: 'Sep', score: 2.2 },
  { month: 'Oct', score: 2.4 },
  { month: 'Nov', score: 2.6 },
  { month: 'Dec', score: 2.8 },
  { month: 'Jan', score: 3.2 },
  { month: 'Feb', score: 3.0 },
  { month: 'Mar', score: 2.8 },
  { month: 'Apr', score: 2.7 },
  // { month: 'May', score: 2.5 },
  // { month: 'Jun', score: 2.3 },
  // { month: 'Jul', score: 2.2 },
  // { month: 'Aug', score: 2.0 },
 
];

// Mock Malnutrition Data
export const malnutritionData: MalnutritionData[] = [
  { ward: 'General Ward', rate: 12.5 },
  { ward: 'Pediatric Ward', rate: 10.2 },
  { ward: 'Geriatric Ward', rate: 18.7 },
  { ward: 'Oncology Ward', rate: 22.3 },
  { ward: 'Surgical Ward', rate: 9.8 },
  { ward: 'Psychiatric Ward', rate: 15.6 },
  { ward: 'Maternity Ward', rate: 7.4 },
  { ward: 'ICU', rate: 14.2 },
  { ward: 'Oncology Ward', rate: 22.3 },
 
  { ward: 'Toxco Ward', rate: 15.6 },
  { ward: 'MDR Ward', rate: 7.4 },
  { ward: 'NICU Ward', rate: 14.2 },
];

// Mock Patient Flow Data
export const patientFlowData: PatientFlowData[] = [
   { month: 'Sep', admissions: 1173, discharges: 908, referrals: 72, deaths: 44 },
  { month: 'Oct', admissions: 1303, discharges: 1104, referrals: 56, deaths: 39 },
  { month: 'Nov', admissions: 1360, discharges: 1231, referrals: 95, deaths: 25 },
  { month: 'Dec', admissions: 1358, discharges: 1088, referrals: 48, deaths: 27 },
  { month: 'Jan', admissions: 1219, discharges: 1179, referrals: 50, deaths: 24 },
  { month: 'Feb', admissions: 1344, discharges: 1209, referrals: 43, deaths: 35 },
   { month: 'Mar', admissions: 1296, discharges: 1241, referrals: 100, deaths: 22 },
  // { month: 'Apr', admissions: 1296, discharges: 1241, referrals: 100, deaths: 22 },
  // { month: 'May', admissions: 650, discharges: 620, referrals: 110, deaths: 18 },
  // { month: 'Jun', admissions: 680, discharges: 640, referrals: 115, deaths: 17 },
  // { month: 'Jul', admissions: 710, discharges: 680, referrals: 120, deaths: 19 },
  // { month: 'Aug', admissions: 730, discharges: 700, referrals: 125, deaths: 18 },
 
];

// Mock Staff-to-Patient Ratio Data
export const staffRatioData: StaffRatioData[] = [
  { name: 'Physicians', value: 25, ratio: '1:12' },
  { name: 'Nurses', value: 60, ratio: '1:5' },
  { name: 'Other Clinical', value: 10, ratio: '1:30' },
  { name: 'Support Staff', value: 5, ratio: '1:60' }
];

// Mock Patient Demographics By Age
export const patientDemographicsByAge: PatientDemographic[] = [
  { category: '0-17', male: 85, female: 75 },
  { category: '18-34', male: 120, female: 145 },
  { category: '35-49', male: 140, female: 130 },
  { category: '50-64', male: 160, female: 150 },
  { category: '65+', male: 190, female: 210 }
];

// Mock Patient Demographics By Department
export const patientDemographicsByDepartment: PatientByDepartment[] = [
  { department: 'General Medicine', count: 155},
  { department: 'Surgery', count: 255 },
  { department: 'Pediatrics', count: 137 },
  { department: 'Obstetrics', count: 288 },
  { department: 'Cardiology', count: 42},
  { department: 'Gyn', count: 237 },
  { department: 'catlab ICU', count: 24 },
   { department: 'ICU', count: 190 },
    { department: 'MDR', count: 4}, 
    { department: 'Psycatric', count: 11 },
     { department: 'Toxco', count: 17},
      { department: 'NICU', count: 45 }

];

// Mock Department-specific metrics
export const departmentMetricsData = [
  { 
    department: 'General Medicine',
    bedOccupancy: 90.33,
    mortalityRate: 9.21,
    // nursesRatio: 1.8,
    // physiciansRatio: 0.6,
    // nursingCareScore: 89,
    avgLengthOfStay: 9.1
  },
  { 
    department: 'Surgery',
    bedOccupancy: 87.22,
    mortalityRate: 0,
    // nursesRatio: 2.2,
    // physiciansRatio: 0.8,
    // nursingCareScore: 91,
    avgLengthOfStay: 4.6
  },
  { 
    department: 'Pediatrics',
    bedOccupancy: 87.44,
    mortalityRate: 0,
    // nursesRatio: 2.5,
    // physiciansRatio: 0.7,
    // nursingCareScore: 94,
    avgLengthOfStay: 6.5
  },
  { 
    department: 'Obstetrics',
    bedOccupancy: 91.93,
    mortalityRate: 0,
    // nursesRatio: 2.7,
    // physiciansRatio: 0.9,
    // nursingCareScore: 93,
    avgLengthOfStay: 1.6
  },
  { 
    department: 'Cardiology word',
    bedOccupancy:50.83,
    mortalityRate: 0,
    // nursesRatio: 2.3,
    // physiciansRatio: 0.8,
    // nursingCareScore: 88,
    avgLengthOfStay: 4.1
  },
  { 
    department: 'Cardiology icu',
    bedOccupancy:55.83,
    mortalityRate: 0,
    // nursesRatio: 2.1,
    // physiciansRatio: 0.7,
    // nursingCareScore: 87,
    avgLengthOfStay: 1.7
  },
  // { 
  //   department: 'Oncology',
  //   TotalBed: 150,
  //   bedOccupancy: 93.6,
  //   mortalityRate: 4.5,
  //   // nursesRatio: 3.0,
  //   // physiciansRatio: 1.2,
  //   nursingCareScore: 92,
  //   avgLengthOfStay: 7.5,
  // },
  // { 
  //   department: 'Orthopedics',
  //   bedOccupancy: 82.1,
  //   mortalityRate: 1.2,
  //   // nursesRatio: 1.9,
  //   // physiciansRatio: 0.6,
  //   nursingCareScore: 90,
  //   avgLengthOfStay: 4.6,
  // },
 
  { 
    department: 'MDR',
    bedOccupancy: 25.93,
    mortalityRate: 50,
    // nursesRatio: 2.2,
    // physiciansRatio: 0.8,
    // nursingCareScore: 91,
    avgLengthOfStay: 157.5,
  },
  { 
    department: 'ICU',
    bedOccupancy: 83.59,
    mortalityRate: 26.9,
    // nursesRatio: 2.2,
    // physiciansRatio: 0.8,
    // nursingCareScore: 91,
    avgLengthOfStay: 11.3,
  },
  { 
    department: 'NICU',
    bedOccupancy: 84.2,
    mortalityRate: 1.7,
    // nursesRatio: 2.2,
    // physiciansRatio: 0.8,
    nursingCareScore: 91,
    avgLengthOfStay: 4.7,
  },
  { 
    department: 'Toxco',
    bedOccupancy: 84.2,
    mortalityRate: 1.7,
    // nursesRatio: 2.2,
    // physiciansRatio: 0.8,
    nursingCareScore: 91,
    avgLengthOfStay: 4.7,
  },
  { 
    department: 'Psycatric',
    bedOccupancy: 84.2,
    mortalityRate: 1.7,
    // nursesRatio: 2.2,
    // physiciansRatio: 0.8,
    nursingCareScore: 91,
    avgLengthOfStay: 4.7,
  }
];

// Filter Options
export const departmentOptions: FilterOption[] = [
  { label: 'All Departments', value: 'all' },
  { label: 'General Medicine', value: 'general-medicine' },
  { label: 'Surgery', value: 'surgery' },
  { label: 'Pediatrics', value: 'pediatrics' },
  { label: 'Obstetrics', value: 'obstetrics' },
  { label: 'Cardiology', value: 'cardiology' },
  { label: 'Neurology', value: 'neurology' },
  { label: 'Oncology', value: 'oncology' },
  { label: 'Orthopedics', value: 'orthopedics' },
   { label: 'Psycatric', value: 'Psycatric' },
  { label: 'Toxco', value: 'Toxco' },
   { label: 'MDR', value: 'MDR' },
   { label: 'ICU', value: 'ICU' },
  { label: 'NICU', value: 'NICU' }
];

export const periodOptions: FilterOption[] = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
  { label: 'Yearly', value: 'yearly' },
];
