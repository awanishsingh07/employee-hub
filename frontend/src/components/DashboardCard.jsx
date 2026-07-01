import { motion } from "framer-motion";
import {
  FiUsers,
  FiBriefcase,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";

function DashboardCard({ employees }) {

  const totalEmployees = employees.length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const averageSalary =
    employees.length > 0
      ? Math.round(
          employees.reduce(
            (sum, employee) => sum + employee.salary,
            0
          ) / employees.length
        )
      : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* Total Employees */}

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">Employees</p>

            <h2 className="text-4xl font-bold mt-2">
              {totalEmployees}
            </h2>

          </div>

          <div className="bg-indigo-100 p-4 rounded-2xl">
            <FiUsers size={28} className="text-indigo-600" />
          </div>

        </div>
      </motion.div>

      {/* Departments */}

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">Departments</p>

            <h2 className="text-4xl font-bold mt-2">
              {departments}
            </h2>

          </div>

          <div className="bg-blue-100 p-4 rounded-2xl">
            <FiBriefcase size={28} className="text-blue-600" />
          </div>

        </div>
      </motion.div>

      {/* Average Salary */}

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">Average Salary</p>

            <h2 className="text-3xl font-bold mt-2">
              ₹ {averageSalary.toLocaleString()}
            </h2>

          </div>

          <div className="bg-green-100 p-4 rounded-2xl">
            <FiDollarSign size={28} className="text-green-600" />
          </div>

        </div>
      </motion.div>

      {/* Active */}

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">Active</p>

            <h2 className="text-4xl font-bold mt-2">
              {totalEmployees}
            </h2>

          </div>

          <div className="bg-emerald-100 p-4 rounded-2xl">
            <FiCheckCircle size={28} className="text-emerald-600" />
          </div>

        </div>
      </motion.div>

    </div>
  );
}

export default DashboardCard;