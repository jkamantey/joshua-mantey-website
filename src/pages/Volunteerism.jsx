import React from 'react';
import './Volunteerism.css';

const moments = [
  {
    img: '/images/aiche_presentation.jpeg',
    title: 'AIChE Annual Meeting · Boston 2025',
    role: 'Presenter & Delegate',
    description:
      'Representing Northeastern University at the American Institute of Chemical Engineers Annual Meeting, one of the most prestigious gatherings in chemical and biomedical engineering. A testament to showing up on the world stage and making the African diaspora proud.',
  },
  {
    img: '/images/Agsa_picture_ledleadership.jpeg',
    title: 'AGSA Community Leadership',
    role: 'Student Leader',
    description:
      'At the heart of a thriving African Graduate Student Association community. Helping build a space where African students feel seen, supported, and empowered to excel, because representation and belonging matter as much as any research milestone.',
  },
  {
    img: '/images/Agsa_career.jpeg',
    title: 'AGSA Career Development Panel',
    role: 'Moderator & Organizer',
    description:
      'Facilitating career conversations that open doors. By organizing and moderating professional development panels, Joshua helps fellow African graduate students navigate their paths with confidence, bridging the gap between ambition and opportunity.',
  },
  {
    img: '/images/Moad_prizecompetition.jpeg',
    title: 'MOAD NextGen Pitch Competition',
    role: 'Award Winner · $500 Prize',
    description:
      'Winning the Massachusetts Organization of African Descendants (MOAD) NextGen Pitch Competition is more than a prize. It is proof that bold ideas from the African diaspora deserve a platform. Innovation, community, and purpose all in one moment.',
  },
  {
    img: '/images/FOG_event.jpeg',
    title: 'Festival of Genomics & Biodata · Boston',
    role: 'Conference Delegate',
    description:
      'Engaging at the intersection of genomics, biodata, and the future of medicine. Attending the Festival of Genomics & Biodata reflects a commitment to staying at the frontier, where computational biology meets translational impact for human health.',
  },
  {
    img: '/images/lab_picture.jpeg',
    title: 'In the SimBioSys Laboratory',
    role: 'PhD Researcher · Northeastern University',
    description:
      'This is where discovery lives. Hours of focused work at the SimBioSys Lab, building machine learning pipelines, running molecular simulations, interpreting data, and turning scientific questions into answers that could one day improve how medicines reach patients with cystic fibrosis and beyond.',
  },
  {
    img: '/images/presentation.jpeg',
    title: 'MUC2 Molecular Dynamics · Research Presentation',
    role: 'Presenter · AIChE Boston',
    description:
      'Delivering a live presentation on modeling the full-length MUC2 mucin and its bile salt interactions using molecular dynamics simulations. Communicating complex science to an expert audience is a skill as vital as the research itself, and Joshua rises to that challenge with clarity and confidence.',
  },
  {
    img: '/images/Havard_businesss_school.jpeg',
    imgPosition: 'center center',
    title: 'Harvard Business School',
    role: 'Academic Exploration · Boston, MA',
    description:
      'Standing at the intersection of science and business. A visit to Harvard Business School reflects a broader ambition to bridge rigorous research with entrepreneurial vision, translating laboratory discoveries into real-world healthcare impact that reaches communities across the globe.',
  },
  {
    img: '/images/With president of massachussetts life sciences.jpeg',
    title: 'With the President of Massachusetts Life Sciences',
    role: 'Professional Engagement',
    description:
      'A memorable encounter with the President of Massachusetts Life Sciences, the organization driving biotech and pharmaceutical innovation across the state. Moments like these reinforce the importance of connecting science with policy, industry, and leadership at the highest levels.',
  },
  {
    img: '/images/skating.jpeg',
    title: 'Life Beyond the Lab',
    role: 'Community & Friendship',
    description:
      'The best research teams are built on genuine friendships. Taking a break from simulations and scientific writing to hit the ice rink, a reminder that balance, joy, and community are just as essential as any academic milestone. Science is richer when surrounded by great people.',
  },
];

function Volunteerism() {
  return (
    <div className="page volunteerism-page">
      <section className="section volunteerism-hero">
        <div className="container">
          <span className="pill">Community · Leadership · Impact</span>
          <h1>Beyond the Bench</h1>
          <p className="lead">
            Science does not exist in isolation. Here is a glimpse into the
            community engagement, leadership, and memorable moments that shape
            Joshua's journey as a researcher, mentor, and member of the global
            African diaspora.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="vol-grid">
            {moments.map((m, i) => (
              <article className="vol-card" key={i}>
                <div className="vol-img-wrap">
                  <img src={m.img} alt={m.title} style={m.imgPosition ? { objectPosition: m.imgPosition } : undefined} />
                  <span className="vol-role-badge">{m.role}</span>
                </div>
                <div className="vol-body">
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Volunteerism;
