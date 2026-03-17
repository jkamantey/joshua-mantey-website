import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Joshua Mantey</h3>
          <p>
            PhD Candidate in Chemical Engineering focused on molecular dynamics,
            computational biophysics, and AI-enabled drug delivery.
          </p>
        </div>
        <div className="footer-links">
          <a href="mailto:mantey.j@northeastern.edu">mantey.j@northeastern.edu</a>
          <a href="https://www.linkedin.com/in/mantey-joshua" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=8lAWa2sAAAAJ&hl=en&authuser=1" target="_blank" rel="noreferrer">
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
