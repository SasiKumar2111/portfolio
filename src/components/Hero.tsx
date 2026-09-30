import { motion, type Variants } from 'framer-motion';
import '../../public/sasi.png'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)', 
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] 
    } 
  }
};

export default function Hero() {
  return (
    // pt-32 ensures it clears the 80px Navbar completely
    <section className="min-h-screen flex items-center relative pt-32 pb-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-cyan-400 font-mono tracking-widest text-sm mb-4">
            SYSTEM.INIT()
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Sasi Kumar {/*[cite: 1] */}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl text-gray-400 font-light mb-8">
            Building <span className="text-white">Generative AI</span> <br className="hidden md:block" />
            & <span className="text-white">LLM Solutions</span> {/*[cite: 1] */}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed">
            Full Stack AI Developer specializing in RAG architectures, Agentic AI, and cloud-native solutions. Delivering end-to-end intelligent systems from React frontends to FastAPI and vector databases. {/*[cite: 1] */}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform text-center">
              View Projects
            </a>
            <a href="https://www.linkedin.com/in/sasi-kumar-2563b5278/" target="_blank" rel="noreferrer" className="px-8 py-4 border border-gray-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors text-center">
              LinkedIn Profile {/*[cite: 1] */}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square group">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            {/* Offset wireframe border */}
            <div className="absolute inset-0 border border-gray-700 rounded-3xl translate-x-4 translate-y-4 group-hover:border-cyan-500/50 transition-colors duration-500" />
            
            {/* The Image */}
            <img 
              src="sasi.png" 
              alt="Sasi Kumar" 
              className="relative z-10 w-full h-full object-cover object-top rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800"
            />
          </div>
        </motion.div>
        
      </div>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}