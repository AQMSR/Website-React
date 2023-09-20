import './App.css';
import Header from "./components/header/header";
import Logo from "./components/logo/logo";
import Homenav from "./components/home_NAV/homenav";
import AboutNav from "./components/about_NAV/aboutNav";
import Home from "./components/home/home";
import React, {useState} from "react";
import About from "./components/about/about";
import ServicesNAV from "./components/services_NAV/servicesNAV";

function App() {
    const [isHomeClicked, setIsHomeClicked] = useState(true)
    const [isAboutClicked, setIsAboutClicked] = useState(false)
    const handleAboutClick = () => {
        setIsHomeClicked(!isHomeClicked)
        setIsAboutClicked(!isAboutClicked)
    }
    
    const handleHomeClick = () => {
        setIsHomeClicked(true)
        setIsAboutClicked(false)
    }
  return (
    <div className="App">
        <div className="Header">
      <Header>
          <Logo/>
          <div className="App_Header-HomeNav" onClick={handleHomeClick}>
            <Homenav />
          </div>
          
          <div className="App_Header-AboutNav" onClick={handleAboutClick}>
            <AboutNav/>
          </div>
          
          <div>
              <ServicesNAV/>
          </div>
      </Header>
        </div>
        <div>
            {isAboutClicked?<About/> : <Home/>}
        </div>
        
        
        
      
    </div>
  );
}

export default App;
