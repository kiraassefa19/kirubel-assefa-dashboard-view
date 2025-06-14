
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Dart", level: 75 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 82 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "REST API", level: 88 },
        { name: "GraphQL", level: 70 },
        { name: "Hibernate/JPA", level: 85 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 }
      ]
    }
  ];

  const tools = [
    "Docker", "Git", "Postman", "Jira", "Slack", "Trello", 
    "Firebase", "Supabase", "Jest", "Cypress", "Stripe"
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Technical Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-semibold text-blue-200">{category.category}</h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="space-y-3">
          <h3 className="font-semibold text-blue-200">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge key={index} variant="outline" className="border-white/30 text-white">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
