import { useField } from "formik";

const RadioButtons = (props) => {
  const { type, label, name, options } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <ul className="flex text-sm justify-between items-center gap-1 mb-6">
      <label htmlFor={name}>{label}: </label>
      {options.map((item) =>
        item.genders.map((gender) => (
          <li key={gender.id} className="flex gap-1">
            <input
              type={type}
              id={gender.name}
              name={name}
              {...field}
              value={gender.value}
            />
            <label htmlFor={gender.name}>{gender.value}</label>
          </li>
        ))
      )}
    </ul>
  );
};

export default RadioButtons;
