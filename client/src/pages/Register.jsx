import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // 🌟 API instance-ku bathila direct axios-ai import seigirom

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userName = form.name.trim();
    const userEmail = form.email.trim().toLowerCase(); // Extra spaces matrum capital letters-ai thavirkkum
    const userPassword = form.password;

    // FRONTEND VALIDATION
    if (!userName || !userEmail || !userPassword) {
      alert("Register Failed: All fields are required!");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(userEmail)) {
      alert("Register Failed: Invalid Email Format!");
      return;
    }

    if (userPassword.length < 6) {
      alert("Register Failed: Password must be at least 6 characters!");
      return;
    }

    try {
      setLoading(true);

      // 🌟 Login page-il ullathu pola direct port 5000 server-ukku data-vai anuppugiறோம்
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: userName,
          email: userEmail,
          password: userPassword,
        }
      );

      alert(res.data.msg || "Registered Successfully! 🎉");
      navigate("/login");
    } catch (error) {
      console.error("❌ REGISTER ERROR:", error.response?.data);
      alert(error.response?.data?.msg || "Register Failed: Backend Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        ...styles.wrapper,
        backgroundImage:
          "url('https://unsplash.com')",
      }}
    >
      <form
        style={styles.form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 style={styles.title}>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          autoComplete="off"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          autoComplete="off"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 chars)"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          autoComplete="new-password"
          required
        />

        <button
          type="submit"
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Registering..." : "Submit"}
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

// STYLES
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
