import { useFormik } from "formik";
import {
  CheckBoxComponent,
  LabelComponent,
  SelectRelationshipStatus,
} from "../components/reusable-elements.component.jsx";

const FormikForm = () => {
  const formikData = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      gender: "Male",
      checkBoxes: [],
      maritalStatus: "",
    },
    onSubmit: (values) => {
      console.table("Submitted Data:", values);
      // return alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        errors.email = "Please enter a valid email.";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      if (!values.maritalStatus) {
        errors.maritalStatus = "Marital Status is required";
      }

      return errors;
    },
  });

  return (
    <>
      <h1 className="w-1/3 mt-3 rounded-lg text-white bg-black text-center mb-10 text-lg font-bold mx-auto py-2">
        Formik Form Component
      </h1>
      <form
        className="py-10 w-1/3 mx-auto px-3"
        onSubmit={formikData.handleSubmit}
      >
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
            value={formikData.values?.username}
            onChange={formikData.handleChange}
            onBlur={formikData.handleBlur}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              formikData.touched.username &&
              formikData.errors.username &&
              "border border-red-500"
            }`}
            placeholder="johndoe123"
          />
          {formikData.touched.username && formikData.errors.username && (
            <span className="text-red-600">{formikData.errors.username}</span>
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
            value={formikData.values?.email}
            onChange={formikData.handleChange}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              formikData.touched.email &&
              formikData.errors.email &&
              "border border-red-500"
            }`}
            onBlur={formikData.handleBlur}
            placeholder="name@email.com"
          />
          {formikData.touched.email && formikData.errors.email && (
            <span className="text-red-600">{formikData.errors.email}</span>
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
            value={formikData.values?.password}
            onChange={formikData.handleChange}
            onBlur={formikData.handleBlur}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              formikData.touched.password &&
              formikData.errors.password &&
              "border border-red-500"
            }`}
          />
          {formikData.touched.password && formikData.errors.password && (
            <span className="text-red-600">{formikData.errors.password}</span>
          )}
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <LabelComponent
            checkGender={formikData.values?.gender}
            handleChange={formikData.handleChange}
          />
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <SelectRelationshipStatus
            touched={formikData.touched.maritalStatus}
            isError={formikData.errors.maritalStatus}
            handleBlur={formikData.handleBlur}
            handleChange={formikData.handleChange}
          />
          {formikData.touched.maritalStatus &&
            formikData.errors.maritalStatus && (
              <span className="text-red-600">
                {formikData.errors.maritalStatus}
              </span>
            )}
        </div>
        <div className="flex justify-between items-center gap-5 mb-6">
          <CheckBoxComponent
            checkCheckBoxes={formikData.values.checkBoxes}
            handleChange={formikData.handleChange}
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

export default FormikForm;
