import { useJobs } from "../context/jobContext";

const Summary = () => {
  const { jobs } = useJobs();

  const totalProjects = jobs.length;

  return (
    <div className="flex gap-8 py-8">
      <div className="total grid">
        <strong className="text-2xl">{totalProjects}</strong>
        <p className="text-zinc-400">Projetos ao total</p>
      </div>
      {/* <div className="total grid">
        <strong className="text-2xl">7</strong>
        <p className="text-zinc-400">Em andamento</p>
      </div>
      <div className="total grid">
        <strong className="text-2xl">4</strong>
        <p className="text-zinc-400">Encerrados</p>
      </div> */}
    </div>
  );
};

export default Summary;
