import React, { useEffect, useState } from "react";
import { APICall } from "../xshared/APICall";
import { LOGIN } from "../xshared/Routes";
import User from "./LoginChecker";

export const Login = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    User.checkLogin()
      .then((x) => {
        setLoading(false);
        setResult(x);
      })
      .catch((x) => {
        setLoading(false);
      });
  }, []);

  const logout = () => {
    setLoading(true);
    User.logout().then((res) => {
      if (res.result_code) {
        setLoading(false);
        setResult(res);
      }
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    APICall.post(
      LOGIN,
      {
        username: e.target.username.value,
        password: e.target.password.value,
      },
      (err, res) => {
        if (res.result_code) {
          setResult(res);
        } else {
          setResult(res);
        }
      }
    );
  };

  return loading ? (
    <span>loading ...</span>
  ) : (
    <React.Fragment>
      <p>Authentication in Nodejs</p>
      <hr />
      {!(result && result.data && result.data.logged_in) ? (
        <form onSubmit={loginUser}>
          <input
            type="text"
            className="mb-1"
            placeholder="Username"
            required
            name="username"
          />
          <br />
          <input
            type="text"
            className="mb-1"
            placeholder="Password"
            required
            name="password"
          />
          <br />
          <input type="submit" value="Login" className="me-1" />
        </form>
      ) : (
        <input type="button" value="Logout" onClick={logout} />
      )}
      <br />
      <code>
        {result && result.result_code
          ? result.result_message
          : result.result_message}
      </code>
    </React.Fragment>
  );
};
