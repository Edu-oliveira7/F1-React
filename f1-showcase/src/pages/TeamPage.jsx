import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function TeamPage() {
  const { teamName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <Button 
        variant="outline-secondary" 
        onClick={() => navigate('/')}
        className="mb-4"
      >
        ← Voltar
      </Button>
      
      <Card className="p-4 shadow">
        <Card.Body>
          <Card.Title className="text-primary">
            Página da Equipe: {teamName}
          </Card.Title>
          <Card.Text className="mt-3">
            Aqui serão exibidos os detalhes completos da equipe {teamName}.
          </Card.Text>
          <div className="mt-4 p-3 bg-light rounded">
            <h5>Funcionalidades que serão adicionadas:</h5>
            <ul>
              <li>Logo e cores da equipe</li>
              <li>História completa</li>
              <li>Fotos dos pilotos</li>
              <li>Estatísticas</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TeamPage;