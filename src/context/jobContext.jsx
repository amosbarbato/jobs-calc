import { createContext, useState, useContext, useEffect } from "react";
import { calculateHourlyRate as calculateRate } from "../utils/jobUtils";

const JobContext = createContext();

export const useJobs = () => {
  return useContext(JobContext);
};

export const JobsProvider = ({ children }) => {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [jobs, setJobs] = useState([]);

  // função para salvar no local storage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // função para carregar do local storage
  const loadFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  // carregar dados ao iniciar
  useEffect(() => {
    const savedHourlyRate = loadFromLocalStorage("hourlyRate", 0);
    const savedJobs = loadFromLocalStorage("jobs", []);
    setHourlyRate(savedHourlyRate);
    setJobs(savedJobs);
  }, []);

  // atualizar e salvar o valor por hora no local storage
  const calculateHourlyRate = (monthlyIncome, hoursPerDay, daysPerWeek) => {
    const rate = calculateRate(monthlyIncome, hoursPerDay, daysPerWeek);
    setHourlyRate(rate);
    saveToLocalStorage("hourlyRate", rate);
  };

  // cadastrando um serviço e salvando no local storage
  const addJob = (job) => {
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    saveToLocalStorage("jobs", updatedJobs);
  };

  // editando dados de um serviço já cadastrado e salvando no local storage
  const editJob = (updatedJob) => {
    const updatedJobs = jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
    setJobs(updatedJobs);
    saveToLocalStorage("jobs", updatedJobs);
  };

  // excluindo um serviço cadastrado e salvar no local storage
  const deleteJob = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
    saveToLocalStorage("jobs", updatedJobs);
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
