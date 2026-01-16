import React, { useState } from "react";

function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      email &&
      password &&
      gender
    ) {
      alert("Login successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setGender("");
    } else {
      alert("fill data");
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input type="text" placeholder="First Name" value={firstName} 
      onChange={(e) => setFirstName(e.target.value)}/>
      <br /><br />

      <input type="text" placeholder="Last Name" value={lastName}
        onChange={(e) => setLastName(e.target.value)}/>
      <br /><br />

      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      <br /><br />

      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <br /><br />

      <select value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;