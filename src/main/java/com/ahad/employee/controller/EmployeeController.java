package com.ahad.employee.controller;

import com.ahad.employee.model.Employee;
import com.ahad.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hsenid/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    private ResponseEntity<?> getAllEmployee(){
        System.out.println("EmployeeController:"+this.hashCode());
        return employeeService.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createEmployee(@RequestBody Employee employee) {
        System.out.println("EmployeeController:"+this.hashCode());
        return employeeService.save(employee);
    }
}
