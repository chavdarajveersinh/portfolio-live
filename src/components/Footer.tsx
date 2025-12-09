import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © 2025 IT Student Portfolio. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/chavdarajveersinh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajveersinh-karansinh-chavda-87154629a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Gmail */}
            <a
              href="mailto:rajveerchavda5643@gmail.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
