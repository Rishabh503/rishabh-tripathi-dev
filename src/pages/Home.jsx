import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple text-transparent bg-clip-text">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass-card glow-effect p-3 rounded-full">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="glass-card glow-effect p-3 rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="glass-card glow-effect p-3 rounded-full">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="glass-card glow-effect p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden glass-card p-2 animate-float">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 glow-effect">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=800`}
                    alt={`Project ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                <p className="text-gray-300">Brief project description goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};