import React from 'react'
import { motion } from "motion/react"
import "./Footer.css"

const logos = [
  { src: '/logos/Compnay-logo1.svg', alt: 'Logique', caseStudy: true, caseStudyUrl: 'https://example.com/case1' },
  { src: '/logos/Compnay-logo2.svg', alt: 'Signum' },
  { src: '/logos/Compnay-logo3.svg', alt: 'Grapho' },
  { src: '/logos/Compnay-logo4.svg', alt: 'Emblem' },
  { src: '/logos/Compnay-logo5.svg', alt: 'Dexign', caseStudy: true, caseStudyUrl: 'https://example.com/case2' },
  { src: '/logos/Compnay-logo6.svg', alt: 'Logo6' },
  { src: '/logos/Compnay-logo7.svg', alt: 'Logo7' },
  { src: '/logos/Compnay-logo8.svg', alt: 'Logo8' },
  { src: '/logos/Compnay-logo9.svg', alt: 'Logo9' },
  { src: '/logos/Compnay-logo10.svg', alt: 'Logo10' },
  { src: '/logos/Compnay-logo11.svg', alt: 'Logo11' },
  { src: '/logos/Compnay-logo12.svg', alt: 'Logo12' },
  { src: '/logos/Compnay-logo13.svg', alt: 'Logo13' },
  { src: '/logos/Compnay-logo14.svg', alt: 'Logo14' },
  { src: '/logos/Compnay-logo15.svg', alt: 'Logo15' },
  { src: '/logos/Compnay-logo16.svg', alt: 'Logo16' },
];

const scrollVariants = {
  animate: {
    x: [0, -1200],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-logo-scroll-container">
        <motion.div
          className="footer-logo-row"
          variants={scrollVariants}
          animate="animate"
        >
          {logos.concat(logos).map((logo, idx) => (
            <motion.div
              className="footer-logo-item"
              key={idx}
              style={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo.src} alt={logo.alt} className="footer-logo-img" />
              {logo.caseStudy && (
                <a
                  href={logo.caseStudyUrl}
                  className="footer-case-study-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CASE STUDY
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Footer