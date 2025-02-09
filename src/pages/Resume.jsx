import React from 'react';
import { Calendar, Building2, GraduationCap, Download } from 'lucide-react';

export const Resume = () => {
  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Led development of multiple high-impact projects, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained various web applications, improved performance by 40%, and implemented new features."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      period: "2017 - 2019",
      description: "Specialized in Software Engineering and Artificial Intelligence"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2013 - 2017",
      description: "Dean's List, Computer Science Club President"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple text-transparent bg-clip-text">
            Resume
          </h1>
          <button className="glass-card glow-effect px-6 py-3 rounded-xl flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-electric-blue" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="glass-card p-6 glow-effect">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-electric-blue">
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-neon-purple" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 glow-effect">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.school}</p>
                  </div>
                  <div className="flex items-center gap-2 text-neon-purple">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};