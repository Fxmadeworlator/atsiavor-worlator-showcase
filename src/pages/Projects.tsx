import Sidebar from "@/components/Sidebar";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Project showcase coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Projects;
