import { Calendar } from 'lucide-react';

const DatePicker = ({ label, name, value, onChange, required = false, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
        ${error ? "border-red-500" : "border-gray-300"}`}
      />
    </div>
    {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
  </div>
);

export default DatePicker;