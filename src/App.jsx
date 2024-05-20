import React from 'react'
import "./App.css"
import { FiShoppingCart } from "react-icons/fi";
import bmw from './assets/Bmw-f10-tuning.jpg'

const App = () => {
  return (
 
          <div className="container">
    <header>
      <div className="header">
        <div className="Header_div">ELEKTRONIMAGAZIN</div>
       <center>
       <div className="header_div_2">
          <p>Home</p>
          <p>Kontakt</p>
          <div className='Icons'>
          <p><FiShoppingCart /></p>
          </div>
        </div>
       </center>
      </div>

    </header>
    <section>
      <div className="section">
        <div>
    <img className='bmw' src={bmw} alt="" />
    
        </div>
        <div className="btn">
          <button className='btn_butt'>Click</button>
        </div>

      </div>
      <div className="section">
        <div>
    <img className='bmw' src={bmw} alt="" />
    
        </div>
        <div className="btn">
          <button className='btn_butt'>Click</button>
        </div>

      </div>
      <div className="section">
        <div>
    <img className='bmw' src={bmw} alt="" />
    
        </div>
        <div className="btn">
          <button className='btn_butt'>Click</button>
        </div>

      </div>
    </section>
  </div>
  )
}

export default App