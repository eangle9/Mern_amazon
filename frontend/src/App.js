import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home screen/HomeScreen";
import ProductDetail from "./screens/product/ProductDetail";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site_container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main className="mt-3">
          <Container>
            <Routes>
              <Route path="/" Component={HomeScreen} />
              <Route path="/product/:slug" Component={ProductDetail} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
