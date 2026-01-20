import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Transmission Received",
      description: "Our AI agents are analyzing your request. Expect a response shortly.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              READY TO <br /><span className="text-accent">ASCEND?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-md">
              The future waits for no one. Schedule your consultation and discover what true automation feels like.
            </p>
            
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-white">AI Assistant Online</div>
                  <div className="text-xs text-accent">Typical reply time: Instant</div>
                </div>
              </div>
              <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent hover:text-background font-tech uppercase tracking-wider">
                Start Live Chat
              </Button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl glass border border-white/10 bg-black/40"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-tech uppercase tracking-wider">Identity</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent focus:ring-accent/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-tech uppercase tracking-wider">Coordinates (Email)</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 focus:border-accent focus:ring-accent/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-tech uppercase tracking-wider">Directive</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your automation needs..." {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[120px] focus:border-accent focus:ring-accent/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent text-background font-bold tracking-wider hover:bg-white transition-all h-14">
                  <Send className="w-4 h-4 mr-2" />
                  INITIATE CONTACT
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
