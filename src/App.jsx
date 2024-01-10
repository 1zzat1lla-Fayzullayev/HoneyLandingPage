import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import OurTrustedShops from "./components/OurTrustedShops";
import HoneyInfo from "./components/HoneyInfo";
import OurProduct from "./components/OurProduct";
import Footer from "./components/Footer";
import "./sass/_all.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <OurTrustedShops />
      <HoneyInfo />
      <OurProduct />
      <Footer />
    </div>
  );
}

export default App;
