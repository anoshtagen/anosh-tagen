import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Network } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_ai_network_hero_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Network"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-background)_100%)]" />
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.3, 0],
              rotate: [0, 90]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              width: 50 + Math.random() * 100,
              height: 50 + Math.random() * 100,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-tech tracking-widest text-accent uppercase">
              Next Gen Intelligence
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
            AUTOMATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">THE FUTURE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light mb-10 leading-relaxed">
            We build intelligent autonomous agents and neural workflows that scale your business.
            Experience the next evolution of digital efficiency.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-8 bg-accent text-background font-bold tracking-wider hover:bg-white hover:shadow-[0_0_30px_-5px_var(--color-accent)] transition-all duration-300 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-white/20 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group text-base"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Tasks Automated", value: "10M+", icon: Terminal },
            { label: "Efficiency Gain", value: "400%", icon: Cpu },
            { label: "Active Agents", value: "500+", icon: Network },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 glass rounded-xl border-l-4 border-l-accent flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-xs font-tech text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
