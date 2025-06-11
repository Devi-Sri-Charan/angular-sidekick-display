
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";

type CaseCardProps = {
  case_: {
    id: number;
    age: string;
    condition: string;
    difficulty: string;
    quickSim: string;
    image: string;
  };
};

export function CaseCard({ case_ }: CaseCardProps) {
  const { setSelectedCase, userStats, updateUserStats } = useApp();
  const { toast } = useToast();

  const handleSelectCase = () => {
    console.log(`Selected case: ${case_.age} with ${case_.condition}`);
    setSelectedCase(case_);
    
    toast({
      title: "Case Selected",
      description: `Starting case: ${case_.age} with ${case_.condition}`,
    });
    
    // Simulate case completion for demo purposes
    setTimeout(() => {
      const newScore = Math.floor(Math.random() * 40) + 60; // Random score 60-100
      updateUserStats({
        fullSimAvg: Math.round((userStats.fullSimAvg + newScore) / 2),
      });
      
      toast({
        title: "Case Completed",
        description: `You scored ${newScore}% on this case!`,
      });
    }, 3000);
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes("Not Yet")) return "bg-gray-500";
    if (difficulty.includes("Easy")) return "bg-green-500";
    if (difficulty.includes("Medium")) return "bg-yellow-500";
    if (difficulty.includes("Hard")) return "bg-red-500";
    return "bg-gray-500";
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {case_.age.split(" ")[0]}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">
              {case_.age} with {case_.condition}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Full Sim:</span>
                <Badge variant="outline" className={getDifficultyColor(case_.difficulty)}>
                  {case_.difficulty}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span>Quick Sim:</span>
                <Badge variant="outline" className={getDifficultyColor(case_.quickSim)}>
                  {case_.quickSim}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors"
            onClick={handleSelectCase}
          >
            Start Case
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
