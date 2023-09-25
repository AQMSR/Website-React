import './App.css';
import Header from "./components/header/header";
import Logo from "./components/logo/logo";
import Homenav from "./components/home_NAV/homenav";
import AboutNav from "./components/about_NAV/aboutNav";
import Home from "./components/home/home";
import React, {useState} from "react";
import About from "./components/about/about";
import ServicesNAV from "./components/services_NAV/servicesNAV";
import ServicesDropdown from "./components/services_Dropdown/servicesDropdown";
import Service1 from "./components/service1/service1";
import FooterAbout from "./components/footer/footer_about/footerAbout";
import FooterContact from "./components/footer/footer_contact/footerContact";
import FooterServices from "./components/footer/footer_services/footerServices";
import Hero from "./components/hero/hero";



function App() {
    const [isHomeClicked, setIsHomeClicked] = useState(true)
    const [isAboutClicked, setIsAboutClicked] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedService, setSelectedService] = useState(null)
    const [isServiceOpen, setIsServiceOpen] = useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    const handleAboutClick = () => {
        setIsHomeClicked(!isHomeClicked)
        setIsAboutClicked(!isAboutClicked)
    }
    
    const handleHomeClick = () => {
        setIsHomeClicked(true)
        setIsAboutClicked(false)
    }
    
    const handleServiceClick = (service) =>{
        setSelectedService(service)
    }
    
    const handleServiceOpen = () =>{
        setIsServiceOpen(!isServiceOpen)
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
          
          <div className="App_Header-ServiceNav" onMouseEnter={toggleDropdown}
               >
              <ServicesNAV/>
          </div>
          {isDropdownOpen &&
              (
                  <div className="dropdown-content"
                       onClick={handleServiceOpen} onMouseLeave={toggleDropdown}>
                  <ServicesDropdown onServiceClick={handleServiceClick} />
                  </div>
              )
          }
      </Header>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            {isAboutClicked?<About/> : <Home/>}
            
                {selectedService === 'service1' && isServiceOpen && (
                    <Service1/>
                )}
            
                {selectedService === 'service2' && isServiceOpen && (
                <h3>Service 2!</h3>
                )}
            
            
        </div>
        <footer className="App_Footer">
            <FooterAbout/>
            <FooterContact/>
            <FooterServices/>
        </footer>
        
    </div>
  );
}

export default App;
