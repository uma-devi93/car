import React, { useState } from "react";
import "./FloatingChat.css";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setChat([...chat, { text: message, sender: "user" }]);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="floating-chat-btn" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Live Chat</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {chat.map((c, index) => (
              <div
                key={index}
                className={`chat-bubble ${c.sender === "user" ? "user" : "bot"}`}
              >
                {c.text}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
