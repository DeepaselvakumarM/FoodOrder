import React, { useContext } from 'react'
import './Placeholder.css'
import { StoreContext } from '../../context/StoreContext'

const Placeholder = () => {
    const{cartAmount}=useContext(StoreContext)
  return (
    <div>
    <form className='placeorder'>
<div className="order-left">
    <p className='tittle'>Delivery Information</p>
    <div className="multifields">
        <input type='text'placeholder='First-name'/>
        <input type='text'placeholder='last-name'/>
    </div>
    <div className="multifields">
    <input type='email'placeholder='Email'/>
    <input type='text'placeholder='street'/>
    </div>
        <div className="multifields">
        <input type='text'placeholder='city'/>
        <input type='text'placeholder='state'/>
        
        </div>
        <div className="multifields">
        <input type='text'placeholder='Zip-code'/>
        <input type='text'placeholder='Country'/>
        </div>
        <input type='text'placeholder='Phone'/>
</div>
<div className="order-right">
<div className="cart-total">
            <h2>Cart total</h2>
            <div>
              <div className="details">
                <p>Subtottal</p>
                <p>{0}</p>
              </div>
              <hr/>
              <div className="details">
                <p>Delivary </p>
                <p>{cartAmount()===0?0:2}</p>
              </div>
              <hr/>
              <div className="details">
                <b>Total</b>
                <b>{cartAmount()===0?0:cartAmount()+2}</b>
              </div>
              <hr />
            </div>
            <button >Payment</button>
          </div>
</div>
    </form>
    </div>
  )
}
//3:21

export default Placeholder