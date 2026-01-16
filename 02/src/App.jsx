import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbars from "./components/navbar.jsx";

function App() {
  return (
    <>
      <Navbars />
      <h1>Routers</h1>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
