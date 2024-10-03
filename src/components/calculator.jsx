import { useState } from "react";
import { useJobs } from "../context/jobContext";

import right from "../assets/arrow-right.svg";
import calc from "../../public/calc.png";

function CalcHourlyRate({ isOpen, onClose }) {
  const { calculateHourlyRate, hourlyRate } = useJobs();
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [calculatedRate, setCalculatedRate] = useState(null);

  const goToSubmit = () => {
    calculateHourlyRate(
      Number(monthlyIncome),
      Number(hoursPerDay),
      Number(daysPerWeek)
    );
    setCalculatedRate(hourlyRate);
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-100 min-h-screen">
      <header className="py-8 bg-zinc-700 p-12">
        <div className="text-gray-300 font-semibold flex items-center">
          <button onClick={onClose}>
            <img src={right} alt="Voltar" />
          </button>
          <h1 className="mx-auto">Calculadora</h1>
        </div>
      </header>

      <div className="flex justify-between py-12 max-w-5xl mx-auto">
        <aside className="w-80 flex flex-col items-center gap-6 bg-white border border-gray-200 p-16 rounded">
          <img src={calc} className="w-40" />
          <p className="text-center text-lg text-gray-600">
            O valor da sua hora é <br />
            <strong>R$</strong>{" "}
            {calculatedRate > 0 && (
              <strong>{calculatedRate.toFixed(2).replace(".", ",")}</strong>
            )}
          </p>

          <button
            onClick={goToSubmit}
            className="uppercase flex gap-4 justify-center bg-green-600 text-zinc-100 h-fit w-full py-3 rounded items-center hover:brightness-110 transition-all"
          >
            <p className="px-6 text-xs font-bold">Calcular</p>
          </button>
        </aside>

        <main className="w-3/5">
          <h2 className="mt-12 text-3xl font-semibold text-gray-600 border-b pb-8 mb-8">
            Planejamento
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-4">
              <label
                htmlFor="monthly-income"
                className="text-gray-500 font-medium text-sm"
              >
                Quanto eu <br />
                quero ganhar por mês?
              </label>

              <input
                className="px-6 py-4 border rounded-sm text-sm text-gray-500 placeholder:text-gray-300 font-semibold placeholder:font-semibold"
                type="amount"
                id="monthly-income"
                name="monthly-income"
                placeholder="R$"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
            </div>

            <div className="grid gap-4">
              <label
                htmlFor="hours-per-day"
                className="text-gray-500 font-medium text-sm"
              >
                Quantas horas <br />
                quero trabalhar por dia?
              </label>

              <input
                className="px-6 py-4 border rounded-sm text-sm text-gray-500 placeholder:text-gray-300 font-semibold placeholder:font-semibold"
                type="number"
                id="hours-per-day"
                name="hours-per-day"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <div className="grid gap-3">
              <label
                htmlFor="days-per-week"
                className="text-gray-500 font-medium text-sm"
              >
                Quantos dias quero trabalhar por semana?
              </label>

              <input
                className="px-6 py-4 border rounded-sm text-sm text-gray-500 placeholder:text-gray-300 font-semibold placeholder:font-semibold"
                type="number"
                id="days-per-week"
                name="days-per-week"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(e.target.value)}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : null;
}

export default CalcHourlyRate;
