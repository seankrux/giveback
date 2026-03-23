import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const causes = [
  {
    title: "Community Development",
    description: "Providing resources and infrastructure to underserved communities around the world.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&w=600&q=80",
    stats: { supporters: 120, raised: "$24K" },
    tag: "Infrastructure",
  },
  {
    title: "Education Access",
    description: "Funding scholarships and building schools in rural areas to unlock potential.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&w=600&q=80",
    stats: { supporters: 89, raised: "$18K" },
    tag: "Education",
  },
  {
    title: "Youth Empowerment",
    description: "Mentoring young people and providing career development programs for the future.",
    image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&w=600&q=80",
    stats: { supporters: 156, raised: "$31K" },
    tag: "Youth",
  },
];

export const FeaturedCauses = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="causes" className="py-24 bg-foundation-surface">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Featured Causes
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Explore the initiatives we are actively funding and supporting across the globe.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-stone-200/60 hover:border-amber-200/60 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Image container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-stone-700">
                    {cause.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {cause.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">
                  {cause.description}
                </p>

                {/* Stats row */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <Users size={14} />
                      {cause.stats.supporters}
                    </span>
                    <span className="font-semibold text-amber-600">
                      {cause.stats.raised}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-stone-400 hover:text-amber-600 hover:bg-amber-50 p-2 h-auto group/btn"
                  >
                    <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
