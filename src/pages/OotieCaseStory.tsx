import BackSidebar from "@/components/BackSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyRoleSection from "@/components/ootie-case/MyRoleSection";
import OpportunitiesSection from "@/components/ootie-case/OpportunitiesSection";
import ApproachSection from "@/components/ootie-case/ApproachSection";
import OutcomesSection from "@/components/ootie-case/OutcomesSection";
import OutputsSection from "@/components/ootie-case/OutputsSection";

export default function OotieCaseStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 flex">
      <BackSidebar to="/apps" />

      <main className="flex-1 ml-12">
        <Tabs defaultValue="role" className="w-full">
          {/* Sticky Tab Navigation */}
          <div className="sticky top-0 z-50 backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-2xl">
            <div className="max-w-6xl mx-auto px-6 py-6">
              <div className="flex justify-center">
                <TabsList className="bg-transparent p-0 gap-2">
                  <TabsTrigger 
                    value="role" 
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:scale-105 font-medium"
                  >
                    My Role
                  </TabsTrigger>
                  <TabsTrigger 
                    value="opportunities" 
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:scale-105 font-medium"
                  >
                    Opportunities
                  </TabsTrigger>
                  <TabsTrigger 
                    value="approach" 
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:scale-105 font-medium"
                  >
                    Approach
                  </TabsTrigger>
                  <TabsTrigger 
                    value="outcomes" 
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:scale-105 font-medium"
                  >
                    Impact & Outcomes
                  </TabsTrigger>
                  <TabsTrigger 
                    value="outputs" 
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:scale-105 font-medium"
                  >
                    Glimpse of Outputs
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>

          <TabsContent value="role" className="mt-0">
            <MyRoleSection />
          </TabsContent>

          <TabsContent value="opportunities" className="mt-0">
            <OpportunitiesSection />
          </TabsContent>

          <TabsContent value="approach" className="mt-0">
            <ApproachSection />
          </TabsContent>

          <TabsContent value="outcomes" className="mt-0">
            <OutcomesSection />
          </TabsContent>

          <TabsContent value="outputs" className="mt-0">
            <OutputsSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
