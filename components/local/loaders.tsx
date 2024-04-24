import { motion } from 'framer-motion';

export const RippleLoader = () => {
  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0,
    },
    end: {
      opacity: 0,
      scale: 3,
    },
  };

  const rippleTransition = {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1,
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='relative h-6 w-6'>
        <motion.div
          className='absolute h-full w-full rounded-full bg-red-500 opacity-0'
          variants={rippleVariants}
          initial='start'
          animate='end'
          transition={rippleTransition}
        ></motion.div>
        <motion.div
          className='absolute h-full w-full rounded-full bg-red-500 opacity-0'
          variants={rippleVariants}
          initial='start'
          animate='end'
          transition={{ ...rippleTransition, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className='absolute h-full w-full rounded-full bg-red-500 opacity-0'
          variants={rippleVariants}
          initial='start'
          animate='end'
          transition={{ ...rippleTransition, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export const PulsatingDots = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex space-x-2'>
        <motion.div
          className='h-2 w-2 rounded-full bg-white'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className='h-2 w-2 rounded-full bg-white'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.3,
          }}
        />
        <motion.div
          className='h-2 w-2 rounded-full bg-white'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
};
