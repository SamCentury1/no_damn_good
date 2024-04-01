import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './views/home_page/HomePage';
import ScribbyPage from './views/scribby/scribby_page/ScribbyPage';
import ScribbyPrivacyPolicy from './views/scribby/privacy_policy_page/ScribbyPrivacyPolicy';
import About from './views/about/About';
// import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        
          <Route path="/" element={<HomePage/>} />
          <Route path="/games/scribby" element={<ScribbyPage/>} />
          <Route path="/games/scribby" element={<ScribbyPage/>} />
          <Route path="/games/scribby/privacy-policy" element={<ScribbyPrivacyPolicy/>} /> 

          <Route path="/about" element={<About/>} />
          
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
