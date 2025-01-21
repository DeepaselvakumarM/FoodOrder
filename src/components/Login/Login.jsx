import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/frontend_assets/assets'

const Login = ({showlogin={showlogin}}) => {
    const[state,setstate]=useState("login")
  return (
    <div className='login'>

<form action=""className='container'>
    <div className="tittle">
        <h2>{state}</h2>
        <img src={assets.cross_icon} onClick={()=>showlogin(false)}/>
    </div>
    <div className="input">
        {state==='login'?<></>:<input type='text' required placeholder='Name'/>}
        
        <input type='text' required placeholder='mail'/>
        <input type='password' required placeholder='password'/>
    </div>
    <button>{state==='sign up'?'create account':'login'}</button>
    <div className="log-condition">
        <input type='checkbox' required/>
        <p>by continue dgerfgy</p>
    </div>
    {state==='login'?<p>create account?<span onClick={()=>setstate('sign up')}>Click here</span></p>:<p>Already had a account?<span onClick={()=>setstate('login')}>Login here</span>
    </p>}
    
    
</form>


    </div>
  )
}
// 2 27

export default Login