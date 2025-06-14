
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ExternalLink, Download, MapPin } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="glass-effect border-white/20 text-white p-8 animate-scale-in hover-glow group overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold animate-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
            <span className="relative z-10 neon-text">KA</span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 gradient-text">Kirubel Shimeles Assefa</h1>
            <h2 className="text-xl text-blue-200 mb-2 flex items-center gap-2">
              <span className="relative">
                Software Engineer
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></span>
              </span>
            </h2>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <p className="text-gray-300 leading-relaxed glass-dark p-4 rounded-lg border border-white/10">
              Proactive and innovative software engineer with a strong foundation in Information Technology and comprehensive 
              experience in both backend and frontend development. Skilled at mastering new frameworks, technologies, and 
              programming languages to deliver high-quality, impactful solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-none animate-pulse">
              Full Stack Developer
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-none" style={{animationDelay: "0.2s"}}>
              React.js
            </Badge>
            <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-none" style={{animationDelay: "0.4s"}}>
              Spring Boot
            </Badge>
            <Badge className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 border-none" style={{animationDelay: "0.6s"}}>
              Fintech
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover-glow group transition-all duration-300">
              <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Kirubelassefa29@gmail.com
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover-glow group transition-all duration-300">
              <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              +251 900 572902
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover-glow group transition-all duration-300">
              <Linkedin className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover-glow group transition-all duration-300">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Portfolio
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none hover-glow group transition-all duration-300">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
