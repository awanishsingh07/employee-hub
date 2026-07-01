import { motion } from "framer-motion";

function DeleteEmployeeModal({
  showDeleteModal,
  setShowDeleteModal,
  employee,
  handleDelete,
}) {
  if (!showDeleteModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-8 w-[450px]"
      >

        <h2 className="text-2xl font-bold text-red-600">
          Delete Employee
        </h2>

        <p className="mt-5 text-gray-600">
          Are you sure you want to delete
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {employee?.firstName} {employee?.lastName} ?
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-5 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-5 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default DeleteEmployeeModal;