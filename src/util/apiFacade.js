const URL = "https://travelplannerapi.omertech.dk/api";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.text().then((text) => (text ? JSON.parse(text) : {}));
}

function apiFacade() {
  /* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const getUserRoles = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const roles = decodedClaims.roles;
      return roles;
    } else return "";
  };

  const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(",");
    return loggedIn && roles.includes(neededRole);
  };

  const login = (user, password) => {
    const options = makeOptions("POST", false, {
      username: user,
      password: password,
    });
    return fetch(URL + "/auth/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const createUser = (username, password) => {
    const options = makeOptions("POST", false, {
      username: username,
      password: password,
    });
    return fetch(URL + "/auth/register", options)
      .then(handleHttpErrors)
      .then((res) => {
        return res;
      });
  };

  const fetchDataCountries = () => {
    const options = makeOptions("GET", true); // True adds the token
    return fetch(URL + "/countries", options).then(handleHttpErrors);
  };

  const createCountry = (country) => {
    const options = makeOptions("POST", true, country);
    return fetch(URL + "/countries", options).then(handleHttpErrors);
  };

  const updateCountry = (id, country) => {
    const options = makeOptions("PUT", true, country);
    return fetch(URL + `/countries/${id}`, options).then(handleHttpErrors);
  };

  const deleteCountry = (id) => {
    const options = makeOptions("DELETE", true);
    return fetch(URL + `/countries/${id}`, options).then(handleHttpErrors);
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    hasUserAccess,
    createUser,
    fetchDataCountries,
    createCountry,
    updateCountry,
    deleteCountry,
  };
}

const facade = apiFacade();

export default facade;
