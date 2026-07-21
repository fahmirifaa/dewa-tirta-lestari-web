function FormTextarea({ label, name, value, onChange, error, placeholder, rows = 5 }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-gray-200 dark:border-gray-700 focus:ring-primary/50 focus:border-primary"
        }`}
      ></textarea>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

export default FormTextarea;