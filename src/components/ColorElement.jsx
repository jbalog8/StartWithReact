//import "/ColorElement.css";

export function ColorElement(props) {

    const openColorPicker = () => {
        console.log('openColorPicker');
    }

    return (
        <div>
            <button type="button" onClick={openColorPicker}>Color picker</button>
            <input type="color" />
        </div>
        )
    
}