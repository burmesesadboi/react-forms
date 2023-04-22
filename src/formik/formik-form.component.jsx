import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CheckBoxComponent,
  LabelComponent,
  SelectRelationshipStatus,
} from "../components/reusable-elements.component.jsx";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    gender: "Male",
    checkBoxes: [],
    maritalStatus: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.table("Submitted Data:", values);

    return resetForm({
      values: initialValues,
    });
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    email: Yup.string().email("Invalid Email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
    maritalStatus: Yup.string().required("Marital status is required!"),
  });

  const formikData = useFormik({
    initialValues, // key နဲ့ value တူလို့ တစ်ခါတည်းရေးလို့ရ
    onSubmit,
    validationSchema,
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
            {...formikData.getFieldProps("username")}
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
            {...formikData.getFieldProps("email")}
            className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              formikData.touched.email &&
              formikData.errors.email &&
              "border border-red-500"
            }`}
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
            {...formikData.getFieldProps("password")}
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
          disabled={formikData.isSubmitting || !formikData.isValid}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormikForm;
