import { React,useState, useEffect } from 'react'
import './index.css'
const Item=()=>{

    return(
        <div className='item_box'>
           <div className="item_img"></div>
            <div className="item_name"><p className="item_title">it'sok</p></div>
            <div className="item_notice"></div>
            <div className="item_bottom">
                <div className="fix_bottom">
                    <div className="choice_bottom"><img src={require('./picture/clockdown.png')}/></div><div className="fake_box"></div>
                    <div className="choice_bottom"><img src={require('./picture/again.png')} /></div><div className="fake_box"></div>
                    <div className="choice_bottom"><img src={require('./picture/infiledown.png')} /></div><div className="fake_box"></div>
                    <div className="choice_bottom"><img src={require('./picture/deleted.png')} /></div><div className="fake_box"></div>
                    <div className="choice_bottom"><img src={require('./picture/more.png')} /></div>
                </div>
            </div>
        </div>
        )


    }
    
    export default Item;