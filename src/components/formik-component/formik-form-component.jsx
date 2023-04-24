import { Form, Formik } from "formik";
import FormikController from "../../formik/formik-controller/index.jsx";
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
    >
      {(props) => {
        console.log("Props:", props);
        return (
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
              type="email"
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
            <FormikController type="submit" control="button" label="Submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikFormComponent;
