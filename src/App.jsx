import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
