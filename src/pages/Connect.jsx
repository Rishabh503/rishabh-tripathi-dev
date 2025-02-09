import React from 'react';
import { Send, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export const Connect = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-electric-blue to-neon-purple text-transparent bg-clip-text">
          Let's Connect
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg glass-card bg-white/5 focus:ring-2 focus:ring-electric-blue outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg glass-card bg-white/5 focus:ring-2 focus:ring-electric-blue outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg glass-card bg-white/5 focus:ring-2 focus:ring-electric-blue outline-none h-32"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full glass-card glow-effect px-6 py-3 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-electric-blue to-neon-purple"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
              <div className="space-y-4">
                <a href="https://github.com/Rishabh503" className="flex items-center gap-4 p-4 glass-card glow-effect rounded-xl hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                
                  <span>Follow me on GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/rishabh-tripathi-9985aa319/" className="flex items-center gap-4 p-4 glass-card glow-effect rounded-xl hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                  <span>Connect on LinkedIn</span>
                </a>
                {/* <a href="#" className="flex items-center gap-4 p-4 glass-card glow-effect rounded-xl hover:scale-105 transition-transform">
                  <Twitter className="w-6 h-6" />
                  <span>Follow me on Twitter</span>
                </a> */}
                <a href="rishabhtripathi2022@gmail.com" className="flex items-center gap-4 p-4 glass-card glow-effect rounded-xl hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                  <span>Send me an email</span>
                </a>
                <a href="https://wa.me/919650594608?text=Hello!%20I%20want%20to%20know%20more" className="flex items-center gap-4 p-4 glass-card glow-effect rounded-xl hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                  <span>Chat with us on Whatsapp</span>
                </a>

              

              </div>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Reach out to me </h2>
              <p className="text-gray-300 mb-4">
                Available for meetings and calls during these hours:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>Monday - Friday: 5:00 AM - 10:00 PM EST</li>
                <li>Saturday: Anytime</li>
                <li>Sunday: Anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};