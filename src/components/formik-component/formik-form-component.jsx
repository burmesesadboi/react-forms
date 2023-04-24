import { Form, Formik } from "formik";
import FormikController from "../../formik/formik-controller/index.jsx";
import * as Yup from "yup";
import data from "../../../json/data.json";

const FormikFormComponent = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    gender: "Male",
    frameworks: ["React JS"],
    maritalStatus: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        return resetForm({ values: initialValues });
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is Required!"),
        email: Yup.string()
          .email("Invalid email format!")
          .required("Email is Required!"),
        password: Yup.string()
          .required("Password is Required!")
          .min(5, "Too short!"),
        maritalStatus: Yup.string().required(
          "Please select your marital status!"
        ),
      })}
    >
      {({ dirty, isValid, errors, touched }) => (
        <Form className="py-10 w-1/3 mx-auto">
          <FormikController
            control="input"
            type="text"
            name="username"
            label="Username"
            placeholder="Enter a username ... "
          />
          <FormikController
            control="input"
            type="text"
            name="email"
            label="Email"
            placeholder="Enter an email ... "
          />
          <FormikController
            control="input"
            type="password"
            name="password"
            label="Password"
            placeholder="Enter a secure password ... "
          />
          <FormikController
            control="radio-button"
            type="radio"
            name="gender"
            label="Gender "
            options={data.filter((item) => item.genders)}
          />
          <FormikController
            control="checkbox-button"
            type="checkbox"
            name="frameworks"
            label="Frameworks and Libraries 🎀💝:"
            options={data.filter((item) => item.frameworks)}
          />
          <FormikController
            control="select-options"
            name="maritalStatus"
            label="Marital status"
            options={data.filter((item) => item.maritalStatus)}
          />
          <FormikController
            type="submit"
            control="button"
            label="Submit"
            disabled={!(dirty && isValid)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormikFormComponent;
