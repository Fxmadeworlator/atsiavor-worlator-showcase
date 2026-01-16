import { useRef, useEffect, useState } from "react";
import BackSidebar from "@/components/BackSidebar";
import { ExternalLink, Flag, TrendingUp, ArrowUp, Users, Target, ListChecks, DollarSign, Heart, PawPrint, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ootieImage from "@/assets/project-ootie.jpg";

export default function OotieCaseStory() {
  const skillTags = [
    "PRODUCT DESIGN",
    "FULL-STACK DEV",
    "REACT NATIVE",
    "USER RESEARCH",
    "MVP STRATEGY",
    "SUPABASE",
    "EXPO",
  ];

  const opportunities = [
    {
      icon: Flag,
      title: "Unified Experience",
      description: "How might we merge pet care logging, social networking, and marketplace into one seamless product?",
    },
    {
      icon: TrendingUp,
      title: "Increase Retention",
      description: "How might we reduce friction at critical drop-off moments in the pet owner journey?",
    },
    {
      icon: ArrowUp,
      title: "Drive Adoption",
      description: "How might we make pet owners feel the immediate value of consistent care logging?",
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "How might we enable families to collaborate on pet care without confusion?",
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "How might we help owners celebrate and share their pet's milestones?",
    },
    {
      icon: MapPin,
      title: "Local Discovery",
      description: "How might we connect pet owners with nearby services, vets, and pet-friendly places?",
    },
  ];

  const approaches = [
    {
      icon: Flag,
      title: "Sprint-Based Delivery",
      description: "Weekly design sprint Monday; build Tue–Fri; TestFlight drop Saturday. Continuous iteration with real user feedback shipped same week.",
    },
    {
      icon: Users,
      title: "User-Centered Research",
      description: "Continuous user interviews with pet owners in Ghana. Feedback tagged in Linear and prioritized based on impact and feasibility.",
    },
    {
      icon: DollarSign,
      title: "Lean Tech Stack",
      description: "React-Native + Expo, Supabase, Tailwind—optimised for speed, not novelty. Every tool chosen for rapid iteration capability.",
    },
  ];

  const outcomes = [
    {
      icon: Flag,
      title: "Rapid Launch",
      description: "Shipped iOS & Android MVP in 10 weeks from zero. Achieved 1,200 installs in first 3 weeks through organic growth alone.",
    },
    {
      icon: Users,
      title: "Strong Retention",
      description: "38% D7 retention rate exceeded industry benchmarks. 52% of active users added a family member to share pet care duties.",
    },
    {
      icon: Target,
      title: "User Satisfaction",
      description: "4.8 ⭐ Play Store rating. Users praised the intuitive care logging and family sharing features as standout capabilities.",
    },
    {
      icon: ListChecks,
      title: "Complete Handoff",
      description: "Delivered MIT-licensed codebase, 40-page product wiki, hand-off deck, and public roadmap for continued development.",
    },
  ];

  const features = [
    { icon: PawPrint, title: "Pet Care Logs", description: "Track vaccinations, medications, and health records" },
    { icon: Users, title: "Family Sharing", description: "Collaborate on pet care with household members" },
    { icon: Heart, title: "Social Feed", description: "Share moments and connect with pet community" },
    { icon: MapPin, title: "Discovery Map", description: "Find pet services, vets, and pet-friendly spots" },
    { icon: ShoppingBag, title: "Marketplace", description: "Buy and sell pet products locally" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <BackSidebar to="/apps" />

      <main className="flex-1 ml-12">
        <Tabs defaultValue="role" className="w-full">
          {/* Sticky Tab Navigation with Liquid Glass Effect */}
          <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex justify-center">
                <TabsList className="bg-black/20 p-1 rounded-full backdrop-blur-sm">
                  <TabsTrigger value="role" className="rounded-full px-4 py-2 text-sm text-white hover:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    My Role
                  </TabsTrigger>
                  <TabsTrigger value="opportunities" className="rounded-full px-4 py-2 text-sm text-white hover:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Opportunities
                  </TabsTrigger>
                  <TabsTrigger value="approach" className="rounded-full px-4 py-2 text-sm text-white hover:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Approach
                  </TabsTrigger>
                  <TabsTrigger value="outcomes" className="rounded-full px-4 py-2 text-sm text-white hover:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Impact & Outcomes
                  </TabsTrigger>
                  <TabsTrigger value="outputs" className="rounded-full px-4 py-2 text-sm text-white hover:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Glimpse of Outputs
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>

          {/* My Role Tab with Dark Green/Black Gradient */}
          <TabsContent value="role" className="mt-0">
            <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-gradient-to-br from-green-900 via-black to-green-950">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">My Role</h1>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      I was the solo full-stack engineer & product designer hired to
                      ship Ootie from zero to MVP in 10 weeks, targeting pet owners
                      in Ghana and the broader African market.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      My focus was on creating a seamless experience that merges
                      pet care management, social networking, and local marketplace
                      into one cohesive product. I led user research, UX design,
                      React-Native development, and Supabase backend architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {skillTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <img
                        src={ootieImage}
                        alt="Ootie App"
                        className="w-64 md:w-80 rounded-3xl shadow-2xl border border-white/20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="mt-0">
            <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-secondary/30">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Opportunities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                    >
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Approach Tab */}
          <TabsContent value="approach" className="mt-0">
            <section className="min-h-[calc(100vh-80px)] py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Approach</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {approaches.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 bg-card rounded-xl border border-border"
                    >
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-8">Core Features Built</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 bg-secondary/50 rounded-xl text-center"
                    >
                      <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Impact & Outcomes Tab */}
          <TabsContent value="outcomes" className="mt-0">
            <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-secondary/30">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Impact & Outcomes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {outcomes.map((item, index) => (
                    <div
                      key={index}
                      className="p-8 bg-card rounded-xl border border-border"
                    >
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="text-center p-6 bg-primary/10 rounded-xl">
                    <p className="text-3xl md:text-4xl font-bold text-primary">10</p>
                    <p className="text-sm text-muted-foreground mt-1">Weeks to MVP</p>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-xl">
                    <p className="text-3xl md:text-4xl font-bold text-primary">1,200</p>
                    <p className="text-sm text-muted-foreground mt-1">Installs in 3 weeks</p>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-xl">
                    <p className="text-3xl md:text-4xl font-bold text-primary">38%</p>
                    <p className="text-sm text-muted-foreground mt-1">D7 Retention</p>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-xl">
                    <p className="text-3xl md:text-4xl font-bold text-primary">4.8⭐</p>
                    <p className="text-sm text-muted-foreground mt-1">Play Store Rating</p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Glimpse of Outputs Tab */}
          <TabsContent value="outputs" className="mt-0">
            <section className="min-h-[calc(100vh-80px)] py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Glimpse of Outputs</h2>
                
                <div className="bg-gradient-to-br from-primary/20 via-secondary to-primary/10 rounded-3xl p-8 md:p-12 mb-12">
                  <div className="flex justify-center items-end gap-4 md:gap-8">
                    <img
                      src={ootieImage}
                      alt="Ootie App Screen 1"
                      className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-xl transform -rotate-6"
                    />
                    <img
                      src={ootieImage}
                      alt="Ootie App Screen 2"
                      className="w-40 md:w-56 lg:w-64 rounded-2xl shadow-2xl z-10"
                    />
                    <img
                      src={ootieImage}
                      alt="Ootie App Screen 3"
                      className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-xl transform rotate-6"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="p-6 bg-card rounded-xl border border-border text-center">
                    <p className="text-4xl mb-3">📦</p>
                    <h4 className="font-semibold mb-2">MIT-Licensed Codebase</h4>
                    <p className="text-sm text-muted-foreground">Complete React-Native repo with documentation</p>
                  </div>
                  <div className="p-6 bg-card rounded-xl border border-border text-center">
                    <p className="text-4xl mb-3">📚</p>
                    <h4 className="font-semibold mb-2">40-Page Product Wiki</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive hand-off documentation</p>
                  </div>
                  <div className="p-6 bg-card rounded-xl border border-border text-center">
                    <p className="text-4xl mb-3">🗺️</p>
                    <h4 className="font-semibold mb-2">Public Roadmap</h4>
                    <p className="text-sm text-muted-foreground">Feature-request board for community input</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="gap-2" asChild>
                    <a
                      href="https://ootie-web.vercel.app/  "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visit Live Landing Page
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
