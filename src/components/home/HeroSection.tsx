import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Rocket } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(66,108,245,0.1),_rgba(66,108,245,0)_50%)]"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Brain className="h-16 w-16 text-indigo-500" />
          </motion.div>

          <AnimatedText
            text="KMA Software"
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          />

          <AnimatedText
            text="Transforming Ideas into Intelligent Solutions"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project
              <motion.span
                className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-100 blur transition duration-200"
                initial={false}
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 font-bold text-indigo-400 transition-all duration-200 bg-transparent border-2 border-indigo-400 rounded-full hover:bg-indigo-950 focus:outline-none"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}