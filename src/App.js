import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
// import { Dashboard, Home } from '@mui/icons-material';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Navigation>
      <Routes>
      <Route path='/home' element={<Home />} ></Route>
      <Route path='/dashboard' element={<Dashboard />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
       
      </Routes>
      </Navigation>
    </div>
  );
}

export default App;
