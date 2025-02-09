import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization and scheduling.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800",
      tags: ["Next.js", "OpenAI", "JavaScript", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts with analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      tags: ["React", "Redux", "Node.js", "Chart.js"],
      github: "#",
      live: "#"
    }
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