import React, { useState } from "react";
import { Joi, validate } from "joi-browser";

const LoginForm = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [data, setData] = useState({ enteredEmail: "", enteredPassword: "" });

  // const [errors, setErrors] = useState({});
  // const schema = {
  //   email: Joi.string().email().required().label("Email"),
  //   password: Joi.string().required().label("Password"),
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log("Submitted");
    console.log("data Submitted", data);

    // const data = {
    //   enteredEmail: "",
    //   enteredPassword: "",
    // };
    // reset the form
    // setEnteredEmail("");
    // setEnteredPassword("");
  };
  // const handleEmailChange = (e) => {
  //   console.log(e.target.value);
  //   setEnteredEmail(e.target.value);
  // };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, enteredEmail: e.target.value });
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    //setEnteredPassword(e.target.value);
    setData({ ...data, enteredPassword: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            id="exampleInputEmail1"
            htmlFor="exampleInputEmail1"
            className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={data.enteredEmail}
            onChange={handleEmailChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={data.enteredPassword}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
