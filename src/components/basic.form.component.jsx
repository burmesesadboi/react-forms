import { useState } from "react";

const BasicForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      "Submitted form with username: " + username + " and password: " + password
    );
  };

  const handleInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          value={username}
          id="username"
          onChange={handleInputUsername}
        />
      </label>
      <br />
      <label htmlFor="username">
        Password:
        <input
          type="password"
          value={password}
          id="password"
          onChange={handleInputPassword}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
