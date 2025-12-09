import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Palette, Terminal } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'blue',
      skills: [
        { name: 'HTML/CSS', level: 92 },
        { name: 'JavaScript', level: 30 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 40 },
        { name: 'Bootstrap', level: 78 },
      ],
    },
    {
      icon: Server,
      title: 'Backend & Languages',
      color: 'purple',
      skills: [
        { name: 'Python', level: 82 },
        { name: 'Django', level: 78 },
        { name: 'Java', level: 30 },
        { name: 'C / C++', level: 70 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'pink',
      skills: [
        { name: 'SQLite', level: 80 },
        { name: 'PostgreSQL', level: 20 },
        { name: 'MySQL', level: 40 },
      ],
    },
    {
      icon: Terminal,
      title: 'Tools & Platform',
      color: 'green',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 90 },
        { name: 'Streamlit', level: 30 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'orange',
      skills: [
        { name: 'Figma', level: 72 },
        { name: 'Responsive Design', level: 84 },
        { name: 'UI/UX Fundamentals', level: 70 },
      ],
    },
    {
      icon: Layout,
      title: 'Core CS Skills',
      color: 'cyan',
      skills: [
        { name: 'Data Structures', level: 40 },
        { name: 'Algorithms', level: 75 },
        { name: 'Problem Solving', level: 70 },
        { name: 'Team Collaboration', level: 80 },
      ],
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
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A practical set of technologies and tools I use regularly — extracted from my resume. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl`} style={{ backgroundColor: `rgba(99,102,241,0.06)` }}>
                  {/* Note: Tailwind dynamic classes like bg-${color}-... may not compile; used inline fallback for icon background */}
                  <category.icon className="w-6 h-6 text-current" />
                </div>
                <h2 className="text-2xl">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.9,
                          delay: categoryIndex * 0.05 + skillIndex * 0.03,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full`}
                        style={{
                          background: `linear-gradient(90deg, rgba(59,130,246,1), rgba(139,92,246,1))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl mb-6 text-center">Currently Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Next.js', description: 'Server-side React & production apps' },
              { name: 'Machine Learning', description: 'ML fundamentals & applied projects' },
              { name: 'Cloud (AWS)', description: 'Deploying apps & using managed services' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.08 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl mb-2 text-blue-400">{item.name}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
