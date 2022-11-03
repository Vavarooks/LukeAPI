import './App.css';
import {Routes, Route} from 'react-router-dom';
import Planets from './componets/Planets';
import People from './componets/People';
import StarWars from './componets/StarWars';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StarWars/>}/>
        <Route path="/planets" element={<Planets/>}/>
        <Route path="/people" element={<People/>}/>
      </Routes>
    </div>
  );
}

export default App;
