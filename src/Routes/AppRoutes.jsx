import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/Home/MainPage.jsx";
import Men from "../Pages/Men/Men.jsx";
import Women from "../Pages/Women/Women.jsx";
import About from "../Pages/Home/Components/About/About.jsx";
import Contact from "../Pages/Home/Components/Contact/Contact.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
