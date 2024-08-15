// App.js
import React, {useRef} from "react";
import { NavTabs } from "./components/navtabs";
import { Welcome } from "./components/welcome";
import { Pricing } from "./components/pricing";
import { Tasks } from "./components/tasks";
import { Aboutus } from "./components/Aboutus";
import { Team } from "./components/ourteam";
import { Testimonials } from "./components/Testimonials";
import { Portfolio } from "./components/portfolio";
import { Images } from "./components/images";
import { Subscribe } from "./components/Subscribe";
import { Ending } from "./components/Ending";
import "./App.css";
function App() {
  const homeRef = useRef(null);
  const AboutRef = useRef(null);
  const ServicesRef = useRef(null);
  const OurTeamRef=useRef(null);
  const contactRef=useRef(null);
  return (
    <div className="bd">
      <NavTabs 
      homeRef={homeRef}
      AboutRef={AboutRef}
      ServicesRef={ServicesRef}
      OurTeamRef={OurTeamRef}
      contactRef={contactRef}/>
      <div ref={homeRef}>
        <Welcome />
      </div>
      <div ref={ServicesRef}><Tasks/></div>
      <div ref={AboutRef}>
        <Aboutus />
      </div>
      <div ref={OurTeamRef}><Team/></div>
      <Portfolio/>
      <Testimonials />
      <Pricing />
      <Images/>
      <Subscribe/>
      <div ref={contactRef}><Ending/></div>
    </div>
  );
}

export default App;
