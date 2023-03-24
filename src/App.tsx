import "./App.css";
import CustomCarousel from "./components/Custom/CustomCarousel";
import Header from "./components/Header";

import AddProduct from "./Pages/Product/AddProduct";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GetProduct from "./Pages/Product/GetProduct";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/getProducts" element={<GetProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
