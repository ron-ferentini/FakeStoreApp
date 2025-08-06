import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductListing from "./components/ProductListing.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import AddProduct from "./components/AddProduct.jsx";
import EditProduct from "./components/EditProduct.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
