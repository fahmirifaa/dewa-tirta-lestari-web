function FormSelect({ label, name, value, onChange, error, options, placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-gray-200 dark:border-gray-700 focus:ring-primary/50 focus:border-primary"
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

export default FormSelect;