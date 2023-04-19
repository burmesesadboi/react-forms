import { useState } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleUserInput = (event) => {
    /*
    const objInput = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(objInput);
    */

    const { name, value } = event.target;
    setFormData((prevState) => (prevState = { ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          value={formData.username || ""}
          id="username"
          name="username"
          onChange={handleUserInput}
        />
      </label>
      <br />
      <label htmlFor="username">
        Password:
        <input
          type="password"
          value={formData.password || ""}
          id="password"
          name="password"
          onChange={handleUserInput}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
