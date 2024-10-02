import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

function Header() {
  return (
    <header className="bg-zinc-700 text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto">
        <section
          id="top"
          className="flex justify-between items-center border-b border-b-zinc-600 pb-8"
        >
          <img src={logo} alt="JobsCalc" />
          <button id="calc-profile" className="flex items-center gap-4">
            <div className="grid text-end">
              <strong className="text-xl">Valor por Hora</strong>
              <span className="text-sm text-zinc-400 hover:text-orange-400 hover:underline transition">
                R$ 83,00
              </span>
            </div>
          </button>
        </section>

        <section id="summary" className="flex justify-between items-center">
          <div className="flex gap-8 py-8">
            <div className="total grid">
              <strong className="text-2xl">12</strong>
              <p className="text-zinc-400">Projetos ao total</p>
            </div>
            <div className="total grid">
              <strong className="text-2xl">7</strong>
              <p className="text-zinc-400">Em andamento</p>
            </div>
            <div className="total grid">
              <strong className="text-2xl">4</strong>
              <p className="text-zinc-400">Encerrados</p>
            </div>
          </div>

          <button className="uppercase flex gap-4 bg-orange-400 h-fit px-3 py-2 rounded items-center hover:brightness-110 transition-all">
            <span className="bg-opacity-10 bg-white rounded p-0.5">
              <img src={plus} alt="Adicionar Novo Job" />
            </span>
            <p className="px-6 text-xs font-bold">Adicionar Novo Job</p>
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;