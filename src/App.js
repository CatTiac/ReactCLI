import { useState, useEffect } from "react";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { tokenLogin } from "./utils";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    tokenLogin(setUser);
  }, []);

  //Above - useEffect runs tokenLogin immediately, sets user with token and will auto sign in
  //Below - Re-usable handler - shorthand syntax - setUser({ username })
  //Lower - <Login handler={submitHandler} /> - handler is name & submitHandler is passed function
  //Ternary operator for rendering h1s to browser
  //example: {user ? <h1>{ user.username }</h1> : <h1>Please type something}

  return (
    <div className="App">
      {user && <h1>{ user }</h1>}
      {user ? <h1>{ user }</h1> : <h1>Ello!</h1>}
      {!user ? <Login setUser={ setUser } /> : <Home />}
    </div>
  );
};

export default App;
