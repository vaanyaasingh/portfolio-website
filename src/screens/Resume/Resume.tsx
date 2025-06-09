import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { DownloadIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export const Resume = (): JSX.Element => {
  const experiences = [
    {
      title: "Senior Associate",
      company: "Entrepreneurship Club of RVCE",
      period: "2023 - Present",
      description: "Leading design and tech initiatives, organizing events, and mentoring junior members in entrepreneurship and innovation."
    },
    {
      title: "UX Design Intern",
      company: "Tech Startup",
      period: "Summer 2023",
      description: "Designed user interfaces for mobile applications, conducted user research, and created wireframes and prototypes."
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2022 - 2023",
      description: "Developed responsive web applications for small businesses using React, TypeScript, and modern CSS frameworks."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "RV College of Engineering",
      period: "2021 - 2025",
      details: "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering"
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Frontend Technologies": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend Technologies": ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    "Design Tools": ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    "Other Tools": ["Git", "Docker", "AWS", "Firebase"]
  };

  return (
    <main className="bg-[#fffef3] min-h-screen w-full pt-32">
      <div className="max-w-[1440px] mx-auto px-8 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-6xl tracking-[-1.2px] mb-4">
            My Resume
          </h1>
          <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px] mb-8">
            Computer Science Engineer + UX Designer
          </p>
          
          {/* Contact Info */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-[#004ce4]" />
              <span className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4]">vaanya@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-[#004ce4]" />
              <span className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4]">+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-[#004ce4]" />
              <span className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4]">Bangalore, India</span>
            </div>
          </div>

          {/* Download Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#004ce4] text-white rounded-[20px] font-['Lora',Helvetica] text-lg hover:bg-[#004ce4]/80 transition-colors duration-200">
            <DownloadIcon className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <section>
              <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl tracking-[-0.8px] mb-8">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="rounded-[20px] border-2 border-[#004ce4] bg-white">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px]">
                            {exp.title}
                          </h3>
                          <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-xl">
                            {exp.company}
                          </p>
                        </div>
                        <span className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg bg-[#004ce4]/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl tracking-[-0.8px] mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="rounded-[20px] border-2 border-[#004ce4] bg-white">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px]">
                            {edu.degree}
                          </h3>
                          <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-xl">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg bg-[#004ce4]/10 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg leading-relaxed">
                        {edu.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <section>
              <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl tracking-[-0.8px] mb-8">
                Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <Card key={index} className="rounded-[20px] border-2 border-[#004ce4] bg-white">
                    <CardContent className="p-6">
                      <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl tracking-[-0.4px] mb-4">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-[#004ce4]/10 text-[#004ce4] rounded-full text-sm font-['Lohit_Tamil-Regular',Helvetica]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-3xl tracking-[-0.6px] mb-6">
                Achievements
              </h2>
              <Card className="rounded-[20px] border-2 border-[#004ce4] bg-white">
                <CardContent className="p-6">
                  <ul className="space-y-3 font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4]">
                    <li>• Winner of College Hackathon 2023</li>
                    <li>• Published research paper on UX Design</li>
                    <li>• Led team of 15+ members in EC-RVCE</li>
                    <li>• Completed 10+ freelance projects</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};