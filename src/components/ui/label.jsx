export default function Label({ htmlFor, className, children }) {
  const baseClass = "text-gray-500 font-medium text-sm max-sm:text-xs";

  return (
    <label htmlFor={htmlFor} className={`${baseClass} ${className}`}>
      {children}
    </label>
  );
}
