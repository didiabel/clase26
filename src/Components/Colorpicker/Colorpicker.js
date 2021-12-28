import  { useState } from 'react';
import React from 'react';
import './Colorpicker.css'


const Colorpicker = () => {

    const [color, setColor] = useState("red");


    return ( 
    <div className='colorpicker' style={{backgroundColor:color}}>
        <div className='input'>
            <h1>Colorpicker</h1>
           <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
           <p>{color}</p>
        </div>
    </div> 
    );
}
 
export default Colorpicker;