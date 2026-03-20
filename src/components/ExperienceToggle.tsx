import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ExpandableCard = styled(Card)`
  border: 2px solid #004ce4;
  border-radius: 20px;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 76, 228, 0.02);
  }
`;

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "AI Enablement Intern",
    company: "SKF ISEA India",
    period: "August 2025 - September 2025",
    description:
      "• Annotated, classified, and structured datasets to support enterprise AI workflows. \n• Designed and tested chatbot UI and backend, contributing to architecture and integration workflows. \n• Shadowed supplier demos and senior leadership calls to gain exposure to enterprise IT practices. \n• Gained hands-on experience with Azure, Snowflake, Databricks, OpenAI, and LangChain.",
  },
  {
    title: "Native React Intern",
    company: "Avalanche Laboratory OÜ",
    period: "July 2025 - September 2025",
    description:
      "• Completed a React Native Internship at Avalanche Laboratory OÜ for the Wine Cellar App project. \n• Developed and implemented key mobile UI screens including login, home, and wine listings using React Native and Expo.\n• Built reusable components such as a shared modal system to enhance app structure and scalability. \n• Contributed to design efforts, including creating the app’s initial logo and providing UI/UX testing feedback for the iPad version. \n• Gained hands-on experience in collaborative workflows, mobile development, and design integration.",
  },
  {
    title: "Program Manager - Volunteer",
    company: "Go Girl Organisation",
    period: "November 2021 - Current",
    description:
      "• Established and scaled 4 nationwide coding education programs, empowering 100+ underprivileged girls\n• Launched our first 'Friend'-raising campaign raising Rs.50,000\n• Spearheaded the Go girl's flagship presence at GHCI 2024, orchestrating marketing strategy and booth experience",
  },
  {
    title: "Tech Intern",
    company: "Healthians",
    period: "July 2023 - August 2023",
    description:
      "• Developed a Machine Learning Model using Python, ChatGPT, and LangChain for personalized blood test recommendations\n• Implemented prompt engineering techniques to enhance model accuracy by 40%",
  },
  {
    title: "Senior Associate",
    company: "Entrepreneurship Cell, RVCE",
    period: "2023 - Present",
    description:
      "• Building the club website using Next.js and TypeScript\n• Leading design and tech initiatives\n• Organizing events and mentoring junior members",
  },
];

export type ExperienceToggleProps = {
  expanded: boolean;
  onToggle: () => void;
  variant?: "default" | "compact";
};

export const ExperienceToggle = ({
  expanded,
  onToggle,
  variant = "default",
}: ExperienceToggleProps): JSX.Element => {
  const isCompact = variant === "compact";

  return (
    <ExpandableCard onClick={onToggle} aria-expanded={expanded}>
      <CardContent className={isCompact ? "p-4 md:p-5" : "p-6 md:p-8"}>
        <div
          className={
            isCompact
              ? "flex justify-between items-center mb-2"
              : "flex justify-between items-center mb-4"
          }
        >
          <h2
            className={
              isCompact
                ? "font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl md:text-2xl"
                : "font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl md:text-3xl"
            }
          >
            Experience
          </h2>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown
              className={isCompact ? "w-5 h-5 text-[#004ce4]" : "w-6 h-6 text-[#004ce4]"}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={isCompact ? "space-y-4" : "space-y-6"}>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={
                      isCompact
                        ? "border-t-2 border-[#004ce4]/10 pt-4"
                        : "border-t-2 border-[#004ce4]/10 pt-6"
                    }
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                      <div>
                        <h3
                          className={
                            isCompact
                              ? "font-['Lora',Helvetica] text-[#004ce4] text-base md:text-lg"
                              : "font-['Lora',Helvetica] text-[#004ce4] text-xl"
                          }
                        >
                          {exp.title}
                        </h3>
                        <p
                          className={
                            isCompact
                              ? "font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-base"
                              : "font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg"
                          }
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={
                          isCompact
                            ? "font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-xs px-2 py-0.5 bg-[#004ce4]/10 rounded-full"
                            : "font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-base px-3 py-1 bg-[#004ce4]/10 rounded-full"
                        }
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p
                      className={
                        isCompact
                          ? "font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-sm leading-relaxed whitespace-pre-line"
                          : "font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-base leading-relaxed whitespace-pre-line"
                      }
                    >
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </ExpandableCard>
  );
};

