import { Cpu, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-accent" />
              <span className="text-2xl font-display font-bold text-white tracking-widest">NEXUS</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Architecting the future of enterprise through intelligent automation and autonomous neural agents.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-background transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              {['Workflow Automation', 'AI Agents', 'Predictive Analytics', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Nexus', 'Case Studies', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-tech">
            © 2026 NEXUS AUTOMATION INC. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white text-xs font-tech uppercase">Privacy Protocol</a>
            <a href="#" className="text-white/30 hover:text-white text-xs font-tech uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
