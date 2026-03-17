import React from 'react';
import './Publication.css';

function Publications() {
  return (
    <div className="page publications-page">
      <section className="section publications-hero">
        <div className="container">
          <span className="pill">Publications</span>
          <h1>Selected writing and presentations</h1>
          <p className="lead">
            Scholarly outputs spanning molecular simulations, materials
            engineering, and translational health research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container publications-grid">
          <div className="pub-section card">
            <h2>Journal Articles</h2>
            <article className="publication-item">
              <p className="pub-authors">Amevor, R., Mantey, J.K.A., Nketiah, T.A.</p>
              <p className="pub-title">
                <a
                  href="https://doi.org/10.5281/zenodo.18634390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  "Evaluation of AI-Based Predictive Models for Early Cancer Detection: Statistical Considerations and Validation Methods"
                </a>
              </p>
              <p className="pub-venue"><em>Journal of Innovative Science</em>, Vol. 2, Issue 1, pp. 1–10, SARC Publisher, 2026</p>
            </article>
            <article className="publication-item">
              <p className="pub-authors">Mantey, J.K.A., Muntaka, I.</p>
              <p className="pub-title">
                "Economic Evaluations of Advanced Drug-Delivery Platforms: Cost-Effectiveness Evidence in U.S Disease Contexts"
              </p>
              <p className="pub-venue"><em>SARC Publisher</em>, 2025</p>
            </article>
            <article className="publication-item">
              <p className="pub-authors">Mantey, J.K.A., Meteku, B.E., Baffoe, E.</p>
              <p className="pub-title">"Amino Acids as Corrosion Inhibitors"</p>
              <p className="pub-venue"><em>Taylor & Francis Group</em>, 2025</p>
            </article>
            <article className="publication-item">
              <p className="pub-authors">Kizza, T., Mantey, J.K.A., Kaiser, F.</p>
              <p className="pub-title">"Survival Analysis in U.S Chronic Disease Research: A Systematic Review"</p>
              <p className="pub-venue"><em>IJFLS</em>, 2025</p>
            </article>
            <article className="publication-item">
              <p className="pub-authors">Agyei, D., Owusu-Kwarteng, J., Kehinde, B., Ohemeng-Boahen, G., Mantey, J.K.A.</p>
              <p className="pub-title">"The Role of Indigenous Foods in Achieving Food Security in Africa"</p>
              <p className="pub-venue">2024</p>
            </article>
          </div>

          <div className="pub-section card">
            <h2>Conference Presentations</h2>
            <article className="publication-item">
              <p className="pub-authors">Mantey, J.K.A., Pandey, S., Carrier, R., Chakraborty, S.</p>
              <p className="pub-title">"Enhanced Sampling to Study Interactions with Bile Salts"</p>
              <p className="pub-venue"><em>AIChE Annual Meeting, Boston, MA</em>, November 2024</p>
            </article>
            <article className="publication-item">
              <p className="pub-authors">Mantey, J.K.A., Pandey, S., Chakraborty, S.</p>
              <p className="pub-title">"Mucosal Interactions with Signaling Molecules"</p>
              <p className="pub-venue"><em>Professional Development Poster, Northeastern University</em>, April 2025</p>
            </article>
          </div>

          <div className="pub-section card">
            <h2>Media Features</h2>
            <article className="publication-item">
              <p className="pub-title">
                <a
                  href="https://coe.northeastern.edu/news/beyond-the-barrier-how-joshua-mantey-is-reimagining-oral-drug-delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  "Beyond the Barrier: How Joshua Mantey is Reimagining Oral Drug Delivery"
                </a>
              </p>
              <p className="pub-venue"><em>Northeastern College of Engineering</em>, 2025</p>
            </article>
            <article className="publication-item">
              <p className="pub-title">
                <a
                  href="https://www.myjoyonline.com/digital-intelligence-environmental-disaster-ais-hidden-climate-crisis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  "Digital Intelligence, Environmental Disaster: AI's Hidden Climate Crisis"
                </a>
              </p>
              <p className="pub-venue"><em>MyJoyOnline</em>, 2026</p>
            </article>
            <article className="publication-item">
              <p className="pub-title">
                <a
                  href="https://www.myjoyonline.com/joshua-mantey-the-use-of-ai-in-drug-delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  "The Use of AI in Drug Delivery"
                </a>
              </p>
              <p className="pub-venue"><em>MyJoyOnline Interview</em>, 2025</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
