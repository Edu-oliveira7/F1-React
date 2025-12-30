import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TeamCard.css';

function TeamCard({ team }) {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    const teamSlug = team.team.toLowerCase().replace(/ /g, '-');
    navigate(`/team/${teamSlug}`);
  };

  return (
    <Card className="team-card h-100 border-0 shadow-lg">
      {/* Barra superior com cor da equipe */}
      <div 
        className="team-color-bar" 
        style={{ backgroundColor: team.color }}
      ></div>
      
      <Card.Body className="d-flex flex-column p-4">
        {/* Logo da equipe */}
        <div className="team-logo-container">
          <img 
            src={team.logo} 
            alt={`${team.team} logo`}
            className="team-logo-img"
          />
        </div>
        
        {/* Nome da equipe */}
        <div className="team-name-container">
          <h3 className="team-name" style={{ color: team.color }}>
            {team.team}
          </h3>
        </div>
        
        {/* Pilotos - Layout Compacto */}
        <div className="drivers-compact-section">
          <div className="drivers-row">
            {team.drivers.map((driver, index) => (
              <div className="driver-compact" key={driver.id}>
                <div className="driver-photo-name-wrapper">
                  <div className="driver-photo-compact">
                    <img 
                      src={driver.photo} 
                      alt={driver.name}
                      className="driver-photo-img"
                    />
                    <div 
                      className="driver-photo-frame"
                      style={{ borderColor: team.color }}
                    ></div>
                  </div>
                  <div className="driver-name-compact">
                    <span className="driver-first-name">
                      {driver.name.split(' ')[0]}
                    </span>
                    <span className="driver-last-name">
                      {driver.name.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                </div>
                {index === 0 && <div className="driver-divider">|</div>}
              </div>
            ))}
          </div>
        </div>
        
        {/* Botão Ver Mais - Container fixo */}
        <div className="team-button-container">
          <Button 
            className="team-button fw-bold"
            onClick={handleSeeMore}
            style={{ 
              backgroundColor: team.color,
              borderColor: team.color
            }}
          >
            <span className="button-text">VER DETALHES</span>
            <span className="button-icon">→</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;