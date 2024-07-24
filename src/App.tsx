import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProductsPage from "./pages/products";
import AboutPage from "@/pages/about";
import FAQPage from "./pages/faq";
import ContactPage from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductsPage />} path="/products" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<FAQPage />} path="/FAQ" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
