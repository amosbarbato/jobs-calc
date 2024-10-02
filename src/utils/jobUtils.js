export const calculateHourlyRate = (monthlyIncome, hoursPerDay, daysPerWeek) => {
  const weeklyHours = hoursPerDay * daysPerWeek;
  const monthlyHours = weeklyHours * 4;
  return monthlyIncome / monthlyHours;
};