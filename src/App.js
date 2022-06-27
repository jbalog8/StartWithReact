import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";

function App() {
  const isSignedIn = true;

  let formMessageComponet = null;
  if (isSignedIn) {
    formMessageComponet =
      (<div className="form-message">
      Successful Sign in!
      </div>)
  }

  return (
    <form className="form">
      <div className="form-field">
        <InputElement label="Username" type="text" />
      </div>
      <div className="form-field">
        <InputElement label="Password" type="password" />
      </div>
      <div className="form-field">
        <Button type="button">Sign in</Button>
        <Button type="reset">Reset</Button>
      </div>
      {!isSignedIn && <div className="form-error">
        Failed to Sign in
      </div>}
      {formMessageComponet}

    </form>
  );
}

export default App;