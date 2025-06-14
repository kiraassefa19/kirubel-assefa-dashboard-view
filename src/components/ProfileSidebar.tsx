
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, ExternalLink, MapPin, GraduationCap, Award } from "lucide-react";

export const ProfileSidebar = () => {
  const skills = [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Dart"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
    { category: "Backend", items: ["Spring Boot", "REST API", "GraphQL", "Hibernate"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Tools", items: ["Docker", "Git", "Postman", "Jira"] }
  ];

  return (
    <div className="p-8 space-y-8 h-full">
      {/* Profile Photo & Name */}
      <div className="text-center space-y-4">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-3xl font-bold relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse opacity-75"></div>
          <span className="relative z-10">KA</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-1">Kirubel Shimeles</h1>
          <h1 className="text-2xl font-bold mb-2">Assefa</h1>
          <p className="text-blue-200 text-lg">Software Engineer</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Contact</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-300" />
            <span className="break-all">Kirubelassefa29@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-blue-300" />
            <span>+251 900 572902</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-blue-300" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="w-4 h-4 text-blue-300" />
            <span className="text-xs">LinkedIn Profile</span>
          </div>
          <div className="flex items-center gap-3">
            <ExternalLink className="w-4 h-4 text-blue-300" />
            <span className="text-xs">Portfolio Website</span>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Technical Skills</h3>
        <div className="space-y-4">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-medium text-blue-200 text-sm">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-1">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="bg-gray-700 text-gray-200 text-xs hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Education</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 text-blue-300 mt-1" />
            <div>
              <p className="font-medium text-sm">Bachelor of IT</p>
              <p className="text-gray-300 text-xs">Hope Enterprise University</p>
              <p className="text-gray-400 text-xs">July 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Certificates</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-yellow-400 mt-1" />
            <p className="text-sm">Programming with JavaScript</p>
          </div>
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-yellow-400 mt-1" />
            <p className="text-sm">Spring MVC, Spring Boot and Rest Controllers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
