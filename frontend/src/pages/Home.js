import React, { useState, useEffect } from "react";
import '../Allstyles/Homepage.css';

function TypingText() {
  const sentences = [
    "Welcome to the Haunted Home...",
    "Discover the secrets of the supernatural...",
    "Are you brave enough to explore the unknown?",
    "Dive into the world of eerie myths and spine-chilling tales..."
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prev) => prev + sentences[index][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100);

    if (charIndex === sentences[index].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % sentences.length);
      }, 2000);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, index]);

  return <div className="typing-text">{text}</div>;
}

function Home() {
  return (
    <div>
      {/* Fog overlay */}
      <div className="fog"></div>

      {/* Typing text section */}
      <div className="typing-text-container">
        <TypingText />
      </div>

      {/* Main content */}
      <div className="content-container">
        <div className="image-container">
          <img src="/images/pic1.jpg" alt="Haunted House" style={{ maxWidth: '120%', height: '60%' }} />
        </div>
        <div className="info-container">
          <h2>Welcome to Haunt Explorer</h2>
          <p>Discover the most chilling and spine-tingling haunted locations around the world...</p>
          {/* More content here */}
        </div>
      </div>
      <div className="content-container reverse">
        <div className="image-container">
          <img src="/images/pic2.jpg" alt="Spooky Scene" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="info-container">
          <h2 style={{ paddingLeft: 50 }}>Explore the Unknown</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
