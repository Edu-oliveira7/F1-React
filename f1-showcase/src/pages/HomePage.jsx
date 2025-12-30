import { Row, Col, Container } from 'react-bootstrap';
import TeamCard from '../components/TeamCard';
import { f1Data } from '../data/f1Data';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section text-center mb-5">
        {/* ... conteúdo hero ... */}
      </div>

      {/* Grid de Equipes */}
      <div className="teams-grid-section">
        <h3 className="section-title text-center mb-5">
          <span className="title-text">GRID DE EQUIPES</span>
          <div className="title-line"></div>
        </h3>
        
        {/* ADICIONAR: row-equal-height para garantir altura igual */}
        <Row xs={1} md={2} lg={2} xl={4} className="g-4 row-equal-height">
          {f1Data.map((team, index) => (
            <Col key={team.team} className="team-col d-flex">
              <div 
                className="card-wrapper flex-grow-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TeamCard team={team} />
              </div>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5 pt-4">
          {/* ... conteúdo footer ... */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;