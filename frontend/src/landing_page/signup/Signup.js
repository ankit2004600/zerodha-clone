import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const token = localStorage.getItem("token");

if(token){
  window.location.href = "/";
}

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "https://zerodha-clone-1-iy2m.onrender.com/signup",
        {
          username,
          email,
          password,
        }
      );

      alert(res.data.message);

      window.location.href = "https://zerodha-clone-3-i7rg.onrender.com/";

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
    window.location.href = "https://zerodha-clone-3-i7rg.onrender.com/";
  }}
>
  Login
</button>

    </div>

  );

}

export default Signup;