import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import { User } from "./components/User";
import { Counter } from "./components/Counter";

function App() {
  const isSignedIn = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }

  const handelChange = (evet) => {
    console.log(evet);
  }

  return (
    <div>
      {isSignedIn && <User src="/EricCartman.png" alt="Eric" username="Eric" />}

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement label="Username" type="text" onChange={handelChange} />
        </div>

        <div className="form-field">
          <InputElement label="Password" type="password" onChange={handelChange} />
        </div>

        <div className="form-field">
          <Button type="submit">Sign in</Button>
          <Button type="reset">Reset</Button>
        </div>

        <FormError visible={!isSignedIn} />
        <FormMessage visible={isSignedIn} />
      </form>
      <Counter initialValue={0} />
    </div>

  );
}

export default App;