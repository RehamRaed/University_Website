import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Program from "./pages/Home/Program"
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact"
import Campus from "./pages/Home/Campus";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
