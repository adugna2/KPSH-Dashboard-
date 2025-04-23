import { PatientFlowChart } from "../charts/PatientFlowChart";
import { PatientDemographicsChart } from "../charts/PatientDemographicsChart";
import { StaffRatioChart } from "../charts/StaffRatioChart";
import { BedOccupancyChart } from "../charts/BedOccupancyChart";
import { SurgicalEfficiencyChart } from "../charts/SurgicalEfficiencyChart";
import { MortalityRateChart } from "../charts/MortalityRateChart";
import { InfectionRateChart } from "../charts/InfectionRateChart";
import { LengthOfStayChart } from "../charts/LengthOfStayChart";
import { WaitingListChart } from "../charts/WaitingListChart";
import {TBTreatmentChart } from "../charts/TBTreatmentChart";
// import { NursingCareChart } from "../charts/NursingCareChart";
// import { MalnutritionChart } from "../charts/MalnutritionChart";
import { DepartmentComparisonChart } from "../charts/DepartmentComparisonChart";
import { EnhancedDepartmentChart } from "../charts/EnhancedDepartmentChart";
import { 
  BedOccupancyData, 
  DepartmentMetricData, 
  InfectionRateData, 
  LengthOfStayData, 
  // MalnutritionData, 
  MortalityRateData, 
  // NursingCareData, 
  SurgicalEfficiencyData, 
  TBTreatmentData, 
  WaitingListData
} from "@/types";
import {shorttbTreatmentData } from "@/utils/mockData";

interface DashboardChartsProps {
  patientFlowData: any[] | undefined;
  isLoadingPatientFlow: boolean;
  patientDemographicsData: any;
  isLoadingPatientDemographics: boolean;
  staffRatioData: any[] | undefined;
  isLoadingStaffRatio: boolean;
  bedOccupancyData: BedOccupancyData[] | undefined;
  isLoadingBedOccupancy: boolean;
  surgicalEfficiencyData: SurgicalEfficiencyData[] | undefined;
  isLoadingSurgicalEfficiency: boolean;
  mortalityRateData: MortalityRateData[] | undefined;
  isLoadingMortalityRate: boolean;
  infectionRateData: InfectionRateData[] | undefined;
  isLoadingInfectionRate: boolean;
  lengthOfStayData: LengthOfStayData[] | undefined;
  isLoadingLengthOfStay: boolean;
  waitingListData: WaitingListData[] | undefined;
  isLoadingWaitingList: boolean;
  tbTreatmentData: TBTreatmentData[] | undefined;
  isLoadingTbTreatment: boolean;
  // nursingCareData: NursingCareData[] | undefined;
  isLoadingNursingCare: boolean;
  malnutritionData: any[] | undefined;
  isLoadingMalnutrition: boolean;
  departmentMetricsData: DepartmentMetricData[] | undefined;
  isLoadingDepartmentMetrics: boolean;
}

export function DashboardCharts({
  patientFlowData,
  isLoadingPatientFlow,
  patientDemographicsData,
  isLoadingPatientDemographics,
  staffRatioData,
  isLoadingStaffRatio,
  bedOccupancyData,
  isLoadingBedOccupancy,
  surgicalEfficiencyData,
  isLoadingSurgicalEfficiency,
  mortalityRateData,
  isLoadingMortalityRate,
  infectionRateData,
  isLoadingInfectionRate,
  lengthOfStayData,
  isLoadingLengthOfStay,
  waitingListData,
  isLoadingWaitingList,
  tbTreatmentData,
  isLoadingTbTreatment,
  // nursingCareData,
  // isLoadingNursingCare,
  // malnutritionData,
  // isLoadingMalnutrition,
  departmentMetricsData,
  isLoadingDepartmentMetrics
}: DashboardChartsProps) {
  
  const bedOccupancyByDept = departmentMetricsData?.map(dept => ({
    department: dept.department,
    value: dept.bedOccupancy,
    totalBeds: Math.floor(Math.random() * 50) + 20
  })) || [];
  
  const mortalityByDept = departmentMetricsData?.map(dept => ({
    department: dept.department,
    value: dept.mortalityRate,
    deaths: Math.floor(Math.random() * 15) + 1
  })) || [];
  
  // const nursingScoreByDept = departmentMetricsData?.map(dept => ({
  //   department: dept.department,
  //   value: dept.nursingCareScore
  // })) || [];
  
  // const nurseRatioByDept = departmentMetricsData?.map(dept => ({
  //   department: dept.department,
  //   value: dept.nursesRatio
  // })) || [];
  
  // const physicianRatioByDept = departmentMetricsData?.map(dept => ({
  //   department: dept.department,
  //   value: dept.physiciansRatio
  // })) || [];

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <PatientFlowChart 
          data={patientFlowData || []} 
          isLoading={isLoadingPatientFlow} 
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        <h2 className="text-2xl font-semibold">Department Metrics Comparison</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EnhancedDepartmentChart
          data={bedOccupancyByDept}
          title="Bed Occupancy by Department"
          description="Percentage of beds occupied across different departments"
          metric="%"
          isLoading={isLoadingDepartmentMetrics}
          type="bedOccupancy"
        />
        <EnhancedDepartmentChart
          data={mortalityByDept}
          title="Mortality Rate by Department"
          description="Mortality rates across different departments"
          metric="%"
          isLoading={isLoadingDepartmentMetrics}
          type="mortality"
        />
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DepartmentComparisonChart
          title="Nurse-to-Patient Ratio by Department"
          description="Number of nurses per patient across departments"
          data={nurseRatioByDept}
          unit="nurses/patient"
          isLoading={isLoadingDepartmentMetrics}
        />
        <DepartmentComparisonChart
          title="Physician-to-Patient Ratio by Department"
          description="Number of physicians per patient across departments"
          data={physicianRatioByDept}
          unit="physicians/patient"
          isLoading={isLoadingDepartmentMetrics}
        />
      </div>
       */}
      {/* <div className="grid grid-cols-1 gap-4">
        <DepartmentMetricsChart
          data={nursingScoreByDept}
          title="Nursing Care Audit Score by Department"
          description="Quality of nursing care across departments (out of 100)"
          metric="points"
          isLoading={isLoadingDepartmentMetrics}
          className="col-span-1"
        />
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <PatientDemographicsChart
          ageData={patientDemographicsData?.ageData || []}
          departmentData={patientDemographicsData?.departmentData || []}
          isLoading={isLoadingPatientDemographics}
          className="col-span-1 lg:col-span-2"
        />
        <StaffRatioChart 
          data={staffRatioData || []} 
          isLoading={isLoadingStaffRatio} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BedOccupancyChart data={bedOccupancyData || []} isLoading={isLoadingBedOccupancy} />
        <SurgicalEfficiencyChart data={surgicalEfficiencyData || []} isLoading={isLoadingSurgicalEfficiency} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MortalityRateChart data={mortalityRateData || []} isLoading={isLoadingMortalityRate} />
        <InfectionRateChart data={infectionRateData || []} isLoading={isLoadingInfectionRate} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <LengthOfStayChart 
          data={lengthOfStayData || []} 
          isLoading={isLoadingLengthOfStay}
          className="col-span-1 lg:col-span-2"
        />
        <WaitingListChart data={waitingListData || []} isLoading={isLoadingWaitingList} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TBTreatmentChart 
          data={tbTreatmentData || []} 
          isLoading={isLoadingTbTreatment} 
          className="col-span-1"
        />
        {/* <NursingCareChart 
          data={nursingCareData || []} 
          isLoading={isLoadingNursingCare} 
          className="col-span-1 lg:col-span-2"
        /> */}
      </div>

      {/* <div className="grid grid-cols-1 gap-4">
         <MalnutritionChart 
          data={malnutritionData || []} 
          isLoading={isLoadingMalnutrition} 
          className="col-span-1"
        /> 
      </div> */}
    </>
  );
}
