import React from 'react';
import { EMAIL, GITHUB, LINKEDIN, SCHOLAR } from '../site';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Joshua Mantey</h3>
          <p>
            PhD student in Chemical Engineering, simulating how oral drugs cross
            the intestinal mucus barrier.
          </p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={SCHOLAR} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>SimBioSys Laboratory · Northeastern University</span>
        <span>Boston, MA</span>
      </div>
    </footer>
  );
}

export default Footer;
