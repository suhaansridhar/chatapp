import { useState, useRef, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current = nameRef.current.focus();
  }, []);

  return (
    <div className="login--container">
        <div className="login--container--element">
      <div>
        <label>Enter your username</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your username || email"
          name={name}
          value={name}
          ref={nameRef}
        />
      </div>
      <div>
        <label>Enter your password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          name={password}
          value={password}
        />
      </div>
      </div>
    </div>
  );
}
