import RandomDog from "./components/RandomDog";
import ContentText from "./components/ContentText";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import './App.css'
import PetsIcon from '@mui/icons-material/Pets';
import AbcIcon from '@mui/icons-material/Abc';

function App() {
  return (
    <>
      <Router>
        <div className="nav">
          <Link to="/"><Button variant="contained" color="success" startIcon={<PetsIcon />}>Random DOG!</Button></Link>
          <Link to="/text"><Button variant="contained" color="success" startIcon={<AbcIcon />}>Get Text!</Button></Link>
        </div>
        <Routes>
          <Route path="/" element={<RandomDog />} exact></Route>
          <Route path="/text" element={<ContentText />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;