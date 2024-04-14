import React, {useState} from "react";


const ColorPicker = () =>{
    const [color,setColor] = useState('#00000')

    function updateColor(event){
        setColor(event.target.value);
    }
    return(

        <>
            <div className="color_box">
                <h1>Color Picker</h1>
                <div className="color_display" style={{backgroundColor: color}}>
                </div>
                <p>selected color: {color}</p>
                <label htmlFor="">select the color</label>
                <input type="color"  value={color} onChange={updateColor} />
            </div>
        </>
    ) 
   
}

export default ColorPicker;