import { useEffect, useRef, useState } from "react";
import { Users, Heart, HandHelping, Calendar } from "lucide-react";

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { number: 28, label: "Causes Supported", icon: <Heart size={24} /> },
  { number: 10000, label: "Families Helped", suffix: "+", icon: <Users size={24} /> },
  { number: 378, label: "Active Volunteers", icon: <HandHelping size={24} /> },
  { number: 25, label: "Years of Service", icon: <Calendar size={24} /> },
];

function useCountUp(target: number, isVisible: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ stat, isVisible, index }: { stat: StatItem; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.number, isVisible);

  return (
    <div
      className={`relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/5">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-warm text-white mb-5 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500">
          {stat.icon}
        </div>

        {/* Number */}
        <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
          {count.toLocaleString()}{stat.suffix ?? ""}
        </div>

        {/* Label */}
        <div className="text-sm font-medium text-white/40 uppercase tracking-wider">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="relative py-24 bg-stone-950 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Numbers That Tell Our Story
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
