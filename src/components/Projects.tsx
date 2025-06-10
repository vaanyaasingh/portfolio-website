import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';

const ProjectsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const ProjectCard = styled.div`
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

const DetailCard = styled.div`
  border: 1px solid #004ce4;
  border-radius: 20px;
  padding: 1.5rem;
  background: transparent;
  margin-bottom: 1rem;
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

interface ProjectDetail {
  title: string;
  detail: string;
}

interface Project {
  id: string;
  title: string;
  techStack: string[];
  brief: string;
  description: [string, ...ProjectDetail[]];
  github: string;
  live: string | null;
}

export const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Go Girl Community Website',
      techStack: ['React', 'Figma', 'Netlify', 'Render', 'Razorpay'],
      brief: 'A community platform designed and developed to empower girls through coding education.',
      description: [
        'As a Program Manager at Go Girl Organisation, I\'m on a mission to empower underserved girls through coding education. We\'ve already reached 100+ girls nationwide! 🚀',
        {
          title: '🎨 Brand & Community',
          detail: 'Crafted the visual identity and built an engaging community website from scratch using React and Figma.'
        },
        {
          title: '💫 Impact',
          detail: 'Led our first fundraising campaign raising Rs.50,000 and spearheaded our presence at GHCI 2024.'
        }
      ],
      github: 'https://github.com/yourusername/gogirl',
      live: 'https://gogirl.org'
    },
    {
      id: '2',
      title: 'Natural Language Linux Command Generator - GenBash',
      techStack: ['Python', 'Llama 3.1 8B', 'Groq API', 'argparse'],
      brief: 'A CLI tool that translates natural language into Linux commands with real-time preview.',
      description: [
        'Engineered a Python-based CLI tool that leverages Llama 3.1 to translate natural language into Linux commands.',
        {
          title: '🛠️ Technical Implementation',
          detail: 'Established efficient API communication layer with Groq\'s LLM infrastructure and designed an asynchronous command-line interface.'
        },
        {
          title: '📚 Documentation',
          detail: 'Open-sourced with comprehensive documentation, CI/CD pipeline, and contribution guidelines.'
        }
      ],
      github: 'https://github.com/yourusername/genbash',
      live: null
    },
    {
      id: '3',
      title: 'Materials Science ML Project',
      techStack: ['Python', 'scikit-learn', 'Matplotlib', 'Seaborn'],
      brief: 'Machine learning models for optimizing microwave-based material recycling processes.',
      description: [
        'Developed machine learning models to optimize microwave-based material recycling processes.',
        {
          title: '🎯 Achievements',
          detail: 'Implemented classification algorithms achieving 92% accuracy in material type identification.'
        },
        {
          title: '📊 Data Analysis',
          detail: 'Processed large-scale materials data and created interactive visualizations for engineering stakeholders.'
        }
      ],
      github: 'https://github.com/yourusername/materials-ml',
      live: null
    },
    {
      id: '4',
      title: 'KaamKar - AI-Powered Freelance Platform',
      techStack: ['React.js', 'Python', 'scikit-learn'],
      brief: 'A freelance marketplace with AI-driven skill matching and fair compensation recommendations.',
      description: [
        'Built an end-to-end freelance marketplace with AI-driven skill and job matching.',
        {
          title: '🤖 AI Integration',
          detail: 'Integrated machine learning models to match users with relevant projects based on profiles and past performance.'
        },
        {
          title: '💰 Fair Compensation',
          detail: 'Built predictive models to generate fair compensation recommendations, promoting transparency and equity.'
        }
      ],
      github: 'https://github.com/yourusername/kaamkar',
      live: 'https://kaamkar.dev'
    }
  ];

  return (
    <ProjectsContainer>
      <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-5xl mb-8">
        projects
      </h2>
      
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
        >
          <ProjectHeader>
            <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: expandedId === project.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-[#004ce4]" />
            </motion.div>
          </ProjectHeader>

          <TechStack>
            {project.techStack.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechStack>

          <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg mt-4">
            {project.brief}
          </p>

          <AnimatePresence>
            {expandedId === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="mt-4 space-y-6">
                  <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                    {project.description[0]}
                  </p>
                  {(project.description.slice(1) as ProjectDetail[]).map((item, index) => (
                    <DetailCard key={index}>
                      <h4 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl mb-2">
                        {item.title}
                      </h4>
                      <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                        {item.detail}
                      </p>
                    </DetailCard>
                  ))}
                </div>
                <ProjectLinks>
                  <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </LinkButton>
                  {project.live && (
                    <LinkButton href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </LinkButton>
                  )}
                </ProjectLinks>
              </motion.div>
            )}
          </AnimatePresence>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}; 