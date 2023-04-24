import { useField } from "formik";

const CheckboxButtons = (props) => {
  const { type, label, name, options } = props;

  const [field, meta, helpers] = useField(name);

  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        {label}
      </h3>
      <ul className="text-sm mb-9 select-none font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((item) =>
          item.frameworks.map((framework) => (
            <li
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              key={framework.id}
            >
              <div className="flex items-center pl-3">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  type={type}
                  id={framework.name}
                  name={name}
                  {...field}
                  value={framework.value}
                  checked={field.value.includes(framework.value)}
                />
                <label
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor={framework.name}
                >
                  {framework.value}
                </label>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

// 1:39:17
export default CheckboxButtons;
