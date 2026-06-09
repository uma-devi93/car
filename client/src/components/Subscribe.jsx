import React, { useState } from "react";
import "./Subscribe.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter email (demo).");
    alert(`Subscribed: ${email} (demo)`);
    setEmail("");
  };

  return (
    <div className="subscribe">
      <div className="subscribe-left">
        <h2>Stay up to date</h2>
        <p>Get the latest deals and discounts delivered to your inbox.</p>
      </div>

      <form className="subscribe-right" onSubmit={handleSubscribe}>
        <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn primary" type="submit">Subscribe Now</button>
      </form>
    </div>
  );
}
