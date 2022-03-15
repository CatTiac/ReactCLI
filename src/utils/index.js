//Like fetch request in insomnia, targets end point post request
//(username, email, pass) - are required and then function will execute
//header shows data type is json, body sends json body for request
export const createUser = async (username, email, pass, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: pass,
      }),
    });
    const data = await response.json();
    setter(data.user);
    //Below - storing data locally in json format, unique id with token
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, pass, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: pass,
      }),
    });
    const data = await response.json();
    setter(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const tokenLogin = async (setter) => {
  try {
    //fetch request
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setter(data.user);
  } catch (error) {
    console.log(error);
  }
};
