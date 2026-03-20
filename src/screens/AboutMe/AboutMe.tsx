import { useState } from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer";
import { ExperienceToggle } from "../../components/ExperienceToggle";

export const AboutMe = (): JSX.Element => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  const socialLinks = [
    {
      icon: <GithubIcon className="w-[31px] h-[31px]" />,
      href: "https://github.com/vaanyaasingh",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon className="w-[31px] h-[31px]" />,
      href: "https://www.linkedin.com/in/vaanyasingh/",
      label: "LinkedIn",
    },
    {
      icon: <InstagramIcon className="w-[33px] h-[33px]" />,
      href: "https://www.instagram.com/vaanyaa27/",
      label: "Instagram",
    },
  ];

  return (
    <main className="bg-[#fffef3] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto relative px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h3 className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl md:text-[45px] tracking-[-1.28px]">
              hi, my name is
            </h3>
            <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-5xl md:text-8xl tracking-[-1.92px] mt-2">
              Vaanya Singh
            </h1>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 md:gap-8 mt-8 md:mt-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-[#004ce4] hover:opacity-70 transition-opacity duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Role Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 relative flex items-center flex-wrap justify-center gap-4 px-4"
          >
            <span className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl md:text-4xl tracking-[-0.96px]">
              a
            </span>

            <Card className="w-full md:w-[634px] h-auto md:h-[142px] rounded-[20px] border-2 border-solid border-[#004ce4] bg-transparent hover:bg-white/50 transition-colors duration-300">
              <CardContent className="p-4 md:p-0 flex items-center justify-center h-full">
                <p className="font-['Lora',Helvetica] font-normal italic text-[#004ce4] text-3xl md:text-5xl text-center tracking-[-0.96px]">
                  Computer Science Engineer + UX Designer
                </p>
              </CardContent>
            </Card>

            <span className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl md:text-4xl tracking-[-0.96px]">
              (in progress)
            </span>
          </motion.div>

          {/* Experience Toggle */}
          <div className="mt-10 w-full max-w-[560px] px-4">
            <div className="mx-auto">
              <ExperienceToggle
                expanded={isExperienceExpanded}
                onToggle={() => setIsExperienceExpanded(prev => !prev)}
                variant="compact"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen pt-5 space-y-12 md:space-y-24 px-4 md:px-0">
          {/* First About Block */}
          <div className="flex gap-8 md:gap-12 flex-col lg:flex-row items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0 w-full md:w-auto"
            >
              <img
                className="w-full md:w-[578px] h-[400px] md:h-[832px] object-cover rounded-[20px]"
                alt="Vaanya Singh"
                src="/vaanya pic.PNG"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-full md:max-w-[646px] lg:mt-[200px]"
            >
              <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-xl md:text-2xl tracking-[-0.64px] leading-normal">
              I'm a Computer Science student at RV College of Engineering 🧑‍💻 who loves building things that are useful, thoughtful, and sometimes just fun ✨
                <br />
                <br />
                Over the past few years, I've worked on AI/ML projects 🤖, built websites 🌐, and tried to use my skills to make a difference 💡
Currently, I'm exploring how I can bring my love for design 🎨 and tech 🛠️ together.

                <br />
                <br />
                This portfolio is a space where I bring together all the things I've been building, learning, and growing through 🌱
              </p>
            </motion.div>
          </div>

          {/* Go Girl Community Section */}
          <div className="flex gap-8 md:gap-12 flex-col-reverse lg:flex-row items-center lg:items-start mt-0 lg:mt-[-100px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-full md:max-w-[646px] lg:mt-[100px] lg:ml-[100px]"
            >
              <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-xl md:text-2xl tracking-[-0.64px] leading-relaxed">
              I'm passionate about making tech more inclusive. As a Program Manager at Go Girl, 
              I've lead initiatives that introduce young girls to 
              the world of coding — reaching over 2000+ students across India.
                <br /><br />
                I manage the Go Girl Community, a growing space where women in tech connect, learn, and support each other. 
                I take care of community-building and the visual identity
                 — from designing social media posts to shaping our branding and outreach strategy.
                <br />
                <br />
                In 2024, I got the chance to represent Go Girl at GHCI, 
                where I shared our vision of making tech education accessible and empowering for all. 🌟
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-0 lg:mt-[-80px] w-full md:w-auto"
            >
              <img
                className="w-full md:w-[578px] h-[400px] md:h-[832px] object-cover rounded-[20px]"
                alt="Vaanya at Go Girl Community"
                src="/vaanya at gogirl.PNG"
              />
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};