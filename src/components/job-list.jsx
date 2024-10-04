import { useState } from "react";
import { useJobs } from "../context/jobContext";

import JobItem from "./job-item";
import EditJob from "./edit-job";
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
    <main>
      <div className="space-y-2">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            onEdit={goToEdit}
            onDelete={goToDelete}
          />
        ))}
      </div>

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
    </main>
  );
}

export default JobList;
