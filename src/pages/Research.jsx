import React from 'react';
import { GITHUB } from '../site';
import './Research.css';

// Figures here come from the one-page resume (public/files/Joshua_Mantey_Resume_1pg.pdf).
// Keep the two in sync -- a recruiter will read both.
const current = [
  {
    title: 'Getting oral drugs through the intestinal mucus layer',
    role: 'Graduate Research Assistant · Jan 2025 – present',
    body: [
      'Much of an oral dose never reaches the bloodstream, because the mucus lining the intestine traps it first. I simulate full-length MUC2 mucin — 5,200+ amino acids, over 3 million atoms once it is glycosylated — together with the bile salts it sits among, and measure where drug molecules get held up.',
      'The comparison that matters is glycosylated against non-glycosylated MUC2: the sugar coating is most of what a drug molecule actually meets, and it changes how the chain moves. The long-term target is formulations designed around those interactions, starting with the thickened mucus seen in cystic fibrosis. That is the aim, not a result I have yet.',
    ],
    methods:
      'All-atom MD in AMBER and GROMACS on NSF ACCESS HPC clusters — 1.2 µs of trajectory, about 10 TB of data. Analysis in Python: cross-normalized DCCM, PCA, t-SNE and spectral embedding.',
    status: 'Simulations and analysis ongoing. This is my thesis project.',
  },
  {
    // TODO(Joshua): your resume says "Co-Founder and Group Leader"; the
    // Adomonline write-up says "Head of Data and Artificial Intelligence".
    // Pick one and use it here and on the resume.
    title: 'Sankofa Fresh',
    role: 'Co-founder, data and AI · agri-tech, Ghana',
    body: [
      'A marketplace that connects Ghanaian smallholder farmers directly to buyers. I built the model that estimates spoilage risk from temperature and transit-time data, and the algorithm that matches farmers to buyers.',
      'It is the one piece of my work with real users and a real cost of being wrong: a bad spoilage estimate loses someone their crop, not a figure in a paper.',
    ],
    methods: 'Python, risk modeling on temperature and transit-time data, matching algorithm.',
    status:
      'One of six finalists out of 700+ teams from 150 countries at the World Bank Group Youth Summit 2026, where it won the People’s Choice Award.',
  },
];

const completed = [
  {
    title: 'HIV envelope conformational analysis',
    role: 'Research Collaborator · Fred Hutchinson Cancer Center · May – July 2025',
    body: [
      'Analyzed 8+ conformational states of the HIV envelope proteins gp120 and gp41, drawn from both MD simulations and cryo-EM structures, to find binding pockets that stay conserved across states — the pockets a broadly neutralizing antibody would need to reach.',
    ],
    methods: 'Molecular dynamics, cryo-EM structural analysis, conserved-pocket identification.',
  },
  {
    title: 'Biomedical literature RAG pipeline',
    role: 'PubMed · FAISS · LangChain · OpenAI · 2025 – 2026',
    body: [
      'A retrieval pipeline over roughly 1,000 PubMed clinical trial abstracts, built so that every answer can be traced to a PMID. MeSH-aware XML ingestion from NCBI Entrez, and a deliberately strict grounding prompt that forces inline references — because an unsourced answer is worse than no answer in a regulated domain.',
    ],
    methods:
      'OpenAI text-embedding-3-small embeddings, FAISS IndexFlatIP vector index, NCBI E-utilities, LangChain.',
  },
  {
    title: 'Diabetes risk predictor',
    role: 'XGBoost · SHAP · Streamlit · 2025 – 2026',
    body: [
      'Ten classification models benchmarked on the Pima Indians dataset (768 patients) with cross-validation and F1-optimized thresholding, reaching ROC-AUC above 0.85. Deployed as a Streamlit app with per-patient SHAP attributions, so a prediction comes with the reason for it rather than just a number.',
    ],
    methods: 'XGBoost, SHAP TreeExplainer, cross-validation, Streamlit.',
  },
  {
    title: 'CO₂ adsorption for carbon capture',
    role: 'Computational modeling · Sept 2024 – May 2025',
    body: [
      'ML models over 50,000+ atomic configurations predicting CO₂ adsorption on NH₄HCO₃ for industrial carbon capture, plus CFD data with over a million mesh elements processed for natural gas storage optimization.',
    ],
  },
  {
    title: 'Bioreactor process engineering',
    role: 'Bioprocess projects · Sept 2024 – May 2025',
    body: [
      'Reached 250 mg/L recombinant protein yield by applying statistical process control and design of experiments to bioreactor data, and cut batch-to-batch variability by 30% with a PAT framework and real-time sensor monitoring.',
    ],
  },
  {
    title: 'Stefan problems with variable thermal conductivity',
    role: 'Numerical methods · Nuclear safety',
    body: [
      'A Python solver for moving-boundary heat transfer, validated against analytical solutions, modeling phase change in molten salt reactor emergency shutdown systems. Nine freeze-valve configurations compared; a 10 mm design gave a 71-second emergency melt time with a 40% safety margin, checked against Stefan number and thermal diffusion calculations.',
    ],
  },
  {
    title: 'Thermal processing in food manufacturing',
    role: 'Process engineer',
    body: [
      'Cut energy cost across pasteurization, sterilization and blanching by 12% while holding product safety and quality compliance, and built the process control strategies behind it.',
    ],
  },
];

function Project({ title, role, body, methods, status }) {
  return (
    <article className="project">
      <header className="project-head">
        <h3>{title}</h3>
        <span className="project-role">{role}</span>
      </header>
      {body.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {methods && (
        <p className="project-meta">
          <span>Methods</span> {methods}
        </p>
      )}
      {status && (
        <p className="project-meta">
          <span>Status</span> {status}
        </p>
      )}
    </article>
  );
}

function Research() {
  return (
    <div className="page research-page">
      <section className="section research-hero">
        <div className="container">
          <span className="pill">Research</span>
          <h1>Why don&rsquo;t oral drugs get absorbed?</h1>
          <p className="lead">
            That question is the thread through most of my work. It starts at the
            mucus layer in the intestine, where simulation shows what an
            experiment cannot watch directly, and runs out to the machine
            learning needed to make sense of terabytes of trajectory.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Current work</h2>
            <span className="pill">SimBioSys Lab</span>
          </div>
          <div className="project-list">
            {current.map((p) => (
              <Project key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section earlier-section">
        <div className="container">
          <div className="section-title">
            <h2>Earlier work</h2>
          </div>
          <div className="project-list">
            {completed.map((p) => (
              <Project key={p.title} {...p} />
            ))}
            <p className="project-code">
              Code for the deployment projects is on{' '}
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
