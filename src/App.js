// App.js
import React from "react";
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
  return (
    <div className="bd">
      <NavTabs />
      <Welcome/>
      <Tasks/>
      <Aboutus/>
      <Team/>
      <Portfolio/>
      <Testimonials />
      <Pricing />
      <Images/>
      <Subscribe/>
      <Ending/>
    </div>
  );
}

export default App;
