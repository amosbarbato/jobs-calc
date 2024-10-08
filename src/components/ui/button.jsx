export default function Button({
  onClick,
  variant,
  size,
  className,
  children,
}) {
  const baseClass =
    "py-3 h-fit flex gap-4 items-center justify-center uppercase rounded-md transition-all hover:brightness-110 text-xs font-bold max-sm:py-1.5 max-sm:ps-1.5";
  const variantClass = {
    light: "bg-zinc-200 text-zinc-500",
    submit: "bg-green-600 text-zinc-100",
    delete: "bg-red-600 text-zinc-100",
    create: "bg-orange-400 text-zinc-100",
  };
  const sizeClass = {
    full: "w-full",
    button: "w-[170px] max-sm:py-3",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      {children}
    </button>
  );
}
