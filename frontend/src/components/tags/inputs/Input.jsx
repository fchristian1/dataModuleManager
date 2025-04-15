const Input = ({ type, value, onChange, placeholder, color }) => {
  return (
    <div className="">
      <input
        type={type}
        onChange={onChange}
        value={value}
        className={`block disabled:opacity-50 px-4 py-2.5 sm:py-3 border-1 border-gray-300 focus:border-${color}-500 rounded-lg focus:ring-${color}-500 w-full sm:text-sm disabled:pointer-events-none`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
