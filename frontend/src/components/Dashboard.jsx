import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DashboardCard from "./DashboardCard";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeModal from "./AddEmployeeModal";
import DeleteEmployeeModal from "./DeleteEmployeeModal";

import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";

function Dashboard() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteEmployee = async () => {
    try {
      await deleteEmployee(employeeToDelete.id);

      loadEmployees();

      setShowDeleteModal(false);
      setEmployeeToDelete(null);

    } catch (error) {
      console.log(error);
    }
  };

  const filteredEmployees = employees.filter((employee) => {

    const fullName =
      `${employee.firstName} ${employee.lastName}`.toLowerCase();

    return (
      fullName.includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase()) ||
      employee.designation.toLowerCase().includes(search.toLowerCase())
    );

  });

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <DashboardCard employees={employees} />

        <EmployeeTable
          employees={filteredEmployees}
          setShowModal={setShowModal}
          setSelectedEmployee={setSelectedEmployee}
          setShowDeleteModal={setShowDeleteModal}
          setEmployeeToDelete={setEmployeeToDelete}
        />

      </div>

      <AddEmployeeModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedEmployee={selectedEmployee}
        loadEmployees={loadEmployees}
      />

      <DeleteEmployeeModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        employee={employeeToDelete}
        handleDelete={handleDeleteEmployee}
      />

    </div>
  );
}

export default Dashboard;