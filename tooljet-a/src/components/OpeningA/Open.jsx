import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./open.css";

const LETTERS = "EVERFLOW".split("");
const baseColor = "0, 0, 0"; // black

const Open = () => {
  const [show, setShow] = useState(true);
  const [logoGone, setLogoGone] = useState(false);

  useEffect(() => {
    // Logo fade out after 0.5s, then columns animate
    const logoTimer = setTimeout(() => setLogoGone(true), 500);
    // Total animation: logo (0.5s) + 8*0.25s + 2s duration + 0.5s buffer
    const timer = setTimeout(() => setShow(false), 500 + 8 * 250 + 2000 + 500);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="open-main">
          <motion.img
            src="/Everflow-logo.svg"
            alt="Logo"
            className="open-logo"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0 }}
            style={{ display: logoGone ? 'none' : 'block' }}
          />
          <div className="open-letters-container-vertical">
            {LETTERS.map((char, i) => (
              <motion.div
                className="open-letter-col"
                key={char + i}
                initial={{ height: "100%" }}
                animate={{ height: 0 }}
                transition={{
                  delay: i * 0.25, 
                  duration: 2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  left: `${i * 12.5}vw`,
                  width: '12.5vw',
                  background: `#181B1F`,
                  position: 'absolute',
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <span className="open-letter">{char}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Open;