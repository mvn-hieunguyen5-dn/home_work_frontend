import React from "react";
// import { generateName, generateCountry } from "../logic/randomname.js";
import useFill from "../../hooks/useFill";
import useAuth from "../../hooks/useAuth";
export default function Form(props) {
  const { data, setValue } = useFill();
  // const username = useFill('username');
  const { login } = useAuth();
  function submit(e) {
    e.preventDefault();
    login(data.username, data.value);
  }
  
  return (
    <div className="container-login">
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <h2>Login</h2>
        <div className="block">
          <label htmlFor="username">Username:</label>
          <input
            className="formInput"
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={(e) => setValue.userName(e.target.value)}
            required
          />
        </div>
        <div className="block">
          <label htmlFor="password">Password:</label>
          <input
            className="formInput"
            type="password"
            name="password"
            id="password"
            value={data.passsword}
            onChange={(e) => setValue.passsword(e.target.value)}
            required
          />
        </div>

        <div className="block">
          <button
            className="formInput button"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
