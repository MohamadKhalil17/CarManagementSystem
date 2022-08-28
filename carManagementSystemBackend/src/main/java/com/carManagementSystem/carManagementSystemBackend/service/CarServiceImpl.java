package com.carManagementSystem.carManagementSystemBackend.service;

import com.carManagementSystem.carManagementSystemBackend.exception.CarNotFoundException;
import com.carManagementSystem.carManagementSystemBackend.model.Car;
import com.carManagementSystem.carManagementSystemBackend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public Car saveCar(Car car) {

        return carRepository.save(car);
    }

    @Override
    public List<Car> getAllCars() {

        return carRepository.findAll();
    }

    @Override
    public List<Car> getForRentCars() {
        List<Car> forRentCars = new ArrayList<Car>();
        for (Car car : carRepository.findAll()) {
            if ((Objects.equals(car.getForRentStatus(), "YES") ||
                    Objects.equals(car.getForRentStatus(), "Yes") ||
                    Objects.equals(car.getForRentStatus(), "yes")) &&
                    (Objects.equals(car.getRentStartDate(), "00/00/0000") || Objects.equals(car.getRentStartDate(), ""))) {
                forRentCars.add(car);
            }
        }
        return forRentCars;
    }

    @Override
    public List<Car> getRentedCars() {
        List<Car> rentedCars = new ArrayList<Car>();
        for (Car car : carRepository.findAll()) {
            if ((Objects.equals(car.getForRentStatus(), "YES") ||
                    Objects.equals(car.getForRentStatus(), "Yes") ||
                    Objects.equals(car.getForRentStatus(), "yes")) &&
                    (!Objects.equals(car.getRentStartDate(), "00/00/0000") || !Objects.equals(car.getRentStartDate(), ""))) {
                rentedCars.add(car);
            }
        }
        return rentedCars;
    }

    @Override
    public List<Car> getForSaleCars() {
        List<Car> forSaleCars = new ArrayList<Car>();
        for (Car car : carRepository.findAll()) {
            if ((Objects.equals(car.getForSaleStatus(), "YES") ||
                    Objects.equals(car.getForSaleStatus(), "Yes") ||
                    Objects.equals(car.getForSaleStatus(), "yes")) &&
                    (Objects.equals(car.getSoldTo(), ""))) {
                forSaleCars.add(car);
            }
        }
        return forSaleCars;
    }


    @Override
    public List<Car> getSoldCars() {
        List<Car> soldCars = new ArrayList<Car>();
        for (Car car : carRepository.findAll()) {
            if ((Objects.equals(car.getForSaleStatus(), "YES") ||
                    Objects.equals(car.getForSaleStatus(), "Yes") ||
                    Objects.equals(car.getForSaleStatus(), "yes")) &&
                    (!Objects.equals(car.getSoldTo(), ""))) {
                soldCars.add(car);
            }
        }
        return soldCars;
    }

    @Override
    public Car getCarById(Long id) {
        return carRepository.findById(id).orElseThrow(() -> new CarNotFoundException(id));
    }


    @Override
    public Car editCar(Car newCar, Long id) {
        return carRepository.findById(id)
                .map(car -> {
                    car.setName(newCar.getName());
                    car.setBoughtFrom(newCar.getBoughtFrom());
                    car.setCost(newCar.getCost());
                    car.setColor(newCar.getColor());
                    car.setForRentStatus(newCar.getForRentStatus());
                    car.setForSaleStatus(newCar.getForSaleStatus());
                    car.setModelYear(newCar.getModelYear());
                    car.setNotes(newCar.getNotes());
                    car.setNumber(newCar.getNumber());
                    car.setPrice(newCar.getPrice());
                    car.setRentEndDate(newCar.getRentEndDate());
                    car.setRentPerDay(newCar.getRentPerDay());
                    car.setRentStartDate(newCar.getRentStartDate());
                    car.setSalePrice(newCar.getSalePrice());
                    car.setSerialNumber(newCar.getSerialNumber());
                    car.setSoldTo(newCar.getSoldTo());
                    car.setTenant(newCar.getTenant());
                    return saveCar(car);
                }).orElseThrow(() -> new CarNotFoundException(id));
    }


    @Override
    public void deleteCar(Long id){
        carRepository.deleteById(id);
    }

    @Override
    public Boolean isExisting(Long id){
        return carRepository.existsById(id);
    }

}
