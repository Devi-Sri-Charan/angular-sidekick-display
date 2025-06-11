import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Award, ChevronDown, Plus, Search } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";
import { CaseCard } from "@/components/CaseCard";
import { Input } from "@/components/ui/input";

const medicalCases = [
  {
    id: 1,
    age: "72 Year Old Woman",
    condition: "Worsening Shortness of Breath",
    difficulty: "Not Yet Attempted",
    quickSim: "Not Yet Attempted",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    age: "58 Year Old Man", 
    condition: "Chest Pain",
    difficulty: "Not Yet Attempted",
    quickSim: "Not Yet Attempted",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    age: "86 Year Old Female",
    condition: "Left Lower Quadrant Pain", 
    difficulty: "Not Yet Attempted",
    quickSim: "Not Yet Attempted",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    age: "38-Year-Old Man",
    condition: "Recurrent Severe Unilateral Head Pain",
    difficulty: "Not Yet Attempted", 
    quickSim: "Not Yet Attempted",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    age: "25-Year-Old Male",
    condition: "Polyuria and Abdominal Pain",
    difficulty: "Not Yet Attempted",
    quickSim: "Not Yet Attempted", 
    image: "/placeholder.svg"
  },
  {
    id: 6,
    age: "45-Year-Old",
    condition: "Fatigue and Skin Changes",
    difficulty: "Not Yet Attempted",
    quickSim: "Not Yet Attempted",
    image: "/placeholder.svg"
  }
];

const leaderboard = [
  { rank: 2, name: "Anonymous User", points: 1182 },
  { rank: 3, name: "Anonymous User", points: 1129 },
  { rank: 4, name: "Anonymous User", points: 1092 },
  { rank: 5, name: "Radius", points: 1048 }
];

export function MainContent() {
  const { userStats, selectedCase } = useApp();
  const [activeTab, setActiveTab] = useState("Common Cases");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    search: "All",
    setting: "All", 
    rotation: "All",
    system: "All"
  });
  const { toast } = useToast();

  const handleStartCase = () => {
    console.log("Starting a new case");
    toast({
      title: "New Case",
      description: "Creating a new medical case simulation...",
    });
  };

  const filteredCases = medicalCases.filter(case_ =>
    case_.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    case_.age.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 bg-gray-50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <Button 
          className="bg-green-500 hover:bg-green-600 text-white transition-colors"
          onClick={handleStartCase}
        >
          <Plus className="w-4 h-4 mr-2" />
          Start a Case
        </Button>
        {selectedCase && (
          <div className="ml-auto bg-blue-100 px-4 py-2 rounded-lg">
            <span className="text-sm text-blue-800">
              Active Case: {selectedCase.age} with {selectedCase.condition}
            </span>
          </div>
        )}
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-3xl font-bold mb-2">{userStats.fullSimAvg}% Avg</div>
            <div className="text-gray-600 text-sm mb-4">Full Simulator Cases Average</div>
            <Progress value={userStats.fullSimAvg} className="h-2" />
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-3xl font-bold mb-2">{userStats.quickSimAvg}% Avg</div>
            <div className="text-gray-600 text-sm mb-4">Quick Simulator Cases Average</div>
            <Progress value={userStats.quickSimAvg} className="h-2" />
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-lg font-semibold mb-2">Badges Earned</div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Gold {userStats.badges.gold}</span>
              </div>
              <div className="flex items-center gap-1">
                <Medal className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Silver {userStats.badges.silver}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm">Bronze {userStats.badges.bronze}</span>
              </div>
            </div>
            <Progress value={(userStats.badges.gold + userStats.badges.silver + userStats.badges.bronze) * 10} className="h-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-lg font-semibold mb-2">All Time Leaderboard</div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Full</span>
              <span className="text-sm text-gray-600">Quick</span>
            </div>
            <div className="space-y-2">
              {leaderboard.slice(0, 2).map((user) => (
                <div key={user.rank} className="flex justify-between items-center text-sm">
                  <span>{user.rank}. {user.name}</span>
                  <span className="font-medium">{user.points} pts</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Case List Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Case List</CardTitle>
            <div className="flex gap-2">
              <Button 
                variant={activeTab === "Common Cases" ? "default" : "outline"}
                onClick={() => setActiveTab("Common Cases")}
              >
                Common Cases
              </Button>
              <Button 
                variant={activeTab === "Your Custom Cases" ? "default" : "outline"}
                onClick={() => setActiveTab("Your Custom Cases")}
              >
                Your Custom Cases
              </Button>
            </div>
          </div>
          
          {/* Search and Filter Options */}
          <div className="space-y-4 mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Search</label>
                <Button variant="outline" className="w-full justify-between">
                  All <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Setting</label>
                <Button variant="outline" className="w-full justify-between">
                  All <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Rotation</label>
                <Button variant="outline" className="w-full justify-between">
                  All <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">System</label>
                <Button variant="outline" className="w-full justify-between">
                  All <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          {filteredCases.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No cases found matching your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((case_) => (
                <CaseCard key={case_.id} case_={case_} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
