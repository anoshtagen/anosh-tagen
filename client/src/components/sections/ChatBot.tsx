import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Minimize2, MessageSquare, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
    role: "assistant" | "user";
    content: string;
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "this is AI assistient how can I help you?" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isResetting, setIsResetting] = useState(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Expose toggle function globally for the Contact section
    useEffect(() => {
        (window as any).openChat = () => setIsOpen(true);
    }, []);

    const handleReset = () => {
        setIsResetting(true);
        setTimeout(() => {
            setMessages([
                { role: "assistant", content: "this is AI assistient how can I help you?" }
            ]);
            setInput("");
            setIsTyping(false);
            setIsResetting(false);
        }, 500);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input, history: messages }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting to my neural network. Please try again or use the contact form." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-background shadow-[0_0_20px_rgba(var(--color-accent),0.5)] flex items-center justify-center transition-all ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : ''}`}
            >
                <MessageSquare className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
                        className="fixed bottom-6 right-6 z-[60] w-[90vw] md:w-[360px] h-[500px] max-h-[70vh] bg-background/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-accent/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/20">
                                    <Bot className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-white leading-none text-sm">NEXUS AI</h3>
                                    <span className="text-[9px] text-accent font-tech uppercase tracking-widest">Active Protocol</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleReset}
                                    className="p-2 hover:bg-white/5 rounded-lg text-white/50 hover:text-white transition-colors"
                                    title="Reset Conversation"
                                >
                                    <RefreshCw className={`w-4 h-4 ${isResetting ? 'animate-spin' : ''}`} />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-white/50 hover:text-white transition-colors">
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Chat Content */}
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary' : 'bg-accent/20'}`}>
                                            {msg.role === 'user' ? <User className="w-3.5 h-3.5 text-white" /> : <Bot className="w-3.5 h-3.5 text-accent" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed ${msg.role === 'user'
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none'
                                            }`}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-3">
                                        <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Bot className="w-3.5 h-3.5 text-accent" />
                                        </div>
                                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex gap-1">
                                            <span className="w-1 h-1 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-1 h-1 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-1 h-1 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="relative flex items-center gap-2"
                            >
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about automations..."
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-10 pr-10 focus:border-accent focus:ring-accent/20 text-xs"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={!input.trim() || isTyping}
                                    className="absolute right-1 top-1 bottom-1 w-8 h-8 bg-accent text-background hover:bg-white transition-all rounded-lg"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </Button>
                            </form>
                            <p className="text-[9px] text-white/20 text-center mt-2 font-tech uppercase tracking-tighter">
                                End-to-End Encryption Enabled
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
