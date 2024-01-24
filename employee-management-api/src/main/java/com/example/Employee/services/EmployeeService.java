package com.example.Employee.services;

import com.example.Employee.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployeeById(long id);

    Employee getEmployeeById(long id);

    Employee updateEmployee(long id, Employee employee);
}
