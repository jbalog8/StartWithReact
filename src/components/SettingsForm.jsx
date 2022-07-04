import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { useState } from "react";

export function SettingsForm(props) {
  const [formState, setFormState] = useState({
      displayName: props.user.username,
      textColor: '',
      backgroundColor: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
      props.onSubmit(formState);
  }

  const handleChange = (event) => {
    setFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <InputElement name="displayName"
          label="Display Name"
          type="text"
          onChange={handleChange}
          value={formState.displayName}
        />
          </div>
           <div className="form-field">
        <InputElement name="textColor"
          label="Text Color"
          type="text"
          onChange={handleChange}
          value={formState.textColor}
        />
          </div>

          <div className="form-field">
              <label htmlFor="background-color"> Background Color</label>

              <select id="background-color"
                  name="backgroundColor"
                  onChange={handleChange}
                  value={formState.backgroundColor}>
                  <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value= " ">None</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="white">White</option>
            </select>
              
        </div>

        <div className="form-field">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}