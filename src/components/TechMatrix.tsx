import { motion } from 'framer-motion';

const skills = [
  { category: "Generative AI", items: ["Claude", "OpenAI", "Agentic AI", "RAG", "MCP Servers", "Vector DBs"] },
  { category: "Frontend & UX", items: ["React.js", "TypeScript", "JavaScript", "UX Design"] },
  { category: "Backend & Cloud", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "AWS Lambda", "SQS"] },
  { category: "DevOps & Tools", items: ["Docker", "CI/CD", "GitHub Actions", "Kiro IDE"] }
];

export default function TechMatrix() {
  return (
    <section className="py-32 border-t border-gray-900 text-left">
      <h3 className="text-3xl font-bold mb-16 flex items-center justify-start gap-4">
         Technical Arsenal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="space-y-6">
            <h4 className="text-lg font-mono text-white/80 border-b border-gray-800 pb-4">
              {skillGroup.category}
            </h4>
            {/* Added list-none, p-0, and m-0 to override any lingering browser defaults */}
            <ul className="space-y-3 list-none p-0 m-0">
              {skillGroup.items.map((item, itemIdx) => (
                <motion.li 
                  key={itemIdx}
                  whileHover={{ x: 10, color: '#00f0ff' }}
                  className="text-gray-400 cursor-default transition-colors duration-200 block"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}