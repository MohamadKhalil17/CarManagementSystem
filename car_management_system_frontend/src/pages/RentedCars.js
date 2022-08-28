import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function RentedCars() {
  const [cars,setCars] = useState([])
  const [rentedCars,setRentedCars] = useState([])

    useEffect(()=>{
        loadCars()
    },[])

    const loadCars=async ()=>{
        const myCarsForRent = await axios.get("http://localhost:8090/car/getForRentCars")
        const rentedcars = await axios.get("http://localhost:8090/car/getRentedCars")
        setCars(myCarsForRent.data)
        setRentedCars(rentedcars.data)
    }
    
    const deleteCar = async (id) => {
      await axios.delete(`http://localhost:8090/car/deleteCar/${id}`);
      loadCars();
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <h2 className='text-center m-4 text-primary' >Cars for Rent</h2>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Row</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Color</th>
                <th scope="col">Rent Per Day</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  cars.map((car, index)=>(
                      <tr>
                      <th scope="row" key={index}>{index+1}</th>
                      <td>{car.name}</td>
                      <td>{car.number}</td>
                      <td>{car.color}</td>
                      <td>{car.rentPerDay}</td>
                      <td>
                      <Link className='btn btn-primary mx-2'  to={ `/viewcar/${car.id}`}>View</Link>
                      <Link className='btn btn-outline-primary mx-2'  to={ `/editcar/${car.id}`}>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => deleteCar(car.id)}>Delete</button>
                      </td>
                      </tr>
                  ))
              }
              

            </tbody>
          </table>

          <h2 className='text-center m-4 text-primary' >Rented Cars</h2>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Row</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Color</th>
                <th scope="col">Rent Per Day</th>
                <th scope="col">Rent Start Date</th>
                <th scope="col">Rent End Date</th>
                <th scope="col">Tenant</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  rentedCars.map((car, index)=>(
                      <tr>
                      <th scope="row" key={index}>{index+1}</th>
                      <td>{car.name}</td>
                      <td>{car.number}</td>
                      <td>{car.color}</td>
                      <td>{car.rentPerDay}</td>
                      <td>{car.rentStartDate}</td>
                      <td>{car.rentEndDate}</td>
                      <td>{car.tenant}</td>
                      <td>
                      <Link className='btn btn-primary mx-2'  to={ `/viewcar/${car.id}`}>View</Link>
                      <Link className='btn btn-outline-primary mx-2'  to={ `/editcar/${car.id}`}>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => deleteCar(car.id)}>Delete</button>
                      </td>
                      </tr>
                  ))
              }
              

            </tbody>
          </table>
          
        </div>
    </div>
  )
}
