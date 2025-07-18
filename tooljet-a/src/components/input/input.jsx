import React from 'react'
import './input.css'

const Input = () => {
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
        <textarea className="input-textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />
        <span className="input-tab-hint">→Tab</span>
      </div>
      <div className="input-features-row">
        <div className="input-feature">
          <span className="input-feature-icon">✔️</span>
          <div>
            <div className="input-feature-title">Lorem ipsum dolor</div>
            <div className="input-feature-desc">sit met consectetur</div>
          </div>
        </div>
        <div className="input-feature">
          <span className="input-feature-icon">✔️</span>
          <div>
            <div className="input-feature-title">Lorem ipsum dolor</div>
            <div className="input-feature-desc">sit met consectetur</div>
          </div>
        </div>
        <div className="input-feature">
          <span className="input-feature-icon">✔️</span>
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