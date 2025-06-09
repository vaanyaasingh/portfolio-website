import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface SlideData {
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: SlideData[];
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 832px;
  overflow: hidden;
  border-radius: 20px;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 76, 228, 0.8) 0%, transparent 100%);
  color: white;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const Dot = styled.button<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <SlideContent>
            <h3 className="font-['Lora',Helvetica] text-2xl mb-2">
              {slides[currentIndex].title}
            </h3>
            <p className="font-['Lohit_Tamil-Regular',Helvetica] text-lg">
              {slides[currentIndex].description}
            </p>
          </SlideContent>
        </motion.div>
      </AnimatePresence>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={currentIndex === index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
