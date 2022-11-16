
import React, { useState } from 'react';

import ColorPicked from './ColorPicked';

// should be able to guess which color is printed on the screen
// will display correct or wrong based off what the user picked

const ColorPicker = () => {

    //original state of colors
    const [color, setColor] = useState("");


    //changes the color background
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        console.log(event)
        const button: HTMLButtonElement = event.currentTarget;
        setColor(button.textContent || "");
    }

    return(
        <>
        <h1>COLOR PICKER</h1>
        <ColorPicked color={color}></ColorPicked>
        <div className='button-block'>
            <button className="buttons" onClick={clickHandler}>
                #FFFF00
            </button>
            <button className="buttons" onClick={clickHandler}>
                #FFFFFF
            </button>
            <button className="buttons" onClick={clickHandler}>
                #000000
            </button>
        </div>
        </>
    )
}

export default ColorPicker;