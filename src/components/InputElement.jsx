import "./InputElement.css";

export function InputElement({ label, type, onChange }) {
    return (
        <label>
            <div className="label">{label}</div>
            <input className="input" type={type} onChange={onChange} />
        </label>
    );
}