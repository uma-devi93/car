import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      
      // Save JWT token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");
      navigate("/carbooking"); 
    } catch (error) {
      alert(error.response?.data?.msg || "Invalid Email or Password");
    }
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} style={styles.input}/>
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} style={styles.input}/>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    width: "350px",
    padding: "25px",
    background: "rgba(248, 236, 236, 0.95)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  title: { textAlign: "center", fontSize: "24px", marginBottom: "5px" },
  input: { padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
  button: { padding: "12px", background: "#28a745", color: "#fff", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" },
};
