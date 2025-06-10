import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background: #fffef3;
  overflow: hidden;
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  border-top: 2px solid #004ce4;
  border-bottom: 2px solid #004ce4;
  padding: 1rem 0;
`;

const MarqueeContent = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  gap: 2rem;
`;

const MarqueeText = styled.span`
  font-family: 'Lora', Helvetica;
  font-style: italic;
  color: #004ce4;
  font-size: 1.5rem;
`;

const FooterText = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-family: 'Lohit Tamil', Helvetica;
  color: #004ce4;
  font-size: 1.125rem;
`;

export const Footer = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <FooterWrapper>
      <MarqueeContainer>
        <MarqueeContent
          variants={marqueeVariants}
          animate="animate"
          style={{ willChange: "transform" }}
        >
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
          <MarqueeText>developer • designer • dreamer • </MarqueeText>
        </MarqueeContent>
      </MarqueeContainer>
      <FooterText>
        made with 💗 vaanya :)
      </FooterText>
    </FooterWrapper>
  );
}; 