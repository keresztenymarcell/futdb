import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import SingleMeal from './pages/SingleMeal';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/meal/:id' element={<SingleMeal/>} />
            <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
