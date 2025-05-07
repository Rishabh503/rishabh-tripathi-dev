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
      title: "DSA Manager",
      description: "A DSA platform for solving questions as a group",
      image: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1746642471/9fdc50da-d81c-4a59-8cb9-a33f7e15e7f3.png",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Rishabh503/dsa-frontend",
      live: "https://dsa-frontend-one.vercel.app/"
    },
    {
      title: "Innowave",
      description: "The official website of Innowave",
      image: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1746642674/d4f1746a-391d-4e18-8487-1dba34f1f1fc.png",
      tags: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Rishabh503/innowave",
      live: "https://innowave-rust.vercel.app/"
    },
    {
      title: "Tamasha Bhawan",
      description: "Landing page website for MUSIC ACADEMY",
      image: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1746641769/Screenshot_2025-05-07_234527_hxj8zn.png",
      tags: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Rishabh503/tamasha-bhawan",
      live: "https://tamasha-bhawan.vercel.app/"
    },
    {
      title: "Task Manager",
      description: "A task manager tool",
      image: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1746642617/0f38d3eb-6ae2-4ea7-857b-d1487b9f1fd7.png",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Rishabh503/task-manager",
      live: "https://task-manager-theta-rose.vercel.app/"
    },
    {
      title: "TO-DO List",
      description: "A typical but impressive TO-DO list",
      image: "todo.png",
      tags: ["JavaScript", "React", "Bootstrap"],
      github: "https://github.com/Rishabh503/Todo-Website",
      live: "https://todo-rishabh.vercel.app/"
    },
    {
      title: "CGA",
      description: "A static website for a coaching institute",
      image: "cga.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rishabh503/result_cga",
      live: "https://result-cga.vercel.app/"
    },
    {
      title: "EXPENSE MANAGER",
      description: "Your one stop solution for your buckss",
      image: "exp.png",
      tags: ["React", "Node.js", "Tailwind", "Bootstrap"],
      github: "https://github.com/Rishabh503/my-expense-tracker",
      live: "https://my-expense-tracker-ochre.vercel.app/"
    },
    {
      title: "Attendance Manager",
      description: "A tool to keep a track of your daily attendance",
      image: "attendence.png",
      tags: ["Python", "Flask", "SQLAlchemy"],
      github: "https://github.com/Rishabh503/attendence",
      live: "https://attendence-chi.vercel.app/"
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