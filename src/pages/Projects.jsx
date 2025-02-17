import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {

  const projects1=[
    {"img":"cga.png","title":"CGA","desc":"A static webiste for a coaching institute"},
    {"img":"tamasaha.png","title":"Tamasha Bhawan","desc":"Landing page website for MUSIC ACADEMY"},
    {"img":"attendence.png","title":"Attendence Manager","desc":"An tool to keep a track of your daily attendence"},
    {"img":"todo.png","title":"TO-DO List","desc":"A typical but impresive TO-DO list"},
  ]
  const projects = [
    {
      title: "EXPENSE MANAGER",
      description: "Your one stop solution for your buckss",
      image: "exp.png",
      tags: ["React", "Node.js", "Tailwind","BootStrap"],
      github: "#",
      live: "#"
    }, 
    {
      title: "CGA",
      description: "A static website for a coaching institute",
      image: "cga.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Tamasha Bhawan",
      description: "Landing page website for MUSIC ACADEMY",
      image: "tamasaha.png",
      tags: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Attendance Manager",
      description: "A tool to keep track of your daily attendance",
      image: "attendence.png",
      tags: ["Python", "Flask", "SQLAlchemy"],
      github: "#",
      live: "#"
    },
    {
      title: "TO-DO List",
      description: "A typical but impressive TO-DO list",
      image: "todo.png",
      tags: ["JavaScript", "React", "Bootstrap"],
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
   
    
  ];
  


  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-electric-blue to-neon-purple text-transparent bg-clip-text">
          Featured Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group hover:scale-105 transition-transform duration-300">
              <div className="aspect-video rounded-t-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm glass-card rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href={project.github} className="glass-card glow-effect p-2 rounded-full">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="glass-card glow-effect p-2 rounded-full">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};