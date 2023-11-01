import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeBuyPage from "./pages/WeBuyPage";
import { AnimatePresence } from "framer-motion";
import OurProductsPage from "./pages/OurProductsPage";
import InstrumentsPage from "./pages/InstrumentsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles/muiStyles";

const App: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webuy" element={<WeBuyPage />} />
          <Route path="/ourproducts" element={<OurProductsPage />} />
          <Route path="/instruments" element={<InstrumentsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
