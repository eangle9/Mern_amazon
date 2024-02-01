import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import HomeScreen from "./screens/home screen/HomeScreen";
import ProductDetail from "./screens/product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">amazon</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" Component={HomeScreen}/>
          <Route path="/product/:slug" Component={ProductDetail} />
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
