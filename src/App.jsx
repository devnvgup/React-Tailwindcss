import PricingGrid from "./components/PricingGrid";
import {  Routes, Route } from "react-router";
import ProductModal from "./components/ProductModal";
import LoginModal from "./components/LoginModal";

function App() {

  return (
    <>
      <Routes>
        <Route path="/pricinggrid" element={<PricingGrid />} />
        <Route path="/productmodal" element={<ProductModal />} />
        <Route path="/loginmodal" element={<LoginModal />} />
      </Routes>
    </>
  );
}

export default App;
