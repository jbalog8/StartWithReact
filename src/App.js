import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import { User } from "./components/User";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {

  const [formState, setFormState] = useState({ username: '', password: '' });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.password === 'password') {
      setUser(formState);
      setError(null);
    } else {
      setError(true);
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  const isSignedIn = user !== null;
  const showErrorMessage = error !== null;
  const showFormMessage = user !== null;

  return (
    <div>
      {isSignedIn && <User src="/EricCartman.png" alt="Eric" username={user.username} />}

     <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="username" label="Username" type="text" onChange={handleChange} />
        </div>
        <div className="form-field">
          <InputElement name="password" label="Password" type="password" onChange={handleChange} />
        </div>
        <div className="form-field">
          <Button type="submit">Sign in</Button>
          <Button type="reset">Reset</Button>
        </div>
        <FormError visible={showErrorMessage} />
        <FormMessage visible={showFormMessage} />
      </form>

      <Counter initialValue={0} />

    </div>

  );
}

export default App;