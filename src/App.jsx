import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portofolio from "./components/portofolio/Portofolio";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portofolio">
        <Parallax type="portofolio" />
      </section>
      <Portofolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <About />
      </section>
    </div>
  );
};

export default App;
