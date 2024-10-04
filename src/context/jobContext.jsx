import { createContext, useContext } from "react";
import { calculateHourlyRate as calculateRate } from "../utils/jobUtils";
import useLocalStorage from "../services/useLocalStorage";

const JobContext = createContext();

export const useJobs = () => {
  return useContext(JobContext);
};

export const JobsProvider = ({ children }) => {
  const [hourlyRate, setHourlyRate] = useLocalStorage("hourlyRate", 0);
  const [jobs, setJobs] = useLocalStorage("jobs", []);

  // calcula o valor da taxa por hora
  const calculateHourlyRate = (monthlyIncome, hoursPerDay, daysPerWeek) => {
    const rate = calculateRate(monthlyIncome, hoursPerDay, daysPerWeek);
    setHourlyRate(rate);
  };

  // cadastra um novo servico
  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  // edita um servico cadastrado
  const editJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  // exclui um servico
  const deleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  // exibe o total de servicos
  const jobStats = {
    totalJobs: jobs.length,
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
        jobStats,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
