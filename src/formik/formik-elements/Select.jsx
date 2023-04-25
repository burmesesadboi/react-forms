import { useField } from "formik";
import Error from "./Error.jsx";
import error from "./Error.jsx";

const Select = (props) => {
  const { type, label, name, options } = props;
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <span className="flex justify-between items-center gap-3 mb-3">
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
          className={`w-56 bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 focus-visible:outline-none focus:border-blue-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:border-blue-500 ${
            meta.touched && meta.error && "border-red-500"
          }`}
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
      {meta.touched && meta.error && <Error error={meta.error} />}
    </>
  );
};
export default Select;
