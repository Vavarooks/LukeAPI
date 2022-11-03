import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Starwars/>}/>
        <Route path="/planets" element={<Planets/>}/>
        <Route path="/people" element={<People/>}/>
      </Routes>
    </div>
  );
}

export default App;
