import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Bolg from "./Bolg";
import Gallary from "./Gallary";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Notfound from "./Notfound";
export function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="Bolg" element={<Bolg />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
