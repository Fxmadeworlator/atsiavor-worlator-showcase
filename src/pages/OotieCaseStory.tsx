// src/pages/OotieCaseStory.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productImage from "@/assets/product-apps.png";

export default function OotieCaseStory() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen px-8 py-12">
        {/* Back button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
            <Link to="/projects?category=apps">
              <ArrowLeft className="w-4 h-4" />
              Back to Apps
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ootie</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The all-in-one pet management, social, and marketplace app.
          </p>

          {/* App image */}
          <div className="flex justify-center my-12">
            <img
              src={productImage}
              alt="Ootie App"
              className="max-w-full h-auto"
              style={{ maxHeight: "50vh", background: "transparent" }}
            />
          </div>

          {/* Content sections */}
          <div className="space-y-12 mt-16">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pet owners in Ghana and across Africa face fragmented solutions for managing their pets' health, connecting with other pet owners, and finding pet services. There's no centralized platform that brings together pet care management, social networking, and marketplace features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ootie is designed as an all-in-one solution that addresses every aspect of pet ownership. From tracking vaccinations and medical records to connecting with fellow pet lovers and discovering nearby pet services, Ootie puts everything in one place.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pet Care Management:</strong> Track vaccinations, medical records, and health schedules for all your pets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Family Shared Care:</strong> Invite family members to help manage pet responsibilities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Social Feed:</strong> Share moments, connect with other pet owners, and build a community.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Discovery Maps:</strong> Find pet services, vets, groomers, and pet-friendly locations near you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Marketplace:</strong> Buy and sell pet products and services within the app.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Supabase", "React Native"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://ootie-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Visit Ootie
                </a>
              </Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
