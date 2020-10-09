import React, { useState } from 'react';

export default function Register(props) {

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    console.log(e.target.value)
    setRegister(
      { ...register, [e.target.id]: e.target.value }
    );
  }


  function onSubmitForm(e) {
    e.preventDefault();
    console.log("register", JSON.stringify(register))

    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register)
    }).then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status
      }, props.setCurrentUser(data))
      ))
      .then(res => {
        props.setAuthenticated(true)
        props.handleClose(true)
        props.setInitialLoad(false)
      })
      .catch(err => console.log("err", err))
  }


  return (

    <div >
      <form onSubmit={onSubmitForm}>
        
        <p>Please enter your name</p>
        <input
          type='text'
          onChange={handleChange}
        />
        <p>Please enter your email</p>
        <input
          type='email'
          data-ms-member='email'
          onChange={handleChange}
        />
        <p>Please enter a password</p>
        <input
          type='password'
          data-ms-member='password'
          onChange={handleChange}
        />
        <input
          type='submit'
        />
      </form>
    </div>

  );
}