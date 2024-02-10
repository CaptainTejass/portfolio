import Hero from "./Hero/Hero";
import Parallax from "./Parallax/Parallax";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import "./app.scss";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Cursor from "./cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
        <img className="dolby" src="/og_folio/public/dolby.jpg"/>
      </section>
      <section id="services">
        <Parallax type="services"/>
      </section>
      <section>
         <Services/>
      </section>
      <section id="portfolio">
        <Parallax type="portfolio"/>
      </section>      
      <Portfolio/>            
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
