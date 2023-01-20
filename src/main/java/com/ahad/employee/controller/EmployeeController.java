package com.ahad.employee.controller;

import com.ahad.employee.model.Employee;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/hsenid/api/v1/employees")
public class EmployeeController {

    @GetMapping
    private List<Employee> getAllEmployee(){
        // database
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1L,"Ahad","Ali","Software Engineer","ahad.a@hsenidmobile.com"));
        employees.add(new Employee(2L,"Abdullah","Al","Software Engineer","abdullah.a@hsenidmobile.com"));
        return employees;
    }
}
