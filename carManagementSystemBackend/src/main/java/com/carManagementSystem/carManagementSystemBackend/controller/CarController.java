package com.carManagementSystem.carManagementSystemBackend.controller;

import com.carManagementSystem.carManagementSystemBackend.model.Car;
import com.carManagementSystem.carManagementSystemBackend.service.CarService;
import com.carManagementSystem.carManagementSystemBackend.exception.CarNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
@CrossOrigin("http://localhost:3000")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping("/addCar")
    public String addCar(@RequestBody Car car){
        carService.saveCar(car);
        return "new car added with id: "+car.getId().toString();
    }

    @GetMapping("/getAll")
    public List<Car> getAllCars(){
        return carService.getAllCars();
    }


    @GetMapping("/getForRentCars")
    public List<Car> getForRentCars(){
        return carService.getForRentCars();
    }

    @GetMapping("/getRentedCars")
    public List<Car> getRentedCars(){
        return carService.getRentedCars();
    }


    @GetMapping("/getForSaleCars")
    public List<Car> getForSaleCars(){
        return carService.getForSaleCars();
    }


    @GetMapping("/getSoldCars")
    public List<Car> getSoldCars(){
        return carService.getSoldCars();
    }


    @GetMapping("/getCar/{id}")
    public Car getCarById(@PathVariable Long id) {
        return carService.getCarById(id);
    }

    @PutMapping("/editCar/{id}")
    public Car editCar(@RequestBody Car car, @PathVariable Long id){
        return carService.editCar(car, id);
    }

    @DeleteMapping("/deleteCar/{id}")
    public void deleteCar(@PathVariable Long id){
        if(!carService.isExisting(id)){
            throw new CarNotFoundException(id);
        }
        carService.deleteCar(id);
    }

}
