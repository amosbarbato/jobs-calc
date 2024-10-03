import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useJobs } from "../context/jobContext";

import Title from "./ui/title";
import Form from "./ui/form";
import Aside from "./ui/aside";
import Label from "./ui/label";
import Input from "./ui/input";
import Button from "./ui/button";

import money from "../assets/money.svg";

function JobRegister({ isOpen, onClose }) {
  const { hourlyRate, addJob } = useJobs();
  const [jobName, setJobName] = useState("");
  const [dailyHours, setDailyHours] = useState("");
  const [estimatedHours, setEstimatedHours] = useState("");
  const [jobCost, setJobCoat] = useState(0);

  useEffect(() => {
    const calculateCost = hourlyRate * estimatedHours;
    setJobCoat(calculateCost);
  }, [hourlyRate, estimatedHours]);

  const goToSubmit = () => {
    // const jobCost = hourlyRate * estimatedHours;
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
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-100 min-h-screen">
      <Title onClick={onClose} title="Adicionar Novo Job" />

      <div className="flex justify-between py-12 max-w-5xl mx-auto gap-16">
        <Form subTitle="Dados do projeto">
          <div className="space-y-6">
            <div className="grid gap-4">
              <Label htmlFor="name">Nome do projeto</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Insira aqui o nome do projeto"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
              />
            </div>

            <div className="flex gap-6">
              <div className="grid gap-4">
                <Label htmlFor="daily-hours">
                  Quantas horas <br /> por dia vai dedicar ao job?
                </Label>
                <Input
                  type="number"
                  id="daily-hours"
                  name="daily-hours"
                  placeholder="Insira aqui um horário"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(e.target.value)}
                />
              </div>
              <div className="grid gap-4">
                <Label htmlFor="total-hours">
                  Estimativa de <br /> horas para esse Job?
                </Label>
                <Input
                  type="number"
                  id="total-hours"
                  name="total-hours"
                  placeholder="Insira aqui sua estimativa"
                  value={estimatedHours}
                  onChange={(e) => setEstimatedHours(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Form>
        <Aside>
          <img src={money} alt="Valor do Projeto" />
          <p className="text-center text-sm text-gray-600">
            O valor do projeto ficou em <br />
            <strong className="text-lg">
              R$ {jobCost.toFixed(2).replace(".", ",")}
            </strong>
          </p>
          <Button onClick={goToSubmit} variant="submit" size="full">
            Calcular
          </Button>
        </Aside>
      </div>
    </div>
  ) : null;
}

export default JobRegister;
