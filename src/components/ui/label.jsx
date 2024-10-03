export default function Label({ htmlFor, className, children }) {
  const baseClass = "text-gray-500 font-medium text-sm";

  return (
    <label htmlFor={htmlFor} className={`${baseClass} ${className}`}>
      {children}
    </label>
  );
}
