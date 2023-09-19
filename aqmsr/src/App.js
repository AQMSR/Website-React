import './App.css';
import Header from "./components/header/header";
import Logo from "./components/logo/logo";
import Homenav from "./components/home_NAV/homenav";
import AboutNav from "./components/about_NAV/aboutNav";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
        <div className="Header">
      <Header>
          <Logo/>
          <Homenav/>
          <AboutNav/>
      </Header>
        </div>
        <>
            <Home/>
        </>
        
        
        
      
    </div>
  );
}

export default App;
