import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import PlayerPage from './pages/PlayerPage';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/player/:id' element={<PlayerPage/>} />
            <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
