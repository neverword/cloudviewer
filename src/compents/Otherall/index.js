import { React,useState, useEffect } from 'react'
import './index.css'
import Addnew from '../Addnew'
import Item from '../Item'
const Otherall=()=>{

    return(
        <div className='otherall_box'>
           <div className='before_box'></div>
           <div className='items_box'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
           </div>
           
           <div className="after_box">  </div>
           <Addnew/>
        
        </div>
        )


    }
    
    export default Otherall;