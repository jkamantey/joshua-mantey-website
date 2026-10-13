import React from 'react';
import './Volunteerism.css';

const moments = [
  {
    img: '/images/worldbank_presentation.JPG',
    imgPosition: 'center top',
    title: 'World Bank Group Youth Summit',
    role: 'Finalist · Washington DC · 2026',
    description:
      'Pitching Sankofa Fresh, the farmer-to-buyer marketplace I co-founded and build the data and AI side of. One of six finalists out of more than 700 teams from 150 countries.',
  },
  {
    img: '/images/worldbank_award.WEBP',
    imgPosition: 'center center',
    title: "People's Choice Award",
    role: 'Outstanding Impact and Community Recognition',
    description:
      'The award that came out of that summit was the one voted by the room, which I did not expect and still think is the better one to win.',
  },
  {
    img: '/images/worldbank_certificate.JPG',
    imgPosition: 'center center',
    title: 'World Bank Youth Summit · certificate',
    role: 'Award recipient',
    description: 'Certificate and prize from the same summit.',
  },
  {
    img: '/images/presentation.jpeg',
    title: 'MUC2 molecular dynamics',
    role: 'Presenter · AIChE Annual Meeting, Boston 2025',
    description:
      'Presenting the full-length MUC2 mucin simulations and the bile salt interactions we measured from them. Explaining a 3-million-atom system to a room in twelve minutes is its own skill, and I am still working on it.',
  },
  {
    img: '/images/aiche_presentation.jpeg',
    title: 'AIChE Annual Meeting',
    role: 'Presenter · Northeastern University',
    description:
      'At the American Institute of Chemical Engineers annual meeting, representing the lab.',
  },
  {
    img: '/images/Agsa_career.jpeg',
    title: 'AGSA career development panel',
    role: 'Academic & Networking Chair · organizer and moderator',
    description:
      'I organize and moderate these panels for the African Graduate Student Association. The useful part is rarely the talks; it is the twenty minutes afterwards when people ask the question they were too embarrassed to ask in the room.',
  },
  {
    img: '/images/Agsa_picture_ledleadership.jpeg',
    title: 'African Graduate Student Association',
    role: 'Academic & Networking Chair · Mentorship Chair',
    description:
      'Mentorship and community work with African graduate students at Northeastern, including a webinar run with the Office of Global Services.',
  },
  {
    img: '/images/Moad_prizecompetition.jpeg',
    title: 'MOAD NextGen pitch competition',
    role: 'Winner · $500 prize',
    description:
      'Won the Massachusetts Organization of African Descendants NextGen pitch competition.',
  },
  {
    img: '/images/lab_picture.jpeg',
    title: 'In the SimBioSys Laboratory',
    role: 'Northeastern University',
    description:
      'Where the simulations actually get built, run, and then re-run because the first setup was wrong.',
  },
  {
    img: '/images/FOG_event.jpeg',
    title: 'Festival of Genomics & Biodata',
    role: 'Delegate · Boston',
    description:
      'Two days of genomics and biodata talks, mostly to find out what the experimental side is measuring that I should be simulating.',
  },
  {
    img: '/images/With president of massachussetts life sciences.jpeg',
    title: 'With the President of Massachusetts Life Sciences',
    role: 'Industry engagement',
    description:
      'Massachusetts Life Sciences works on the policy and funding side of the state biotech sector, which is where a lot of this research eventually has to land.',
  },
  {
    img: '/images/Havard_businesss_school.jpeg',
    imgPosition: 'center center',
    title: 'Harvard Business School',
    role: 'Boston, MA',
    description:
      'I am interested in how lab results turn into products, which is a different problem from the one I am trained for.',
  },
  {
    img: '/images/skating.jpeg',
    title: 'Off the clock',
    role: 'Community',
    description:
      'At the rink with friends from the program. I also cook a lot and play chess badly.',
  },
];

function Volunteerism() {
  return (
    <div className="page volunteerism-page">
      <section className="section volunteerism-hero">
        <div className="container">
          <span className="pill">Community</span>
          <h1>Outside the simulations</h1>
          <p className="lead">
            Mentoring and organizing with the African Graduate Student
            Association, a few competitions, and the conferences where the work
            gets argued over.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="vol-grid">
            {moments.map((m) => (
              <article className="vol-card" key={m.img + m.title}>
                <div className="vol-img-wrap">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    style={m.imgPosition ? { objectPosition: m.imgPosition } : undefined}
                  />
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
