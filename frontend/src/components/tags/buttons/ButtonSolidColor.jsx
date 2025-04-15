const ButtonSolidColor = ({ color, text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer inline-flex items-center gap-x-2 bg-${color}-500 hover:bg-${color}-600 focus:bg-${color}-600 disabled:opacity-50 px-4 py-2 border border-transparent rounded-lg focus:outline-hidden font-medium text-white disabled:pointer-events-none`}
    >
      {text}
    </button>
  );
};

export default ButtonSolidColor;
