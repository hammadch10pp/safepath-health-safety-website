
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";


import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />



          <Route
            path="*"
            element={
              <section className="app-test">
                <h1>404</h1>
                <p>Sorry, the page you are looking for was not found.</p>
                <a className="button" href="/">
                  Back to Home
                </a>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
