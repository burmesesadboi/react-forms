import data from "../../json/data.json";
export const LabelComponent = ({ checkGender, handleChange }) => {
  return data.map((item) =>
    item?.genders?.map((genderItem) => (
      <span key={genderItem.id} className="flex  gap-3">
        <input
          type="radio"
          id={genderItem.name}
          name="gender"
          value={genderItem.value}
          onChange={handleChange}
          checked={checkGender === genderItem.value}
        />
        <label htmlFor={genderItem.name}>{genderItem.value}</label>
      </span>
    ))
  );
};

export const SelectRelationshipStatus = ({
  touched,
  isError,
  handleBlur,
  handleChange,
}) => {
  return (
    <span className="flex justify-center items-center">
      <label
        className="text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="maritalStatus"
      >
        Marital Status:&nbsp;&nbsp;
      </label>
      <select
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          touched && isError && "border border-red-500"
        }`}
        id="select"
        name="maritalStatus"
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {data?.map((item) =>
          item?.maritalStatus?.map((element) => (
            <option key={element.id} value={element.name}>
              {element.value}
            </option>
          ))
        )}
      </select>
    </span>
  );
};

export const CheckBoxComponent = ({ checkCheckBoxes, handleChange }) => {
  return data.map((item) =>
    item?.checkBoxes?.map((checkBoxItem) => (
      <span key={checkBoxItem.id} className="flex justify-center items-center">
        <input
          id={checkBoxItem.name}
          type="checkbox"
          name="checkBoxes"
          value={checkBoxItem.name}
          onChange={handleChange}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          checked={checkCheckBoxes.includes(checkBoxItem.name)}
        />

        <label
          htmlFor={checkBoxItem.name}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {checkBoxItem.value}
        </label>
      </span>
    ))
  );
};
