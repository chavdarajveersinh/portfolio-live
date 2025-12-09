import { motion } from "motion/react";
import {
  Award,
  Trophy,
  Medal,
  Star,
  FileCheck,
  Target,
  ExternalLink,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Odoo × CGC Mohali — Hackathon Participant",
      description:
        "Participated in the national-level Odoo Hackathon and contributed to civic workflow automation modules.",
      date: "Aug 2025",
      color: "blue",
    },
    {
      icon: FileCheck,
      title: "Full-Stack Development Training",
      description:
        "Completed hands-on full-stack development training at Hi-Tech Bapunagar, focusing on web development and deployment.",
      date: "Jun 2024",
      color: "purple",
    },
    {
      icon: Medal,
      title: "AGV Route Optimization Project",
      description:
        "Designed and demonstrated an AGV routing optimization system using Streamlit visualization for warehouse efficiency.",
      date: "2024",
      color: "pink",
    },
    {
      icon: Star,
      title: "CivicTrack — Civic Issue Reporting Platform",
      description:
        "Built a community-driven civic reporting system with live tracking, location mapping and admin panels.",
      date: "2024",
      color: "green",
    },
    {
      icon: Award,
      title: "NxtWave — Generative AI Program",
      description:
        "Completed the AI for Students program, working on prompt design and small model-based generative tasks.",
      date: "Mar 2024",
      color: "orange",
    },
    {
      icon: Target,
      title: "Open-source & Problem Solving",
      description:
        "Active in competitive programming, small OSS contributions and continuous algorithmic learning.",
      date: "Ongoing",
      color: "cyan",
    },
  ];

  // ✅ REAL certificates only (CreArt LAST) – paths point to public/certificates
  const certifications = [
    {
      title: "Odoo × CGC Mohali Hackathon 2025",
      issuer: "Odoo & CGC University, Mohali",
      year: "Aug 2025",
      link: "/certificates/Odoo x CGC Mohali Hackathone 2025.jpeg",
    },
    {
      title: "AI for Manufacturing Certificate Course",
      issuer: "GTU & Intel India",
      year: "Jul 2025",
      link: "/certificates/Intel Certificate.jpeg",
    },
    {
      title: "Full Stack Python Developer Training",
      issuer: "Hi-Tech Institute of Information Technology",
      year: "Jun 2024",
      link: "/certificates/Hi-Tech Certificate.jpeg",
    },
    {
      title: 'AI for Students — "Build Your Own Generative AI Model"',
      issuer: "NxtWave",
      year: "Mar 2024",
      link: "/certificates/NXTWave Certificate.jpeg",
    },
    {
      title: "HP Power Lab 2.0 — Online Assessment",
      issuer: "Hindustan Petroleum (HPCL) / Unstop",
      year: "2024",
      link: "/certificates/Unstop Certificate.jpeg",
    },
    {
      title: "Summer Internship — Python & Django",
      issuer: "CreArt Solutions Pvt. Ltd., Ahmedabad",
      year: "Jul 2025",
      link: "/certificates/Creart Solutions.jpeg",
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
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A snapshot of recognised work, projects, training and certifications.
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-4 rounded-xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "rgba(99,102,241,0.06)" }}
                >
                  <achievement.icon className="w-8 h-8 text-current" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl">{achievement.title}</h3>
                    <span className="text-sm text-slate-500">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-center mb-12">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.06 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all flex flex-col h-64"
              >
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-400" />
                </div>

                {/* content area */}
                <div className="flex-1">
                  <h3 className="text-lg mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-slate-400 text-sm mb-1 line-clamp-2">
                    {cert.issuer}
                  </p>
                  {cert.year && (
                    <p className="text-blue-400 text-sm mb-2">{cert.year}</p>
                  )}
                </div>

                {/* Attractive View button fixed at bottom */}
                {cert.link && (
                  <div className="mt-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </Button>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl mb-8 text-center">Milestones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6+", label: "Major Projects" },
              { number: "6", label: "Key Certifications" },
              { number: "4+", label: "Trainings / Workshops" },
              { number: "100+", label: "Problems Solved" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.06 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-4xl mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
