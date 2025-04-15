const ButtonOutlineColor = ({ color, text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-${color}-800 text-gray-800 hover:border-${color}-500 hover:text-gray-500 focus:outline-hidden focus:border-${color}-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none`}
    >
      {text}
    </button>
  );
};

export default ButtonOutlineColor;
