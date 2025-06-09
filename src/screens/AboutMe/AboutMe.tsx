import {
  ArrowDownIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const AboutMe = (): JSX.Element => {
  const socialLinks = [
    {
      icon: <GithubIcon className="w-[31px] h-[31px]" />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon className="w-[31px] h-[31px]" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <InstagramIcon className="w-[33px] h-[33px]" />,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <main className="bg-[#fffef3] min-h-screen w-full pt-32">
      <div className="max-w-[1440px] mx-auto relative pb-24 px-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-[64px] tracking-[-1.28px]">
              hi, my name is
            </h2>
            <h1 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-8xl tracking-[-1.92px] mt-2">
              Vaanya Singh
            </h1>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 mt-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-[#004ce4] hover:opacity-70 transition-opacity duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Role Card */}
          <div className="mt-16 relative flex items-center flex-wrap justify-center gap-4">
            <span className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-5xl tracking-[-0.96px]">
              a
            </span>

            <Card className="w-[634px] h-[142px] rounded-[20px] border-2 border-solid border-[#004ce4] bg-transparent hover:bg-white/50 transition-colors duration-300">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <p className="font-['Lora',Helvetica] font-normal italic text-[#004ce4] text-5xl text-center tracking-[-0.96px] px-4">
                  Computer Science Engineer + UX Designer
                </p>
              </CardContent>
            </Card>

            <span className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-5xl tracking-[-0.96px]">
              (in progress)
            </span>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="absolute top-[200px] left-20 flex flex-col items-center hidden lg:flex">
          <p className="transform -rotate-90 font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-[32px] tracking-[-0.64px] mb-4">
            scroll down
          </p>
          <ArrowDownIcon className="w-[15px] h-[204px] text-[#004ce4]" />
        </div>

        {/* About Section */}
        <section className="mt-80 flex gap-12 flex-col lg:flex-row items-center lg:items-start">
          <div className="relative flex-shrink-0">
            <img
              className="w-[578px] h-[832px] object-cover rounded-[20px] shadow-2xl"
              alt="Vaanya Singh"
              src="/img-0417-1.png"
            />
            <div className="absolute top-[-40px] left-[20px] font-['Lora',Helvetica] text-[#004ce4] text-5xl italic">
              that's me
            </div>
          </div>

          <div className="max-w-[646px] lg:mt-[200px]">
            <p className="font-['Lohit_Tamil-Regular',Helvetica] font-normal text-[#004ce4] text-[32px] tracking-[-0.64px] leading-normal">
              I'm currently studying Computer Science at RV College of
              Engineering, where my world revolves around building — apps,
              ideas, and communities.
              <br />
              <br />
              Between writing code and crafting screens, I'm exploring how
              design can drive change.
              <br />
              <br />I am a Senior Associate at Entrepreneurship Club of RVCE.
              👩🎨 doing what I do best Design and Tech :)
            </p>

            {/* Additional Info Cards */}
            <div className="mt-12 space-y-6">
              <Card className="rounded-[20px] border-2 border-[#004ce4] bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px] mb-3">
                    What I Love
                  </h3>
                  <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                    Creating seamless user experiences, solving complex problems with elegant code, 
                    and bringing innovative ideas to life through technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[20px] border-2 border-[#004ce4] bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.4px] mb-3">
                    Currently Learning
                  </h3>
                  <p className="font-['Lohit_Tamil-Regular',Helvetica] text-[#004ce4] text-lg">
                    Advanced React patterns, cloud architecture, and exploring the intersection 
                    of AI and user experience design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};