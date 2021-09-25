import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { csrfToken } from "@rails/ujs";

const Login = (props) => {
  const [email, setName] = useState("")
  const [pass, setPass] = useState("")

  console.log(props)
  const handleSubmit = (props) => {
    event.preventDefault();
    let promise = fetch("http://localhost:3000/users/sign_in", {
      method: 'POST',
      headers: {
        "X-CSRF-Token": csrfToken(),
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: pass
        }
      }
      )
    })
      .then(response => response.json())
      .then(data => {
        props.setUserId(data.id)
        props.history.push('/meals');
      })
  }

  return (
    <div className="log-in-container">
      <h2>Login</h2>
      <form onSubmit={() => { handleSubmit(props) }}>
        <input id="email" placeholder="email" onChange={(e) => { setName(e.target.value) }} />
        <input type="password" id="password" placeholder="password" onChange={(e) => { setPass(e.target.value) }} />
        <button className="submit-button">Submit</button>
      </form>
      <Link to={{
        pathname: '/sign_up',
        state: {
          setUserId: props.setUserId
        }
      }}>Sign Up</Link>
    </div>
  )
}

export default Login;