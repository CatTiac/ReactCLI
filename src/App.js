import { useState } from "react";
import { Login } from "./components/login/login";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  //Below - Re-usable handler - shorthand syntax - setUser({ username })
  //Lower - <Login handler={submitHandler} /> - handler is name & submitHandler is passed function
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      username: username,
      email: email,
      pass: pass,
    });
  };

  return (
    <div className="App">
      {user && <h1>{user.username}</h1>}
      {user ? <h1>{user.username}</h1> : <h1>Please type something</h1>}
      <Login
        handler={submitHandler}
        nameSetter={setUsername}
        emailSetter={setEmail}
        passSetter={setPass}
        boolSetter={setBool}
      />
      <Login
        handler={submitHandler}
        nameSetter={setUsername}
        emailSetter={setEmail}
        passSetter={setPass}
        boolSetter={setBool}
      />
    </div>
  );
};

export default App;
