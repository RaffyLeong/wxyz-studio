
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Sidebar from "./components/Sidebar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <div className="flex flex-row flex-grow"> 
        <main className="flex-grow p-4"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        <Sidebar /> 
      </div>
      <Footer />
    </div>
  );
};

export default App;