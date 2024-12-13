import { motion } from 'framer-motion';

const AnimatedFavorite = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, bounce: 0.3, type: 'spring' }}
      style={{
        display: 'inline-block',
        position: 'relative',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#000',
        marginLeft: '5px'
      }}
    >
    {""} favorite
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: -5,
          left: 0,
          height: '3px',
          backgroundColor: '#931621',
        }}
      />
    </motion.div>
  );
};

export default AnimatedFavorite;
