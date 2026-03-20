import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Send } from 'lucide-react';
import { ExperienceToggle } from "./ExperienceToggle";

const ContactContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, rgba(255, 254, 243, 0.8) 0%, #fffef3 100%);
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #004ce4;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(0, 76, 228, 0.3);
  border-radius: 10px;
  background: transparent;
  font-family: 'Lohit Tamil-Regular', Helvetica;
  color: #004ce4;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #004ce4;
    background: rgba(255, 255, 255, 0.5);
  }

  &::placeholder {
    color: rgba(0, 76, 228, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(0, 76, 228, 0.3);
  border-radius: 10px;
  background: transparent;
  font-family: 'Lohit Tamil-Regular', Helvetica;
  color: #004ce4;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #004ce4;
    background: rgba(255, 255, 255, 0.5);
  }

  &::placeholder {
    color: rgba(0, 76, 228, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: #004ce4;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Lora', Helvetica;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #e11d48;
  font-size: 0.875rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  color: #004ce4;
  margin-top: 1rem;
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <ContactContainer>
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-5xl text-center">
          let's connect
        </h2>

        {/* Experience Toggle */}
        <div className="mt-10 w-full max-w-[720px] mx-auto">
          <ExperienceToggle
            expanded={isExperienceExpanded}
            onToggle={() => setIsExperienceExpanded(prev => !prev)}
          />
        </div>
        
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting || isSubmitted}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting || isSubmitted}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting || isSubmitted}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}

            <SubmitButton
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </SubmitButton>
          </form>

          {isSubmitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-lg">Thank you for your message! I'll get back to you soon.</p>
            </SuccessMessage>
          )}
        </FormContainer>
      </div>
    </ContactContainer>
  );
};

export default Contact;