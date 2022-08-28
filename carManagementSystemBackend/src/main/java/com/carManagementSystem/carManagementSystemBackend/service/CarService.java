package com.carManagementSystem.carManagementSystemBackend.service;

import com.carManagementSystem.carManagementSystemBackend.model.Car;

import java.util.List;

public interface CarService {
    Car saveCar(Car car);
    List<Car> getAllCars();

    List<Car> getForRentCars();

    List<Car> getRentedCars();

    List<Car> getForSaleCars();

    List<Car> getSoldCars();

    Car getCarById(Long id);

    Car editCar(Car newCar, Long id);

    void deleteCar(Long id);

    Boolean isExisting(Long id);
}
