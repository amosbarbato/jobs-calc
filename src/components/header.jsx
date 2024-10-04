import Summary from "./summary";
import Button from "./ui/button";

import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";
import calc from "../assets/calc.png";

function Header({ onCalculate, onRegister }) {
  return (
    <header className="bg-zinc-700 text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto">
        <section
          id="top"
          className="flex justify-between items-center border-b border-b-zinc-600 pb-8"
        >
          <img src={logo} alt="JobsCalc" />
          <button
            id="calc-profile"
            className="flex items-center gap-5 hover:text-orange-400 "
            onClick={onCalculate}
          >
            <strong className="text-xl text-end">Calculadora</strong>
            <img src={calc} className="w-16" />
          </button>
        </section>

        <section id="summary" className="flex justify-between items-center">
          <Summary />

          <Button
            onClick={onRegister}
            variant="create"
            className="ps-3 pe-8 gap-8"
          >
            <span className="bg-opacity-10 bg-white rounded p-0.5">
              <img src={plus} alt="Adicionar Novo Job" />
            </span>
            Adicionar Novo Job
          </Button>
        </section>
      </div>
    </header>
  );
}

export default Header;
