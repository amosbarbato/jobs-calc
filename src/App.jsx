import { useState } from "react";
import CalcHourlyRate from "./components/calculator";

import { JobsProvider } from "./context/jobContext";

import JobRegister from "./components/add-job";
import JobList from "./components/job-list";
import Header from "./components/header";

export default function App() {
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
      <Header onCalculate={openCalculator} onRegister={openRegister} />

      <main className="max-w-5xl mx-auto -mt-8 max-sm:mt-0">
        <JobList />
      </main>

      {isCalculatorOpen && (
        <CalcHourlyRate isOpen={openCalculator} onClose={closeCalculator} />
      )}

      {isJobRegisterOpen && (
        <JobRegister isOpen={openRegister} onClose={closeRegister} />
      )}
    </JobsProvider>
  );
}
