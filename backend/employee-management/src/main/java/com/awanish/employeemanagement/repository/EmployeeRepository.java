package com.awanish.employeemanagement.repository;

import com.awanish.employeemanagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> id(Long id);
}