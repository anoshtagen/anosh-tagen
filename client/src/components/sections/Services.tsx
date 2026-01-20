import { motion } from "framer-motion";
import { BrainCircuit, Workflow, Bot, Database, Code2, Zap } from "lucide-react";
import techBg from "@assets/generated_images/abstract_tech_texture_background.png";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation that connects your existing stack into a seamless neural network of productivity.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Custom-trained autonomous agents that handle customer support, sales outreach, and data analysis 24/7.",
  },
  {
    icon: Database,
    title: "Intelligent Data",
    description: "Turn raw data into actionable insights with predictive modeling and natural language querying systems.",
  },
  {
    icon: Code2,
    title: "Custom LLM Ops",
    description: "Fine-tuning and deployment of private Large Language Models secure within your enterprise infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "Neural Strategy",
    description: "Consulting on AI implementation, helping you identify high-impact areas for automation and transformation.",
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description: "Lightning-fast implementation of AI tools into your legacy systems using our proprietary connector engine.",
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <img src={techBg} alt="texture" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            OUR <span className="text-accent">INTELLIGENCE</span> SUITE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive AI solutions designed to replace manual redundancy with digital precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl group relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-background transition-colors" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
