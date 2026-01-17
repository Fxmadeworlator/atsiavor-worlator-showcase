import { Tabs, TabsContent } from "@/components/ui/tabs";
import CaseLayout from "@/components/ootie-case/CaseLayout";
import CaseTabs from "@/components/ootie-case/CaseTabs";
import MyRoleSection from "@/components/ootie-case/MyRoleSection";
import OpportunitiesSection from "@/components/ootie-case/OpportunitiesSection";
import ApproachSection from "@/components/ootie-case/ApproachSection";
import OutcomesSection from "@/components/ootie-case/OutcomesSection";
import OutputsSection from "@/components/ootie-case/OutputsSection";

export default function OotieCaseStory() {
  return (
    <CaseLayout backTo="/apps">
      <Tabs defaultValue="role" className="w-full">
        <CaseTabs />

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
    </CaseLayout>
  );
}
