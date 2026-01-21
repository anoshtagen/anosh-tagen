import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { ChatBot } from "@/components/sections/ChatBot";
import { ArrowRight } from "lucide-react";

export function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />

        {/* About / Mission Statement Mini-Section */}
        <section id="about" className="py-20 bg-black/50 border-y border-white/5">
          <div className="container px-6 mx-auto text-center">
            <span className="text-accent font-tech tracking-[0.2em] uppercase text-sm mb-4 block">The Mission</span>
            <p className="text-2xl md:text-4xl font-display font-bold text-white leading-relaxed max-w-4xl mx-auto">
              "We don't just build software. We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">digital workforces</span> that never sleep, never tire, and infinitely scale."
            </p>
          </div>
        </section>

        <Services />
        <Portfolio />
        <Contact />
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
}
