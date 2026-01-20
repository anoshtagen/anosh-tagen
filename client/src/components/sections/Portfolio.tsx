import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Neural Core",
    category: "Process Automation",
    stat: "99.9% Accuracy",
    color: "from-blue-600 to-cyan-400"
  },
  {
    title: "MediSynth AI",
    category: "Healthcare Diagnostics",
    stat: "30x Faster Analysis",
    color: "from-purple-600 to-pink-400"
  },
  {
    title: "AutoLogistics V2",
    category: "Supply Chain",
    stat: "$2.4M Saved/Yr",
    color: "from-emerald-600 to-teal-400"
  },
  {
    title: "LegalMind Prime",
    category: "Document Processing",
    stat: "40hrs/Week Saved",
    color: "from-orange-600 to-amber-400"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-accent font-tech tracking-widest uppercase text-sm mb-2 block">Case Studies</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">WORKS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-right md:text-left">
            Real world application of artificial intelligence delivering measurable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10"
            >
              {/* Placeholder Gradient Art */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-xs font-tech text-white uppercase tracking-wider mb-4">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-accent font-tech text-lg pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Result: {project.stat}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
