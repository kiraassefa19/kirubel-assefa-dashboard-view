
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Building2, Target, Code } from "lucide-react";

export const WorkExperience = () => {
  const experiences = [
    {
      company: "Kifiya Financial Technology PLC",
      role: "Software Engineer",
      period: "August 2023 - Present",
      project: "Digital Agriculture Platform",
      description: "Digital Agriculture has both web and mobile applications, This platform helps smallholder farmers to get financial access that helps or elevates the farming process and finally creates a market for their produces or agricultural output according to their contract farming.",
      responsibilities: [
        "Responsible for implementing the web application",
        "Responsible for implementing the backend",
        "Responsible for integration of the web and mobile application using REST API"
      ],
      technologies: ["Java", "TypeScript", "Spring Boot", "React", "MySQL", "JPA", "Hibernate"],
      methodology: "Agile",
      status: "current"
    },
    {
      company: "Kifiya Financial Technology PLC",
      role: "Intern",
      period: "June - August 2022",
      project: "Bank Emulator",
      description: "The Bank Emulator project includes both web and mobile applications, functioning as a small banking system. It enables customer registration, facilitates bankers in managing transactions, and provides the bank with access to customer data.",
      responsibilities: [
        "Responsible for implementing the web application",
        "Responsible for implementing the backend",
        "Responsible for integration of the web and mobile application using REST API"
      ],
      technologies: ["Java", "Spring Boot", "React", "React Native", "JavaScript", "MySQL", "JPA", "Hibernate"],
      methodology: "Agile",
      status: "completed"
    }
  ];

  return (
    <Card className="glass-effect border-white/20 text-white animate-scale-in hover-glow group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg animate-pulse">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="gradient-text">Work Experience</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-8 relative z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group/exp">
            {/* Timeline line */}
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 opacity-30"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-4 top-4 w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-white/20 animate-pulse"></div>
            
            <div className="ml-12 glass-dark p-6 rounded-lg border border-white/10 group-hover/exp:border-white/20 transition-all duration-300 hover-glow">
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-200 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {exp.role}
                    </h3>
                    <p className="font-medium text-white">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-300 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <Badge 
                        className={`${exp.status === 'current' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                        } border-none animate-pulse`}
                      >
                        {exp.methodology}
                      </Badge>
                      {exp.status === 'current' && (
                        <Badge className="bg-gradient-to-r from-green-400 to-green-500 border-none animate-bounce">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold text-purple-200 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Project: {exp.project}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-blue-200 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
                        <span className="group-hover/exp:text-white transition-colors">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-blue-200 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-gradient-to-r from-indigo-500/50 to-purple-500/50 text-white border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-200"
                        style={{animationDelay: `${techIndex * 0.1}s`}}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
