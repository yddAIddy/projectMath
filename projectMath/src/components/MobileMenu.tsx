import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden fixed inset-0 bg-slate-900/98 backdrop-blur-lg z-50"
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <MobileNavLink href="#concepts">Core Concepts</MobileNavLink>
            <MobileNavLink href="#visualizations">Visualizations</MobileNavLink>
            <MobileNavLink href="#practice">Practice</MobileNavLink>
            <MobileNavLink href="#resources">Resources</MobileNavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-white text-2xl font-bold hover:text-cyan-400 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}