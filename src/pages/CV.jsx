import React from 'react';
import './CV.css';

const RESUME = '/files/Joshua_Mantey_Resume_1pg.pdf';
const FULL_CV = '/files/CV_work.pdf';

// Mirrors the one-page resume PDF. If you edit the PDF, edit this too --
// the HTML is what search and AI crawlers actually read.
const education = [
  {
    degree: 'PhD, Chemical Engineering',
    school: 'Northeastern University',
    when: 'Sept 2024 – present',
  },
  {
    degree: 'MS, Biosystems and Biomaterials',
    school: 'Northeastern University',
    when: 'Sept 2024 – May 2026',
  },
  {
    degree: 'Applied Data Science Certificate',
    school: 'WorldQuant University',
    when: '2026',
  },
  {
    degree: 'BSc, Petrochemical Engineering',
    school: 'Kwame Nkrumah University of Science and Technology (KNUST), Ghana',
    when: 'Sept 2019 – Sept 2023',
  },
];

const experience = [
  {
    role: 'Graduate Research Assistant, Computational Biophysics',
    org: 'Northeastern University, Boston MA',
    when: 'Jan 2025 – present',
  },
  {
    role: 'Deep Learning and Neural Networks, CIML Summer Institute',
    org: 'UC San Diego, San Diego CA',
    when: 'Summer 2025',
  },
  {
    role: 'Research Collaborator, HIV Vaccine Development',
    org: 'Fred Hutchinson Cancer Center, remote',
    when: 'May – July 2025',
  },
  {
    role: 'Computational Modeling and Bioprocess Projects',
    org: 'Northeastern University, Boston MA',
    when: 'Sept 2024 – May 2025',
  },
];

const skills = [
  {
    group: 'Molecular dynamics and simulation',
    items: 'AMBER, NAMD, GROMACS, Schrödinger, VMD, PyMOL, ChimeraX, MDAnalysis, MDTraj',
  },
  {
    group: 'Programming and data',
    items:
      'Python, MATLAB, Bash, MongoDB, SQLite, FastAPI, Plotly Dash, LangChain, FAISS, OpenAI SDK, Biopython, Streamlit, NCBI E-utilities',
  },
  {
    group: 'High-performance computing',
    items: 'NSF ACCESS, SLURM',
  },
];

function PdfBlock({ label, note, file, downloadLabel }) {
  return (
    <section className="card cv-document">
      <h2>
        {label}
        <span className="cv-doc-note">— {note}</span>
      </h2>
      <div className="cv-pdf-desktop">
        <object data={file} type="application/pdf" className="cv-pdf" aria-label={label}>
          <div className="cv-mobile-fallback">
            <p>Unable to display the PDF in this browser.</p>
            <a href={file} className="btn primary" download>
              {downloadLabel}
            </a>
          </div>
        </object>
      </div>
      <div className="cv-mobile-view">
        <p className="cv-mobile-msg">
          For the best experience, download or open this document directly.
        </p>
        <div className="cv-mobile-actions">
          <a href={file} className="btn primary" download>
            {downloadLabel}
          </a>
          <a href={file} className="btn ghost" target="_blank" rel="noopener noreferrer">
            Open in browser
          </a>
        </div>
      </div>
    </section>
  );
}

function CV() {
  return (
    <div className="page cv-page">
      <section className="section cv-hero">
        <div className="container cv-hero-inner">
          <div>
            <span className="pill">Resume &amp; CV</span>
            <h1>Resume and CV</h1>
            <p className="lead">
              One page for a first read, and the full CV for the complete list of
              publications and presentations. Both are readable below.
            </p>
          </div>
          <div className="cv-hero-actions">
            <a href={RESUME} className="btn primary" download>
              Download resume (PDF)
            </a>
            <a href={FULL_CV} className="btn ghost" download>
              Download full CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section cv-summary-section">
        <div className="container">
          <div className="cv-summary">
            <div className="cv-block">
              <h2>Education</h2>
              <dl className="cv-list">
                {education.map(({ degree, school, when }) => (
                  <div className="cv-row" key={degree}>
                    <dt>
                      {degree}
                      <span className="cv-org">{school}</span>
                    </dt>
                    <dd>{when}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cv-block">
              <h2>Research and computational experience</h2>
              <dl className="cv-list">
                {experience.map(({ role, org, when }) => (
                  <div className="cv-row" key={role}>
                    <dt>
                      {role}
                      <span className="cv-org">{org}</span>
                    </dt>
                    <dd>{when}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cv-block">
              <h2>Technical skills</h2>
              <dl className="cv-skills">
                {skills.map(({ group, items }) => (
                  <div key={group}>
                    <dt>{group}</dt>
                    <dd>{items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PdfBlock
            label="Resume"
            note="one page"
            file={RESUME}
            downloadLabel="Download resume"
          />
          <PdfBlock
            label="Curriculum Vitae"
            note="full CV"
            file={FULL_CV}
            downloadLabel="Download CV"
          />
        </div>
      </section>
    </div>
  );
}

export default CV;
