import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './views/home_page/HomePage';
import ScribbyPage from './views/scribby_page/ScribbyPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/games/scribby" element={<ScribbyPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
