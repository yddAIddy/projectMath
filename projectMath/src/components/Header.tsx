import React, { useEffect, useState } from 'react';
import { Brain, Menu, X, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain className="h-8 w-8 text-cyan-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              ML Math Master
            </h1>
          </motion.div>
          
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search concepts..."
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 ml-2 w-64"
            />
          </div>

          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden lg:flex space-x-8">
            <NavLink href="#concepts">Core Concepts</NavLink>
            <NavLink href="#visualizations">Visualizations</NavLink>
            <NavLink href="#practice">Practice</NavLink>
            <NavLink href="#resources">Resources</NavLink>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}