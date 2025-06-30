// src/components/TeamSection.jsx
import React from 'react';
import './TeamSection.css';

const team = [
  {
    name: "IDRISSA SAWADOGO",
    role: "Développeur web full stack",
    img: "/assets/rahim.jpg",
    social: { x: "#", fb: "#", in: "#", ig: "#" },
    more: "Expert React et Node.js"
  },
  {
    name: "FÉLIX KIENDREBÉOGO",
    role: "Graphiste et web designer",
    img: "/assets/francois.jpg",
    social: { x: "#", fb: "#", in: "#", ig: "#" },
    more: "Spécialisé en design UI/UX"
  },
  {
    name: "FOULISA",
    role: "Team",
    img: "/assets/team3.jpg",
    social: { x: "#", fb: "#", in: "#", ig: "#" },
    more: "Support technique & coordination"
  },
  {
    name: "ADAMA GAGRE",
    role: "Dev full stack & CM",
    img: "/assets/team4.jpg",
    social: { x: "#", fb: "#", in: "#", ig: "#" },
    more: "Community management et Laravel"
  },
];

const TeamSection = () => {
  return (
    <section className="team-section py-5">
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5">Notre équipe</h2>
        <div className="row justify-content-center">
          {team.map((member, idx) => (
            <div key={idx} className="col-md-3 col-sm-6 mb-4">
              <div className="card-container">
                <div className="card-flip">
                  {/* Face avant */}
                  <div className="card front shadow-sm">
                    <img src={member.img} alt={member.name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{member.name}</h5>
                      <p className="card-text">{member.role}</p>
                      <div className="d-flex justify-content-center gap-2">
                        <a href={member.social.x}><i className="fab fa-x-twitter"></i></a>
                        <a href={member.social.fb}><i className="fab fa-facebook-f"></i></a>
                        <a href={member.social.in}><i className="fab fa-linkedin-in"></i></a>
                        <a href={member.social.ig}><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                  {/* Face arrière */}
                  <div className="card back shadow-sm">
                    <div className="card-body d-flex justify-content-center align-items-center text-center">
                      <p className="m-0">{member.more}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
