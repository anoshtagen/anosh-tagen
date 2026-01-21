import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import fintechImg from "@assets/fintech.png";
import medisynthImg from "@assets/medisynth.png";
import logisticsImg from "@assets/logistics.png";
import legalImg from "@assets/legal.png";

const projects = [
  {
    title: "FinTech Neural Core",
    category: "Process Automation",
    stat: "99.9% Accuracy",
    color: "from-blue-600 to-cyan-400",
    image: fintechImg,
    description: "Architected a decentralized neural processing core for a Tier-1 financial institution, automating high-frequency transaction reconciliation.",
    challenge: "Manual reconciliation was taking 48+ hours and suffered from a 4.2% error rate in complex multi-currency transactions.",
    solution: "Implemented a real-time neural verification engine that learns from historical edge cases to predict and resolve anomalies autonomously.",
    results: ["Reduced processing time to < 2 seconds", "Eliminated $1.2M in annual error-related losses", "99.9% reconciliation accuracy maintained"]
  },
  {
    title: "MediSynth AI",
    category: "Healthcare Diagnostics",
    stat: "30x Faster Analysis",
    color: "from-purple-600 to-pink-400",
    image: medisynthImg,
    description: "Deep learning vision system for rapid diagnostic imaging analysis, assisting radiologists in early detection of anomalies.",
    challenge: "Radiology departments facing high burnout with diagnostic backlogs spanning several weeks.",
    solution: "Deployed a custom vision transformer model (ViT) optimized for medical imaging datasets with built-in explainability layers.",
    results: ["30x increase in daily scan throughput", "15% improvement in early-stage detection", "HIPAA compliant edge-deployment"]
  },
  {
    title: "AutoLogistics V2",
    category: "Supply Chain",
    stat: "$2.4M Saved/Yr",
    color: "from-emerald-600 to-teal-400",
    image: logisticsImg,
    description: "Autonomous routing and inventory management system for a global logistics provider using multi-agent reinforcement learning.",
    challenge: "Volatile fuel prices and unpredictable port delays causing massive inefficiencies in traditional routing.",
    solution: "Created a swarm-intelligence routing engine that dynamically adapts to global events and traffic in real-time.",
    results: ["$2.4M saved in annual operational costs", "22% reduction in carbon footprint", "Zero missed delivery windows"]
  },
  {
    title: "LegalMind Prime",
    category: "Document Processing",
    stat: "40hrs/Week Saved",
    color: "from-orange-600 to-amber-400",
    image: legalImg,
    description: "LLM-powered litigation support system that synthesizes thousands of legal documents into concise strategy briefings.",
    challenge: "Legal teams spending 60% of their time on document discovery and basic synthesis rather than strategy.",
    solution: "Private RAG (Retrieval-Augmented Generation) system trained on proprietary case law with strictly air-gapped security.",
    results: ["40 hours saved per attorney per week", "Comprehensive case mapping in minutes", "100% data residency compliance"]
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              onClick={() => setSelectedProject(project)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`} />

              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-xs font-tech text-white uppercase tracking-wider mb-4">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-display font-bold text-white mb-2 drop-shadow-lg">
                    {project.title}
                  </h3>

                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-accent font-tech text-lg pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                      Result: {project.stat}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-xl border-white/10 text-white p-0 overflow-hidden">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative"
              >
                <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-background`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-20`} />
                </div>

                <div className="p-8 pt-12 relative z-10">
                  <DialogHeader className="mb-8">
                    <span className="text-accent font-tech tracking-widest uppercase text-xs mb-2 block">{selectedProject.category}</span>
                    <DialogTitle className="text-4xl font-display font-bold text-white mb-4">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-xl text-white/70 leading-relaxed italic">
                      "{selectedProject.description}"
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-accent">
                        <Target className="w-5 h-5" />
                        <h4 className="font-display font-bold uppercase tracking-wider">The Challenge</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4 text-primary">
                        <TrendingUp className="w-5 h-5" />
                        <h4 className="font-display font-bold uppercase tracking-wider">Key Impact</h4>
                      </div>
                      <ul className="space-y-4">
                        {selectedProject.results.map((res, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                            <span className="text-white/80">{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-white/30 text-[10px] uppercase font-tech tracking-widest mb-1">Validation Metric</span>
                      <span className="text-2xl font-display font-bold text-accent">{selectedProject.stat}</span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-tech uppercase text-xs tracking-widest"
                    >
                      Close Protocol
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}

