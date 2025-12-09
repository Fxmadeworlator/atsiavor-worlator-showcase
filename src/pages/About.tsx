import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Code, Building2, Rocket } from "lucide-react";

interface TimelineItemProps {
  year: string;
  endYear?: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  isCurrent?: boolean;
}

const TimelineItem = ({ year, endYear, title, subtitle, description, icon, isLast, isCurrent }: TimelineItemProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  
  return (
    <div 
      ref={ref}
      className={`relative flex gap-6 md:gap-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
          isCurrent 
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
            : 'bg-card border-2 border-border text-muted-foreground'
        }`}>
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent min-h-[120px]" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-sm font-mono ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`}>
            {year}{endYear ? ` — ${endYear}` : ''}
          </span>
          {isCurrent && (
            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Current
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-muted-foreground mb-4">{subtitle}</p>
        <p className="text-foreground/80 leading-relaxed max-w-xl">
          {description}
        </p>
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
      description: "Where it all started. PRESEC shaped my foundation — discipline, curiosity, and the drive to always ask 'why?' and 'what if?'. The friendships and lessons from those years still guide me today.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: "2021",
      endYear: "2024",
      title: "Accra Technical University",
      subtitle: "Bsc. Automobile Engineering",
      description: "Studied Mechanical Engineering and got hands-on experience with design, manufacturing, and everything in between. This is where I built an electric vehicle, competed in Shell Eco-Marathon, and learned that engineering is 50% problem-solving and 50% convincing people that the solution works.",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      year: "2024",
      endYear: "2025",
      title: "Openlabs Software Dev.",
      subtitle: "Software Development",
      description: "Transitioned into software development, building real-world applications and diving deep into code. Learned how to turn ideas into functional products, debug at 2am, and appreciate the beauty of clean code.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "Jan 2025",
      title: "Leeds Beckett University",
      subtitle: "Pursuing further studies in the UK",
      description: "Currently expanding my knowledge and skills at Leeds Beckett University. This chapter marks a new adventure — studying abroad, meeting new people, and pushing myself to grow both personally and professionally.",
      icon: <Rocket className="w-5 h-5" />,
      isCurrent: true,
      isLast: true,
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
            <TimelineItem
              key={index}
              {...item}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
