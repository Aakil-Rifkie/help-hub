const SubmitButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-semibold text-lg"
  >
    Create Project
  </button>
);

export default SubmitButton;