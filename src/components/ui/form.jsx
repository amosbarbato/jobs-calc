export default function Form({ subTitle, children }) {
  return (
    <form className="w-3/5 max-sm:w-full">
      <h2 className="mt-4 text-3xl max-sm:text-2xl font-semibold text-gray-600 border-b pb-4 mb-8 max-sm:mt-0 max-sm:mb-6">
        {subTitle}
      </h2>
      {children}
    </form>
  );
}
