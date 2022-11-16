import React, { ReactComponentElement } from 'react';


const ColorPicked = (props: { color: string }) => {

    return(
        <div className="color-block" style={{backgroundColor: props.color}}></div>
    )
}

export default ColorPicked;