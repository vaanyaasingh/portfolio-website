import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #fffef3 0%, rgba(255, 254, 243, 0.8) 100%);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto 0;
  padding: 0 2rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #004ce4;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 76, 228, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const skills = [
  {
    name: 'React.js',
    icon: '/icons/react.svg',
    category: 'Frontend'
  },
  {
    name: 'Python',
    icon: '/icons/python.svg',
    category: 'Languages'
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    category: 'Languages'
  },
  {
    name: 'Machine Learning',
    icon: '/icons/ml.svg',
    category: 'AI/ML'
  },
  {
    name: 'Figma',
    icon: '/icons/figma.svg',
    category: 'Design'
  },
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
    category: 'Backend'
  },
  {
    name: 'SQL',
    icon: '/icons/sql.svg',
    category: 'Database'
  },
  {
    name: 'Git',
    icon: '/icons/git.svg',
    category: 'Tools'
  },
  {
    name: 'C++',
    icon: '/icons/cpp.svg',
    category: 'Languages'
  },
  {
    name: 'UI/UX',
    icon: '/icons/uiux.svg',
    category: 'Design'
  },
  {
    name: 'Data Science',
    icon: '/icons/data.svg',
    category: 'Analytics'
  },
  {
    name: 'LangChain',
    icon: '/icons/langchain.svg',
    category: 'AI/ML'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const Skills = () => {
  return (
    <SkillsContainer>
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-5xl text-center">
          technical toolkit
        </h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <IconWrapper>
                  <img src={skill.icon} alt={skill.name} />
                </IconWrapper>
                <h3 className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                  {skill.name}
                </h3>
                <p className="text-sm text-[#004ce4]/70 mt-1">
                  {skill.category}
                </p>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </div>
    </SkillsContainer>
  );
};

export default Skills; 