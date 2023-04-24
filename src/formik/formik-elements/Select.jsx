import data from "../../../json/data.json";
import { useField } from "formik";

const Select = (props) => {
  const { type, label, name, options } = props;
  const [field, meta, helpers] = useField(name);
  return (
    <span className="flex items-center gap-5 mb-7">
      <label
        className="text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={name}
      >
        {label}:
      </label>
      <select
        id={name}
        name={name}
        {...field}
        className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 focus-visible:outline-none focus:border-blue-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((item) =>
          item.maritalStatus.map((maritalItem) => (
            <option
              key={maritalItem.id}
              id={maritalItem.name}
              name={maritalItem.name}
              value={maritalItem.value}
            >
              {maritalItem.value}
            </option>
          ))
        )}
      </select>
    </span>
  );
};
export default Select;
