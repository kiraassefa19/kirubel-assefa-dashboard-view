
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  Download, 
  MapPin, 
  Code, 
  Briefcase, 
  GraduationCap,
  Award,
  Github,
  ChevronDown
} from "lucide-react";

export const WebPortfolio = () => {
  const skills = {
    "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    "Backend": ["Spring Boot", "Java", "REST API", "GraphQL", "Hibernate"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "Mobile": ["Flutter", "React Native", "Dart"],
    "Tools": ["Docker", "Git", "Postman", "Jira", "VS Code"]
  };

  const projects = [
    {
      title: "Digital Agriculture Platform",
      company: "Kifiya Financial Technology PLC",
      period: "August 2023 - Present",
      description: "A comprehensive platform helping smallholder farmers access financial services and create markets for their agricultural output through contract farming.",
      tech: ["Java", "TypeScript", "Spring Boot", "React", "MySQL"],
      status: "Live"
    },
    {
      title: "Bank Emulator System",
      company: "Kifiya Financial Technology PLC",
      period: "June - August 2022",
      description: "A complete banking system with web and mobile applications for customer registration, transaction management, and data access.",
      tech: ["Java", "Spring Boot", "React", "React Native", "MySQL"],
      status: "Completed"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold animate-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
              <span className="relative z-10 neon-text text-white">KA</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse ml-20"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text animate-fade-in">
            Kirubel Shimeles
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Assefa
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 animate-slide-up">
            Software Engineer
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Proactive and innovative software engineer with comprehensive experience in both backend and frontend development. 
            Passionate about creating impactful solutions that drive business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover-glow">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg hover-glow">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">5+</div>
              <div className="text-gray-600">Frameworks</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in Information Technology. 
                I specialize in creating full-stack applications using modern technologies and frameworks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently working at Kifiya Financial Technology PLC, I'm involved in developing 
                innovative fintech solutions that make a real impact on people's lives.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="hover-glow">
                  <MapPin className="w-4 h-4 mr-2" />
                  Addis Ababa, Ethiopia
                </Button>
                <Button variant="outline" size="sm" className="hover-glow">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Available for Projects
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(skills).slice(0, 4).map(([category, techs]) => (
                <Card key={category} className="p-4 hover-glow glass-effect border-white/20">
                  <h4 className="font-semibold mb-2 text-blue-600">{category}</h4>
                  <div className="text-sm text-gray-600">{techs.slice(0, 2).join(", ")}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="p-6 hover-glow glass-effect border-white/20 group">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 hover:from-blue-200 hover:to-purple-200 transition-all"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover-glow glass-effect border-white/20 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.company}</p>
                    <p className="text-sm text-gray-500">{project.period}</p>
                  </div>
                  <Badge className={`${
                    project.status === "Live" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  } self-start lg:self-center`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always excited to work on new projects and collaborate with amazing teams.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Button variant="outline" className="p-6 h-auto flex-col hover-glow">
              <Mail className="w-8 h-8 mb-2 text-blue-500" />
              <span className="text-sm">Kirubelassefa29@gmail.com</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col hover-glow">
              <Phone className="w-8 h-8 mb-2 text-green-500" />
              <span className="text-sm">+251 900 572902</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col hover-glow">
              <Linkedin className="w-8 h-8 mb-2 text-blue-600" />
              <span className="text-sm">LinkedIn Profile</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col hover-glow">
              <ExternalLink className="w-8 h-8 mb-2 text-purple-500" />
              <span className="text-sm">Portfolio Website</span>
            </Button>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg hover-glow">
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};
