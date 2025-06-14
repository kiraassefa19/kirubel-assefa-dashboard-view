
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
  ChevronDown,
  Star,
  Trophy,
  Zap
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
      status: "Live",
      impact: "10K+ farmers served"
    },
    {
      title: "Bank Emulator System",
      company: "Kifiya Financial Technology PLC",
      period: "June - August 2022",
      description: "A complete banking system with web and mobile applications for customer registration, transaction management, and data access.",
      tech: ["Java", "Spring Boot", "React", "React Native", "MySQL"],
      status: "Completed",
      impact: "Full-stack solution"
    }
  ];

  const achievements = [
    { icon: Trophy, label: "2+ Years", description: "Professional Experience" },
    { icon: Star, label: "10+", description: "Technologies Mastered" },
    { icon: Zap, label: "2", description: "Major Projects Delivered" },
    { icon: Code, label: "5+", description: "Frameworks & Libraries" }
  ];

  return (
    <div className="relative z-10 min-h-screen">
      {/* Modern Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Kirubel Shimeles</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Assefa
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Full-Stack Software Engineer
              </p>
              
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                Crafting innovative digital solutions with modern technologies. 
                Specialized in creating scalable applications that drive business growth and user satisfaction.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Profile image and stats */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main profile container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl -rotate-6 opacity-30"></div>
                <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                  <span className="text-6xl font-bold">KA</span>
                </div>
              </div>
              
              {/* Floating achievement cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold">2+ Years</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold">10+ Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <achievement.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating impactful digital solutions that make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated software engineer with expertise in full-stack development. 
                My journey in technology is driven by a passion for solving complex problems 
                and creating user-centric applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently at Kifiya Financial Technology PLC, I'm building innovative fintech 
                solutions that empower communities and drive financial inclusion across Ethiopia.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Addis Ababa, Ethiopia
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Available for Projects
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(skills).slice(0, 4).map(([category, techs]) => (
                <Card key={category} className="p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <h4 className="font-semibold mb-2 text-blue-600">{category}</h4>
                  <div className="text-sm text-gray-600">{techs.slice(0, 2).join(", ")}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600">Technologies I work with to bring ideas to life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="p-6 hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">Real-world applications that make an impact</p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group border-0 bg-gradient-to-r from-white to-gray-50">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                        <p className="text-gray-600 mb-2">{project.company}</p>
                        <p className="text-sm text-gray-500">{project.period}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={`${
                          project.status === "Live" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {project.status}
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800">
                          {project.impact}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700 px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <Briefcase className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to bring your ideas to life? Let's discuss how we can work together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Mail className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-sm">Kirubelassefa29@gmail.com</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Phone className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-sm">+251 900 572902</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-sm">LinkedIn Profile</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Github className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-sm">GitHub Profile</p>
            </Card>
          </div>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <Mail className="w-5 h-5 mr-2" />
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};
