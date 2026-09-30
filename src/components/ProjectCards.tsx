import { motion } from 'framer-motion';

const projects = [
  {
    title: "Enterprise Incident Monitoring Platform", //
    description: "Architected scalable backend microservices and engineered Agentic AI solutions for real-time data integration across 15+ cloud platforms.", //
    metrics: "Reduced manual triage by 40% | 2-min routing", //
    tech: ["FastAPI", "PostgreSQL", "Claude LLMs", "Docker", "CI/CD"], //
  },
  {
    title: "QuickBill Enterprise SaaS Platform", //
    description: "Developed a scalable full-stack application supporting automated generation and serverless processing for a US staffing organization.", //
    metrics: "75k-100k invoices/month automated", //
    tech: ["React.js", "Node.js", "SQL", "AWS Services", 'Microservices Architecture'], //
  },
  {
    title: "AI-Powered CRM Chatbot", //
    description: "Engineered a conversational workflow system implementing RAG and semantic search to intelligently resolve real-time queries.", //
    metrics: "Manages 30+ business interaction states", //
    tech: ["React.js", "Python", "RAG", "Vector Search"], //
  }
];

export default function ProjectCards() {
  return (
    <section className="py-32 border-t border-gray-900" id="projects">
      <h3 className="text-3xl font-bold mb-16 flex items-center justify-start gap-4">
        Dedicated Project Builds
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="flex flex-col h-full bg-gray-900/40 border border-gray-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors duration-300 backdrop-blur-sm"
          >
            <div className="flex-grow">
              <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {project.description}
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="h-px w-full bg-gray-800 mb-4" />
              <p className="text-purple-400 font-mono text-xs mb-6 uppercase tracking-wider">
                Impact: {project.metrics}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-3 py-1 bg-black/50 border border-gray-700 rounded-full text-xs font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}