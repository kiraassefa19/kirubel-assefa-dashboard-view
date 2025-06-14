
import { useState } from "react";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { MainContent } from "@/components/MainContent";
import { ParticleBackground } from "@/components/ParticleBackground";
import { WebPortfolio } from "@/components/WebPortfolio";
import { Button } from "@/components/ui/button";
import { FileText, Globe } from "lucide-react";

const Index = () => {
  const [viewMode, setViewMode] = useState<"cv" | "portfolio">("cv");

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
        <ParticleBackground />
      </div>
      
      {/* View Toggle Button */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <Button
          onClick={() => setViewMode("cv")}
          variant={viewMode === "cv" ? "default" : "outline"}
          className={`${
            viewMode === "cv" 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              : "bg-white/80 backdrop-blur-sm hover:bg-white/90"
          } transition-all duration-300 shadow-lg`}
        >
          <FileText className="w-4 h-4 mr-2" />
          CV View
        </Button>
        <Button
          onClick={() => setViewMode("portfolio")}
          variant={viewMode === "portfolio" ? "default" : "outline"}
          className={`${
            viewMode === "portfolio" 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              : "bg-white/80 backdrop-blur-sm hover:bg-white/90"
          } transition-all duration-300 shadow-lg`}
        >
          <Globe className="w-4 h-4 mr-2" />
          Portfolio View
        </Button>
      </div>
      
      {/* Content based on view mode */}
      {viewMode === "cv" ? (
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
      ) : (
        <WebPortfolio />
      )}
    </div>
  );
};

export default Index;
