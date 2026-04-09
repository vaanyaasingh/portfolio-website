import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { DownloadIcon, MailIcon, MapPinIcon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import { ExperienceToggle } from "../../components/ExperienceToggle";

const ExpandableCard = styled(Card)`
  border: 2px solid #004ce4;
  border-radius: 20px;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 76, 228, 0.02);
  }
`;

const SkillTag = styled.span`
  font-family: 'Lohit Tamil', Helvetica;
  color: #004ce4;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 76, 228, 0.1);
  border-radius: 999px;
`;

export const Resume = (): JSX.Element => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const skills = {
    "Programming Languages": ["Python", "R", "C++", "C", "Java", "HTML", "CSS", "JavaScript", "SQL", "TypeScript", "React.js"],
    "Machine Learning": ["Large Language Models", "Regression", "Classification", "Feature Engineering", "Model Evaluation"],
    "Tools and Libraries": ["Llama 3.1", "Groq API", "scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "Gemini Studio", "LangChain"],
    "Soft Skills": ["Creative Problem-Solving", "Team Collaboration", "Leadership", "Analytical Thinking", "Project Management"]
  };

  const education = {
    degree: "BE in Computer Science",
    institution: "RV College of Engineering (RVCE), Bengaluru",
    period: "Expected 2027",
    courses: [
      "Data Science for Engineers",
      "Linear Algebra & Probability Theory",
      "Statistics and MatLab",
      "Data Structures and Applications",
      "Applied Digital Logic Design",
      "Operating Systems",
      "C++",
      "Material Science for Engineers"
    ]
  };

  const handleDownloadResume = () => {
    window.open('/Vaanya Singh April 26.pdf', '_blank');
  };

  return (
    <main className="bg-[#fffef3] min-h-screen w-full pt-24 md:pt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl md:text-6xl tracking-[-1.2px] mb-2 md:mb-4">
            let's connect
          </h1>
          <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-xl md:text-2xl tracking-[-0.4px] mb-8 md:mb-12">
            I'm always open to new opportunities and collaborations
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2">
              <MailIcon className="w-4 h-4 md:w-5 md:h-5 text-[#004ce4]" />
              <span className="font-['Lohit_Tamil-Regular',Helvetica] text-sm md:text-base text-[#004ce4]">vaanya277@gmail.com</span>
            </div>
          
            <div className="flex items-center justify-center gap-2">
              <MapPinIcon className="w-4 h-4 md:w-5 md:h-5 text-[#004ce4]" />
              <span className="font-['Lohit_Tamil-Regular',Helvetica] text-sm md:text-base text-[#004ce4]">Bengaluru, India</span>
            </div>
          </div>

          {/* Download Button */}
          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#004ce4] text-[#004ce4] rounded-[20px] font-['Lora',Helvetica] text-lg md:text-xl hover:bg-[#004ce4] hover:text-white transition-all duration-300"
          >
            <DownloadIcon className="w-5 h-5 md:w-6 md:h-6" />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Education Section */}
          <ExpandableCard onClick={() => toggleSection('education')}>
            <CardContent className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl md:text-3xl">
                  Education
                </h2>
                <motion.div
                  animate={{ rotate: expandedSection === 'education' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#004ce4]" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSection === 'education' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t-2 border-[#004ce4]/10 pt-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                        <div>
                          <h3 className="font-['Lora',Helvetica] text-[#004ce4] text-xl mb-1">
                            {education.degree}
                          </h3>
                          <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                            {education.institution}
                          </p>
                        </div>
                        <span className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-base bg-[#004ce4]/10 px-3 py-1 rounded-full">
                          {education.period}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-['Lora',Helvetica] text-[#004ce4] text-lg mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.courses.map((course, index) => (
                            <SkillTag key={index}>{course}</SkillTag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </ExpandableCard>

          {/* Experience Section */}
          <ExperienceToggle
            expanded={expandedSection === "experience"}
            onToggle={() => toggleSection("experience")}
          />

          {/* Skills Section */}
          <ExpandableCard onClick={() => toggleSection('skills')}>
            <CardContent className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl md:text-3xl">
                  Skills
                </h2>
                <motion.div
                  animate={{ rotate: expandedSection === 'skills' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#004ce4]" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSection === 'skills' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6">
                      {Object.entries(skills).map(([category, skillList], index) => (
                        <div key={index} className="border-t-2 border-[#004ce4]/10 pt-6">
                          <h3 className="font-['Lora',Helvetica] text-[#004ce4] text-xl mb-3">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill, skillIndex) => (
                              <SkillTag key={skillIndex}>
                                {skill}
                              </SkillTag>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </ExpandableCard>
        </div>
      </div>
      <Footer />
    </main>
  );
};