
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Activity,
  BarChart3,
  Bed,
  Calendar,
  ChevronRight,
  FileBarChart,
  GraduationCap,
  Heart,
  Home,
  LogOut,
  Settings,
  Stethoscope,
  User,
  UserRound,
  UserRoundCog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../../public/New folder/logo.png";
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <main className="p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function AppSidebar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="block lg:hidden p-2 fixed top-4 left-4 z-20">
        <SidebarTrigger />
      </div>
      <Sidebar className="bg-white border-r">
        <SidebarHeader className="h-16 flex items-center px-4">
        <div className="flex items-center space-x-2">
  <img 
    src={logo} 
    alt="Logo" 
    className="h-7 w-7"
  />
 <div className="flex flex-col">
    <span className="font-bold text-lg" style={{ color: '#F26525' }}>KPSH CEO</span>
    <span className="text-xs" style={{ color: '#F26525' }}>Dashboard</span>
  </div>
</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Analytics</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="bg-primary/10 text-primary">
                    <a href="/" className="flex items-center">
                      <Home className="h-5 w-5" />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <Bed className="h-5 w-5" />
                      <span>Inpatient Care</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <Stethoscope className="h-5 w-5" />
                      <span>Clinical Quality</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <BarChart3 className="h-5 w-5" />
                      <span>Financial Metrics</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <Calendar className="h-5 w-5" />
                      <span>Scheduling</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <UserRound className="h-5 w-5" />
                      <span>Staff Management</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <FileBarChart className="h-5 w-5" />
                      <span>Reports</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center">
                      <GraduationCap className="h-5 w-5" />
                      <span>Training</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <UserRoundCog className="h-6 w-6 text-healthcare-orange" />
              <div className="text-sm">
                <p className="font-medium">Dr.Abrham Eshetu</p>
                <p className="text-xs text-muted-foreground">Administrator</p>
              </div>
            </div>
            <button className="p-1 rounded-full hover:bg-muted">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
