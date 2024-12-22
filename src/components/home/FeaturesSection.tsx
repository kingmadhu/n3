import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cloud, Brain, Shield, Smartphone, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Custom Development',
    description: 'Tailored solutions built with cutting-edge technology',
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI Solutions',
    description: 'Intelligent systems powered by machine learning',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Advanced security and protection systems',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights',
  },
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-24 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Empowering Your Digital Journey
          </h2>
          <p className="text-xl text-gray-400">
            Discover our comprehensive suite of technology solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="text-indigo-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}