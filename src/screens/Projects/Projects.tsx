import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 76, 228, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1rem, 5vw, 2rem);
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 76, 228, 0.9), transparent);
  }

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  ${ProjectCard}:hover ${ProjectImage} {
    transform: scale(1.05);
  }
`;

const ProjectNumber = styled.span`
  font-family: 'Lora', Helvetica;
  font-size: clamp(0.875rem, 2vw, 1rem);
  color: white;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'Lora', Helvetica;
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: white;
  margin-bottom: 1rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-family: 'Lohit Tamil', Helvetica;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: white;
  padding: 0.25rem 0.75rem;
  border: 1px solid white;
  border-radius: 999px;
`;

export const Projects = (): JSX.Element => {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["UX/UI", "Website Design", "React", "Node.js"],
    },
    {
      number: "02",
      title: "Task Management App",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Product Design", "UX Research", "TypeScript"],
    },
    {
      number: "03",
      title: "Weather Dashboard",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Data Visualization", "API Integration", "React"],
    },
    {
      number: "04",
      title: "Portfolio Website",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Website Design", "Animation", "Branding"],
    },
  ];

  return (
    <main className="bg-[#fffef3] min-h-screen w-full pt-24 md:pt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-24">
        <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl md:text-7xl mb-12 md:mb-20">
          case studies
        </h1>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay>
                <ProjectNumber>{project.number}</ProjectNumber>
                <ProjectTitle>{project.title}</ProjectTitle>
                <TagList>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagList>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </div>
    </main>
  );
};