import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import New from './Pages/New';


function App() {
  return (
    
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/posts" element = {<Index/>}/>
      <Route path="/posts/new" element={<New/>}/>
          {/* <Route path="/posts/:id" element = {<Show/>}/>
          <Route path="post/:id/edit" element={<Edit/>}/>
          <Route path="/forum" element={<Forum/>}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/' element=""/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
