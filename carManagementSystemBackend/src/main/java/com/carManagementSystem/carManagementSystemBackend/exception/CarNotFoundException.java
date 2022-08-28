package com.carManagementSystem.carManagementSystemBackend.exception;

public class CarNotFoundException extends RuntimeException{
    public CarNotFoundException(Long id){
        super("Could not find the car with id: "+ id);
    }
}
