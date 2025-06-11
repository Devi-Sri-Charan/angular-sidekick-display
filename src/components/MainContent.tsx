
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Award, ChevronDown } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("Common Cases");

  return (
    <main className="flex-1 bg-gray-50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          + Start a Case
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold mb-2">38% Avg</div>
            <div className="text-gray-600 text-sm">Full Simulator Cases Average</div>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold mb-2">75% Avg</div>
            <div className="text-gray-600 text-sm">Quick Simulator Cases Average</div>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-lg font-semibold mb-2">Badges Earned</div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Gold 1</span>
              </div>
              <div className="flex items-center gap-1">
                <Medal className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Silver 0</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm">Bronze 0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
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
                  <span>{user.points} pts</span>
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
          
          {/* Filter Options */}
          <div className="grid grid-cols-4 gap-4 mt-4">
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
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalCases.map((case_) => (
              <Card key={case_.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {case_.age} with {case_.condition}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Full Sim: {case_.difficulty}</div>
                        <div>Quick Sim: {case_.quickSim}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      Select
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
