export default function Form({ subTitle, children }) {
  return (
    <form className="w-3/5">
      <h2 className="mt-4 text-3xl font-semibold text-gray-600 border-b pb-4 mb-8">
        {subTitle}
      </h2>
      {children}
    </form>
  );
}
