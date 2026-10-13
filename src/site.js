// Single source of truth for the canonical URL, per-route head tags and the
// prerender/sitemap route list. Imported by the app and by scripts/prerender.mjs.

export const SITE_URL = 'https://manteyjoshua.com';

export const OG_IMAGE = '/images/og-card.jpg';

export const AUTHOR = 'Joshua Kojo Aduampong Mantey';

export const EMAIL = 'mantey.j@northeastern.edu';
export const GITHUB = 'https://github.com/jkamantey';
export const LINKEDIN = 'https://www.linkedin.com/in/mantey-joshua';
export const SCHOLAR =
  'https://scholar.google.com/citations?user=8lAWa2sAAAAJ&hl=en';

// Used as the fallback description and as the <meta> author/name everywhere.
export const TAGLINE =
  'Chemical engineering PhD student at Northeastern University using atomistic molecular dynamics and machine learning to study how oral drugs move through the intestinal mucus barrier.';

export const ROUTES = [
  {
    path: '/',
    title: 'Joshua Mantey | Simulating how drugs cross the gut mucus barrier',
    description:
      'Joshua Mantey is a chemical engineering PhD student at Northeastern University. He uses atomistic molecular dynamics and machine learning to study how oral drugs move through the intestinal mucus barrier, with a focus on cystic fibrosis therapeutics.',
  },
  {
    path: '/research',
    title: 'Research | Joshua Mantey',
    description:
      'All-atom molecular dynamics of full-length MUC2 mucin and bile salts in AMBER and GROMACS, HIV envelope conformational analysis with Fred Hutchinson Cancer Center, the Sankofa Fresh agri-tech platform, and deployed machine learning projects in XGBoost, SHAP and RAG over PubMed.',
  },
  {
    path: '/publications',
    title: 'Publications & Presentations | Joshua Mantey',
    description:
      'Journal articles, conference presentations and media features by Joshua Kojo Aduampong Mantey, spanning molecular simulation, drug delivery and translational health research.',
  },
  {
    path: '/cv',
    title: 'Resume & CV | Joshua Mantey',
    description:
      'Education, technical skills, resume and full CV for Joshua Kojo Aduampong Mantey: PhD in Chemical Engineering at Northeastern University, MS in Biosystems and Biomaterials, BSc in Petrochemical Engineering from KNUST.',
  },
  {
    path: '/volunteerism',
    title: 'Community & Leadership | Joshua Mantey',
    description:
      'Mentorship and community work with the African Graduate Student Association, the World Bank Youth Summit competition, and the MOAD NextGen pitch competition.',
  },
  {
    path: '/contact',
    title: 'Contact | Joshua Mantey',
    description:
      'Get in touch with Joshua Mantey about co-op and internship roles, research collaborations and speaking invitations. Email mantey.j@northeastern.edu.',
  },
];
