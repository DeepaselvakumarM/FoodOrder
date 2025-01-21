import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import Placeorder from "./Pages/Placeorder/Placeholder"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";

function App() {
  const[login,showlogin]=useState(false)
  return (
    <>
    {login?<Login showlogin={showlogin}/>:<></>}
    <div className='app'>
     <Navbar showlogin={showlogin} />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='cart' element={<Cart />}/>
      <Route path='order' element={<Placeorder />}/>
</Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
