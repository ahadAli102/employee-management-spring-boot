package com.ahad.employee.service;

import com.ahad.employee.dao.EmployeeDao;
import com.ahad.employee.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeDao employeeDao;

    @Autowired
    public EmployeeService(EmployeeDao employeeDao){
        this.employeeDao = employeeDao;
    }

    public ResponseEntity<?> findAll() {
        List<Employee> employees = employeeDao.findAll();
        if (employees.size() > 0){
            return ResponseEntity.ok().body(employees);
        }else {
            return ResponseEntity.noContent().build();
        }
    }

    public ResponseEntity<?> save(Employee employee) {
        if(employee.getDesignation()!=null || employee.getEmail()!=null || employee.getFirstName()!=null || employee.getLastName()!=null){
            employee.setId(null);
            employeeDao.save(employee);
            return ResponseEntity.created(URI.create("Employee")).body(employee);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
