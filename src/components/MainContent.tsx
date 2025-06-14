
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, MapPin, Target, Code, User } from "lucide-react";

export const MainContent = () => {
  const experiences = [
    {
      company: "Kifiya Financial Technology PLC",
      role: "Software Engineer",
      period: "August 2023 - Present",
      project: "Digital Agriculture Platform",
      description: "Digital Agriculture has both web and mobile applications. This platform helps smallholder farmers to get financial access that helps or elevates the farming process and finally creates a market for their produces or agricultural output according to their contract farming.",
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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Profile</h2>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Summary</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Proactive and innovative software engineer with a strong foundation in Information Technology and comprehensive 
                experience in both backend and frontend development. Skilled at mastering new frameworks, technologies, and 
                programming languages to deliver high-quality, impactful solutions. Known for a collaborative mindset, strong 
                problem-solving abilities, and adaptability to evolving methodologies and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">Work Experience</h3>
        
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
            {/* Timeline dot */}
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            
            <div className="space-y-4">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    {exp.role}
                  </h4>
                  <p className="font-medium text-gray-700">{exp.company}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  {exp.status === 'current' && (
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      Current
                    </Badge>
                  )}
                </div>
              </div>

              {/* Project */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-600" />
                  Project: {exp.project}
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h5>
                <ul className="space-y-1">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-green-600" />
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Methodology:</span>
                <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                  {exp.methodology}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
