import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
   const{cart,food_list,removecart,cartAmount}=useContext(StoreContext)
   const navigate=useNavigate()
  return (
  
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-tittle">
                <p>Items</p>
                <p>Title</p>
                 <p>Price</p>
                 <p>Quantity</p>
                 <p>Total</p>
                 <p>Remove</p>

            </div>
            <br />
            <hr />
          
            {food_list.map((item,index)=>{
              if(cart[item.id]>0){
                return(<div className=' cart-tittle cart-list'><img src={item.image}alt=''/>
                <p>${item.name}</p>
                <p>${item.price}</p>
                <p>{cart[item.id]}</p>
                <p>{item.price*cart[item.id]}</p>
                <p onClick={()=>removecart(item.id)} className='cross'>X</p>

                </div>)
              }
            })}
        </div>
        <div className="bottom">
          <div className="cart-total">
            <h2>Cart total</h2>
            <div>
              <div className="details">
                <p>Subtottal</p>
                <p>{0}</p>
              </div>
              <hr/>
              <div className="details">
                <p>Subtottal</p>
                {/* <p>{cartAmount()}</p> */}
              </div>
              <hr/>
              <div className="details">
                <b>Total</b>
                {/* <b>{cartAmount()+2}</b> */}
              </div>
              <hr />
            </div>
            <button onClick={()=>navigate('/order')}>Checkout</button>
          </div>
          <div className="prmocode">
            <div>
              <p>if you a promo code</p>
              <div className="cart-input">
                <input type='text 'placeholder='promocode'/>
                <button>Submit</button>
              </div>

            </div>
          </div>

        </div>
    </div>
  )
}
//  2 50

export default Cart