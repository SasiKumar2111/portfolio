export default function Credentials() {
  const education = [
    { degree: "M.Sc. Artificial Intelligence", school: "Sri Ramachandra Institute of Higher Education and Research", year: "2024", metric: "CGPA: 8.1" }, //
    { degree: "B.Sc. Computer Science", school: "Prince Shri Venkateshwara Arts and Science College", year: "2022", metric: "CGPA: 7.0" } //
  ];

  const certifications = [
    { title: "Anthropic Certified: Claude API, Amazon Bedrock & Agent Skills", year: "2026" }, //
    { title: "Certified Frontend with React Developer", year: "2024" }, //
    { title: "Python Developer Associate (NSDC)", year: "2024" }, //
    { title: "Certified Application Developer (Python)", year: "2024" }, //
    { title: "AWS Academy Cloud Foundations", year: "2023" } //
  ];

  return (
    <section className="py-32 border-t border-gray-900" id="credentials">
      <h3 className="text-3xl font-bold mb-16 flex items-center justify-start gap-4">
         Academic & Industry Credentials
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <div className="space-y-8">
          <h4 className="text-xl font-mono text-white/80 flex items-center gap-2">
            <span className="text-purple-500">#</span> Education Base
          </h4>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                  <span className="text-cyan-400 font-mono text-sm">{edu.year}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{edu.school}</p>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full font-mono">
                  {edu.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-8">
          <h4 className="text-xl font-mono text-white/80 flex items-center gap-2">
            <span className="text-cyan-500">#</span> Verified Certifications
          </h4>
          <ul className="space-y-4 list-none p-0 m-0">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex justify-between items-center p-4 border-b border-gray-800 hover:border-cyan-500/50 transition-colors group">
                <span className="text-gray-300 group-hover:text-white transition-colors">{cert.title}</span>
                <span className="text-sm font-mono text-gray-600 group-hover:text-cyan-400 transition-colors">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}