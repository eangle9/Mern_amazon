import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home screen/HomeScreen";
import ProductDetail from "./screens/product/ProductDetail";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site_container">
        <Header />
        <main className="mt-3">
          <Container>
            <Routes>
              <Route path="/" Component={HomeScreen} />
              <Route path="/product/:slug" Component={ProductDetail} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
