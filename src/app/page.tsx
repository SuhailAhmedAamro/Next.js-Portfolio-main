
import About from "./about/page";
import Project from "./project/page";

import Contact from "./contact/page";
import Footer from "./components/Footer";
import Skill from "./skill/page";

export default function Home() {
  return (
    <div>
      
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="skill"><Skill /></div>
  
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}
