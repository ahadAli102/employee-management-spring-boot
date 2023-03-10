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
        return employeeService.findAll();
    }

    @GetMapping("{id}")
    private ResponseEntity<?> getEmployee(@PathVariable("id") Long id){
        return employeeService.findById(id);
    }

    @PostMapping("{id}")
    private ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody Employee employee){
        return employeeService.update(id, employee);
    }

    @DeleteMapping("{id}")
    private ResponseEntity<?> delete(@PathVariable("id") Long id){
        return employeeService.delete(id);
    }

    @PutMapping
    public ResponseEntity<?> createEmployee(@RequestBody Employee employee) {
        return employeeService.save(employee);
    }
}
