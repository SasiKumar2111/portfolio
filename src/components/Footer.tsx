export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-900 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-mono text-gray-500">
          Designed & Built by Sasi Kumar {/* */}
        </p>
        
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/sasi-kumar-2563b5278/" target="_blank" rel="noreferrer" className="text-sm font-mono text-gray-500 hover:text-cyan-400 transition-colors">
            LinkedIn {/* */}
          </a>
          <a href="mailto:sasishankar2001@gmail.com" className="text-sm font-mono text-gray-500 hover:text-cyan-400 transition-colors">
            Email {/* */}
          </a>
        </div>
      </div>
    </footer>
  );
}