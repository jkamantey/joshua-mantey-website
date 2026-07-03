import React from 'react';
import './CV.css';

function CV() {
  return (
    <div className="page cv-page">
      <section className="section cv-hero">
        <div className="container cv-hero-inner">
          <div>
            <span className="pill">Resume & CV</span>
            <h1>Research-driven engineering and molecular insight</h1>
            <p className="lead">
              PhD candidate in Chemical Engineering with expertise in molecular
              dynamics, biomaterials, and computational modeling.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/files/Joshua_Mantey_Resume_1pg.pdf" className="btn primary" download>
              Download Resume
            </a>
            <a href="/files/CV_work.pdf" className="btn ghost" download>
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <section className="card cv-document" style={{ marginBottom: '2rem' }}>
            <h2>Resume <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--muted)', marginLeft: '0.5rem' }}>— One Page</span></h2>
            <div className="cv-pdf-desktop">
              <object
                data="/files/Joshua_Mantey_Resume_1pg.pdf"
                type="application/pdf"
                className="cv-pdf"
                aria-label="Joshua Mantey Resume"
              >
                <div className="cv-mobile-fallback">
                  <p>Unable to display PDF.</p>
                  <a href="/files/Joshua_Mantey_Resume_1pg.pdf" className="btn primary" download>Download Resume</a>
                </div>
              </object>
            </div>
            <div className="cv-mobile-view">
              <p className="cv-mobile-msg">For the best experience, download or open the resume directly.</p>
              <div className="cv-mobile-actions">
                <a href="/files/Joshua_Mantey_Resume_1pg.pdf" className="btn primary" download>Download Resume</a>
                <a href="/files/Joshua_Mantey_Resume_1pg.pdf" className="btn ghost" target="_blank" rel="noopener noreferrer">Open in Browser</a>
              </div>
            </div>
          </section>

          <section className="card cv-document">
            <h2>Curriculum Vitae <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--muted)', marginLeft: '0.5rem' }}>— Full CV</span></h2>
            <div className="cv-pdf-desktop">
              <object
                data="/files/CV_work.pdf"
                type="application/pdf"
                className="cv-pdf"
                aria-label="Joshua Mantey Curriculum Vitae"
              >
                <div className="cv-mobile-fallback">
                  <p>Unable to display PDF.</p>
                  <a href="/files/CV_work.pdf" className="btn primary" download>Download CV</a>
                </div>
              </object>
            </div>
            <div className="cv-mobile-view">
              <p className="cv-mobile-msg">For the best experience, download or open the CV directly.</p>
              <div className="cv-mobile-actions">
                <a href="/files/CV_work.pdf" className="btn primary" download>Download CV</a>
                <a href="/files/CV_work.pdf" className="btn ghost" target="_blank" rel="noopener noreferrer">Open in Browser</a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CV;
