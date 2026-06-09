import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; 

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FRONTEND VALIDATION
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Register Failed: All fields are required!");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(form.email)) {
      alert("Register Failed: Invalid Email Format!");
      return;
    }

    if (form.password.length < 6) {
      alert("Register Failed: Password must be at least 6 characters!");
      return;
    }

    try {
      // 🔗 Use API instance
      const res = await API.post("/api/auth/register", form);

      alert(res.data.msg || "Registered Successfully!");
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.msg || "Register Failed: Backend Error"
      );
    }
  };

  return (
    <div
      style={{
        ...styles.wrapper,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023')",
      }}
    >
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 chars)"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>

        <p style={{ textAlign: "center", marginTop: "5px", color: "black" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  form: {
    width: "350px",
    background: "rgba(255, 255, 255, 0.85)",
    padding: "25px",
    borderRadius: "10px",
    backdropFilter: "blur(4px)",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #666161ff",
  },

  button: {
    padding: "12px",
    background: "#ff9800",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
