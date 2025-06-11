
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedCase: any | null;
  setSelectedCase: (case_: any) => void;
  userStats: {
    fullSimAvg: number;
    quickSimAvg: number;
    badges: {
      gold: number;
      silver: number;
      bronze: number;
    };
  };
  updateUserStats: (stats: any) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedCase, setSelectedCase] = useState(null);
  const [userStats, setUserStats] = useState({
    fullSimAvg: 38,
    quickSimAvg: 75,
    badges: {
      gold: 1,
      silver: 0,
      bronze: 0,
    },
  });

  const updateUserStats = (stats: any) => {
    setUserStats(prev => ({ ...prev, ...stats }));
  };

  return (
    <AppContext.Provider
      value={{
        activeSection,
        setActiveSection,
        selectedCase,
        setSelectedCase,
        userStats,
        updateUserStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
