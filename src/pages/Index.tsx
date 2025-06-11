
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MainContent } from "@/components/MainContent";
import { AppProvider } from "@/contexts/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <MainContent />
        </div>
      </SidebarProvider>
    </AppProvider>
  );
};

export default Index;
