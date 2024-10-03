import { useState } from "react";
import CalcHourlyRate from "./components/calculator";

import { JobsProvider, useJobs } from "./context/jobContext";

import logo from "./assets/logo.svg";
import plus from "./assets/plus.svg";
import calc from "./assets/calc.png";
import JobRegister from "./components/addJob";
import JobList from "./components/jobList";
import Summary from "./components/summary";

export default function App() {
  const { hourlyRate } = useJobs;
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);
  const [isJobRegisterOpen, setJobRegisterOpen] = useState(false);

  function openCalculator() {
    setCalculatorOpen(true);
  }

  function closeCalculator() {
    setCalculatorOpen(false);
  }

  function openRegister() {
    setJobRegisterOpen(true);
  }

  function closeRegister() {
    setJobRegisterOpen(false);
  }

  return (
    <JobsProvider>
      {/* header component */}
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
              onClick={() => setCalculatorOpen(true)}
            >
              <div className="grid text-end">
                <strong className="text-xl">Valor por Hora</strong>
                {hourlyRate > 0 && (
                  <span className="text-sm text-zinc-400 hover:underline transition">
                    R$ {hourlyRate.toFixed(2)}
                  </span>
                )}
              </div>
              <img src={calc} className="w-16" />
            </button>
          </section>

          <section id="summary" className="flex justify-between items-center">
            <Summary />

            <button
              onClick={() => setJobRegisterOpen(true)}
              className="uppercase flex gap-4 bg-orange-400 h-fit px-3 py-2 rounded items-center hover:brightness-110 transition-all"
            >
              <span className="bg-opacity-10 bg-white rounded p-0.5">
                <img src={plus} alt="Adicionar Novo Job" />
              </span>
              <p className="px-6 text-xs font-bold">Adicionar Novo Job</p>
            </button>
          </section>
        </div>
      </header>

      <main className="max-w-5xl mx-auto -mt-8">
        <JobList />
      </main>

      {/* hourlyRateCalc component */}
      {isCalculatorOpen && (
        <CalcHourlyRate isOpen={openCalculator} onClose={closeCalculator} />
      )}

      {isJobRegisterOpen && (
        <JobRegister isOpen={openRegister} onClose={closeRegister} />
      )}
    </JobsProvider>
  );
}
