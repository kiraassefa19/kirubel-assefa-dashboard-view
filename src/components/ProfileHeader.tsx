
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold">
            KA
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Kirubel Shimeles Assefa</h1>
            <h2 className="text-xl text-blue-200 mb-4">Software Engineer</h2>
            <p className="text-gray-300 leading-relaxed">
              Proactive and innovative software engineer with a strong foundation in Information Technology and comprehensive 
              experience in both backend and frontend development. Skilled at mastering new frameworks, technologies, and 
              programming languages to deliver high-quality, impactful solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700">Full Stack Developer</Badge>
            <Badge variant="secondary" className="bg-purple-600 hover:bg-purple-700">React.js</Badge>
            <Badge variant="secondary" className="bg-green-600 hover:bg-green-700">Spring Boot</Badge>
            <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">Fintech</Badge>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Mail className="w-4 h-4 mr-2" />
              Kirubelassefa29@gmail.com
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="w-4 h-4 mr-2" />
              +251 900 572902
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
