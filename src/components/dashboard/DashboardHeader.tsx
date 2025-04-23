
import { Calendar } from "lucide-react";
import { DateRange, ChartPeriod } from "@/types";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DashboardHeaderProps {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
  department: string;
  setDepartment: (department: string) => void;
  period: ChartPeriod;
  setPeriod: (period: ChartPeriod) => void;
}

export function DashboardHeader({
  dateRange,
  setDateRange,
  department,
  setDepartment,
  period,
  setPeriod
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
      <h1
  className="text-3xl font-bold tracking-tight"
  style={{ color: '#00A99E' }}
>
  Kidus Petros Sepesalized Hospital
   Performance Monitoring Dashboard
</h1>

        <p className="text-muted-foreground"style={{ color: '#F26525' }}>
          Monitor key metrics and clinical outcomes
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !dateRange.from && "text-muted-foreground"
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} -{" "}
                    {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Select date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <CalendarComponent
              initialFocus
              mode="range"
              selected={{
                from: dateRange.from,
                to: dateRange.to,
              }}
              onSelect={(selected) => {
                setDateRange({
                  from: selected?.from,
                  to: selected?.to,
                });
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="general-medicine">General Medicine</SelectItem>
            <SelectItem value="surgery">Surgery</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
            <SelectItem value="obstetrics">Obstetrics</SelectItem>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="cardiology">ICU</SelectItem>
            <SelectItem value="cardiology">NICU</SelectItem>
            <SelectItem value="cardiology">MDR</SelectItem>
            <SelectItem value="cardiology">Toxco</SelectItem>
            <SelectItem value="cardiology">psycatric</SelectItem>
            <SelectItem value="cardiology">Out Patient</SelectItem>
          </SelectContent>
        </Select>

        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
