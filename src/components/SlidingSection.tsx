import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface SlideData {
  image: string;
  mainText: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
}

interface SlidingSectionProps {
  slides: SlideData[];
}

const Container = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  position: relative;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 578px;
  height: 832px;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 2px solid #004ce4;
  color: #004ce4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #004ce4;
    color: white;
  }

  &.prev {
    left: -24px;
  }

  &.next {
    right: -24px;
  }

  @media (max-width: 768px) {
    &.prev {
      left: 16px;
    }
    &.next {
      right: 16px;
    }
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#004ce4' : 'rgba(0, 76, 228, 0.3)'};
  transition: background 0.3s ease;
`;

const ContentSection = styled(motion.div)`
  max-width: 646px;
  margin-top: 200px;

  @media (max-width: 1024px) {
    margin-top: 0;
    padding: 0 1rem;
  }
`;

export const SlidingSection: React.FC<SlidingSectionProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container>
      <ImageWrapper>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].image}
            alt="Slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </AnimatePresence>

        <ArrowButton className="prev" onClick={handlePrev}>
          <ChevronLeft size={24} />
        </ArrowButton>
        <ArrowButton className="next" onClick={handleNext}>
          <ChevronRight size={24} />
        </ArrowButton>

        <Dots>
          {slides.map((_, index) => (
            <Dot key={index} active={currentIndex === index} />
          ))}
        </Dots>
      </ImageWrapper>

      <AnimatePresence mode="wait">
        <ContentSection
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-[32px] tracking-[-0.64px] leading-normal">
            {slides[currentIndex].mainText}
          </p>

          <div className="mt-12 space-y-6">
            {slides[currentIndex].cards.map((card, index) => (
              <Card key={index} className="rounded-[20px] border-2 border-[#004ce4] bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>
      </AnimatePresence>
    </Container>
  );
};

export default SlidingSection;