import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 'zeb-ai',
    role: "Analyst - AI Platform Engineering", //
    company: "ZEB AI", //
    date: "May 2026 - Jul 2026", //
    project: "Enterprise Incident Monitoring Platform", //
    metrics: "Reduced manual triage by 40%, 2-min routing", //
    details: "Architected scalable backend Microservices using FastAPI (Python) and PostgreSQL. Engineered Agentic AI solutions leveraging Claude LLMs and Prompt Engineering. Drove deployment via Docker and CI/CD pipelines with event-driven architectures.",
    tech: ["FastAPI", "PostgreSQL", "Claude LLMs", "Docker"] //
  },
  {
    id: 'avasoft-quickbill',
    role: "Software Engineer", //
    company: "Avasoft Technologies", //
    date: "Sep 2024 - Apr 2026", //
    project: "QuickBill Enterprise SaaS & AI Chatbot", //
    metrics: "75k-100k invoices/month automated", //
    details: "Developed a scalable React.js and Node.js application. Engineered an AI-powered CRM chatbot utilizing React.js, Python, and RAG frameworks. Implemented AWS SQS serverless processing.",
    tech: ["React.js", "Node.js", "Python", "RAG", "AWS SQS"] //
  }
];

export default function ExperienceShowcase() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-32" id='experience'>
      <h3 className="text-3xl font-bold mb-16 flex items-center gap-4">
         Experience & Systems
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <motion.div
            layoutId={`card-${exp.id}`}
            key={exp.id}
            onClick={() => setSelectedId(exp.id)}
            className="group cursor-pointer p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-colors backdrop-blur-sm"
          >
            <p className="text-sm font-mono text-cyan-400 mb-2">{exp.date}</p>
            <h4 className="text-2xl font-semibold mb-1">{exp.role}</h4>
            <p className="text-gray-400 mb-6">{exp.company}</p>
            <div className="h-px w-full bg-gray-800 mb-6 group-hover:bg-purple-500/30 transition-colors" />
            <h5 className="text-lg text-white mb-2">{exp.project}</h5>
            <p className="text-sm font-mono text-purple-400">{exp.metrics}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedId(null)}
          >
            {experiences.filter(e => e.id === selectedId).map(exp => (
              <motion.div
                key={`modal-${exp.id}`}
                layoutId={`card-${exp.id}`}
                className="bg-[#111] border border-gray-800 p-10 rounded-3xl max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <h4 className="text-3xl font-bold mb-2">{exp.role} @ {exp.company}</h4>
                <p className="text-cyan-400 font-mono mb-8">{exp.project}</p>
                <p className="text-gray-300 leading-relaxed mb-8">{exp.details}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-mono">{t}</span>
                  ))}
                </div>
                <button onClick={() => setSelectedId(null)} className="text-gray-500 hover:text-white transition-colors">
                  Close [ESC]
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}