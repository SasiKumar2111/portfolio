import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']);
  const backdropFilter = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors">
          SK<span className="text-cyan-500">.</span>
        </a>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <a 
          href="https://drive.google.com/file/d/12VdSXf02tbRFl4G0sd_E3fXvO1t0FO3R/view?usp=sharing" 
          target="_blank"
          className="px-5 py-2 text-sm font-mono text-cyan-400 border border-cyan-400/50 rounded hover:bg-cyan-400/10 transition-colors"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}