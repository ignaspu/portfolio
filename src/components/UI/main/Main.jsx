import About from "../../pages/about/About";
import Experience from "../../pages/experience/Experience";
import Hero from "../../pages/hero/Hero";
import Skills from "../../pages/skills/Skills";
import Testimonials from "../../pages/testimonials/Testimonials";
import Work from "../../pages/work/Work";

const Main = () => {
  return ( 
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      {/* <Testimonials/> */}
    </main>
   );
}
 
export default Main;