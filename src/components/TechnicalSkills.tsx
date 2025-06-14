
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Wrench, Smartphone } from "lucide-react";

export const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Dart", level: 75, color: "from-cyan-500 to-blue-500" }
      ]
    },
    {
      category: "Frontend",
      icon: Code2,
      skills: [
        { name: "React.js", level: 88, color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", level: 82, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-cyan-500" },
        { name: "HTML5/CSS3", level: 95, color: "from-orange-500 to-red-500" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        { name: "Spring Boot", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "REST API", level: 88, color: "from-purple-500 to-violet-500" },
        { name: "GraphQL", level: 70, color: "from-pink-500 to-rose-500" },
        { name: "Hibernate/JPA", level: 85, color: "from-indigo-500 to-purple-500" }
      ]
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-600 to-blue-700" },
        { name: "PostgreSQL", level: 80, color: "from-blue-500 to-indigo-500" },
        { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
        { name: "Redis", level: 70, color: "from-red-500 to-red-600" }
      ]
    }
  ];

  const tools = [
    { name: "Docker", color: "from-blue-500 to-blue-600" },
    { name: "Git", color: "from-orange-500 to-red-500" },
    { name: "Postman", color: "from-orange-600 to-orange-700" },
    { name: "Jira", color: "from-blue-600 to-blue-700" },
    { name: "Slack", color: "from-purple-500 to-purple-600" },
    { name: "Trello", color: "from-blue-500 to-cyan-500" },
    { name: "Firebase", color: "from-yellow-500 to-orange-500" },
    { name: "Supabase", color: "from-green-500 to-emerald-500" },
    { name: "Jest", color: "from-red-500 to-red-600" },
    { name: "Cypress", color: "from-gray-600 to-gray-700" },
    { name: "Stripe", color: "from-purple-600 to-indigo-600" }
  ];

  return (
    <Card className="glass-effect border-white/20 text-white animate-scale-in hover-glow group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg animate-pulse">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="gradient-text">Technical Skills</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3 glass-dark p-4 rounded-lg border border-white/10 group/category hover:border-white/20 transition-all duration-300">
            <h3 className="font-semibold text-blue-200 flex items-center gap-2">
              <category.icon className="w-4 h-4" />
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2 group/skill">
                  <div className="flex justify-between text-sm">
                    <span className="group-hover/skill:text-white transition-colors">{skill.name}</span>
                    <span className="text-gray-400 group-hover/skill:text-blue-300 transition-colors">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.level} className="h-2 bg-white/10" />
                    <div 
                      className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="space-y-3 glass-dark p-4 rounded-lg border border-white/10 group/tools hover:border-white/20 transition-all duration-300">
          <h3 className="font-semibold text-blue-200 flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                className={`bg-gradient-to-r ${tool.color} border-none hover:scale-105 transition-transform duration-200 animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tool.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
