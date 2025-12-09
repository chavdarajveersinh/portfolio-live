import { motion } from 'motion/react';
import { GraduationCap, Code, Laptop, Target } from 'lucide-react';

export function About() {
  const whatIDo = [
    {
      icon: Code,
      title: 'Web & Backend Development',
      description:
        'Building full-stack web applications using Python, Django, HTML/CSS, JavaScript and Tailwind. Focus on maintainable code and clean architecture.',
      color: 'blue',
    },
    {
      icon: Laptop,
      title: 'Machine Learning & Data Tools',
      description:
        'Hands-on experience with ML projects (student-dropout prediction, AGV routing optimization) and visualization using Streamlit.',
      color: 'purple',
    },
    {
      icon: Target,
      title: 'Problem Solving & Product Focus',
      description:
        'Tackle real-world problems — participated in national hackathons and built practical tools for civic reporting & logistics.',
      color: 'pink',
    },
  ];

  const skills = [
    'Python', 'Django', 'Java', 'C/C++', 'JavaScript', 'HTML', 'CSS',
    'Bootstrap', 'React', 'Streamlit', 'SQLite', 'Git', 'Tailwind', 'Data Structures'
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            I am Rajveersinh Karansinh Chavda — an aspiring software developer and IT student with hands-on experience in
            web development, machine learning, and practical project work. I build solutions that solve real problems and
            continuously learn new technologies. (Details taken from my resume). 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl mb-4">Who am I?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                I am an enthusiastic IT student (B.E.) with a passion for software development, cloud technologies,
                and web/mobile solutions. I have completed full-stack training and internships, participated in national
                hackathons, and worked on projects like AGV route optimization and a civic issue reporting platform.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I enjoy building end-to-end applications, from UI to backend and data visualization, and I focus on
                continuous improvement through certifications and project experience.
              </p>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl">Education</h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-blue-400">08/2022 - 06/2026</p>
                  <h3 className="text-lg">B.E. in Computer Engineering</h3>
                  <p className="text-slate-400">Apollo Institute of Engineering and Technology — CGPA: 8.52/10</p>
                </div>

                <div className="border-l-2 border-purple-500 pl-4">
                  <p className="text-purple-400">04/2020 - 03/2022</p>
                  <h3 className="text-lg">Higher Secondary (HSC) — Science</h3>
                  <p className="text-slate-400">New Noble School of Science — Percentage: 60%</p>
                </div>

                <div className="mt-4">
                  <p className="text-slate-400">Training & Certifications</p>
                  <ul className="list-disc list-inside text-slate-400 mt-2">
                    <li>Full-Stack Development Certification — Hi-Tech Bapunagar (2–16 July 2025)</li>
                    <li>AI for Students — NxtWave (2024)</li>
                    <li>Intel — AI for Manufacturing; Microsoft & LinkedIn — Career Essentials in Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests / What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all group"
              >
                <div className={`inline-block mb-4 p-4 rounded-xl bg-${item.color}-500/10 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
<br />
          {/* Skills */}
          <div className="mt-10 bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700 text-slate-300 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl mb-8 text-center">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-lg">Ahmedabad, Gujarat</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
              <div>
                <p className="text-slate-400">Study Focus</p>
                <p className="text-lg">Computer Engineering / Software Development</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
              <div>
                <p className="text-slate-400">Contact</p>
                <p className="text-lg">
                  <a href="mailto:rajveerchavda5643@gmail.com" className="underline">rajveerchavda5643@gmail.com</a>
                </p>
                <p className="text-lg mt-1"><a href="tel:+917778813785" className="underline">+91 77788 13785</a></p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <p className="text-slate-400">Notable</p>
                <p className="text-lg">Participated in national-level Odoo × CGC Mohali Hackathon (Aug 30–31, 2025)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
