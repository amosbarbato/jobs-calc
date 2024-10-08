import { useState } from "react";
import { useJobs } from "../context/jobContext";

import Title from "./ui/title";
import Form from "./ui/form";
import Aside from "./ui/aside";
import Label from "./ui/label";
import Input from "./ui/input";
import Button from "./ui/button";

import calc from "../assets/calc.png";

function CalcHourlyRate({ isOpen, onClose }) {
  const { calculateHourlyRate, hourlyRate } = useJobs();
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [calculatedRate, setCalculatedRate] = useState(null);

  const goToSubmit = () => {
    calculateHourlyRate(
      Number(monthlyIncome),
      Number(hoursPerDay),
      Number(daysPerWeek)
    );
    setCalculatedRate(hourlyRate);
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-100 min-h-screen max-sm:overflow-scroll">
      <Title onClick={onClose} title="Calculadora" />

      <div className="flex justify-between py-12 max-w-5xl mx-auto max-sm:gap-8 max-sm:flex-col max-sm:flex-col-reverse max-sm:w-full max-sm:p-8">
        <Aside>
          <img src={calc} className="w-20 max-sm:hidden" />
          <p className="text-center text-sm text-gray-600">
            O valor da sua hora é <br />
            <strong className="text-lg">R$</strong>
            {calculatedRate > 0 && (
              <strong className="text-lg">
                {calculatedRate.toFixed(2).replace(".", ",")}
              </strong>
            )}
          </p>
          <Button onClick={goToSubmit} variant="submit" size="full">
            <p className="text-xs font-bold">Calcular</p>
          </Button>
        </Aside>

        <Form subTitle="Planejamento">
          <div className="grid grid-cols-2 gap-6 max-sm:gap-4 max-sm:flex-col max-sm:flex">
            <div className="grid gap-4 max-sm:gap-2">
              <Label htmlFor="monthly-income">
                Quanto eu <br /> quero ganhar por mês?
              </Label>
              <Input
                type="amount"
                id="monthly-income"
                name="monthly-income"
                placeholder="R$"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
            </div>

            <div className="grid gap-4 max-sm:gap-2">
              <Label htmlFor="hours-per-day">
                Quantas horas <br /> quero trabalhar por dia?
              </Label>
              <Input
                type="number"
                id="hours-per-day"
                name="hours-per-day"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6 max-sm:mt-4">
            <div className="grid gap-3 max-sm:gap-2">
              <Label htmlFor="days-per-week">
                Quantos dias quero trabalhar por semana?
              </Label>
              <Input
                type="number"
                id="days-per-week"
                name="days-per-week"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(e.target.value)}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  ) : null;
}

export default CalcHourlyRate;
