export const FormInput = ({ value, label, name, onValueChange }) => {
  return (
    <label className="block text-sm font-medium text-gray-700">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onValueChange}
        autoComplete="given-name"
        className="mt-1 py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
      />  
    </label>
  )
}