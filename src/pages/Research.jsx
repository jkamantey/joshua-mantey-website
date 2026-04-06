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
            My research spans molecular simulations to industrial scale implementation,
            combining computational modeling, machine learning, and process engineering
            to advance healthcare systems, materials innovation, and sustainable
            manufacturing.
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
              <p>
                Investigating bile salt-mucin interactions using multi-microsecond
                atomistic MD simulations of extensively glycosylated 3 million atom
                systems to quantify drug transport mechanisms through mucus barriers
                for cystic fibrosis therapeutics.
              </p>
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
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Past Projects</h2>
            <span className="pill">Data Science</span>
          </div>
          <div className="grid research-grid past-projects-grid">
            <article className="card project-card">
              <div className="project-header">
                <h3>Housing Price Prediction System | Mexico City Real Estate Market Analysis</h3>
                <span className="tag">Machine Learning</span>
              </div>
              <p>
                Engineered an end-to-end data pipeline processing 10,000+ real estate
                listings to predict apartment prices in Mexico City's Distrito Federal
                region using Ridge regression.
              </p>
              <p>
                Built a robust preprocessing workflow with quantile-based outlier
                filtering, geospatial feature engineering, administrative boundary
                extraction, and dimensionality reduction.
              </p>
              <p>
                Reduced dataset noise by 40% through strategic feature selection,
                removing high-cardinality variables and preventing leakage from
                correlated price features.
              </p>
              <p>
                Applied statistical methods for missing data and extracted hierarchical
                location features from unstructured address strings to improve
                interpretability.
              </p>
            </article>
            <article className="card project-card">
              <div className="project-header">
                <h3>Numerical Analysis of Stefan Problems with Variable Thermal Conductivity</h3>
              </div>
              <p>
                Python-based computational modeling of phase change processes for emergency
                shutdown systems in molten salt reactors.
              </p>
              <p>
                Developed a Python solver for moving boundary heat transfer problems with
                submillimeter accuracy validated against theoretical solutions, and applied
                advanced numerical methods with temperature-dependent properties and adaptive
                interface tracking.
              </p>
              <p>
                Optimized molten salt reactor freeze valve designs across 9 configurations,
                identifying a 10 mm design achieving a 71-second emergency melt time with a
                40% safety margin; validated predictions using Stefan number analysis and
                thermal diffusion calculations.
              </p>
              <p>
                Generated technical documentation with 8 professional visualizations,
                including 3D temperature evolution and design charts, delivering quantitative
                engineering recommendations for nuclear safety systems.
              </p>
            </article>
            <article className="card project-card">
              <div className="project-header">
                <h3>Process Engineer | Food Manufacturing Operations</h3>
                <span className="tag">Thermal Processing</span>
              </div>
              <p>
                Drove a 12% energy cost reduction across thermal processing operations
                (pasteurization, sterilization, and blanching) while maintaining 100%
                compliance with product safety and quality standards.
              </p>
              <p>
                Designed and implemented process control strategies for manufacturing
                lines, improving overall equipment effectiveness (OEE) and reducing
                waste through data-driven optimization.
              </p>
              <p>
                Led cross-functional initiatives with R&amp;D, quality assurance, and
                production teams to troubleshoot process deviations and ensure
                continuous compliance with FDA and USDA regulatory requirements.
              </p>
              <p>
                Developed scalable process improvement frameworks balancing energy
                efficiency, throughput, safety regulations, and product quality
                specifications.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
