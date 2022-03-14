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
//Below ternary operator for rendering h1s to browser
//example: {user ? <h1>{ user.username }</h1> : <h1>Please type something}
//!bool on line40 = conditional rendering

export const Login = ({
  handler,
  nameSetter,
  emailSetter,
  passSetter,
  boolSetter,
  bool,
}) => {
  return (
    <>
      <form onSubmit={handler}>
        <input
          onChange={(event) => nameSetter(event.target.value)}
          placeholder="Username"
        />
        {!bool && (
          <input
            onChange={(event) => emailSetter(event.target.value)}
            placeholder="Email"
          />
        )}
        <input
          onChange={(event) => passSetter(event.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => boolSetter(!bool)}>Login or Sign Up</button>
    </>
  );
};
