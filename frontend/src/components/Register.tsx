import { isAxiosError } from "axios";
import { useState, type JSX } from "react";
import api from "../services/api";

function Register(): JSX.Element {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      setMessage(res.data.message);
      setError(false);
    } catch (err) {
      setError(true);
      if (isAxiosError(err) || err instanceof Error) {
        setMessage(err.message || "Registration failed");
      } else {
        setMessage("Registration failed");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="outline-1"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="outline-1"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="outline-1"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="cursor-pointer bg-blue-200" type="submit">
          Register
        </button>
      </form>
      {message && (
        <p className={`font-bold ${error ? "text-red-700" : "text-green-700"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Register;
