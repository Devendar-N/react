import {
  ProductDetailsPage,
  AboutUs,
  Header,
  Footer,
  BreadCrumb
} from "@components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BreadCrumb/>
      <Routes>
        <Route path="/Account/gaming/havic-HV G-92 Gamepad" element={<ProductDetailsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
