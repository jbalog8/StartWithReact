//import "/ColorElement.css";

import { useRef } from "react";

export function ColorElement(props) {
    const inputRef = useRef();

    const openColorPicker = () => {
        inputRef.current.click();
    }

    return (
        <div>
            <button type="button" onClick={openColorPicker}>Color picker</button>
            <input ref={inputRef} type="color" />
        </div>
        )
    
}