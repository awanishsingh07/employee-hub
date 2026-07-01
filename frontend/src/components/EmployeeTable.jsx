import { motion } from "framer-motion";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable({
  employees,
  setShowModal,
  setSelectedEmployee,
  setShowDeleteModal,
  setEmployeeToDelete,
}) {

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setShowModal(true);
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-md mt-8 p-8"
    >

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Employees
          </h2>

          <p className="text-gray-500">
            Manage your employees efficiently
          </p>

        </div>

        <button
          onClick={handleAddEmployee}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          + Add Employee
        </button>

      </div>

      <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b text-sm font-semibold text-gray-500">

        <div className="col-span-1"></div>

        <div className="col-span-3">Employee</div>

        <div className="col-span-2">Department</div>

        <div className="col-span-3">Designation</div>

        <div className="col-span-1">Salary</div>

        <div className="col-span-2 text-right">
          Actions
        </div>

      </div>

      {

        employees.length === 0 ?

          (

            <div className="text-center py-16">

              <h2 className="text-2xl font-semibold">

                No Employees Found

              </h2>

            </div>

          )

          :

          (

            <div className="space-y-4 mt-4">

              {

                employees.map(employee => (

                  <EmployeeRow

                    key={employee.id}

                    employee={employee}

                    setShowModal={setShowModal}

                    setSelectedEmployee={setSelectedEmployee}

                    setShowDeleteModal={setShowDeleteModal}

                    setEmployeeToDelete={setEmployeeToDelete}

                  />

                ))

              }

            </div>

          )

      }

    </motion.div>

  );

}

export default EmployeeTable;