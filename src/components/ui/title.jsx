import right from "../../assets/arrow-right.svg";

export default function Title({ onClick, title }) {
  return (
    <header className="py-8 bg-zinc-700 p-12">
      <div className="text-gray-300 font-semibold flex items-center">
        <button onClick={onClick}>
          <img src={right} alt="" />
        </button>
        <h1 className="mx-auto">{title}</h1>
      </div>
    </header>
  );
}
