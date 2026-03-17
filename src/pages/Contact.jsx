import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="page contact-page">
      <section className="section contact-hero">
        <div className="container">
          <span className="pill">Contact</span>
          <h1>Let’s build something impactful together</h1>
          <p className="lead">
            Open to collaborations in molecular dynamics, AI-enabled analysis,
            and translational biophysics.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card contact-info">
            <h2>Get In Touch</h2>
            <p>
              I welcome conversations around research partnerships, conference
              talks, and computational modeling opportunities.
            </p>

            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:mantey.j@northeastern.edu">mantey.j@northeastern.edu</a></p>
            </div>

            <div className="info-item">
              <h3>Office</h3>
              <p>
                SimBioSys Laboratory<br />
                Chemical Engineering Department<br />
                Northeastern University<br />
                Boston, MA 02115
              </p>
            </div>

            <div className="info-item">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/mantey-joshua" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/joshuamantey" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://scholar.google.com/citations?user=8lAWa2sAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </div>
            </div>
          </div>

          <div className="card contact-form-section">
            <h2>Send a Message</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="6" required />
              <button type="submit" className="btn primary">Send Message</button>
            </form>
            <p className="form-note">
              I typically respond within 2–3 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
