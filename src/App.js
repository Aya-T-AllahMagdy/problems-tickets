import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { Container } from 'react-bootstrap';
import Tickets from './Pages/Tickets';

function App() {
  return (
    <Container className="App">
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/" element={<Tickets/>}/>
     </Routes>
    </Container>
  );
}

export default App;
