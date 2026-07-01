package com.awanish.employeemanagement.service;

import com.awanish.employeemanagement.EmployeeManagementApplication;
import com.awanish.employeemanagement.entity.Employee;
import com.awanish.employeemanagement.exception.ResourceNotFoundException;
import com.awanish.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found with id: " + id));
    }

    public void deleteEmployeeById(Long id) {
        employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found with id: " + id
                        ));
        employeeRepository.deleteById(id);
    }

    public Employee updateEmployee(Long id, Employee updatedEmployee){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()
                        -> new ResourceNotFoundException("Employee not found with id: " + id));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setDesignation(updatedEmployee.getDesignation());
        employee.setSalary(updatedEmployee.getSalary());

        return employeeRepository.save(employee);
    }
}