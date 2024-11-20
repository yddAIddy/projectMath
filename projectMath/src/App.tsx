import React, { useState } from 'react';
import { FunctionSquare, Binary, Sigma, LineChart, Brain, BookOpen, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import ConceptCard from './components/ConceptCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const concepts = [
    {
      title: 'Linear Algebra Fundamentals',
      description: 'Master matrices, vectors, and transformations - the building blocks of machine learning.',
      difficulty: 'Beginner',
      icon: <FunctionSquare className="h-6 w-6" />
    },
    {
      title: 'Probability & Statistics',
      description: 'Understand probability distributions and statistical inference for ML models.',
      difficulty: 'Intermediate',
      icon: <Binary className="h-6 w-6" />
    },
    {
      title: 'Calculus for ML',
      description: 'Learn derivatives, gradients, and optimization techniques for neural networks.',
      difficulty: 'Advanced',
      icon: <Sigma className="h-6 w-6" />
    },
    {
      title: 'Data Visualization',
      description: 'Explore techniques to visualize high-dimensional data and model performance.',
      difficulty: 'Intermediate',
      icon: <LineChart className="h-6 w-6" />
    }
  ] as const;

  return (
    <div className="min-h-screen text-white">
      <Header isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-16 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1.1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Brain className="h-16 w-16 text-cyan-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Master the Math Behind Machine Learning
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Interactive lessons and visualizations to help you understand the mathematical foundations of AI and ML.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">Start Learning</button>
            <button className="btn-secondary">View Curriculum</button>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <BookOpen />, stat: '100+', label: 'Interactive Lessons' },
            { icon: <Code />, stat: '50+', label: 'Practice Problems' },
            { icon: <Award />, stat: '10K+', label: 'Active Learners' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4 text-cyan-400">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* Core Concepts Grid */}
        <section id="concepts" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Core Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ConceptCard {...concept} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="visualizations" className="card p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Interactive Visualizations
          </h2>
          <p className="text-gray-300 mb-8">
            Explore mathematical concepts through interactive demonstrations and real-time visualizations.
          </p>
          <div className="aspect-video bg-slate-800/50 rounded-lg flex items-center justify-center border border-white/10">
            <p className="text-gray-400">Interactive visualization demo will be loaded here</p>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="card p-8 text-center mb-16"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Ready to Start Learning?
          </h2>
          <p className="mb-6 text-lg text-gray-300">Join thousands of students mastering ML mathematics</p>
          <button className="btn-primary">Get Started Now</button>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2024 ML Math Master. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;