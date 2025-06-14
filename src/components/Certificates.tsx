
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle, Star, Trophy } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Programming with JavaScript",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Spring MVC, Spring Boot and Rest Controllers",
      icon: Trophy,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <Card className="glass-effect border-white/20 text-white animate-scale-in hover-glow group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg animate-pulse">
            <Award className="w-5 h-5" />
          </div>
          <span className="gradient-text">Certificates</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="space-y-3">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="glass-dark p-4 rounded-lg border border-white/10 group/cert hover:border-white/20 transition-all duration-300 hover-glow"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 bg-gradient-to-r ${cert.color} rounded-lg animate-pulse flex-shrink-0`}>
                  <cert.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-300 group-hover/cert:text-white transition-colors leading-relaxed">
                    {cert.title}
                  </h4>
                </div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 animate-bounce" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/20">
          <p className="text-sm text-gray-300 text-center">
            Continuously learning and expanding technical expertise
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
