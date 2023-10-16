import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/products' Component={Products}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>    
    </div>
  );
}

export default App;
