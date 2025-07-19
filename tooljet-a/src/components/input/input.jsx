import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './input.css';

const placeholderOptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore ",
  "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
];

const Input = () => {
  const [value, setValue] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const textareaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx(idx => (idx + 1) % placeholderOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setValue(placeholderOptions[placeholderIdx]);
      setTimeout(() => textareaRef.current && textareaRef.current.focus(), 0);
    }
    if (e.key === 'Enter' && value.trim()) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTabClick = () => {
    setValue(placeholderOptions[placeholderIdx]);
    textareaRef.current && textareaRef.current.focus();
  };

  const handleSubmit = () => {
    alert('Submitted: ' + value);
    setValue("");
  };

  return (
    <div className="main-input">
      <div className="input-heading-row">
        <span className="input-heading-highlight">
          Lorem ipsum{' '}
          <span className="input-heading-underline-wrapper">
            dolor sit
            <img src="/bottom-line.svg" alt="underline" className="input-heading-underline-img" />
          </span>
        </span>
        <div className="input-heading-secondary">in tempor</div>
      </div>
      <div className="input-subheading">
        Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod
      </div>

      <div className="input-textarea-wrapper">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.div
              key={placeholderIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7 }}
              className="custom-placeholder"
            >
              {placeholderOptions[placeholderIdx]}
            </motion.div>
          )}
        </AnimatePresence>

        <textarea
          ref={textareaRef}
          className="input-textarea"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
        />

        <span className="input-tab-hint" onClick={handleTabClick} tabIndex={0} role="button">→Tab</span>
        {value.trim() && (
          <button className="input-submit-btn" onClick={handleSubmit}>
            <span role="img" aria-label="submit">↵</span>
          </button>
        )}
      </div>

      <div className="input-features-row">
        {[1, 2, 3].map(i => (
          <div key={i} className="input-feature">
            <img src="/rightsign.svg" alt="check" className="input-feature-icon" />
            <div>
              <div className="input-feature-title">Lorem ipsum dolor</div>
              <div className="input-feature-desc">sit met consectetur</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;
