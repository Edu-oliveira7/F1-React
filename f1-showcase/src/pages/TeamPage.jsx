import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { f1Data } from '../data/f1Data';
import './TeamPage.css';

function TeamPage() {
  const { teamName } = useParams();
  const navigate = useNavigate();
  
  const team = f1Data.find(t => 
    t.team.toLowerCase().replace(/ /g, '-') === teamName
  );

  if (!team) {
    return (
      <div className="team-page-container error-page">
        <Container>
            <Button 
            variant="outline-light" 
            onClick={() => navigate('/')}
            className="back-button mb-4"
            >
            ← Voltar para o Grid
            </Button>
            <div className="error-card text-center">
            <h2>Equipe não encontrada</h2>
            <p className="lead">A equipe "{teamName}" não foi localizada.</p>
            </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="team-page-container" style={{ '--team-color': team.color }}>
      <Container>

        {/* Hero Section */}
        <section className="team-hero">
          <div className="hero-glow"></div>
          <div className="hero-layout">
            <div className="hero-logo">
              <img 
                src={team.logo} 
                alt={`${team.team} logo`}
                className="team-logo-large"
              />
            </div>
            <div className="hero-info">
              <h1 className="team-title">{team.team}</h1>
              <div className="title-line" style={{ backgroundColor: team.color }}></div>
              <div className="team-meta">
                <div className="meta-item">🏁 Fundada em {team.founded}</div>
                <div className="meta-item">👨‍💼 {team.principal}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card" style={{ borderColor: team.color }}>
              <div className="stat-icon">🏆</div>
              <div className="stat-value" style={{ color: team.color }}>{team.wins}</div>
              <div className="stat-label">Vitórias</div>
            </div>
            <div className="stat-card" style={{ borderColor: team.color }}>
              <div className="stat-icon">👑</div>
              <div className="stat-value" style={{ color: team.color }}>
                {team.championships > 0 ? team.championships : '—'}
              </div>
              <div className="stat-label">Títulos</div>
            </div>
            <div className="stat-card" style={{ borderColor: team.color }}>
              <div className="stat-icon">🏎️</div>
              <div className="stat-value" style={{ color: team.color }}>{team.drivers.length}</div>
              <div className="stat-label">Pilotos</div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="history-section">
          <h2 className="section-heading">
            <span className="heading-accent" style={{ backgroundColor: team.color }}></span>
            História da Equipe
          </h2>
          <div className="history-card" style={{ borderLeftColor: team.color }}>
            <p>{team.history}</p>
          </div>
        </section>

        {/* Drivers Section */}
        <section className="drivers-section">
          <h2 className="section-heading">
            <span className="heading-accent" style={{ backgroundColor: team.color }}></span>
            Pilotos {new Date().getFullYear()}
          </h2>
          <div className="drivers-grid">
            {team.drivers.map((driver) => (
              <article key={driver.id} className="driver-card" style={{ '--driver-color': team.color }}>
                <div className="driver-image-wrapper">
                  <img 
                    src={driver.photo} 
                    alt={driver.name}
                    className="driver-photo"
                  />
                  <div className="driver-overlay"></div>
                  <div className="driver-number-badge">{driver.number}</div>
                </div>
                <div className="driver-content">
                  <h3 className="driver-name">{driver.name}</h3>
                  <div className="driver-divider" style={{ backgroundColor: team.color }}></div>
                  <p className="driver-info">{driver.info}</p>
                  <p className="driver-bio">{driver.history}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Back Button placed after all content */}
        <div className="back-button-wrap">
          <Button 
            variant="outline-light" 
            onClick={() => navigate('/')}
            className="back-button"
          >
            ← Voltar
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default TeamPage;