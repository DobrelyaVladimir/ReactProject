import './App.css';
import { Routes, Route } from "react-router-dom";
import Game1x4 from './components/game1x4/Game1x4';
import Game2x4 from './components/game2x4/Game2x4';
import Game3x4 from './components/game3x4/Game3x4';
import Game4x4 from './components/game4x4/Game4x4';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
       
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/game1x4" element={<Game1x4/>} />
          <Route path="/game2x4" element={<Game2x4 />} />
          <Route path="/game3x4" element={<Game3x4 />} />
          <Route path="/game4x4" element={<Game4x4/>} />
          <Route path="*" element={<div> Page not found 404 </div>} />
        </Routes>
    </div>
  );
}

export default App;
