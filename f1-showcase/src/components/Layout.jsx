import { Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <>
      {/* HEADER */}
      <header className="f1-header">
        <Container>
          <div className="header-content py-4">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="d-flex align-items-center justify-content-center">
                <div className="f1-logo-container">
                  <div className="f1-logo-red"></div>
                  <div className="f1-logo-text">F1</div>
                </div>
                <div className="header-text ms-3">
                  <h1 className="f1-main-title mb-0">FORMULA 1</h1>
                  <p className="f1-subtitle mb-0">GRID 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="f1-main">
        <Container>
          <Outlet />
        </Container>
      </main>

      {/* FOOTER */}
      <footer className="f1-footer py-4 mt-5">
        <Container>
          <div className="text-center">
            <p className="mb-0 small text-white"> | Projeto educativo React | Fan project</p>
            <div className="footer-flags mt-3">
              <span className="flag-red"></span>
              <span className="flag-yellow mx-2"></span>
              <span className="flag-green"></span>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Layout;