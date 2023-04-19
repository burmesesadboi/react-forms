// Basic Form but with formik
import { Field, Form, Formik } from "formik";

const BasicForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };
  return (
    <Formik  initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="w-1/4 mx-auto pt-28">
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500 after:font-bold"
          >
            Username&#160;
          </label>
          <Field
            id="username"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your username..."
            required="required"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500 after:font-bold"
          >
            Password&#160;
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password..."
            required="required"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default BasicForm;
