import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillTag = styled(motion.div)`
  font-family: 'Lohit Tamil', Helvetica;
  color: #004ce4;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #004ce4;
  border-radius: 999px;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 76, 228, 0.02);
  }
`;

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'R', 'C++', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'TypeScript', 'React.js']
    },
    {
      title: 'Machine Learning',
      skills: ['Large Language Models', 'Regression', 'Classification', 'Feature Engineering', 'Model Evaluation']
    },
    {
      title: 'Tools & Libraries',
      skills: ['Llama 3.1', 'Groq API', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Streamlit', 'Gemini Studio', 'LangChain']
    },
    {
      title: 'Soft Skills',
      skills: ['Creative Problem-Solving', 'Team Collaboration', 'Leadership', 'Analytical Thinking', 'Project Management']
    }
  ];

  return (
    <SkillsContainer>
      <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-5xl mb-8">
        skills
      </h2>

      {skillCategories.map((category, index) => (
        <SkillCategory key={index}>
          <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl">
            {category.title}
          </h3>
          <SkillsGrid>
            {category.skills.map((skill, skillIndex) => (
              <SkillTag
                key={skillIndex}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsGrid>
        </SkillCategory>
      ))}
    </SkillsContainer>
  );
};

export default Skills; 