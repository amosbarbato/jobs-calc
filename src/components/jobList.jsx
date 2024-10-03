import { useState } from "react";
import { useJobs } from "../context/jobContext";
import EditJob from "./editJob";

import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";
import DeleteConfirmModal from "./modal/deleteConfirm";

function JobList() {
  const { jobs, deleteJob } = useJobs();
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null);
  const [jobToDelete, setJobToDelete] = useState(null);

  const goToEdit = (job) => {
    setJobToEdit(job);
    setEditOpen(true);
  };

  const goToDelete = (job) => {
    setJobToDelete(job);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (jobToDelete) {
      deleteJob(jobToDelete.id);
      setDeleteModalOpen(false);
    }
  };

  return (
    <ul className="space-y-2">
      {jobs.map((job, index) => (
        <li
          key={index}
          className="border border-gray-200 grid grid-cols-[40%_25%_25%_10%] items-center py-6 px-8 rounded bg-white hover:bg-gradient-to-l hover:from-transparent  hover:to-orange-50 overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-1 before:h-0 before:transition-all before:bg-orange-400 hover:before:h-full"
        >
          <div className="text-2xl font-bold text-zinc-600 capitalize">
            {job.jobName}
          </div>

          <div className="grid">
            <span className="font-semibold text-gray-400 uppercase text-xs leading-6">
              Prazo
            </span>
            <h4 className="font-semibold text-zinc-600 leading-7">
              {Math.ceil(job.jobDeadline)} dias para entrega
            </h4>
          </div>

          <div className="grid">
            <span className="font-semibold text-gray-400 uppercase text-xs leading-6">
              Valor
            </span>
            <h4 className="font-semibold text-zinc-600 leading-7">
              R$ {job.jobCost.toFixed(2).replace(".", ",")}
            </h4>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => goToEdit(job)}
              className="border border-gray-200 p-2 rounded-md hover:bg-gray-100 transition-all"
            >
              <img src={edit} alt="" />
            </button>
            <button
              onClick={() => goToDelete(job.id)}
              className="border border-gray-200 p-2 rounded-md hover:bg-gray-100 transition-all"
            >
              <img src={trash} alt="" />
            </button>
          </div>
        </li>
      ))}

      {isEditOpen && (
        <EditJob
          isOpen={isEditOpen}
          onClose={() => setEditOpen(false)}
          jobToEdit={jobToEdit}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDeleteConfirm={confirmDelete}
        />
      )}
    </ul>
  );
}

export default JobList;
