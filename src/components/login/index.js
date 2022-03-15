//Below - 1st const broken down
//const useState = (initialValue) => {
//let state = initialValue;
//const setState = {newValue} => {
//state = newValue
//}
//return [state, setState]
//}
//Below - curly brackets reference javascript, renders value of user(state variable)
//listening for state - will re-render when state is changed to new state
//onChange (a html attribute, like onSubmit/onClick/onHover) is an event listener => setUser (h1 tag re-renders with value of user(state))
//onSubmit fires when from input is submitted e.g <form onSubmit={(event) => setUser(username)}>
//{ user && <h1>{ user.username }</h1> } - like if loop, will render h1 with username
//!bool on line40 = conditional rendering
import { useState } from "react";
import { createUser, login } from "../../utils";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    //if bool is true = login - if false = create new user
    if (bool) {
      login(username, pass, setUser);
    } else if (email && email.includes("@")) {
        createUser(username, email, pass, setUser);
        // setUser({
        //   username: username,
        //   email: email,
        //   pass: pass,})
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        />
        {!bool && (
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
          />
        )}
        <input
          onChange={(event) => setPass(event.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setBool(!bool)}>Login or Sign Up</button>
    </>
  );
};
