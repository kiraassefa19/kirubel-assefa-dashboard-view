
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

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
      methodology: "Agile"
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
      methodology: "Agile"
    }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-6 pb-6 last:pb-0">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-200">{exp.role}</h3>
                <p className="font-medium">{exp.company}</p>
                <div className="flex items-center gap-4 text-sm text-gray-300 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <Badge variant="outline" className="border-green-400 text-green-300">
                    {exp.methodology}
                  </Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-200 mb-2">Project: {exp.project}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>
              </div>

              <div>
                <h5 className="font-medium text-blue-200 mb-2">Key Responsibilities:</h5>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-blue-200 mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-600/50 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
