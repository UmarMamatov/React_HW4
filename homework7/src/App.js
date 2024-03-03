import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonInfoPage from "./PakemonInfoPage/PokemonInfoPage";
import Pokemon from "./pakemon/Pokemon";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Pokemon/>}/>
          <Route path='/pokemon/:id' element={<PokemonInfoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
