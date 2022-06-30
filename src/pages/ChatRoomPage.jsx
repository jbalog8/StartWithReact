import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { User } from "../components/User";
import { useState } from "react";

export function ChatRoomPage(props) {
  const [formState, setFormState] = useState({ message: '' });
  const [messeges, setMessages] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.message !== '') {
      setMessages((state) => [...state, formState]);
      
    }
  }
  
  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  console.log(messeges);
  return (
    <div>
      <Button type="button" onClick={props.onSignOut}>Sign out</Button>
      <User src="/avatar.png" username={props.user.username} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="message" label="Message" type="text" onChange={handleChange} />
        </div>
        <div className="form-field">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}