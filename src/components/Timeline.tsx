import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TimelineContainer = styled.section`
  padding: 6rem 0;
  background: #fffef3;
  position: relative;
`;

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 3rem auto 0;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background: #004ce4;
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isLeft: boolean }>`
  display: flex;
  justify-content: ${props => props.isLeft ? 'flex-end' : 'flex-start'};
  padding-left: ${props => props.isLeft ? '0' : '50%'};
  padding-right: ${props => props.isLeft ? '50%' : '0'};
  margin: 2rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-right: 0;
    justify-content: flex-start;
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #004ce4;
    border-radius: 50%;
    left: calc(50% - 8px);
    top: 24px;

    @media (max-width: 768px) {
      left: calc(2rem - 8px);
    }
  }
`;

const TimelineContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #004ce4;
  border-radius: 16px;
  padding: 1.5rem;
  width: 80%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const timeline = [
  {
    year: '2024',
    title: 'Program Manager',
    organization: 'Go Girl Organisation',
    description: 'Leading nationwide coding education programs, empowering 100+ underprivileged girls. Spearheaded GHCI 2024 presence and fundraising initiatives.',
    type: 'experience'
  },
  {
    year: '2023',
    title: 'Tech Intern',
    organization: 'Healthians, Gurugram',
    description: 'Developed ML models using Python, ChatGPT, and LangChain for personalized blood test recommendations. Improved model accuracy by 40%.',
    type: 'experience'
  },
  {
    year: '2023',
    title: 'Computer Science Engineering',
    organization: 'RV College of Engineering',
    description: 'Focusing on Data Science, ML, and Full-stack development. Building projects in React, Python, and exploring AI applications.',
    type: 'education'
  },
  {
    year: '2022',
    title: 'Senior Associate',
    organization: 'Entrepreneurship Club of RVCE',
    description: 'Building the club website and managing social media presence. Leading technical initiatives and mentoring junior developers.',
    type: 'experience'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Timeline = () => {
  return (
    <TimelineContainer>
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-5xl text-center">
          journey so far
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TimelineWrapper>
            {timeline.map((event, index) => (
              <TimelineItem
                key={index}
                isLeft={index % 2 === 0}
                variants={item}
              >
                <TimelineContent
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-sm text-white bg-[#004ce4] mb-2">
                    {event.type}
                  </span>
                  <h3 className="font-['Lora',Helvetica] text-[#004ce4] text-2xl mb-1">
                    {event.title}
                  </h3>
                  <h4 className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg mb-2">
                    {event.organization}
                  </h4>
                  <p className="text-[#004ce4]/70">
                    {event.description}
                  </p>
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-[#004ce4] text-white px-4 py-1 rounded-full text-sm">
                    {event.year}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineWrapper>
        </motion.div>
      </div>
    </TimelineContainer>
  );
};

export default Timeline; 