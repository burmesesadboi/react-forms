// Basic Form but with formik
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const BasicForm = () => {
  const initialValues = {
    username: "",
    password: "",
    email: "",
  };

  const UserInputsSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
    email: Yup.string().email().required("Email is required!"),
  });

  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserInputsSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-1/4 mx-auto pt-28">
          <div className="mb-3">
            <label
              htmlFor="username"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
            >
              Username&#160;
            </label>
            <Field
              id="username"
              name="username"
              className={`bg-gray-50 mb-1  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors.username && touched.username
                  ? "border border-red-400"
                  : "border border-blue-300"
              }`}
              placeholder="Enter your username..."
            />
            <ErrorMessage
              name="username"
              render={(msg) => (
                <span className="text-red-600 text-sm">{msg}</span>
              )}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="username"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
            >
              Email&#160;
            </label>
            <Field
              id="email"
              name="email"
              className={`bg-gray-50 mb-1  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors.email && touched.email
                  ? "border border-red-400"
                  : "border border-blue-300"
              }`}
              placeholder="Enter your email eg.example@gmail.com..."
            />
            <ErrorMessage
              name="email"
              render={(msg) => (
                <span className="text-red-600 text-sm">{msg}</span>
              )}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
            >
              Password&#160;
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`bg-gray-50 mb-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors.password && touched.password
                  ? "border border-red-400"
                  : "border border-blue-300"
              }`}
              placeholder="Enter your password..."
            />
            <ErrorMessage
              name="password"
              render={(msg) => (
                <span className="text-red-600 text-sm">{msg}</span>
              )}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;
