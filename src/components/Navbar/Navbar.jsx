import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({showlogin}) => {
    const[menu,setMenu]=useState("home")
    const{cartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo}className='logo' alt=''/></Link>  
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu('home')} className={menu==="home"?'active':""}>Home</Link>
            <a href='#menu'  onClick={()=>setMenu('menu')} className={menu==="menu"?'active':""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==="mobile-app"?'active':""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==="contact-us"?'active':""}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
           <Link to='/cart'>   <img src={assets.basket_icon} alt=''/></Link>  
                <div className={cartAmount()===0?"":'dot'}></div>
            </div>
            <button onClick={()=>showlogin(true)}>signin</button>
        </div>
    </div>


  )
}
// 2 15
export default Navbar