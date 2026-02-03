import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Code, Building2, PawPrint, Banknote } from "lucide-react";
import { useState } from "react";

import presecImg from "@/assets/presec.jpg";
import accraImg from "@/assets/accra-tech.jpg";

interface TimelineItemProps {
  year: string;
  endYear?: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  isLast?: boolean;
  isCurrent?: boolean;
  hoverImage?: string;
  hoverColor?: string;
  splitColor?: { baseText: string; highlightText: string; highlightColor: string };
}

const TimelineItem = ({ year, endYear, title, subtitle, description, icon, isLast, isCurrent, hoverImage, hoverColor, splitColor }: TimelineItemProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [showImage, setShowImage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const renderTitle = () => {
    if (splitColor) {
      return (
        <>
          <span 
            className="transition-colors duration-300"
            style={{ color: isHovered ? splitColor.highlightColor : undefined }}
          >
            {splitColor.baseText}
          </span>
          <span 
            className="transition-colors duration-300"
            style={{ color: isHovered ? splitColor.highlightColor : undefined }}
          >
            {splitColor.highlightText}
          </span>
        </>
      );
    }
    return title;
  };

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 md:gap-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
            isCurrent
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "bg-card border-2 border-border text-muted-foreground"
          }`}
        >
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent min-h-[120px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-sm font-mono ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
            {year}{endYear ? ` — ${endYear}` : ""}
          </span>
          {isCurrent && (
            <span className="px-2 py-0.5 text-xs font-medium bg-black text-white rounded-full">
              Current
            </span>
          )}
        </div>
        <div className="relative inline-block">
          <h3 
            className={`text-2xl font-bold mb-1 transition-colors duration-300 ${hoverImage || hoverColor || splitColor ? "cursor-pointer" : ""}`}
            style={isHovered && hoverColor && !splitColor ? { color: hoverColor } : undefined}
            onMouseEnter={() => {
              if (hoverImage) setShowImage(true);
              if (hoverColor || splitColor) setIsHovered(true);
            }}
            onMouseLeave={() => {
              setShowImage(false);
              setIsHovered(false);
            }}
          >
            {renderTitle()}
          </h3>
          {/* Hover Image Preview - fixed position to avoid clipping */}
          {hoverImage && showImage && (
            <div 
              className="fixed z-[100] transition-all duration-300 pointer-events-none"
              style={{
                top: '50%',
                right: '15%',
                transform: 'translateY(-50%)',
              }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card animate-scale-in">
                <img 
                  src={hoverImage} 
                  alt={title}
                  className="w-72 h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          )}
        </div>
        <p className="text-muted-foreground mb-4">{subtitle}</p>
        <p className="text-foreground/80 leading-relaxed max-w-xl">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  const timelineData = [
    {
      year: "2017",
      endYear: "2020",
      title: "Presbyterian Boys' Senior High School",
      subtitle: "Legon, Accra",
      description:
        "Where it all started. PRESEC shaped my foundation — discipline, curiosity, and the drive to always ask 'why?' and 'what if?'. The friendships and lessons from those years still guide me today.",
      icon: <GraduationCap className="w-5 h-5" />,
      hoverImage: presecImg,
    },
    {
      year: "2021",
      endYear: "2024",
      title: "Accra Technical University",
      subtitle: "Bsc. Automobile Engineering",
      description:
        "Studied Mechanical Engineering, gaining a strong foundation in core engineering principles such as mechanics, thermodynamics, and materials science. I developed skills in problem-solving, design thinking, and analytical reasoning, which help me apply my knowledge to practical challenges.",
      icon: <Building2 className="w-5 h-5" />,
      hoverImage: accraImg,
    },
    {
      year: "2024",
      endYear: "2025",
      title: "Openlabs Software Dev.",
      subtitle: "Software Development",
      description:
        "Transitioned into software development, building real-world applications and diving deep into code. Learned how to turn ideas into functional products, debug at 2am, and appreciate the beauty of clean code.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "Jan 2026",
      title: "Ootie",
      subtitle: "Founder & Developer",
      description: (
        <>
          Building Ootie — a pet care and social app that helps owners manage their pets' health, share responsibilities with family, and discover trusted pet services and products.{" "}
          <a
            href="https://ootie-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors relative"
          >
            ootie
            <span className="absolute -bottom-6 left-0 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              ootie-web.vercel.app
            </span>
          </a>
        </>
      ),
      icon: <PawPrint className="w-5 h-5" />,
      isCurrent: true,
      hoverColor: "#FF6B00",
    },
    {
      year: "2026",
      title: "CediX",
      subtitle: "Founder & Developer",
      description:
        "Building CediX — a B2B loan platform where individuals can request loans from others and lenders can offer financing. Making peer-to-peer lending accessible and trustworthy.",
      icon: <Banknote className="w-5 h-5" />,
      isCurrent: true,
      isLast: true,
      splitColor: { baseText: "Cedi", highlightText: "X", highlightColor: "#FF6B00" },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen px-8 pb-20">
        {/* Header */}
        <div
          ref={headerRef}
          className={`pt-[20vh] mb-16 max-w-3xl mx-auto transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A roadmap of the places, people, and experiences that shaped who I am today.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;