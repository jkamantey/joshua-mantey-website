import React from 'react';
import { Link } from 'react-router-dom';
import { EMAIL, GITHUB } from '../site';
import './Home.css';

const focus = [
  {
    term: 'The mucus barrier',
    detail:
      'Most of an oral dose never reaches the bloodstream. I simulate full-length MUC2 mucin — 5,200+ amino acids, over 3 million atoms — together with the bile salts around it, to find where drug molecules get held up.',
  },
  {
    term: 'Machine learning on simulation data',
    detail:
      'A 1.2 µs trajectory is about 10 TB, far past what anyone reads by hand. I build the Python pipelines that turn it into something interpretable: DCCM, PCA, t-SNE, spectral embedding.',
  },
  {
    term: 'Where it is meant to end up',
    detail:
      'The aim is formulations that get past the mucus layer rather than around it, starting with the thickened mucus in cystic fibrosis. That is the goal, not yet a result.',
  },
];

const recent = [
  {
    date: 'Mar 2026',
    title: 'Beyond the Barrier: How Joshua Mantey is Reimagining Oral Drug Delivery',
    where: 'Northeastern College of Engineering',
    href: 'https://coe.northeastern.edu/news/beyond-the-barrier-how-joshua-mantey-is-reimagining-oral-drug-delivery/',
  },
  {
    date: 'Jan 2026',
    title: "Digital intelligence, environmental disaster: AI's hidden climate crisis",
    where: 'MyJoyOnline, op-ed with Rosemary Aku Agbozo',
    href: 'https://www.myjoyonline.com/digital-intelligence-environmental-disaster-ais-hidden-climate-crisis/',
  },
  {
    date: 'Oct 2025',
    title: 'The use of AI in drug delivery',
    where: 'MyJoyOnline, op-ed',
    href: 'https://www.myjoyonline.com/joshua-mantey-the-use-of-ai-in-drug-delivery/',
  },
];

function Home() {
  return (
    <div className="page home-page">
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="pill">PhD Student · Chemical Engineering · Northeastern</span>
            <h1>Joshua Kojo Aduampong Mantey</h1>

            <p className="hero-what">
              I use atomistic molecular dynamics and machine learning to work out
              why the gut&rsquo;s mucus layer stops so many oral drugs &mdash; and
              what would get them through.
            </p>

            <dl className="hero-facts">
              <dt>Where</dt>
              <dd>
                SimBioSys Laboratory, Northeastern University. Advised by
                Srirupa Chakraborty.
              </dd>
              <dt>Latest</dt>
              <dd>
                Oral presentation, &ldquo;Enhanced Sampling to Study MUC2
                Interactions with Bile Salts&rdquo;, at the AIChE Annual Meeting,
                Boston, November 2025.{' '}
                <Link to="/publications" className="inline-link">
                  All publications and talks
                </Link>
              </dd>
              <dt>Looking for</dt>
              <dd>
                An industry co-op in pharma or biotech, on a computational
                chemistry, formulation or molecular ML team.
              </dd>
            </dl>

            <div className="hero-actions">
              <a href="/files/Joshua_Mantey_Resume_1pg.pdf" className="btn primary" download>
                Download resume (PDF)
              </a>
              <a href={`mailto:${EMAIL}`} className="btn ghost">
                {EMAIL}
              </a>
              <a
                href={GITHUB}
                className="btn ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img
                src="/images/Professional.jpeg"
                alt="Joshua Mantey at Northeastern University"
                width="380"
                height="480"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <div className="container">
          <div className="section-title">
            <h2>What I work on</h2>
          </div>
          <dl className="focus-list">
            {focus.map(({ term, detail }) => (
              <div className="focus-item" key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="focus-more">
            <Link to="/research" className="inline-link">
              Project details, methods and current status
            </Link>
          </p>
        </div>
      </section>

      <section className="section background-section">
        <div className="container">
          <div className="section-title">
            <h2>How I got here</h2>
          </div>
          <div className="background-inner">
            <p>
              I studied petrochemical engineering at KNUST in Ghana, where my
              research was on amino acids as corrosion inhibitors. That is not as
              far from this as it sounds. You are still asking what one molecule
              does when it meets a surface &mdash; the surface just happens to be
              the lining of someone&rsquo;s intestine now.
            </p>
            <p>
              Outside the lab I am Academic and Networking Chair and Mentorship
              Chair for the African Graduate Student Association at Northeastern,
              which mostly means running career panels and answering the
              questions nobody wants to ask in a room full of people. I cook a
              lot and play chess badly.
            </p>
          </div>
        </div>
      </section>

      <section className="section highlight-section">
        <div className="container">
          <div className="section-title">
            <h2>Writing and press</h2>
          </div>
          <ul className="recent-list">
            {recent.map(({ date, title, where, href }) => (
              <li key={href}>
                <span className="recent-date">{date}</span>
                <span className="recent-body">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                  <span className="recent-where">{where}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
