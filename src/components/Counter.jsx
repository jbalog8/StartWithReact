import "./Counter.css";
import { useState } from "react";
import { state } from "jshint/src/state";

export function Counter() {
    const counterState = useState(0);
    const counter = counterState[0];
    const setCounter = counterState[1];

    const handleClick = () => {
        console.log('click', counter);
        //setCounter(counter + 1);
        setCounter((state) => ++state);
    }

    return <button className="counter" onClick={handleClick} >{counterState}</button>
}