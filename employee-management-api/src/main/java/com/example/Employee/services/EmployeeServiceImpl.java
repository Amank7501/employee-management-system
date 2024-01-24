package com.example.Employee.services;

import com.example.Employee.entity.EmployeeEntity;
import com.example.Employee.model.Employee;
import com.example.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements  EmployeeService{


    @Autowired
   private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities
                = employeeRepository.findAll();

        List<Employee> employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()))
                .collect(Collectors.toList());

        return employees;
    }

    @Override
    public boolean deleteEmployeeById(long id) {
        try{
            EmployeeEntity employee = employeeRepository.findById(id).get();
            employeeRepository.delete(employee);
            return true;
        } catch (Exception e) {
//            console.log(e);
            return false;
        }

    }

    @Override
    public Employee getEmployeeById(long id) {
            EmployeeEntity employeeEntity
                    = employeeRepository.findById(id).get();
            Employee employee = new Employee();
            BeanUtils.copyProperties(employeeEntity,employee);
            return employee;



    }

    @Override
    public Employee updateEmployee(long id, Employee employee) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());

        employeeRepository.save(employeeEntity);
        return employee;

    }


}
