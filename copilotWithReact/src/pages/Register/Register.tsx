import { useState } from "react";

const Register = () => {
  // two state items: username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // two state items for the username and password error messages
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              // validate the username must be at least 3 characters long , must have uppercase and lowercase letters and must have at least one number and one special character
              if (e.target.value.length < 3) {
                setUsernameError("Username must be at least 3 characters long");
              } else if (!/[A-Z]/.test(e.target.value)) {
                setUsernameError(
                  "Username must have at least one uppercase letter"
                );
              } else if (!/[a-z]/.test(e.target.value)) {
                setUsernameError(
                  "Username must have at least one lowercase letter"
                );
              } else if (!/[0-9]/.test(e.target.value)) {
                setUsernameError("Username must have at least one number");
              } else if (!/[!@#$%^&*]/.test(e.target.value)) {
                setUsernameError(
                  "Username must have at least one special character"
                );
              } else {
                setUsernameError("");
              }
            }}
          />
          {usernameError && <p>{usernameError}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
