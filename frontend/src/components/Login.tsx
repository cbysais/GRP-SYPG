import { isAxiosError } from "axios";
import { useState, type JSX } from "react";
import api from "../services/api";

function Login(): JSX.Element {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      setMessage(res.data.message);
    } catch (err) {
      if (isAxiosError(err) || err instanceof Error) {
        setMessage(err.message || "Login failed");
      } else {
        setMessage("Login failed");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
