import right from "../assets/arrow-right.svg";

function CalcHourlyRate() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 bg-zinc-700 p-12">
        <div className="text-gray-300 font-semibold flex items-center">
          <button>
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
            <strong className="text-xl">R$ 7000,00</strong>
          </p>
        </aside>

        <main>
          <h2 className="mt-12 text-3xl font-medium text-gray-600 border-b pb-4 mb-4">
            Planejamento
          </h2>
          <div className="flex gap-4">
            <div className="grid gap-3">
              <label
                htmlFor="monthly-budget"
                className="text-gray-500 font-medium text-sm"
              >
                Quanto eu <br />
                quero ganhar por mês?
              </label>

              <input
                className="px-4 py-2 border rounded-sm text-sm"
                type="amount"
                id="monthly-budget"
                name="monthly-budget"
                placeholder="R$"
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
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CalcHourlyRate;
