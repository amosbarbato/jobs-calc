import { useState } from "react";
import { useJobs } from "../context/jobContext";

import right from "../assets/arrow-right.svg";

function CalcHourlyRate({ isOpen, onClose }) {
  const { calculateHourlyRate, hourlyRate } = useJobs();
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");

  const goToSubmit = () => {
    calculateHourlyRate(
      Number(monthlyIncome),
      Number(hoursPerDay),
      Number(daysPerWeek)
    );
    onClose();
  };

  return isOpen ? (
    <div className="bg-gray-100 min-h-screen relative z-10 -mt-[265px]">
      <header className="py-8 bg-zinc-700 p-12">
        <div className="text-gray-300 font-semibold flex items-center">
          <button onClick={onClose}>
            <img src={right} alt="" />
          </button>
          <h1 className="mx-auto">Calculadora</h1>
        </div>
      </header>

      <div className="flex justify-between p-12 max-w-5xl mx-auto">
        <aside className="max-w-80 bg-white border border-gray-200 p-16 rounded">
          <img src="" alt="" />
          <p className="text-center mt-4 text-gray-600">
            O valor da sua hora é <br />
            {hourlyRate > 0 && (
              <strong className="text-xl">R$ {hourlyRate.toFixed(2)}</strong>
            )}
          </p>

          <button
            onClick={goToSubmit}
            className="uppercase flex gap-4 bg-orange-400 h-fit px-3 py-2 rounded items-center hover:brightness-110 transition-all"
          >
            <p className="px-6 text-xs font-bold">Calcular</p>
          </button>
        </aside>

        <main>
          <h2 className="mt-12 text-3xl font-medium text-gray-600 border-b pb-4 mb-4">
            Planejamento
          </h2>
          <div className="flex gap-4">
            <div className="grid gap-3">
              <label
                htmlFor="monthly-income"
                className="text-gray-500 font-medium text-sm"
              >
                Quanto eu <br />
                quero ganhar por mês?
              </label>

              <input
                className="px-4 py-2 border rounded-sm text-sm"
                type="amount"
                id="monthly-income"
                name="monthly-income"
                placeholder="R$"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
            </div>

            <div className="grid gap-3">
              <label
                htmlFor="hours-per-day"
                className="text-gray-500 font-medium text-sm"
              >
                Quantas horas <br />
                quero trabalhar por dia?
              </label>

              <input
                className="px-4 py-2 border rounded-sm text-sm"
                type="number"
                id="hours-per-day"
                name="hours-per-day"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="grid gap-3">
              <label
                htmlFor="days-per-week"
                className="text-gray-500 font-medium text-sm"
              >
                Quantos dias quero trabalhar por semana?
              </label>

              <input
                className="px-4 py-2 border rounded-sm text-sm w-full"
                type="amount"
                id="days-per-week"
                name="days-per-week"
                placeholder="R$"
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
