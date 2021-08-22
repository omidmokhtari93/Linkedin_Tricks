import React, { useEffect, useState } from "react";
import { APICall } from "../xshared/APICall";
import { SET_USER } from "../xshared/Routes";

export const MongoDB = () => {
  const [age, setAge] = useState("28");
  const [message, setMessage] = useState({});

  const getUsers = async () => {
    const req = await fetch("/get_user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
      }),
    });
    const response = await req.json();
    if (response) {
      setMessage(response);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    APICall.post(
      SET_USER,
      {
        name: e.target.name.value,
        age: e.target.age.value,
      },
      (err, res) => {
        if (res.result_code) {
          alert("saved");
          e.target.name.value = "";
          e.target.age.value = "";
        } else {
          alert(res.result_message);
        }
      }
    );
  };

  return (
    <React.Fragment>
      <p>MongoDB</p>
      <hr />
      <code className="text-body">
        Enter your name and age to save in database :
      </code>
      <br />
      <form onSubmit={submitForm}>
        <input placeholder="Your name" name="name" className="mb-1" required />
        <br />
        <input placeholder="Your age" name="age" className="me-2" required />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <code className="text-body">
        Then pass your age for query in database and see the result :{" "}
      </code>
      <br />
      <input
        type="text"
        className="me-2"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={getUsers}>submit</button>
      <br />
      <code>
        and the result is :
        <br />
        {message.result_code
          ? `Your name is : ${message.data.name}`
          : message.result_message}
      </code>
    </React.Fragment>
  );
};
