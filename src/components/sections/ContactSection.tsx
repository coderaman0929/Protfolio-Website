"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { cn, sleep } from "@/lib/utils";
import type { ContactFormData, FormStatus } from "@/types";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const { ref, inView } = useScrollReveal();

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name || (e.target as HTMLElement).getAttribute?.("name") || "";
    const value = e.target.value;
    if (!name) return;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section py-24 px-6 relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work"
          titleHighlight="Together"
          description="Have a project in mind? Let's talk about how I can help you build something great."
          className="mb-16"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* Left info panel */}
          <motion.div variants={fadeInLeft} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Get in touch
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                I&apos;m currently{" "}
                <span className="text-green-400 font-medium">available</span> for
                freelance work and new opportunities. Drop me a message and I&apos;ll
                get back to you within 24 hours.
              </p>
            </div>

            {/* Email */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 glass border border-white/8 rounded-xl p-4 hover:border-violet/30 transition-colors group"
              whileHover={{ x: 4 }}
            >
              <div className="w-10 h-10 rounded-lg bg-violet/20 border border-violet/30 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-violet-light" />
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">
                  Email
                </p>
                <p className="text-sm text-white/80 group-hover:text-violet-light transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </motion.a>

            {/* Socials */}
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">
                Find me on
              </p>
              <div className="flex flex-col gap-3">
                {personalInfo.socials.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                  if (!Icon) return null;
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/50 hover:text-violet-light transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <Icon size={16} className="text-white/30 group-hover:text-violet-light transition-colors" />
                      {social.platform}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass border border-green-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-medium text-green-400">Available Now</p>
              </div>
              <p className="text-xs text-white/40">
                Usually responds within a few hours. Open to full-time roles and
                freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div variants={fadeInRight} className="lg:col-span-3">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass border border-green-500/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="font-display font-bold text-xl text-white">
                  Message Sent!
                </h3>
                <p className="text-white/50 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  size="sm"
                >
                  Send another
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass border border-white/8 rounded-2xl p-8 space-y-5"
              >
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
                  >
                    <AlertCircle size={14} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    error={errors.name}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    error={errors.email}
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project discussion, freelance work…"
                />

                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
                    Message <span className="text-violet-light">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea…"
                    rows={5}
                    className={cn(
                      "w-full bg-space-800 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20",
                      "focus:outline-none focus:border-violet/60 focus:ring-1 focus:ring-violet/20",
                      "transition-colors duration-200 resize-none",
                      errors.message ? "border-red-500/50" : "border-white/8"
                    )}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  size="lg"
                  className="w-full justify-center"
                  icon={<Send size={16} />}
                  iconPosition="right"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Field sub-component
interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
        {label} <span className="text-violet-light">*</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full bg-space-800 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20",
          "focus:outline-none focus:border-violet/60 focus:ring-1 focus:ring-violet/20",
          "transition-colors duration-200",
          error ? "border-red-500/50" : "border-white/8"
        )}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
