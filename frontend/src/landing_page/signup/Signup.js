import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const token = localStorage.getItem("token");

if(token){
  window.location.href = "http://localhost:3001";
}

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/signup",
        {
          username,
          email,
          password,
        }
      );

      alert(res.data.message);

      window.location.href = "/login";

    } catch (err) {

      alert("Signup Failed");

    }

  };

  return (

    <div className="auth-container">
      
       
    

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>
        Signup
      </button>
      <p>
  Already have an account?
</p>

<button
  onClick={() => {
    window.location.href = "/login";
  }}
>
  Login
</button>

    </div>

  );

}

export default Signup;