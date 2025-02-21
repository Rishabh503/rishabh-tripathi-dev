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
  const soft_skills= [
    {
      "skill": "Exceptional Leadership",
      "description": "Inspires and guides teams with vision, confidence, and strategic direction.",
      "expertise": "Advanced",
      "experience": "Led multiple teams in organizing large-scale events and hackathons, ensuring smooth execution and high engagement."
    },
    // {
    //   "skill": "Master Negotiator",
    //   "description": "Secures high-value deals and partnerships through persuasive communication and tactical thinking.",
    //   "expertise": "Expert",
    //   "experience": "Successfully negotiated multiple sponsorship deals for college events, maximizing funding and resources."
    // },
    {
      "skill": "Public Relations Expert",
      "description": "Crafts compelling narratives and maintains a strong brand presence across diverse audiences.",
      "expertise": "Advanced",
      "experience": "Managed PR campaigns and outreach for college society, increasing brand recognition and student engagement."
    },
    {
      "skill": "Sponsorship Acquisition Specialist",
      "description": "Builds lucrative sponsorships through relationship-building and value-driven proposals.",
      "expertise": "Expert",
      "experience": "Secured sponsorships from well-known brands for events, significantly boosting financial support and event quality."
    },
    {
      "skill": "Outstanding Communication",
      "description": "Articulates ideas clearly, persuasively, and effectively in both written and verbal forms.",
      "expertise": "Advanced",
      "experience": "Delivered impactful speeches, hosted events, and engaged in high-level discussions with stakeholders."
    },
    {
      "skill": "Event Management Virtuoso",
      "description": "Orchestrates seamless, large-scale events with precision, creativity, and logistical mastery.",
      "expertise": "Expert",
      "experience": "Organized multiple successful college events, including hackathons, orientations, and gaming nights."
    },
    {
      "skill": "Team Motivation Maestro",
      "description": "Elevates team morale, fostering enthusiasm, collaboration, and peak performance.",
      "expertise": "Advanced",
      "experience": "Led diverse teams, ensured high energy levels, and maintained productivity even under tight deadlines."
    },
    {
      "skill": "Crisis Management Pro",
      "description": "Navigates high-pressure situations with composure, problem-solving, and swift decision-making.",
      "expertise": "Advanced",
      "experience": "Resolved last-minute event challenges, handled sponsorship crises, and ensured smooth execution under pressure."
    },
    {
      "skill": "Networking Genius",
      "description": "Connects with key industry leaders, leveraging relationships for growth and opportunities.",
      "expertise": "Expert",
      "experience": "Built an extensive network of professionals, sponsors, and industry experts to support events and initiatives."
    },
    {
      "skill": "Strategic Decision Maker",
      "description": "Analyzes complex situations and implements forward-thinking strategies for long-term success.",
      "expertise": "Expert",
      "experience": "Developed and executed strategies for sponsorship, event planning, and society growth, ensuring consistent success."
    }
  ]
  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Maharaja Agrasen Institute of Technology",
      period: "2023 pursuing",
      description: "Computer Science and Technology , Data Science"
    },
    {
      degree: "Class 12 and 10",
      school: "Central Board of Education ",
      period: "2020-2022",
      description: "School Of Execellence"
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
          {/* <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-electric-blue" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div> */}
          
          {/* <div className="space-y-8">
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
          </div> */}
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
        <div>
          <div className="flex items-center gap-3 mb-8 mt-8">
            <GraduationCap className="w-6 h-6 text-neon-purple" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          
          <div className="space-y-8">
            {soft_skills.map((edu, index) => (
              <div key={index} className="glass-card p-6 glow-effect">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.skill}</h3>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-neon-purple">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.expertise}</span>
                  </div>
                </div>
                <p className="text-gray-300">{edu.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};