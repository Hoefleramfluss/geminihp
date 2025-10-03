import React, { useState, useEffect } from 'react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { name: 'Lösungen', href: '#products' },
  { name: 'Preise', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#demo' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#">
            <img className="h-10 w-auto" src="https://i.ibb.co/XrxVxvc8/logo.png" alt="Workflow AI Logo" />
          </a>
          
          <div className="hidden lg:flex items-center gap-x-8">
            <nav className="flex gap-x-8">
                {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                    {item.name}
                </a>
                ))}
            </nav>
            <div className="text-xs text-gray-400 flex items-center gap-x-2 border border-white/20 rounded-full px-3 py-1.5">
                <span>DSGVO-Konform</span>
                <span>🇦🇹</span>
            </div>
            <a href="#demo" className="rounded-full bg-[#2e6df6] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">
                Kostenlose Demo
            </a>
          </div>

          <div className="lg:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;