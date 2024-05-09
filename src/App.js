import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './views/home_page/HomePage';
// import ScribbyPage from './views/scribby/scribby_page/ScribbyPage';
// import ScribbyPrivacyPolicy from './views/scribby/privacy_policy_page/ScribbyPrivacyPolicy';
import About from './views/about/About';
import ScribbyPage2 from './views/scribby/ScribbyPage2';
import PrivacyPage from './components/PrivacyPage/PrivacyPage';
import GamesPage from './views/games_page/GamesPage';
import ContactUs from './views/contact_us/ContactUs';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
        
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/games/scribby" element={<ScribbyPage/>} /> */}
          <Route path="/games/scribby" element={<ScribbyPage2/>} />
          {/* <Route path="/games/scribby/privacy-policy" element={<ScribbyPrivacyPolicy/>} />  */}
          <Route path="/games/scribby/privacy-policy" element={<PrivacyPage appName={'Scribby: Word Puzzle Game'} effectiveDate={'2024-03-23'}/>} /> 

          <Route path="/about" element={<About/>} />

          <Route path="/games" element={<GamesPage/>} />

          <Route path="/contact-us" element={<ContactUs/>} />


          {/* Social Media External Links: */}
          <Route path='/instagram' component={() => {
              window.location.href = 'https://www.instagram.com/nodamngoodstudios/';
              return null;
          }}/>          
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
