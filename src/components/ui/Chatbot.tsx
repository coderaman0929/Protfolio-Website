"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User, FileText, Code, GraduationCap, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
}

const quickPrompts = [
  { label: "Show Projects", icon: Code, text: "What are your top projects?" },
  { label: "Download Resume", icon: FileText, text: "How can I download your resume?" },
  { label: "Education Details", icon: GraduationCap, text: "Tell me about your education background" },
  { label: "Contact Info", icon: Mail, text: "How can I contact Aman?" },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hi! I'm Aman's AI Assistant powered by Gemini API. 🤖\nAsk me about Aman's projects, skills, education, or how to download his resume!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      const aiReply = data.reply || "Sorry, I couldn't process that request right now.";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Sorry, an error occurred while connecting to the assistant. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to render text formatting & markdown links cleanly
  const renderMessageContent = (text: string) => {
    // Process markdown links [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkLabel = match[1];
      const linkUrl = match[2];

      const isDownload = linkUrl.endsWith(".pdf");

      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target={isDownload ? "_self" : "_blank"}
          download={isDownload ? true : undefined}
          rel={isDownload ? undefined : "noopener noreferrer"}
          className="inline-flex items-center gap-1 font-semibold text-violet-300 underline hover:text-cyan-electric transition-colors"
        >
          {linkLabel}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return (
      <div className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">
        {parts.length > 0 ? parts : text}
      </div>
    );
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative p-4 rounded-full bg-gradient-to-r from-violet to-cyan-500 text-white shadow-glow-violet flex items-center justify-center cursor-pointer group"
          aria-label="Toggle Portfolio AI Assistant"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400" />
          </span>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Bot size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chatbot Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] glass-strong border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-space-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet/20 border border-violet/30 flex items-center justify-center text-violet-light">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-white flex items-center gap-1.5">
                    Aman&apos;s AI Assistant
                  </h3>
                  <p className="text-[10px] text-white/40 font-mono">Powered by Gemini API</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-7 h-7 rounded-lg bg-violet/20 border border-violet/30 flex items-center justify-center flex-shrink-0 text-violet-light mt-0.5">
                      <Bot size={14} />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl max-w-[82%] border ${
                      msg.sender === "user"
                        ? "bg-violet/30 border-violet/40 text-white rounded-br-none"
                        : "glass border-white/10 text-white/90 rounded-bl-none"
                    }`}
                  >
                    {renderMessageContent(msg.text)}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white/70 mt-0.5">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 items-center text-xs text-white/40">
                  <div className="w-7 h-7 rounded-lg bg-violet/20 border border-violet/30 flex items-center justify-center text-violet-light">
                    <Bot size={14} />
                  </div>
                  <div className="glass border border-white/10 px-3 py-2 rounded-2xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-light animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-light animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-4 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((qp) => {
                const Icon = qp.icon;
                return (
                  <button
                    key={qp.label}
                    onClick={() => handleSend(qp.text)}
                    disabled={isLoading}
                    className="flex-shrink-0 px-2.5 py-1 text-[11px] glass border border-white/10 rounded-full text-white/60 hover:text-violet-light hover:border-violet/40 transition-colors flex items-center gap-1"
                  >
                    <Icon size={12} />
                    {qp.label}
                  </button>
                );
              })}
            </div>

            {/* Input Area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-space-950/90 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, resume..."
                className="flex-1 bg-space-800 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-violet/50"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!input.trim() || isLoading}
                className="px-3"
                aria-label="Send Message"
              >
                <Send size={14} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
