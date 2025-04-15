const Label = ({ text, onClick }) => {
  return (
    <label
      onClick={onClick}
      htmlFor="input-label"
      className="block mb-2 font-medium text-sm"
    >
      {text}
    </label>
  );
};

export default Label;
