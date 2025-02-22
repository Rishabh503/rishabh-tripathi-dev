import React from 'react';
import { Braces, Code, Cpu, Database, Globe } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6 text-electric-blue" />,
      items: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6 text-neon-purple" />,
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools",
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      items: ["Git", "VS Code", "Figma", "Postman"]
    },
    {
      category: "Problem Solving",
      icon: <Braces className="w-6 h-6 text-red-400" />,
      items: ["JAVA", "C++", "Python", ""]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* About Me Section */}
        <div className="glass-card p-8 mb-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-electric-blue to-neon-purple text-transparent bg-clip-text">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
              As a Full Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, SCSS, JavaScript, React , Tailwind , Redux, Node.js, Next.js, Express.js and Mongo DB. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                
              <p className="text-lg text-gray-300">
<br />
              I possess a keen interest in leveraging Data Structures and Algorithms using Java. I actively participate in coding contests to continually refine my skills.
              </p>
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
                <img
                  src="rishabh.jpg"
                  alt="About Me"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="glass-card p-6 glow-effect">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};