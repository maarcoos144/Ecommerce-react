import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import cart from './components/Cart/cart';  

import { CartProvider } from './context/cartContext'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/category/celulares' element={<ItemListContainer greeting="Celulares" />} />
        <Route path='/category/notebooks' element={<ItemListContainer greeting="Notebooks" />} />
        <Route path='/category/tablets' element={<ItemListContainer greeting="Tablets" />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<cart/>} />  {}
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
