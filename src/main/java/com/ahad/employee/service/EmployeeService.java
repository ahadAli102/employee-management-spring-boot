package com.ahad.employee.service;

import com.ahad.employee.dao.EmployeeDao;
import com.ahad.employee.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;
import java.util.Optional;

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
    public ResponseEntity<?> update(Long id,Employee saveEmployee) {
        Optional<Employee> employee = employeeDao.findById(id);
        if(employee.isPresent()){
            saveEmployee.setId(id);
            employeeDao.save(saveEmployee);
            return ResponseEntity.status(HttpStatus.OK).body(saveEmployee);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<?> findById(Long id) {
        Optional<Employee> employee = employeeDao.findById(id);
        if(employee.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(employee.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
