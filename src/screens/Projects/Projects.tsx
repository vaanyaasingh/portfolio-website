import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ChevronDown, Github, ExternalLink } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Footer } from "../../components/Footer";

const ProjectCard = styled(Card)`
  border: 1px solid #004ce4;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 76, 228, 0.02);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const TechTag = styled.span`
  font-family: 'Lohit Tamil', Helvetica;
  color: #004ce4;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid #004ce4;
  border-radius: 999px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Lohit Tamil', Helvetica;
  color: #004ce4;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const DetailCard = styled(Card)`
  background: white;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

interface ProjectDetail {
  title: string;
  detail: string;
}

interface Project {
  id: string;
  title: string;
  techStack: string[];
  brief: string;
  description: [string, ProjectDetail[]];
  github: string;
  live: string | null;
}

export const Projects = (): JSX.Element => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Cell RVCE Website',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      brief: 'Official website for the Entrepreneurship Cell of RV College of Engineering.',
      description: [
        'Designed and developed a modern, responsive website for E-Cell RVCE that showcases events, initiatives, and entrepreneurial resources.',
        [
          {
            title: '🎨 Design & Development',
            detail: 'Created an engaging UI with smooth animations and interactive elements using Next.js and Framer Motion.'
          },
          {
            title: '📱 Features',
            detail: 'Implemented event showcase, team profiles, and a resource hub for aspiring entrepreneurs.'
          }
        ]
      ],
      github: 'https://github.com/vaanyaasingh/e-cell-nexus-web',
      live: 'https://ecellrvce.vercel.app/'
    },
    {
      id: '2',
      title: 'Go Girl Community Website',
      techStack: ['React', 'Figma', 'Netlify', 'Render', 'Razorpay'],
      brief: 'A community platform designed to make suscriptions easier.',
      description: [
        'Built an engaging platform that connects and empowers young girls in tech, reaching over 2000+ students across India.',
        [
          {
            title: '🎨 Brand & Community',
            detail: 'Developed the visual identity and community platform from scratch, focusing on user engagement and accessibility. Prototyped the full website UI/UX using Figma, aligning design with the community\'s mission and branding.'
          },
          {
            title: '💫 CI/CD and Deployment',
            detail: 'Developed and deployed the frontend using React, integrating Razorpay for payments and leveraging Netlify and Render for CI/CD workflows.'
          }
        ]
      ],
      github: 'https://github.com/vaanyaasingh/gogirl',
      live: 'https://gogirl.org'
    },
    {
      id: '3',
      title: 'Decentralized Music Platform',
      techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Web3'],
      brief: 'A modern music streaming platform with decentralized architecture.',
      description: [
        'Created a decentralized music platform that reimagines how we share and stream music.',
        [
          {
            title: '🎵 Features',
            detail: 'Built a sleek music player interface with playlist management and user authentication.'
          },
          {
            title: '🔗 Web3 Integration',
            detail: 'Implemented decentralized storage and streaming capabilities for a more open music ecosystem.'
          }
        ]
      ],
      github: 'https://github.com/vaanyaasingh/musicapp',
      live: 'https://musicapp-plum-one.vercel.app'
    },
    {
      id: '4',
      title: 'Natural Language Linux Command Generator - GenBash',
      techStack: ['Python', 'Llama 3.1 8B', 'Groq API', 'argparse'],
      brief: 'A CLI tool that translates natural language into Linux commands with real-time preview.',
      description: [
        'Engineered a Python-based CLI tool that leverages Llama 3.1 to translate natural language into Linux commands.',
        [
          {
            title: '🛠️ Technical Implementation',
            detail: 'Established efficient API communication layer with Groq\'s LLM infrastructure and designed an asynchronous command-line interface.'
          },
          {
            title: '📚 Documentation',
            detail: 'Open-sourced with comprehensive documentation, CI/CD pipeline, and contribution guidelines.'
          }
        ]
      ],
      github: 'https://github.com/vaanyaasingh/genBash',
      live: null
    },
    {
      id: '5',
      title: 'Materials Science ML Project',
      techStack: ['Python', 'scikit-learn', 'Matplotlib', 'Seaborn'],
      brief: 'Machine learning models for optimizing microwave-based material recycling processes.',
      description: [
        'Developed machine learning models to optimize microwave-based material recycling processes.',
        [
          {
            title: '🎯 Achievements',
            detail: 'Implemented classification algorithms achieving 92% accuracy in material type identification.'
          },
          {
            title: '📊 Data Analysis',
            detail: 'Processed large-scale materials data and created interactive visualizations for engineering stakeholders.'
          }
        ]
      ],
      github: 'https://github.com/vaanyaasingh/microwave_recycling',
      live: null
    },
    {
      id: '6',
      title: 'KaamKar - AI-Powered Freelance Platform',
      techStack: ['React.js', 'Python', 'scikit-learn'],
      brief: 'A freelance marketplace with AI-driven skill matching and fair compensation recommendations.',
      description: [
        'Built an end-to-end freelance marketplace with AI-driven skill and job matching.',
        [
          {
            title: '🤖 AI Integration',
            detail: 'Integrated machine learning models to match users with relevant projects based on profiles and past performance.'
          },
          {
            title: '💰 Fair Compensation',
            detail: 'Built predictive models to generate fair compensation recommendations, promoting transparency and equity.'
          }
        ]
      ],
      github: 'https://github.com/vaanyaasingh/kaamkar',
      live: null
    }
  ];

  return (
    <main className="bg-[#fffef3] min-h-screen w-full pt-24 md:pt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-24">
        <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl md:text-7xl mb-8 md:mb-20 text-center w-full">
          projects
        </h1>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              className="transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <ProjectHeader className="flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl md:text-2xl mb-2">
                    {project.title}
                  </h3>
                  <p className="font-['Lohit_Tamil',Helvetica] text-[#004ce4] text-base md:text-lg">
                    {project.brief}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="self-start sm:self-center"
                >
                  <ChevronDown className="w-5 h-5 text-[#004ce4]" />
                </motion.div>
              </ProjectHeader>

              <TechStack className="mt-4">
                {project.techStack.map((tech, index) => (
                  <TechTag key={index} className="text-sm md:text-base">
                    {tech}
                  </TechTag>
                ))}
              </TechStack>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 space-y-4">
                      {project.description[1].map((detail, index) => (
                        <DetailCard key={index} className="p-4 md:p-6">
                          <h4 className="font-['Lora',Helvetica] text-[#004ce4] text-lg md:text-xl mb-2">
                            {detail.title}
                          </h4>
                          <p className="font-['Lohit_Tamil',Helvetica] text-[#004ce4] text-base md:text-lg">
                            {detail.detail}
                          </p>
                        </DetailCard>
                      ))}

                      <ProjectLinks className="flex-wrap">
                        {project.github && (
                          <LinkButton
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base"
                          >
                            <Github className="w-4 h-4 md:w-5 md:h-5" />
                            View on GitHub
                          </LinkButton>
                        )}
                        {project.live && (
                          <LinkButton
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base"
                          >
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                            View Live Demo
                          </LinkButton>
                        )}
                      </ProjectLinks>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ProjectCard>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};