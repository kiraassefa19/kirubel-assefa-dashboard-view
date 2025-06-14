
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    "Programming with JavaScript",
    "Spring MVC, Spring Boot and Rest Controllers"
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Award className="w-5 h-5" />
          Certificates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{cert}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
