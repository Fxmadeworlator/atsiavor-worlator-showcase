import Sidebar from "@/components/Sidebar";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="p-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full">
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
