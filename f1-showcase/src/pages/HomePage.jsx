import { Row, Col, Container } from 'react-bootstrap';
import TeamCard from '../components/TeamCard';
import { f1Data } from '../data/f1Data';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">TEMPORADA <span className="highlight">2026</span></h1>
            <p className="hero-subtitle">O maior grid de Fórmula 1 da história</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">11</div>
                <div className="stat-label">Equipes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">22</div>
                <div className="stat-label">Pilotos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24</div>
                <div className="stat-label">Corridas</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Grid de Equipes */}
      <section className="teams-grid-section">
        <Container>
          <div className="section-header-wrapper mb-5 text-center">
            <h3 className="section-title">GRID DE EQUIPES</h3>
            <div className="title-line"></div>
          </div>
          
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {f1Data.map((team, index) => (
              <Col key={team.team} className="d-flex justify-content-center">
                <div 
                  className="card-wrapper w-100" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* O componente TeamCard deve gerenciar apenas a exibição da equipe */}
                  <TeamCard team={team} />
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5 pt-4">
            <p className="cta-text">Selecione uma equipe para ver detalhes completos</p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;