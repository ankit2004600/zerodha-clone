import { useState  } from "react";
import axios from "axios";

function Login() {

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/login",
      {
        email,
        password,
      }
    );

    console.log(res.data);

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Successful");

    window.location.href =
      "http://localhost:3001";

  } catch (err) {

    console.log(err);

  }

};

    

  

 return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "300px",
      margin: "100px auto",
      gap: "15px",
    }}
  >

    <h1>Login</h1>

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

    <button onClick={handleLogin}>
      Login
    </button>

    <p>Don’t have an account?</p>

    <button
      onClick={() => {
        window.location.href = "/signup";
      }}
    >
      Signup
    </button>

  </div>
);
  
}

export default Login;