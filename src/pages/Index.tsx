
import { ProfileHeader } from "@/components/ProfileHeader";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <ParticleBackground />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/25 rounded-full blur-xl animate-float" style={{animationDelay: "2s"}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        <div className="animate-fade-in">
          <ProfileHeader />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
              <WorkExperience />
            </div>
          </div>
          <div className="space-y-8">
            <div className="animate-slide-up" style={{animationDelay: "0.4s"}}>
              <TechnicalSkills />
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.6s"}}>
              <Education />
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.8s"}}>
              <Certificates />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
