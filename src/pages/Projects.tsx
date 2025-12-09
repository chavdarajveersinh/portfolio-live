import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'AGV Route Optimization',
      description:
        'Optimized AGV routing for e-commerce warehouses using heuristic search (A*) with Streamlit dashboards.',
      tags: ['Python', 'Algorithms', 'Streamlit', 'Optimization'],
      image: '/projects/AGV.png',
      github: 'https://github.com/chavdarajveersinh/Intel_Ai_For_Manufacturing',
      live: 'https://agvintel.streamlit.app',
      color: 'blue',
    },
    {
      title: 'CivicTrack — Civic Issue Reporting Platform',
      description:
        'Civic reporting system with location-based issue logging, image uploads, dashboards, tracking, and alerts.',
      tags: ['Django', 'Geo', 'Image Uploads', 'Real-time'],
      image: '/projects/CivicTrack.png',
      github: 'https://github.com/chavdarajveersinh/CivicTrack',
      live: 'https://civictrack-29pz.onrender.com',
      color: 'purple',
    },
    {
      title: 'Generative AI — "AI for Students"',
      description:
        'LLM and generative AI work (NxtWave): fine-tuning models, prompt pipelines, demo tools for learning.',
      tags: ['AI', 'LLM', 'Python', 'NLP'],
      image: '/projects/SaharthiAi.png',
      github: 'https://github.com/chavdarajveersinh/gen_ai_exchange_hackathon',
      live: 'https://saharathi-ai.onrender.com',
      color: 'cyan',
    },
    {
      title: 'TrinityEd — Odoo Hackathon Project',
      description:
        'Developed Odoo modules for academic workflow automation — reporting, approvals, and civic processes.',
      tags: ['Odoo', 'ERP', 'Hackathon', 'Custom Modules'],
      image: '/projects/TrinityEd.png',
      github: 'https://github.com/chavdarajveersinh/TrinityEd',
      live: 'https://trinityed.onrender.com',
      color: 'pink',
    },
    {
      title: 'StockMaster IMS (Inventory Management)',
      description:
        'Django-based Inventory & product management system with authentication, analysis & report generation.',
      tags: ['Django', 'Inventory', 'CRUD', 'Reporting'],
      image: '/projects/Stockmaster.png',
      github: 'https://github.com/chavdarajveersinh/Stockmaster',
      live: 'https://stockmaster-522n.onrender.com',
      color: 'green',
    },
    {
      title: 'SwapIt — Skill Exchange Platform',
      description:
        'Real-time skill swapping platform with chat, exchange offers, matching system & responsive UI.',
      tags: ['React', 'Tailwind', 'APIs', 'Full-Stack'],
      image: '/projects/Swapit.png',
      github: 'https://github.com/chavdarajveersinh/Skillswap',
      live: 'https://swapit-lnca.onrender.com',
      color: 'orange',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A selection of practical projects and hackathon work (details taken from resume).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-slate-600">
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>

                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl">{project.title}</h3>
                </div>

                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-slate-600 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">Want to see more? Check my GitHub for full repos and demos.</p>

          <a href="https://github.com/chavdarajveersinh" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
