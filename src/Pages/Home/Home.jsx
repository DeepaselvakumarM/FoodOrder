import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Menu from "../../components/menu/Menu"
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import Download from '../../components/AppDownload/Download'

const Home = () => {
  const[category,setcategory]=useState('All')
  return (
    <div>
        <Header />
        <Menu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category} /> 
        <Download />
    </div>
  )
}

export default Home