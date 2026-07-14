import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'Close' : 'Open'}
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 300 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: 300, scale: 0.7 }}
            // whileHover={{ scale: 1.5 }}
            // whileTap={{ scale: 0.8 }}
            // whileInView={{ scale: 1, opacity: 1 }}
            // viewport={{ once: false, amount: 0.1 }}
            className="box"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
