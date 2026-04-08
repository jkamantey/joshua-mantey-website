import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="pill">PhD Candidate</span>
            <h1>Joshua Kojo Aduampong Mantey</h1>
            <p className="lead">
              PhD researcher in computational biology and applied machine learning with extensive experience developing end-to-end ML pipelines, managing multi-terabyte datasets, and deploying predictive models in pharmaceutical and biomedical applications. Proficient in Python (Scikit-learn, Pandas, NumPy), MongoDB, and time-series analysis, with a strong foundation in data engineering and model optimization.
            </p>
            <p className="lead">
              Brings research grade expertise in large-scale molecular dynamics simulations on high-performance computing (HPC) clusters, complementing applied machine learning work in molecular property prediction for oral drug delivery and ML-based classification of HIV envelope protein binding pockets to support broadly neutralizing antibody development. Skilled at translating complex biological and computational data into actionable insights that inform research strategy and accelerate scientific discovery.
            </p>
            <div className="hero-actions">
              <Link to="/research" className="btn primary">Explore Research</Link>
              <a href="/files/CV_Josh.pdf" className="btn ghost" download>
                Download Resume
              </a>
            </div>
            <div className="hero-stats">
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
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <div className="container">
          <div className="section-title">
            <h2>Research Focus</h2>
            <span className="pill">Molecular Dynamics · Machine Learning · Drug Delivery</span>
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
              <h3>Machine Learning</h3>
              <p>
                End-to-end ML pipelines for molecular property prediction,
                trajectory analysis, and classification of HIV envelope
                protein binding pockets.
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
              <h3>
                <a
                  href="https://coe.northeastern.edu/news/beyond-the-barrier-how-joshua-mantey-is-reimagining-oral-drug-delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beyond the Barrier: How Joshua Mantey is Reimagining Oral Drug Delivery
                </a>
              </h3>
              <p>Featured by Northeastern College of Engineering on research into oral drug delivery innovation.</p>
              <span className="tag">2025</span>
            </div>
            <div className="card">
              <h3>
                <a
                  href="https://www.myjoyonline.com/digital-intelligence-environmental-disaster-ais-hidden-climate-crisis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital intelligence, environmental disaster: AI's hidden climate crisis
                </a>
              </h3>
              <p>Discussed AI's environmental impact and hidden climate costs.</p>
              <span className="tag">2026</span>
            </div>
            <div className="card">
              <h3>
                <a
                  href="https://www.myjoyonline.com/joshua-mantey-the-use-of-ai-in-drug-delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Role of AI in drug delivery
                </a>
              </h3>
              <p>Featured interview on AI applications in drug delivery.</p>
              <span className="tag">2025</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
