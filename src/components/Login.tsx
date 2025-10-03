import md5 from "md5";
import { useState, type JSX } from "react";
import supabase from "../utils/supabaseClient";

function Login(): JSX.Element {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.email.length < 1 || form.password.length < 1) {
      setError(true);
      setMessage("Register form must be complete!");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("users")
        .select(`username`)
        .eq("email", form.email)
        .eq("password", md5(form.password));
      if (error || data === null || data.length < 1) {
        setError(true);
        setMessage(error?.message || "Login failed");
      } else {
        setMessage(`"${data[0].username}" has logged in successfully`);
        setError(false);
      }
    } catch (err) {
      setError(true);
      if (err instanceof Error) {
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
          Login
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

export default Login;
