'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 z-50 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl"
        >
          <span className="text-5xl font-bold text-white">BN</span>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
            Bal Niketan
          </h2>
          <p className="text-lg text-muted-foreground">
            Sr. Sec. School, Pilani
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex items-center gap-2"
          variants={itemVariants}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              variants={dotVariants}
              transition={{
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-muted-foreground font-semibold tracking-widest"
        >
          LOADING EXPERIENCE...
        </motion.p>
      </div>
    </motion.div>
  );
}
