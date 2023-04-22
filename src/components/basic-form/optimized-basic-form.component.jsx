import { useState } from "react";
import {
  CheckBoxComponent,
  LabelComponent,
} from "../reusable-elements.component.jsx";

const OptimizedBasicForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "Male",
    checkBoxes: [],
    errors: null,
  });

  const validateOnSubmit = () => {
    const errorText = {};
    let isValid = true;
    if (userData.username.length === 0) {
      isValid = false;
      errorText["username"] = "Username is required!";
    }

    if (userData.email.length === 0) {
      isValid = false;
      errorText["email"] = "Email is required!";
    } else if (
      !userData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      isValid = false;
      errorText["email"] = "Please enter a valid email.";
    }

    if (userData.password.length === 0) {
      isValid = false;
      errorText["password"] = "Please enter a password!";
    } else if (userData.password.length <= 5) {
      isValid = false;
      errorText["password"] = "Please enter a secure password!";
    }

    if (userData.checkBoxes.length === 0) {
      isValid = false;
      errorText["checkBoxes"] = "Please at least select one checkbox";

      alert(errorText.checkBoxes);
    }

    setUserData((prevState) => ({
      ...prevState,
      errors: errorText,
    }));
    return isValid;
  };

  const handleUserInput = (event) => {
    const { name, value } = event.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckBoxes = (event) => {
    const { checked, value } = event.target;

    checked
      ? setUserData((prevState) => ({
          ...prevState,
          checkBoxes: [...prevState.checkBoxes, value],
        }))
      : setUserData((prevState) => ({
          ...prevState,
          checkBoxes: prevState.checkBoxes.filter(
            (checkbox) => checkbox !== value
          ),
        }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      // return true || false
      console.log({
        username: userData.username,
        email: userData.email,
        password: userData.password,
        gender: userData.gender,
        checkBoxesData: userData.checkBoxes,
      });

      setUserData({
        username: "",
        email: "",
        password: "",
        gender: "Male",
        checkBoxes: [],
        errors: null,
      });
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
            name="username"
            value={userData.username}
            onChange={handleUserInput}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              userData.errors?.username && "border border-red-500"
            }`}
            placeholder="johndoe123"
          />
          {userData.errors?.username && (
            <span className="text-red-600">{userData.errors?.username}</span>
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
            name="email"
            value={userData.email}
            onChange={handleUserInput}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              userData.errors?.email && "border border-red-500"
            }`}
            placeholder="name@email.com"
          />

          {userData.errors?.email && (
            <span className="text-red-600">{userData.errors?.email}</span>
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
            name="password"
            value={userData.password}
            onChange={handleUserInput}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              userData.errors?.password && "border border-red-500"
            }`}
          />
          {userData.errors?.password && (
            <span className="text-red-600">{userData.errors?.password}</span>
          )}
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <LabelComponent
            checkGender={userData.gender}
            handleUserInput={handleUserInput}
          />
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <CheckBoxComponent
            checkCheckBoxes={userData.checkBoxes}
            handleCheckBoxes={handleCheckBoxes}
          />
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

export default OptimizedBasicForm;
