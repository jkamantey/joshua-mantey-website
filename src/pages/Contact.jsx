import React, { useState } from 'react';
import { EMAIL, GITHUB, LINKEDIN, SCHOLAR } from '../site';
import './Contact.css';

const ALT_EMAIL = 'joshuamantey76@gmail.com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  // There is no backend behind this site, so the form hands the message to the
  // visitor's own mail client with everything filled in. Previously it posted
  // nowhere and silently dropped whatever anyone typed.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Website enquiry from ${form.name}`;
    const body = `${form.message}\n\n--\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="page contact-page">
      <section className="section contact-hero">
        <div className="container">
          <span className="pill">Contact</span>
          <h1>Get in touch</h1>
          <p className="lead">
            The fastest route is email. I read everything and reply to most
            things within a few days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>
                <a href={`mailto:${EMAIL}`} className="contact-email">
                  {EMAIL}
                </a>
              </p>
              <p className="contact-alt">
                Or <a href={`mailto:${ALT_EMAIL}`}>{ALT_EMAIL}</a>
              </p>
            </div>

            <div className="info-item">
              <h3>Worth writing about</h3>
              <ul className="contact-reasons">
                <li>Co-op and internship roles in pharma, biotech or computational chemistry</li>
                <li>Research collaborations in molecular simulation and drug delivery</li>
                <li>Speaking, panels and conference sessions</li>
              </ul>
            </div>

            <div className="info-item">
              <h3>Where I am</h3>
              <p>
                SimBioSys Laboratory
                <br />
                Department of Chemical Engineering
                <br />
                Northeastern University
                <br />
                Boston, MA 02115
              </p>
            </div>

            <div className="info-item">
              <h3>Elsewhere</h3>
              <div className="social-links">
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={SCHOLAR} target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </div>
            </div>
          </div>

          <div className="card contact-form-section">
            <h2>Draft a message</h2>
            <p className="form-note">
              This fills in an email and opens it in your own mail app, so you
              keep a copy of what you sent.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="cf-name">Your name</label>
              <input
                id="cf-name"
                type="text"
                value={form.name}
                onChange={update('name')}
                autoComplete="name"
                required
              />

              <label htmlFor="cf-email">Your email</label>
              <input
                id="cf-email"
                type="email"
                value={form.email}
                onChange={update('email')}
                autoComplete="email"
                required
              />

              <label htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                type="text"
                value={form.subject}
                onChange={update('subject')}
              />

              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                rows="6"
                value={form.message}
                onChange={update('message')}
                required
              />

              <button type="submit" className="btn primary">
                Open in my email app
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
