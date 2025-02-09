import PricingGrid from "./components/PricingGrid";
import {  Routes, Route } from "react-router";
import ProductModal from "./components/ProductModal";

function App() {

  return (
    <>
      <Routes>
        <Route path="/pricinggrid" element={<PricingGrid />} />
        <Route path="/productmodal" element={<ProductModal />} />
      </Routes>
    </>
  );
}

export default App;
