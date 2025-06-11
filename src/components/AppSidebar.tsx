
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Lock, 
  LogIn, 
  UserPlus,
  BookOpen,
  Search,
  Brain,
  HelpCircle,
  Clock,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    id: "dashboard"
  }
];

const authItems = [
  {
    title: "Log In",
    icon: LogIn,
    id: "login"
  },
  {
    title: "Sign Up", 
    icon: UserPlus,
    id: "signup"
  }
];

const introduceItems = [
  {
    title: "Search",
    icon: Search,
    id: "search"
  },
  {
    title: "AI Notebook",
    icon: Brain,
    id: "ai-notebook"
  }
];

const drillItems = [
  {
    title: "Flashcard Hub",
    icon: Target,
    id: "flashcard-hub"
  }
];

const applyItems = [
  {
    title: "Board Question Hub",
    icon: HelpCircle,
    id: "board-questions"
  }
];

export function AppSidebar() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [authOpen, setAuthOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <Sidebar className="border-r border-gray-700">
      <SidebarHeader className="bg-gray-900 p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="text-white">
            <div className="font-semibold">Neural Consult</div>
            <div className="text-xs text-green-400">OSCE Hub</div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-gray-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`text-gray-300 hover:text-white hover:bg-gray-800 ${
                      activeSection === item.id ? 'bg-gray-800 text-white' : ''
                    }`}
                    onClick={() => handleSectionClick(item.id)}
                  >
                    <button className="w-full justify-start">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Collapsible open={authOpen} onOpenChange={setAuthOpen}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-800">
                      <Lock className="w-4 h-4" />
                      <span>Authentication</span>
                      <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${authOpen ? 'rotate-180' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu className="ml-6">
                      {authItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton 
                            asChild
                            className={`text-gray-400 hover:text-white hover:bg-gray-800 ${
                              activeSection === item.id ? 'bg-gray-800 text-white' : ''
                            }`}
                            onClick={() => handleSectionClick(item.id)}
                          >
                            <button className="w-full justify-start">
                              <item.icon className="w-4 h-4" />
                              <span>{item.title}</span>
                            </button>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider">
            Introduce a Topic
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {introduceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`text-gray-300 hover:text-white hover:bg-gray-800 ${
                      activeSection === item.id ? 'bg-gray-800 text-white' : ''
                    }`}
                    onClick={() => handleSectionClick(item.id)}
                  >
                    <button className="w-full justify-start">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider">
            Drill Your Skills
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {drillItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`text-gray-300 hover:text-white hover:bg-gray-800 ${
                      activeSection === item.id ? 'bg-gray-800 text-white' : ''
                    }`}
                    onClick={() => handleSectionClick(item.id)}
                  >
                    <button className="w-full justify-start">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 text-xs uppercase tracking-wider">
            Apply in Context
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applyItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`text-gray-300 hover:text-white hover:bg-gray-800 ${
                      activeSection === item.id ? 'bg-gray-800 text-white' : ''
                    }`}
                    onClick={() => handleSectionClick(item.id)}
                  >
                    <button className="w-full justify-start">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
