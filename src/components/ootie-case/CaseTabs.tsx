import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = [
  { value: "role", label: "My Role" },
  { value: "opportunities", label: "Opportunities" },
  { value: "approach", label: "Approach" },
  { value: "outcomes", label: "Impact & Outcomes" },
  { value: "outputs", label: "Glimpse of Outputs" },
];

export default function CaseTabs() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-center">
          <TabsList className="bg-transparent p-0 gap-2">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:scale-105 font-medium"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>
    </div>
  );
}
