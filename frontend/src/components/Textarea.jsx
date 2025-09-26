const Textarea = ({ label, name, value, onChange, placeholder, required = false, rows = 4, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical
      ${error ? "border-red-500" : "border-gray-300"}`}
    />
    {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
  </div>
);

export default Textarea;