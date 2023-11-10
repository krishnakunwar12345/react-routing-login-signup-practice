import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Postoverview from './pages/Postoverview';
function App() {
  return (
    <div>
    <NavBar/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/postoverview" element={<Postoverview/>}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;