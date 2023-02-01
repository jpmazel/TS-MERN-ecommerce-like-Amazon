import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { sampleProducts } from "./data";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    // tester avec h-100
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>tsAmazona</Navbar.Brand>
          </Container>

          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign
            </a>
          </Nav>
        </Navbar>
      </header>

      <main>
        {/* 
        mt = margin top 
        sm = small >= 576px
        md = medium >= 768px
        lg = large >= 992px
        il y a 12 sections donc 6, 4, 3 est un multiple de 12
        donc 6 = 2 items d'affichés
             4 = 3 items d'affichés
             3 = 4 items d'affichés
        */}
        <Container className="mt-3">
          <Outlet/>
          
        </Container>
      </main>

      <footer>
        <div>All right Reserved</div>
      </footer>
    </div>
  );
}

export default App;
