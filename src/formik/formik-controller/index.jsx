import Input from "../formik-elements/Input.jsx";
import RadioButtons from "../formik-elements/RadioButtons.jsx";
import CheckboxButtons from "../formik-elements/CheckboxButtons.jsx";
import SelectOptionsButton from "../formik-elements/Select.jsx";
import Button from "../formik-elements/Button.jsx";

const FormikController = (props) => {
  const { control, ...rest } = props;

  // input, select, radio, checkbox
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio-button":
      return <RadioButtons {...rest} />;
    case "checkbox-button":
      return <CheckboxButtons {...rest} />;
    case "select-options":
      return <SelectOptionsButton {...rest} />;
    case "button":
      return <Button {...rest} />;
    default:
      return null;
  }
};

export default FormikController;
