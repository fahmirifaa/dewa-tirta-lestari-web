function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  icon: Icon,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            Icon ? "pl-11" : "pl-4"
          } pr-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            error
              ? "border-red-400 focus:ring-red-200"
              : "border-gray-200 dark:border-gray-700 focus:ring-primary/50 focus:border-primary"
          }`}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

export default FormInput;