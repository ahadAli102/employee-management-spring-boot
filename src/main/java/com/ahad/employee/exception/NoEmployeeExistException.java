package com.ahad.employee.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NoEmployeeExistException extends RuntimeException{
    public NoEmployeeExistException(String message){
        super(message);
    }
    public NoEmployeeExistException(){
        super("");
    }
}
