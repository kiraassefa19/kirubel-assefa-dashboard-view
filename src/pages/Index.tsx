
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { MainContent } from "@/components/MainContent";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
        <ParticleBackground />
      </div>
      
      {/* CV Container */}
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden min-h-[297mm] animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-full">
            {/* Left Sidebar - Personal Info */}
            <div className="lg:col-span-1 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
              <ProfileSidebar />
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 bg-white">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
