import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBarjs/Navbar';
import Home from './components/Pages/Home';
import Indumentaria from './components/Pages/Indumentaria';
import Contacto from './components/Pages/Contacto';
import Joyeria from './components/Pages/Joyeria';
import Detail from './components/Pages/Detail';
import Carrito from './components/Pages/Carrito';
import {CartProvider} from './components/CartContext.js/CartContext'



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Indumentaria' element={<Indumentaria />} />
            <Route path='/Joyeria' element={<Joyeria />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/producto/:id' element={<Detail />} />
            <Route path='/Carrito' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
