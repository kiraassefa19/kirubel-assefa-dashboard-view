
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  return (
    <Card className="glass-effect border-white/20 text-white animate-scale-in hover-glow group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg animate-pulse">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="gradient-text">Education</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="glass-dark p-4 rounded-lg border border-white/10 group/edu hover:border-white/20 transition-all duration-300 space-y-3">
          <div className="flex items-center gap-2 text-blue-200 mb-2">
            <Award className="w-4 h-4" />
            <h3 className="font-semibold">Bachelor Degree of Information Technology</h3>
          </div>
          
          <p className="text-white font-medium">Hope Enterprise University College</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>Graduated: July 2023</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          
          <div className="mt-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-400/20">
            <p className="text-sm text-gray-300">
              Focused on software development, database management, web technologies, and modern programming methodologies.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
