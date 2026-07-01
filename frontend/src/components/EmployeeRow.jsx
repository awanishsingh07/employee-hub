import { motion } from "framer-motion";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function EmployeeRow({
  employee,
  setShowModal,
  setSelectedEmployee,
  setShowDeleteModal,
  setEmployeeToDelete,
}) {

  const handleEdit = () => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleDelete = () => {
    setEmployeeToDelete(employee);
    setShowDeleteModal(true);
  };

  return (

    <motion.div

      initial={{ opacity: 0, y: 15 }}

      animate={{ opacity: 1, y: 0 }}

      whileHover={{
        scale: 1.01,
        y: -2,
      }}

      className="
      grid
      grid-cols-12
      items-center
      gap-4

      border
      border-gray-200

      rounded-2xl

      px-6
      py-5

      hover:shadow-lg

      transition
      "

    >

      <div className="col-span-1">

        <img

          src={`https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}&background=4F46E5&color=fff`}

          alt="avatar"

          className="w-14 h-14 rounded-full"

        />

      </div>

      <div className="col-span-3">

        <h3 className="font-semibold text-lg">

          {employee.firstName} {employee.lastName}

        </h3>

        <p className="text-sm text-gray-500">

          {employee.email}

        </p>

      </div>

      <div className="col-span-2">

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">

          {employee.department}

        </span>

      </div>

      <div className="col-span-3">

        {employee.designation}

      </div>

      <div className="col-span-1 font-bold text-green-600">

        ₹ {Number(employee.salary).toLocaleString()}

      </div>

      <div className="col-span-2 flex justify-end gap-3">

        <button

          onClick={handleEdit}

          className="bg-blue-50 p-3 rounded-xl hover:bg-blue-100 text-blue-600 transition"

        >

          <FiEdit2 size={18} />

        </button>

        <button

          onClick={handleDelete}

          className="bg-red-50 p-3 rounded-xl hover:bg-red-100 text-red-600 transition"

        >

          <FiTrash2 size={18} />

        </button>

      </div>

    </motion.div>

  );

}

export default EmployeeRow;