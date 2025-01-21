import React from 'react'
import "./Menu.css"
import { menu_list } from '../../assets/frontend_assets/assets'

const Menu = ({category,setcategory}) => {
  return (
    <div className='menu'id='menu'>
        <h1>Explore our menu</h1>
        <p className='menu-text'>choose a diverse menu featuring delectable</p>
        <div className="menu-list">

            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index}className='menu-list-item'>
                        <img  className ={category===item.menu_name?'active':''}src={item.menu_image}alt='img'/>
                        <p>{item.menu_name}</p>
                        </div>
                )


            })}
       </div> 
       <hr/>
    </div>
  )
//   55
  
}

export default Menu