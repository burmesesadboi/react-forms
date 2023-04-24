import { useField } from "formik";

const Input = (props) => {
  const { type, label, name, placeholder } = props;
  const [field, meta, helpers] = useField(name);
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 outline-blue-500 blue:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        // value={field.value}
        // onChange={field.onChange}
        // onBlur={field.onBlur}
        {...field}
      />
    </div>
  );
};

export default Input;
