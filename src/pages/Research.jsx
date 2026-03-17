import React from 'react';
import './Research.css';

function Research() {
  return (
    <div className="page research-page">
      <section className="section research-hero">
        <div className="container">
          <span className="pill">Research Portfolio</span>
          <h1>From molecular detail to translational insight</h1>
          <p className="lead">
            My work blends atomistic simulations, structural biology, and process
            modeling to inform therapeutics, biomaterials, and sustainable
            engineering systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Active Projects</h2>
            <span className="pill">SimBioSys Lab</span>
          </div>
          <div className="grid research-grid">
            <article className="card project-card">
              <div className="project-header">
                <h3>Mucosal Drug Delivery Dynamics</h3>
                <span className="tag">Primary focus</span>
              </div>
              <img
                src="/images/muc2-model.png"
                alt="MUC2 Model"
                className="research-image"
              />
              <p>
                Investigating bile salt-mucin interactions using atomistic MD
                to reveal how transport pathways form in mucus barriers for
                cystic fibrosis therapeutics.
              </p>
              <div className="tech-stack">
                <span>AMBER</span>
                <span>NAMD</span>
                <span>VMD</span>
                <span>Python</span>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-header">
                <h3>HIV Envelope Conformational Analysis</h3>
                <span className="tag">Collaboration</span>
              </div>
              <p>
                Partnering with Fred Hutchinson Cancer Center to map gp120/gp41
                dynamics for vaccine development via MD and structural analysis.
              </p>
              <div className="tech-stack">
                <span>PyMOL</span>
                <span>ChimeraX</span>
                <span>MD Simulations</span>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-header">
                <h3>CO₂ Capture Materials</h3>
                <span className="tag">Sustainability</span>
              </div>
              <p>
                Modeled CO₂ adsorption on ammonium bicarbonate using molecular
                dynamics and thermodynamic analysis to inform capture systems.
              </p>
              <div className="tech-stack">
                <span>Molecular Dynamics</span>
                <span>Python</span>
                <span>MATLAB</span>
              </div>
            </article>

            <article className="card project-card">
              <div className="project-header">
                <h3>Bioreactor Engineering</h3>
                <span className="tag">Process Design</span>
              </div>
              <p>
                Engineered high-yield bioprocesses achieving 250 mg/L protein
                production with FDA-aligned protocols and advanced control.
              </p>
              <div className="tech-stack">
                <span>Process Control</span>
                <span>FDA Compliance</span>
                <span>HAZOP Analysis</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
