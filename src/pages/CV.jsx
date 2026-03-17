import React from 'react';
import './CV.css';

function CV() {
  return (
    <div className="page cv-page">
      <section className="section cv-hero">
        <div className="container cv-hero-inner">
          <div>
            <span className="pill">Curriculum Vitae</span>
            <h1>Research-driven engineering and molecular insight</h1>
            <p className="lead">
              PhD candidate in Chemical Engineering with expertise in molecular
              dynamics, biomaterials, and computational modeling.
            </p>
          </div>
          <a href="/files/Joshua-Mantey-CV.pdf" className="btn primary" download>
            Download PDF
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container cv-grid">
          <section className="card">
            <h2>Education</h2>
            <div className="cv-item">
              <h3>Doctor of Philosophy in Chemical Engineering</h3>
              <p className="institution">Northeastern University, Boston, MA</p>
              <p className="date">September 2024 – Present</p>
              <p>Research Advisor: Dr. Srirupa Chakraborty</p>
            </div>
            <div className="cv-item">
              <h3>Master of Science, Biosystems and Biomaterials</h3>
              <p className="institution">Northeastern University, Boston, MA</p>
              <p className="date">Expected May 2026</p>
            </div>
            <div className="cv-item">
              <h3>Bachelor of Science, Petrochemical Engineering</h3>
              <p className="institution">KNUST, Kumasi, Ghana</p>
              <p className="date">September 2019 – September 2023</p>
              <p><strong>Class Rank: 5th/87 (Top 6%)</strong></p>
            </div>
          </section>

          <section className="card">
            <h2>Research Experience</h2>
            <div className="cv-item">
              <h3>Graduate Research Assistant - Molecular Dynamics Simulations</h3>
              <p className="institution">SimBioSys Laboratory, Northeastern University</p>
              <p className="date">January 2025 – Present</p>
              <ul>
                <li>Develop large-scale MD simulations using AMBER and NAMD for drug delivery applications</li>
                <li>Build comprehensive atomistic models of MUC2 mucin (5,200+ amino acids)</li>
                <li>Apply physics-based modeling and free energy calculations</li>
                <li>Develop custom Python analysis pipelines for MD trajectory data</li>
              </ul>
            </div>
            <div className="cv-item">
              <h3>Research Collaborator - HIV Protein Analysis</h3>
              <p className="institution">Fred Hutchinson Cancer Center</p>
              <p className="date">May 2025 – July 2025</p>
              <ul>
                <li>Investigated conformational dynamics of HIV envelope proteins (gp120, gp41)</li>
                <li>Applied computational structural biology for vaccine development</li>
              </ul>
            </div>
          </section>

          <section className="card">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div>
                <h4>Molecular Dynamics</h4>
                <p>AMBER, NAMD, Schrodinger, VMD, PyMOL, ChimeraX</p>
              </div>
              <div>
                <h4>Programming</h4>
                <p>Python, MATLAB, Bash</p>
              </div>
              <div>
                <h4>Process Simulation</h4>
                <p>Aspen HYSYS, ANSYS Fluent, AutoCAD</p>
              </div>
              <div>
                <h4>Data Analysis</h4>
                <p>NumPy, SciPy, Pandas, Matplotlib</p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>Awards & Honors</h2>
            <ul className="awards-list">
              <li>NSF ACCESS Award for Computational Research (2025)</li>
              <li>Grant Recipient, New England African Business Expo (2025)</li>
              <li>Excellent Student Award, KNUST (2020, 2021)</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CV;
