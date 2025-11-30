import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {
  // const[count,seCount]=useState(0)
  const{cart,addTocart ,removecart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="img-container">
<img className='item-image'src={image}/>

        </div>
        <div className="item-info">
        <div className="rating">
            <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>
        <p className="item-descrption">{description}</p>
        <p className="item-price">${price}</p>
        </div>
    </div>
  )
}
// 40

export default FoodItem