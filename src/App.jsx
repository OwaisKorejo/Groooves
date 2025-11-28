import { useState } from "react";
import "./App.css";
import { FaInstagram, FaTiktok, FaApple } from "react-icons/fa";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="/assets/images/logo_no_background.png" className="logo" />
      <h1>groooves</h1>
      <p>the music app.</p>
      <div className="card">
        <a className="button">
          <FaApple style={{ marginRight: "0.5em" }} />
          Download on iOS
        </a>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/grooves.app/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@grooovesapp" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>
      </div>
    </>
  );
}

export default App;
