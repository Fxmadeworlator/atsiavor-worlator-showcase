import { ReactNode } from "react";
import BackSidebar from "@/components/BackSidebar";

interface CaseLayoutProps {
  children: ReactNode;
  backTo?: string;
}

export default function CaseLayout({ children, backTo = "/apps" }: CaseLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 flex">
      <BackSidebar to={backTo} />
      <main className="flex-1 ml-12">
        {children}
      </main>
    </div>
  );
}
