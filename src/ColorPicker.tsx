
import React, { useEffect, useState } from 'react';

import ColorPicked from './ColorPicked';

// should be able to guess which color is printed on the screen
// will display correct or wrong based off what the user picked


const generateColor = () => {
    const colorSet = ["#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FFA500", "#A020F0", "#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FFA500", "#A020F0"];
    const randomColor = Math.floor(Math.random() * colorSet.length);
    return colorSet[randomColor];
}

const ColorPicker = () => {
    
    const [color, setColor] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [isWrongSelection, setisWrongSelection] = useState<boolean>(false);


    //changes the color background
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        console.log(event)
        const button: HTMLButtonElement = event.currentTarget;
        setColor(button.textContent || "");
    }

    const handleAnswerClicker = (answer: string) => {
        if (answer === color) {
            setisWrongSelection(false);
            // TODO reselect colors
        } else {
            setisWrongSelection(true)
        }
    }

    const pickColor = () => {
        const actualColor = generateColor();
        setColor(actualColor);
        setAnswers([actualColor, generateColor(), generateColor()].sort(
            () => 0.5 - Math.random() 
        ));
    }

    useEffect(() => {
        pickColor()
    }, [])

    return(
        <>
        <h1>COLOR PICKER</h1>
        <ColorPicked color={color}></ColorPicked>
        { isWrongSelection ? <div>Wrong Answer</div> : <div>Correct Answer</div>}
        <h3>Select a button to guess the color</h3>
        <div className='button-block'>
            {answers.map((_answer, _index) => {
                return <button className="buttons" onClick={() => handleAnswerClicker(_answer)} key={_answer}>
                    {_answer}
                </button>
            })}
        </div>
        </>
    )
}

export default ColorPicker;