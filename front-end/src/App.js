import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';


function App() {
  return (
    
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/posts" element = {<Index/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element=""/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
