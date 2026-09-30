import { motion } from 'framer-motion';

const softSkills = [
  "Strategic Analytical Thinking", "Problem Solving", "Critical Thinking", 
  "Cross-Functional Collaboration", "Communication & Presentation Skills"
]; //

export default function About() {
  return (
    <section className="py-32 border-t border-gray-900" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
             Architecture & Identity
          </h3>
          <div className="text-gray-400 leading-relaxed space-y-4 text-lg">
            <p>
              I am a Full Stack AI Developer with specialized expertise in Generative AI, Agentic AI, and Large Language Model (LLM) integration. 
            </p>
            <p>
              My career trajectory represents a fast-track progression from Trainee Engineer to AI Platform Analyst. I bridge the gap between complex AI ecosystems like RAG architectures and MCP-based solutions and scalable full-stack application development utilizing React.js, Python, FastAPI, and PostgreSQL.
            </p>
            <p>
              I focus on delivering end-to-end, cloud-native digital solutions that automate workflows, drive intelligent system responses, and prioritize enterprise business needs.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold text-white border-b border-gray-800 pb-4">Core Competencies</h4>
          <ul className="space-y-3 font-mono text-sm text-cyan-400/80 list-none p-0 m-0">
            {softSkills.map((skill, idx) => (
              <motion.li 
                key={idx}
                whileHover={{ x: 5, color: '#00f0ff' }}
                className="flex items-center gap-2 cursor-default transition-colors"
              >
                <span className="text-purple-500">▹</span> {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}