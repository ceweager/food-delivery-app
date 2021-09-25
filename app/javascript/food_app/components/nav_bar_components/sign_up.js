import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { csrfToken } from "@rails/ujs";

const SignUp = () => {
  const [email, setName] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
    let promise = fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        "X-CSRF-Token": csrfToken(),
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: pass,
          first_name: firstName,
          last_name: lastName,
          address: address,
          staff: false
        }
      }
      )
    })
      .then(response => response.json())
      .then(data => {
        props.setUserId(data.id);
        props.location.push('/meals');
      })
  }

  return (
    <div className="log-in-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input id="email" placeholder="email" onChange={(e) => { setName(e.target.value) }} />
        <input type="password" id="password" placeholder="password" onChange={(e) => { setPass(e.target.value) }} />
        <input id="first_name" placeholder="first_name" onChange={(e) => { setFirstName(e.target.value) }} />
        <input id="last_name" placeholder="last_name" onChange={(e) => { setLastName(e.target.value) }} />
        <textarea id="address" placeholder="paddress" onChange={(e) => { setAddress(e.target.value) }} />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default SignUp;

