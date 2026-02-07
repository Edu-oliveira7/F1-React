import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './TeamCard.css';

const TeamCard = ({ team }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navega para a página da equipe usando o nome formatado na URL
    navigate(`/team/${team.team.toLowerCase().replace(/ /g, '-')}`);
    // Scroll automático para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Card 
      className="team-card h-100" 
      onClick={handleCardClick}
      style={{ '--team-color': team.color }}
    >
      <div className="card-shine"></div>
      
      <Card.Body className="d-flex flex-column">
        
        <div className="team-header mb-3">
          <div className="logo-container">
            <img 
              src={team.logo} 
              alt={`${team.team} Logo`} 
              className="team-logo-small" 
            />
          </div>
          <h4 className="team-name">{team.team}</h4>
        </div>

        
        <div className="team-accent-line"></div>

        {/* Lista de Pilotos (APENAS NOMES) */}
        <div className="drivers-list mt-auto">
          <p className="drivers-label">PILOTOS 2026</p>
          <div className="driver-names-container">
            {team.drivers.map((driver) => (
              <div key={driver.id} className="driver-name-row">
                <span className="driver-number">#{driver.number}</span>
                <span className="driver-text">{driver.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Ver Mais */}
        <button 
          className="btn-see-more mt-3" 
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ borderColor: team.color, color: team.color }}
        >
          Ver mais →
        </button>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;