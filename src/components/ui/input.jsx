export default function Input({
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  className,
  ...props
}) {
  const baseClass = "px-6 py-4 rounded-md border";
  const inputClass =
    "text-zinc-500 font-semibold placeholder:text-zinc-300 placeholder:font-semibold";

  return (
    <input
      className={`${baseClass} ${inputClass} ${className}`}
      value={value}
      name={name}
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}
