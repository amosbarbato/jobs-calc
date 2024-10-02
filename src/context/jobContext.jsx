import { createContext, useState, useContext } from "react";
import { calculateHourlyRate as calculateRate } from "../utils/jobUtils";

const JobContext = createContext();

export const useJobs = () => {
  return useContext(JobContext);
};

export const JobsProvider = ({ children }) => {
  const [hourlyRate, setHourlyRate] = useState(0);

  const calculateHourlyRate = (monthlyIncome, hoursPerDay, daysPerWeek) => {
    const rate = calculateRate(monthlyIncome, hoursPerDay, daysPerWeek);
    setHourlyRate(rate);
  };

  return (
    <JobContext.Provider value={{ hourlyRate, calculateHourlyRate }}>
      {children}
    </JobContext.Provider>
  );
};
