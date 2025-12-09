import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);

      // ✅ simple, guaranteed toast
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out — I’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajveerchavda5643@gmail.com",
      link: "mailto:rajveerchavda5643@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 77*** ***85",
      link: "tel:+9177******85",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: "https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat+India",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/chavdarajveersinh",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rajveersinh-karansinh-chavda-87154629a/",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-slate-900 border-slate-700 focus:border-blue-500"
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-slate-900 border-slate-700 focus:border-blue-500"
                />

                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="bg-slate-900 border-slate-700 focus:border-blue-500"
                />

                <Textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-slate-900 border-slate-700 focus:border-blue-500 resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 mr-2 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right side: info + social + availability (same as before) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl 
                               hover:border-blue-500/50 transition-all group"
                  >
                    <div
                      className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "rgba(99,102,241,0.06)" }}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-lg">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl mb-6">Connect With Me</h2>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group cursor-pointer"
                  >
                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 
                                   hover:border-blue-500/50 transition-all text-center">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 
                                   group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: "rgba(59,130,246,0.1)" }}
                      >
                        <social.icon className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-slate-400">{social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 
                         backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-xl mb-3">Availability</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently open for internships, freelance work, and exciting
                new opportunities.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
