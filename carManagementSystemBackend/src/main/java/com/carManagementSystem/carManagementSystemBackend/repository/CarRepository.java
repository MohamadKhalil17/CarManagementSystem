package com.carManagementSystem.carManagementSystemBackend.repository;

import com.carManagementSystem.carManagementSystemBackend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Long> {
}
