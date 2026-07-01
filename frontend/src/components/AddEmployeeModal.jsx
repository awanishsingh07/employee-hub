import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  addEmployee,
  updateEmployee,
} from "../services/employeeService";

function AddEmployeeModal({
  showModal,
  setShowModal,
  loadEmployees,
  selectedEmployee,
}) {

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (selectedEmployee) {

      setEmployee({
        firstName: selectedEmployee.firstName,
        lastName: selectedEmployee.lastName,
        email: selectedEmployee.email,
        department: selectedEmployee.department,
        designation: selectedEmployee.designation,
        salary: selectedEmployee.salary,
      });

    } else {

      setEmployee({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        designation: "",
        salary: "",
      });

    }

    setErrors({});

  }, [selectedEmployee]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {

    const newErrors = {};

    if (!employee.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!employee.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!employee.email.trim()) {

      newErrors.email = "Email is required";

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(employee.email)
    ) {

      newErrors.email = "Invalid email address";

    }

    if (!employee.department.trim()) {
      newErrors.department = "Department is required";
    }

    if (!employee.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!employee.salary) {

      newErrors.salary = "Salary is required";

    } else if (Number(employee.salary) <= 0) {

      newErrors.salary = "Salary must be greater than 0";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {

      if (selectedEmployee) {

        await updateEmployee(selectedEmployee.id, employee);

        toast.success("Employee updated successfully!");

      } else {

        await addEmployee(employee);

        toast.success("Employee added successfully!");

      }

      await loadEmployees();

      setShowModal(false);

    } catch (error) {

      console.error(error);

      toast.error("Something went wrong!");

    } finally {

      setLoading(false);

    }

  };

  if (!showModal) return null;
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
      >

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-slate-800">
            {selectedEmployee ? "Update Employee" : "Add Employee"}
          </h2>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="text-2xl text-gray-500 transition hover:text-red-500"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >

          {/* First Name */}

          <div>

            <label className="mb-2 block font-medium">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className={`w-full rounded-xl p-3 outline-none transition ${
                errors.firstName
                  ? "border-2 border-red-500"
                  : "border border-gray-300 focus:border-indigo-500"
              }`}
            />

            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.firstName}
              </p>
            )}

          </div>

          {/* Last Name */}

          <div>

            <label className="mb-2 block font-medium">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className={`w-full rounded-xl p-3 outline-none transition ${
                errors.lastName
                  ? "border-2 border-red-500"
                  : "border border-gray-300 focus:border-indigo-500"
              }`}
            />

            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastName}
              </p>
            )}

          </div>

          {/* Email */}

          <div className="md:col-span-2">

            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className={`w-full rounded-xl p-3 outline-none transition ${
                errors.email
                  ? "border-2 border-red-500"
                  : "border border-gray-300 focus:border-indigo-500"
              }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}

          </div>

          {/* Department */}

          <div>

            <label className="mb-2 block font-medium">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              className={`w-full rounded-xl p-3 outline-none transition ${
                errors.department
                  ? "border-2 border-red-500"
                  : "border border-gray-300 focus:border-indigo-500"
              }`}
            />

            {errors.department && (
              <p className="mt-1 text-sm text-red-500">
                {errors.department}
              </p>
            )}

          </div>

          {/* Designation */}

          <div>

            <label className="mb-2 block font-medium">
              Designation
            </label>

            <input
              type="text"
              name="designation"
              value={employee.designation}
              onChange={handleChange}
              className={`w-full rounded-xl p-3 outline-none transition ${
                errors.designation
                  ? "border-2 border-red-500"
                  : "border border-gray-300 focus:border-indigo-500"
              }`}
            />

            {errors.designation && (
              <p className="mt-1 text-sm text-red-500">
                {errors.designation}
              </p>
            )}

          </div>

          {/* Salary */}

          <div className="md:col-span-2">

            <label className="mb-2 block font-medium">
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className={`w-full rounded-xl p-3 outline-none transition ${
                errors.salary
                  ? "border-2 border-red-500"
                  : "border border-gray-300 focus:border-indigo-500"
              }`}
            />

            {errors.salary && (
              <p className="mt-1 text-sm text-red-500">
                {errors.salary}
              </p>
            )}

          </div>

          {/* Buttons */}

          <div className="mt-4 flex justify-end gap-4 md:col-span-2">

            <button
              type="button"
              disabled={loading}
              onClick={() => setShowModal(false)}
              className="rounded-xl bg-gray-200 px-6 py-3 font-medium transition hover:bg-gray-300 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
            >
              {loading
                ? selectedEmployee
                  ? "Updating..."
                  : "Saving..."
                : selectedEmployee
                ? "Update Employee"
                : "Save Employee"}
            </button>

          </div>

        </form>

      </motion.div>

    </div>
  );
}

export default AddEmployeeModal;