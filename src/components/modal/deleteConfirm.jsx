import trash from "../../assets/trash-48.svg";
import Button from "../ui/button";

function DeleteConfirmModal({ isOpen, onClose, onDeleteConfirm }) {
  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-90 -mt-2">
      <div className="w-[448px] flex flex-col items-center bg-zinc-100 p-10 rounded shadow-md gap-8">
        <img src={trash} alt="" className="w-12" />

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-semibold text-zinc-600">Excluir Job</h2>
          <p className="font-medium text-zinc-500 text-center">
            Quer mesmo excluir esse job?
            <br />
            Ele será apago pra sempre.
          </p>
        </div>

        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} variant="light" size="button">
            Cancelar
          </Button>

          <Button onClick={onDeleteConfirm} variant="delete" size="button">
            Excluir Job
          </Button>
        </div>
      </div>
    </div>
  ) : null;
}

export default DeleteConfirmModal;
