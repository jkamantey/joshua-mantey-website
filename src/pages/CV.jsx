import React from 'react';
import './CV.css';

function CV() {
  return (
    <div className="page cv-page">
      <section className="section cv-hero">
        <div className="container cv-hero-inner">
          <div>
            <span className="pill">Resume</span>
            <h1>Research-driven engineering and molecular insight</h1>
            <p className="lead">
              PhD candidate in Chemical Engineering with expertise in molecular
              dynamics, biomaterials, and computational modeling.
            </p>
          </div>
          <a href="/files/CV_work__.pdf" className="btn primary" download>
            Download PDF
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <section className="card cv-document">
            <h2>Resume</h2>
            <object
              data="/files/CV_work__.pdf"
              type="application/pdf"
              className="cv-pdf"
              aria-label="Joshua Mantey CV"
            >
              <p>
                Your browser cannot display PDFs. Use the download button above to open the CV.
              </p>
            </object>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CV;
