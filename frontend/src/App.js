import './App.css';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Add />} />
          <Route path="/map" element={"asd"} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;