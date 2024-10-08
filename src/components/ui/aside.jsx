export default function Aside({ children, className }) {
  const baseClass =
    "w-80 flex flex-col items-center gap-6 max-sm:gap-2 bg-white border border-gray-200 p-16 rounded-md max-sm:w-full max-sm:p-6";

  return <aside className={`${baseClass} ${className}`}>{children}</aside>;
}
