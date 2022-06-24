import './App.css';

function InputElement({ lable, type }) {
  return (
    <label>
      <div className="lable">{lable}</div>
      <input className="input" type={type} />
    </label>
  );
}

function App() {
  return (
    <form className="form">
      <div className="form-field">
        <InputElement lable="Username" type="text" />
      </div>
      <div className="form-field">
        <InputElement lable="Password" type="password" />

      </div>
      <div className="form-field">
        <button className="button">Sign in</button>
      </div>
    </form>
    
  )


}

export default App;
