import { createContext, useState, useContext } from "react";
import { calculateHourlyRate as calculateRate } from "../utils/jobUtils";

const JobContext = createContext();

export const useJobs = () => {
  return useContext(JobContext);
};

export const JobsProvider = ({ children }) => {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [jobs, setJobs] = useState([]);

  // calculando o valor da hora trabalhada
  const calculateHourlyRate = (monthlyIncome, hoursPerDay, daysPerWeek) => {
    const rate = calculateRate(monthlyIncome, hoursPerDay, daysPerWeek);
    setHourlyRate(rate);
  };

  // cadastrando um serviço
  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  // editando dados de um serviço já cadastrado
  const editJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  // excluindo um serviço cadastrado
  const deleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  return (
    <JobContext.Provider
      value={{
        hourlyRate,
        calculateHourlyRate,
        jobs,
        addJob,
        editJob,
        deleteJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
