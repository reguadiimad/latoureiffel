// src/components/About.js
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-200"
    >c
      <motion.h1 variants={childVariants} className="text-4xl font-bold text-center mb-4">
        About the Eiffel Tower
      </motion.h1>
      <motion.p variants={childVariants} className="text-lg text-center mb-6">
        The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. 
        It was named after the engineer Gustave Eiffel, whose company designed and built the tower.
      </motion.p>
      <motion.p variants={childVariants} className="text-lg text-center">
        Completed in 1889, it has become a global cultural icon of France and one of the most recognizable structures in the world.
      </motion.p>
    </motion.div>
  );
};

export default About;
