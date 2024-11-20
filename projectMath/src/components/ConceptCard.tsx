import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ConceptCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ReactNode;
}

export default function ConceptCard({ title, description, difficulty, icon }: ConceptCardProps) {
  const difficultyColor = {
    Beginner: 'bg-emerald-400/20 text-emerald-400',
    Intermediate: 'bg-yellow-400/20 text-yellow-400',
    Advanced: 'bg-red-400/20 text-red-400'
  }[difficulty];

  return (
    <motion.div 
      className="card overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <motion.div 
            className="p-3 bg-blue-400/20 rounded-lg text-blue-400"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <button className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
          <span>Learn More</span>
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}