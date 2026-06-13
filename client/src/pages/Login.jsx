import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data-vil ulla un-wanted spaces-ai trim seigிறோம்
    const userEmail = form.email.trim().toLowerCase();
    const userPassword = form.password;

    console.log("👉 SENDING TO BACKEND:", { email: userEmail, password: userPassword });

    if (!userEmail || !userPassword) {
      alert("All fields required!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: userEmail,
          password: userPassword,
        }
      );

     console.log("🚀 LOGIN SUCCESS:", res.data);
localStorage.setItem("token", res.data.token);
alert("Login Successful 🚀");
window.location.href = "/carbooking";
    } catch (err) {
      // Backend-il irundhu varum exact error-ai console-il kaattum
      console.error("❌ BACKEND RESPONSE ERROR:", err.response?.data);
      alert(err.response?.data?.msg || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          autoComplete="username"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          autoComplete="current-password"
          required
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

// STYLES
const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://freepik.com')",
    backgroundSize: "cover",
  },
  form: {
    width: "350px",
    padding: "25px",
    background: "rgba(255,255,255,0.9)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
