import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = (): JSX.Element => {
  const location = useLocation();
  
  const navItems = [
    { text: "about me", href: "/", key: "/" },
    { text: "projects", href: "/projects", key: "/projects" },
    { text: "my resume", href: "/resume", key: "/resume" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fffef3] z-50 border-b border-[#004ce4]/10">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative w-[72px] h-[86px]">
              <span className="absolute top-0 left-0 [text-shadow:0px_4px_4px_#00000040] font-['Lora',Helvetica] font-normal text-[#004ce4] text-[64px] tracking-[-1.28px]">
                V
              </span>
              <span className="absolute top-[11px] left-[26px] [text-shadow:0px_4px_4px_#00000040] font-['Lora',Helvetica] font-normal text-[#004ce4] text-[64px] tracking-[-1.28px]">
                S
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-20">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                <Link
                  to={item.href}
                  className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-2xl tracking-[-0.48px] hover:opacity-70 transition-opacity duration-200"
                >
                  {item.text}
                </Link>
                {isActive(item.key) && (
                  <div className="absolute w-full h-px top-[35px] left-0 bg-[#004ce4]" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};