import {
  ArrowDownIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import Skills from "../../components/Skills";
import Timeline from "../../components/Timeline";
import Contact from "../../components/Contact";

export const AboutMe = (): JSX.Element => {
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fffef3] min-h-screen w-full">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {["hero", "about", "skills", "timeline", "contact"].map((section) => (
          <motion.button
            key={section}
            className="w-3 h-3 rounded-full border-2 border-[#004ce4] bg-[#fffef3] hover:bg-[#004ce4] transition-colors duration-300"
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto relative pb-24 px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-[45px] tracking-[-1.28px]">
              hi, my name is
            </h3>
            <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-8xl tracking-[-1.92px] mt-2">
              Vaanya Singh
            </h1>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-8 mt-12"
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
            className="mt-16 relative flex items-center flex-wrap justify-center gap-4"
          >
            <span className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-4xl tracking-[-0.96px]">
              a
            </span>

            <Card className="w-[634px] h-[142px] rounded-[20px] border-2 border-solid border-[#004ce4] bg-transparent hover:bg-white/50 transition-colors duration-300">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <p className="font-['Lora',Helvetica] font-normal italic text-[#004ce4] text-5xl text-center tracking-[-0.96px] px-4">
                  Computer Science Engineer + UX Designer
                </p>
              </CardContent>
            </Card>

            <span className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-4xl tracking-[-0.96px]">
              (in progress)
            </span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection("about")}
            whileHover={{ y: 5 }}
          >
            <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-lg mb-2">
              scroll down
            </p>
            <ArrowDownIcon className="w-6 h-6 text-[#004ce4] animate-bounce" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen pt-5 space-y-24">
          {/* First About Block */}
          <div className="flex gap-12 flex-col lg:flex-row items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0"
            >
              <img
                className="w-[578px] h-[832px] object-cover rounded-[20px]"
                alt="Vaanya Singh"
                src="/img-0417-1.png"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-[646px] lg:mt-[200px]"
            >
              <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.64px] leading-normal">
                I'm currently studying Computer Science at RV College of
                Engineering, where my world revolves around building — apps,
                ideas, and communities.
                <br />
                <br />
                Between writing code and crafting screens, I'm exploring how
                design can drive change.
                <br />
                <br />
                I am a Senior Associate at Entrepreneurship Club of RVCE.
                👩🎨 doing what I do best Design and Tech :)
              </p>
            </motion.div>
          </div>

          {/* Go Girl Community Section */}
          <div className="flex gap-12 flex-col-reverse lg:flex-row items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-[646px] lg:mt-[100px]"
            >
              <div className="flex items-center gap-6 mb-8">
                <img
                  src="/IMG_0426.png"
                  alt="Vaanya pic 2"
                  className="w-24 h-24"
                />
                <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-4xl">
                  Code meets Community
                </h3>
              </div>

              <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.64px] leading-relaxed mb-8">
                As a Program Manager at Go Girl Organisation, I'm on a mission to empower underserved girls through coding education. We've already reached 100+ girls nationwide! 🚀
                <br /><br />
                What makes me proud:
              </p>

              <div className="space-y-6">
                <Card className="rounded-[20px] border-2 border-[#004ce4] bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl tracking-[-0.4px] mb-2">
                      🎨 Brand & Community
                    </h3>
                    <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                      Crafted the visual identity and built an engaging community website from scratch using React and Figma.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-[20px] border-2 border-[#004ce4] bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl tracking-[-0.4px] mb-2">
                      💫 Impact
                    </h3>
                    <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                      Led our first fundraising campaign raising Rs.50,000 and spearheaded our presence at GHCI 2024.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                className="w-[578px] object-cover rounded-[20px]"
                alt="Vaanya at Go Girl Community"
                src="/img-go-girl.png"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-12 -right-12 w-32 h-32 bg-white rounded-full p-4 shadow-xl"
              >
                <img
                  src="/code-meets-community.png"
                  alt="Code Meets Community"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <Timeline />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
};