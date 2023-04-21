import { useState } from "react";

const BasicForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [checkBoxes, setCheckBoxes] = useState([]);
  // const [checkBoxes, setCheckBoxes] = useState(["Agreement"]);
  const [errors, setErrors] = useState(null);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleCheckBoxes = (e) => {
    const { checked, value } = e.target;
    if (checked) setCheckBoxes((prevState) => [...prevState, value]);
    if (!checked)
      setCheckBoxes((prevState) => prevState.filter((e) => e !== value));
  };

  const validateOnSubmit = () => {
    const errorText = {};
    let isValid = true;
    if (username.length === 0) {
      isValid = false;
      errorText["username"] = "Username is required!";
    }

    if (email.length === 0) {
      isValid = false;
      errorText["email"] = "Email is required!";
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      isValid = false;
      errorText["email"] = "Please enter a valid email.";
    }

    if (password.length === 0) {
      isValid = false;
      errorText["password"] = "Please enter a password!";
    } else if (password.length <= 5) {
      isValid = false;
      errorText["password"] = "Please enter a secure password!";
    }

    if (checkBoxes.length === 0) {
      isValid = false;
      errorText["checkBoxes"] =
        "Please at least agree to the terms and conditions!";

      alert(errorText.checkBoxes);
    }

    setErrors(errorText);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      // return true || false
      console.log({
        username: username,
        email: email,
        password: password,
        gender: gender,
        checkBoxesData: checkBoxes,
      });

      setUsername("");
      setEmail("");
      setPassword("");
      setGender("Male");
      setCheckBoxes(["Remember"]);
    }
  };

  return (
    <>
      <h1 className="w-1/3 mt-3 rounded-lg text-white bg-black text-center mb-10 text-lg font-bold mx-auto py-2">
        Basic Form Component
      </h1>
      <form className="py-10 w-1/3 mx-auto px-3" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.username && "border border-red-500"
            }`}
            placeholder="johndoe123"
          />
          {errors?.username && (
            <span className="text-red-600">{errors?.username}</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmail}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.email && "border border-red-500"
            }`}
            placeholder="name@email.com"
          />

          {errors?.email && (
            <span className="text-red-600">{errors?.email}</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.password && "border border-red-500"
            }`}
          />
          {errors?.password && (
            <span className="text-red-600">{errors?.password}</span>
          )}
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <span className="flex  gap-3">
            <input
              type="radio"
              id="male"
              name="male"
              value="Male"
              onChange={handleGender}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </span>
          <span className="flex gap-3">
            <input
              type="radio"
              id="female"
              name="female"
              value="Female"
              onChange={handleGender}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </span>
          <span className="flex gap-3">
            <input
              type="radio"
              id="other"
              name="other"
              value="Other"
              checked={gender === "Other"}
              onChange={handleGender}
            />
            <label htmlFor="other">Other</label>
          </span>
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <span className="flex justify-center items-center">
            <input
              id="aggreement"
              type="checkbox"
              value="Agreement"
              onChange={handleCheckBoxes}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              checked={checkBoxes.includes("Agreement")}
            />
            <label
              htmlFor="agreement"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree to the&#160;
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                T&C
              </a>
              .
            </label>
          </span>
          <span className="flex justify-center items-center">
            <input
              id="remember"
              type="checkbox"
              value="Remember"
              onChange={handleCheckBoxes}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              checked={checkBoxes.includes("Remember")}
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </span>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BasicForm;
