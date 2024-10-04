export default function Card({ children, className }) {
  const baseClass =
    "border border-gray-200 grid grid-cols-[40%_25%_25%_10%] items-center py-6 px-8 rounded bg-white hover:bg-gradient-to-l hover:from-transparent  hover:to-orange-50 overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-1 before:h-0 before:transition-all before:bg-orange-400 hover:before:h-full";

  return <div className={`${baseClass} ${className}`}>{children}</div>;
}
