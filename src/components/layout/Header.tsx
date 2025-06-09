import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styled from "styled-components";

const MobileMenuButton = styled.button`
  display: none;
  color: #004ce4;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fffef3;
    padding: 6rem 2rem;
    width: 100%;
    max-width: 300px;
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-4px 0 20px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { text: "about", href: "/", key: "/" },
    { text: "projects", href: "/projects", key: "/projects" },
    { text: "contact", href: "/resume", key: "/resume" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fffef3] z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-6 md:py-8">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="relative">
              <span className="font-['Lora',Helvetica] font-normal text-[#004ce4] text-3xl md:text-4xl">
                VS
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </MobileMenuButton>

          {/* Navigation */}
          <Nav isOpen={isMenuOpen} className="flex md:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={closeMenu}
                className={`font-['Lora',Helvetica] font-normal text-[#004ce4] text-xl tracking-wide hover:opacity-70 transition-opacity duration-200 
                  ${isActive(item.key) ? 'opacity-70' : ''}
                  md:text-xl block mb-8 md:mb-0`}
              >
                {item.text}
              </Link>
            ))}
          </Nav>
        </div>
      </div>
    </header>
  );
};