import React, { useState, useEffect, useRef } from 'react'
import './input.css'

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

  // Handle Tab key to fill placeholder
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

  // Handle →Tab button click
  const handleTabClick = () => {
    setValue(placeholderOptions[placeholderIdx]);
    textareaRef.current && textareaRef.current.focus();
  };

  // Handle submit
  const handleSubmit = () => {
    // Implement your submit logic here
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
      <div className="input-subheading">Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod</div>
      <div className="input-textarea-wrapper">
        <textarea
          ref={textareaRef}
          className="input-textarea"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholderOptions[placeholderIdx]}
          spellCheck={false}
          onKeyDown={handleKeyDown}
        />
        <span className="input-tab-hint" onClick={handleTabClick} tabIndex={0} role="button">→Tab</span>
        {value.trim() && (
          <button className="input-submit-btn" onClick={handleSubmit}>
            <span role="img" aria-label="submit">↵</span>
          </button>
        )}
      </div>
      <div className="input-features-row">
        <div className="input-feature">
          <img src="/rightsign.svg" alt="check" className="input-feature-icon" />
          <div>
            <div className="input-feature-title">Lorem ipsum dolor</div>
            <div className="input-feature-desc">sit met consectetur</div>
          </div>
        </div>
        <div className="input-feature">
          <img src="/rightsign.svg" alt="check" className="input-feature-icon" />
          <div>
            <div className="input-feature-title">Lorem ipsum dolor</div>
            <div className="input-feature-desc">sit met consectetur</div>
          </div>
        </div>
        <div className="input-feature">
          <img src="/rightsign.svg" alt="check" className="input-feature-icon" />
          <div>
            <div className="input-feature-title">Lorem ipsum dolor</div>
            <div className="input-feature-desc">sit met consectetur</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input