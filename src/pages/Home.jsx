import React from 'react';
import { Github, Linkedin, Mail, Code, Twitter } from 'lucide-react';

export const Home = () => {
  const projects=[
    {"img":"cga.png","title":"CGA","desc":"A static webiste for a coaching institute","github":"https://github.com/Rishabh503/result_cga"},
    {"img":"tamasaha.png","title":"Tamasha Bhawan","desc":"Landing page website for MUSIC ACADEMY","github":"https://github.com/Rishabh503/tamasha-bhawan"},
    {"img":"attendence.png","title":"Attendence Manager","desc":"An tool to keep a track of your daily attendence","github":"https://github.com/Rishabh503/attendence"},
    {"img":"todo.png","title":"TO-DO List","desc":"A typical but impresive TO-DO list","github":"https://github.com/Rishabh503/Todo-Website"},
  ]
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple text-transparent bg-clip-text">
              Hi, I'm <br /> RISHABH TRIPATHI
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rishabh503" className="glass-card glow-effect p-3 rounded-full">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rishabh-tripathi-9985aa319/" className="glass-card glow-effect p-3 rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/Rishabh2906/" className="glass-card glow-effect p-3 rounded-full">
                <Code className="w-6 h-6" />
              </a>
            
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden glass-card p-2 animate-float">
              <img
                src="image.png"
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            {/* Background Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 blur-3xl" />
          </div>
        </div>

        {/* Featured Projects Preview */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
            {projects.map((project,index) => (
              <div key={index} className="glass-card p-6 glow-effect">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.img}
                    alt={`Project ${project.img}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.desc}</p>
                <a href={project.github}
                >
                  <Github className="w-8 h-8 p-1 mt-4 rounded-xl border" />
                </a>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};