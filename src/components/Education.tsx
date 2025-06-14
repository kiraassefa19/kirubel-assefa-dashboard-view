
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h3 className="font-semibold text-blue-200">Bachelor Degree of Information Technology</h3>
          <p className="text-gray-300">Hope Enterprise University College</p>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            July 2023
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
