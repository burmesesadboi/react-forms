import data from "../../json/data.json";
export const LabelComponent = ({ checkGender, handleUserInput }) => {
  return data.map((item) =>
    item?.genders?.map((genderItem) => (
      <span key={genderItem.id} className="flex  gap-3">
        <input
          type="radio"
          id={genderItem.name}
          name="gender"
          value={genderItem.value}
          onChange={handleUserInput}
          checked={checkGender === genderItem.value}
        />
        <label htmlFor={genderItem.name}>{genderItem.value}</label>
      </span>
    ))
  );
};

export const CheckBoxComponent = ({ checkCheckBoxes, handleCheckBoxes }) => {
  return data.map((item) =>
    item?.checkBoxes?.map((checkBoxItem) => (
      <span key={checkBoxItem.id} className="flex justify-center items-center">
        <input
          id={checkBoxItem.name}
          type="checkbox"
          value={checkBoxItem.name}
          onChange={handleCheckBoxes}
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
