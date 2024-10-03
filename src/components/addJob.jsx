import { useState } from "react";
import right from "../assets/arrow-right.svg";
import { useJobs } from "../context/jobContext";
import { v4 as uuidv4 } from "uuid";

function JobRegister({ isOpen, onClose }) {
  const { hourlyRate, addJob } = useJobs();
  const [jobName, setJobName] = useState("");
  const [dailyHours, setDailyHours] = useState("");
  const [estimatedHours, setEstimatedHours] = useState("");

  const goToSubmit = () => {
    const jobCost = hourlyRate * estimatedHours;
    const jobDeadline = estimatedHours / dailyHours;

    const newJob = {
      id: uuidv4(),
      jobName,
      dailyHours,
      estimatedHours,
      jobCost,
      jobDeadline,
    };

    addJob(newJob);
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-100 min-h-screen">
      <header className="py-8 bg-zinc-700 p-12">
        <div className="text-gray-300 font-semibold flex items-center">
          <button onClick={onClose}>
            <img src={right} alt="" />
          </button>
          <h1 className="mx-auto">Adicionar Novo Job</h1>
        </div>
      </header>

      <div className="flex justify-between p-12 max-w-5xl mx-auto gap-16">
        <div className="w-1/2">
          <main>
            <h2 className="mt-12 text-3xl font-medium text-gray-600 border-b pb-4 mb-4">
              Dados do projeto
            </h2>

            <div className="space-y-4">
              <div className="grid gap-3">
                <label
                  htmlFor="name"
                  className="text-gray-500 font-medium text-sm"
                >
                  Nome do projeto
                </label>

                <input
                  className="px-4 py-2 border rounded-sm text-sm"
                  type="text"
                  id="name"
                  name="name"
                  value={jobName}
                  onChange={(e) => setJobName(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <div className="grid gap-3">
                  <label
                    htmlFor="daily-hours"
                    className="text-gray-500 font-medium text-sm"
                  >
                    Quantas horas por dia vai dedicar ao job?
                  </label>

                  <input
                    className="px-4 py-2 border rounded-sm text-sm"
                    type="number"
                    id="daily-hours"
                    name="daily-hours"
                    value={dailyHours}
                    onChange={(e) => setDailyHours(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <label
                    htmlFor="total-hours"
                    className="text-gray-500 font-medium text-sm"
                  >
                    Estimativa de horas para esse Job?
                  </label>

                  <input
                    className="px-4 py-2 border rounded-sm text-sm"
                    type="number"
                    id="total-hours"
                    name="total-hours"
                    value={estimatedHours}
                    onChange={(e) => setEstimatedHours(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="flex-grow-0 text-center">
          <aside className="max-w-80 bg-white border border-gray-200 p-16 rounded">
            <img src="" alt="" className="mx-auto" />
            {/* <p className="mt-8 text-gray-600">
              O valor do projeto ficou em{" "}
              <strong>{Number(jobs.jobCost)}</strong>
            </p> */}
            <button
              onClick={goToSubmit}
              className="uppercase flex gap-4 bg-orange-400 h-fit px-3 py-2 rounded items-center hover:brightness-110 transition-all"
            >
              <p className="px-6 text-xs font-bold">Calcular</p>
            </button>
          </aside>
        </div>
      </div>
    </div>
  ) : null;
}

export default JobRegister;
