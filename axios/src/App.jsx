import RandomDog from "./components/RandomDog";
import ContentText from "./components/ContentText";
import Validation from "./components/Validation";
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
          <Link to="/"><Button variant="contained" color="success" startIcon={<PetsIcon />}>Axios GET</Button></Link>
          <Link to="/text"><Button variant="contained" color="success" startIcon={<AbcIcon />}>Axios ALL</Button></Link>
          <Link to="/varidation"><Button variant="contained" color="success" startIcon={<AbcIcon />}>Varidation From</Button></Link>
        </div>
        <Routes>
          <Route path="/" element={<RandomDog />} exact></Route>
          <Route path="/text" element={<ContentText />}></Route>
          <Route path="/varidation" element={<Validation />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;