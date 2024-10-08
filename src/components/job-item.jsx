import Card from "./ui/card";

import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";

function JobItem({ job, onEdit, onDelete }) {
  return (
    <Card>
      <div className="text-2xl font-bold text-zinc-600 capitalize max-sm:mb-2">
        {job.jobName}
      </div>

      <div className="grid max-sm:flex max-sm:items-center max-sm:justify-between">
        <span className="font-semibold text-gray-400 uppercase text-xs leading-6">
          Prazo
        </span>
        <h4 className="font-semibold text-zinc-600 leading-7">
          {Math.ceil(job.jobDeadline)} dias para entrega
        </h4>
      </div>

      <div className="grid max-sm:flex max-sm:items-center max-sm:justify-between">
        <span className="font-semibold text-gray-400 uppercase text-xs leading-6">
          Valor
        </span>
        <h4 className="font-semibold text-zinc-600 leading-7">
          R$ {job.jobCost.toFixed(2).replace(".", ",")}
        </h4>
      </div>

      <div className="flex gap-2 max-sm:justify-center max-sm:gap-8 max-sm:mt-4">
        <button
          onClick={() => onEdit(job)}
          className="border border-gray-200 p-2 rounded-md hover:bg-gray-100 transition-all max-sm:flex max-sm:items-center max-sm:gap-2"
        >
          <img src={edit} alt="" className="h-5" />
          <span className="text-sm text-zinc-400 font-semibold md:hidden">
            Editar
          </span>
        </button>
        <button
          onClick={() => onDelete(job)}
          className="border border-gray-200 p-2 rounded-md hover:bg-gray-100 transition-all max-sm:flex max-sm:items-center max-sm:gap-2"
        >
          <img src={trash} alt="" className="h-5" />
          <span className="text-sm text-zinc-400 font-semibold md:hidden">
            Excluir
          </span>
        </button>
      </div>
    </Card>
  );
}

export default JobItem;
