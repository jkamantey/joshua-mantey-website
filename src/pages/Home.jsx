import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="pill">PhD Candidate · Chemical Engineering</span>
            <h1>Joshua Kojo Aduampong Mantey</h1>
            <p className="lead">
              I build atomistic models and AI-assisted simulations to decode how
              mucosal barriers respond to signaling molecules and bile salts,
              enabling smarter oral drug delivery.
            </p>
            <div className="hero-actions">
              <Link to="/research" className="btn primary">Explore Research</Link>
              <a href="/files/Joshua-Mantey-CV.pdf" className="btn ghost" download>
                Download CV
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>5,200+</strong>
                <span>MUC2 amino acids modeled</span>
              </div>
              <div>
                <strong>AI/ML</strong>
                <span>Trajectory insight pipelines</span>
              </div>
              <div>
                <strong>Boston</strong>
                <span>SimBioSys Laboratory</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-card">
              <img src="/images/joshuaImg.jpg" alt="Joshua Mantey" />
            </div>
            <div className="floating-note">
              <p className="eyebrow">Now</p>
              <h3>Mucin-bile salt dynamics</h3>
              <p>Atomistic insight into mucus permeability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <div className="container">
          <div className="section-title">
            <h2>Research Focus</h2>
            <span className="pill">Computational biophysics</span>
          </div>
          <div className="grid focus-grid">
            <article className="card">
              <h3>Molecular Dynamics</h3>
              <p>
                Large-scale simulations of mucins, bile salts, and peptide
                interactions to reveal transport barriers at the nanoscale.
              </p>
            </article>
            <article className="card">
              <h3>AI + Biophysics</h3>
              <p>
                ML-enhanced workflows for trajectory analysis, free energy
                estimation, and hypothesis prioritization.
              </p>
            </article>
            <article className="card">
              <h3>Therapeutic Translation</h3>
              <p>
                Turning molecular insights into drug delivery strategies for
                cystic fibrosis and mucosal therapeutics.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section highlight-section">
        <div className="container">
          <div className="section-title">
            <h2>Recent Highlights</h2>
            <span className="pill">2024 · 2025</span>
          </div>
          <div className="grid highlight-grid">
            <div className="card">
              <h3>AIChE Annual Meeting</h3>
              <p>Presented bile salt-mucin interactions, Boston.</p>
              <span className="tag">2024</span>
            </div>
            <div className="card">
              <h3>NSF ACCESS Award</h3>
              <p>Secured computational research allocation for MD workflows.</p>
              <span className="tag">2025</span>
            </div>
            <div className="card">
              <h3>Media Feature</h3>
              <p>Interviewed on AI applications in drug delivery.</p>
              <span className="tag">2024</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
