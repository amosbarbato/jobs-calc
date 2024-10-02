import { useState } from "react";
import CalcHourlyRate from "./components/calculator";

import { JobsProvider } from "./context/jobContext";

import Header from "./components/header";

export default function App() {
  const [isHourlyRateModalOpen, setHourlyRateModalOpen] = useState(false);

  function openHourlyRateModal() {
    setHourlyRateModalOpen(true);
  }

  function closeHourlyRateModal() {
    setHourlyRateModalOpen(false);
  }

  return (
    <JobsProvider>
      {/* <Header /> */}
      <button onClick={() => setHourlyRateModalOpen(true)}>
        Calcular Valor por Hora
      </button>

      {isHourlyRateModalOpen && (
        <CalcHourlyRate
          isOpen={openHourlyRateModal}
          onClose={closeHourlyRateModal}
        />
      )}
    </JobsProvider>
  );
}
