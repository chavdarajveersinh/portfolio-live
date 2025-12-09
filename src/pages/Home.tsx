import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export function Home() {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '8+', label: 'Technologies' },
    { number: '3+', label: 'Key Achievements' },
    { number: '100%', label: 'Dedication' },
  ];

  const projects = [
    {
      title: 'AGV Route Optimization',
      desc: 'Optimized AGV routing in e-commerce warehouses using A* algorithm; visualization with Streamlit.',
    },
    {
      title: 'Civic Issue Reporting (CivicTrack)',
      desc: 'Community-driven civic issue platform with geolocation, image uploads, real-time status & dashboard.',
    },
    {
      title: 'AI for Students — Build Your Own Generative AI',
      desc: 'Training/project work under NxtWave (2024) — hands-on generative AI model development.',
    },
    {
      title: 'Odoo × CGC Mohali Hackathon',
      desc: 'Participated in hackathon — built features for civic workflows and role-based access.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rajveersinh K. Chavda
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto"
            >
              Aspiring software developer and IT student with experience in Python, Django, web development
              and machine learning. I build practical projects (civic platforms, AGV optimization, AI tools)
              and focus on clean, maintainable solutions.
            </motion.p>

            {/* Buttons: View Work + View CV + Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              {/* Glass card around buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-900/60 border border-slate-700/80 rounded-2xl px-6 py-4 shadow-lg shadow-blue-900/40 backdrop-blur-sm">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <div className="h-px w-16 sm:h-8 sm:w-px bg-slate-700/60 sm:mx-2" />

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* View CV */}
                  <a
                    href="/221210107004_Chavda_Rajveersinh_Karansinh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View CV"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600 hover:border-blue-500 hover:bg-slate-900/80"
                    >
                      View CV
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>

                  {/* Download CV */}
                  <a
                    href="/221210107004_Chavda_Rajveersinh_Karansinh.pdf"
                    download="Rajveersinh_Chavda_Resume.pdf"
                    aria-label="Download CV"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600 hover:border-blue-500 hover:bg-slate-900/80"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors"
            >
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-4xl">
                {stat.number}
              </div>
              <p className="text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl mb-6 text-center">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className="p-6 rounded-2xl border border-slate-700 bg-slate-900/40"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-400">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section (Contact) */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Ready to work together?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Interested in collaborating or hiring? I’m available for internships and projects — let’s connect.
          </p>

          {/* SIRF CONTACT BUTTON — email style gradient */}
          <div className="flex items-center justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

        
        </motion.div>
      </section>
    </div>
  );
}
