import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

export const Projects = (): JSX.Element => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides current weather conditions and forecasts using OpenWeatherMap API with beautiful data visualizations.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work and skills. Built with React and featuring smooth animations and interactive elements.",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <main className="bg-[#fffef3] min-h-screen w-full pt-32">
      <div className="max-w-[1440px] mx-auto px-8 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-6xl tracking-[-1.2px] mb-4">
            My Projects
          </h1>
          <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px] max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            UX design, and problem-solving. Each project represents a unique challenge 
            and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden rounded-[20px] border-2 border-[#004ce4] bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-3xl tracking-[-0.6px] mb-4">
                  {project.title}
                </h3>
                <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#004ce4]/10 text-[#004ce4] rounded-full text-sm font-['Lohit_Tamil-Regular',Helvetica]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-[#004ce4] text-[#004ce4] rounded-lg hover:bg-[#004ce4] hover:text-white transition-colors duration-200"
                  >
                    <GithubIcon className="w-5 h-5" />
                    <span className="font-['Lohit_Tamil-Regular',Helvetica]">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-[#004ce4] text-white rounded-lg hover:bg-[#004ce4]/80 transition-colors duration-200"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                    <span className="font-['Lohit_Tamil-Regular',Helvetica]">Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-xl mb-6">
            Interested in collaborating or have a project in mind?
          </p>
          <a
            href="mailto:vaanya@example.com"
            className="inline-block px-8 py-4 bg-[#004ce4] text-white rounded-[20px] font-['Lora',Helvetica] text-xl hover:bg-[#004ce4]/80 transition-colors duration-200"
          >
            Let's work together
          </a>
        </div>
      </div>
    </main>
  );
};