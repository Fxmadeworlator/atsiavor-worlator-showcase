import Sidebar from "@/components/Sidebar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
            More details about Atsiavor Worlator coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
