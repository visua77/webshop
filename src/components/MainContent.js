import React from 'react'
import twhite from '../img/twhite.jpg'
import tblack from '../img/tblack.jpg'
import hred from '../img/hred.jpg'
import hblack from '../img/hblack.jpg'

const MainContent = ()=> {
    return (
       <div className="container">
           <div className="image">
               <img src={twhite} alt="twhite"/>
               <h3>Grey T-shirt</h3>
               <h3>$15</h3>
               <a href="#"className="add-to-cart">Add to cart</a>
           </div>
           <div className="image">
               <img src={tblack} alt=""/>
               <h3>Black T-shirt</h3>
               <h3>$15</h3>
               <a href="#"className="add-to-cart">Add to cart</a>
           </div>
           <div className="image">
               <img src={hred} alt=""/>
               <h3>Red Hoddie</h3>
               <h3>$55</h3>
               <a href="#"className="add-to-cart">Add to cart</a>
           </div>
           <div className="image">
               <img src={hblack} alt=""/>
               <h3>Dark-Grey Hoodie</h3>
               <h3>$55</h3>
               <a href="#"className="add-to-cart">Add to cart</a>
           </div>

    
       </div> 
    )
}

export default MainContent