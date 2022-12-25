import { React,useState, useEffect } from 'react'
import './index.css'
const Header=()=>{

    return(
        <div className='header_box'>
           <div className="fix_box">
           <div className='logo_box'><img src={require('./picture/C.png')} alt="LOGO" /></div>
           <div className="search_box">
            <label className="search_picture" htmlFor='search_on'><img src={require('./picture/search.png')} /></label>
            <input type='text' placeholder="搜索" id='search_on'/>
            <div className="search_delete"><img src={require('./picture/delete.png')}alt="" /></div>
            </div>
           <div id="fake_box_1"></div>
           <div className="class_box">
            <div className='class_one'><img src={require('./picture/allon.png')}/></div>
            <div className="line"></div>
            <div className='class_one'><img src={require('./picture/fishdown.png')}/></div>
            <div className="line"></div>
            <div className='class_one'><img src={require('./picture/bookdown.png')}/></div>
            <div className="line"></div>
            <div className='class_one'><img src={require('./picture/clothedown.png')}/></div>
           </div>
           <div id="fake_box_2"></div>
           <div className='user'></div>
           </div>
        </div>
    )


}

export default Header;