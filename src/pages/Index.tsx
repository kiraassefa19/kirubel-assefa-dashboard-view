
import { ProfileHeader } from "@/components/ProfileHeader";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WorkExperience />
          </div>
          <div className="space-y-8">
            <TechnicalSkills />
            <Education />
            <Certificates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
