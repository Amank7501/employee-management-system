package com.example.Employee.repository;

import com.example.Employee.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
