import React, { useState } from "react";
import "./Offers.css";


const OFFERS = [
 
  { id: 1, title: "Summer Discount", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", discount: "15% OFF" },

  { id: 2, title: "Weekend Promo", img: "https://img.freepik.com/free-psd/modern-car-isolated_23-2151504488.jpg", discount: "10% OFF" },

  { id: 3, title: "First-time User", img: "https://static.vecteezy.com/system/resources/thumbnails/023/981/222/small/close-up-white-luxury-car-on-black-background-with-copy-space-photo.jpg", discount: "₹500 OFF" },

  { id: 4, title: "Festive Offer", img: "https://img.freepik.com/premium-photo/modern-black-luxury-sports-car-front-view-closeup-shot_1311569-1298.jpg?semt=ais_hybrid&w=740&q=80", discount: "20% OFF" },

  { id: 5, title: "Loyalty Bonus", img: "https://media.zigcdn.com/media/model/2025/Jul/model-extimg-1037766383_930x620.jpg", discount: "Extra Perks" },

];

export default function Offers() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + OFFERS.length) % OFFERS.length);
  const next = () => setIdx(i => (i + 1) % OFFERS.length);

  return (
    <div className="offers">
      <div className="section-head">
        <h2>Special Offers</h2>
        <p>Exclusive discounts — toggle through our top deals.</p>
      </div>

      <div className="offers-stage">
        <button onClick={prev} className="arrow">‹</button>

        <div className="offer-card">
          <img src={OFFERS[idx].img} alt={OFFERS[idx].title} />
          <div className="offer-meta">
            <h3>{OFFERS[idx].title}</h3>
            <div className="badge">{OFFERS[idx].discount}</div>
          </div>
        </div>

        <button onClick={next} className="arrow">›</button>
      </div>

      <div className="offers-dots">
        {OFFERS.map((o, i) => (
          <button key={o.id} onClick={() => setIdx(i)} className={i === idx ? "dot active" : "dot"} />
        ))}
      </div>
    </div>
  );
}
