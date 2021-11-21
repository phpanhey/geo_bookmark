import './App.css';
import Add from './components/Add';
import Map from './components/Map';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Add />} />
          <Route path="/map" element={<Map/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
