const InputLabel = ({ type, value, onChange, placeholder, color, lable }) => {
  return (
    <div className="">
      <label className="block mb-2 font-medium text-sm">{lable}</label>
      <input
        type={type ?? "text"}
        onChange={onChange}
        className={`block disabled:opacity-50 px-4 py-2.5 sm:py-3 border-1 border-gray-200  focus:border-${color}-500 rounded-lg focus:ring-${color}-500 w-full sm:text-sm disabled:pointer-events-none `}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputLabel;
