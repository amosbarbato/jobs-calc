import { useJobs } from "../context/jobContext";

const Summary = () => {
  const { jobs } = useJobs();

  const totalProjects = jobs.length;

  return (
    <div className="flex gap-8 py-8">
      <div className="flex items-center gap-2">
        <strong className="text-2xl">{totalProjects}</strong>
        <p className="text-zinc-400">Projetos ao total</p>
      </div>
    </div>
  );
};

export default Summary;
