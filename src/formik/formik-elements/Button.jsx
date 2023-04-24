const Button = (props) => {
  const { type, label, disabled } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      className={
        "mt-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      }
    >
      {disabled ? "Unable to Submit" : label}
    </button>
  );
};

export default Button;
