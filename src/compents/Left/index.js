import { React,useState, useEffect } from 'react'
import './index.css'
const Left=()=>{

    return(
        <div className='left_box'>
            <div className="left_fix">
                <div className="class_left">
                    <div className="class_one"><img src={require('./picture/showon.png')}/></div>
                    <div className="class_one"><img src={require('./picture/clockdown.png')}/></div>
                    <div className="class_one"><img src={require('./picture/listdown.png')}/></div>
                    <div className="class_one"><img src={require('./picture/filedown.png')}/></div>
                    <div className="class_one"><img src={require('./picture/infiledown.png')}/></div>
                </div>
                <div id="fake_box"></div>  
                </div>
        
        </div>
        )


    }
    
    export default Left;