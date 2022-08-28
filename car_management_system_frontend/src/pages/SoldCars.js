import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function SoldCars() {
    const [cars,setCars] = useState([])
    const [soldcars,setSoldCars] = useState([])


    useEffect(()=>{
        loadCars()
    },[])

    const loadCars=async ()=>{
        const myCars = await axios.get("http://localhost:8090/car/getForSaleCars")
        const mySoldCars = await axios.get("http://localhost:8090/car/getSoldCars")
        setCars(myCars.data)
        setSoldCars(mySoldCars.data)
    }

    const deleteCar = async (id) => {
      await axios.delete(`http://localhost:8090/car/deleteCar/${id}`);
      loadCars();
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <h2 className='text-center m-4 text-primary' >Cars for Sale</h2>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Row</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Color</th>
                <th scope="col">Price</th>
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
                      <td>{car.price}</td>
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

          <h2 className='text-center m-4 text-primary' >Sold Cars</h2>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Row</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Color</th>
                <th scope="col">Sale Price</th>
                <th scope="col">Sold To</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  soldcars.map((car, index)=>(
                      <tr>
                      <th scope="row" key={index}>{index+1}</th>
                      <td>{car.name}</td>
                      <td>{car.number}</td>
                      <td>{car.color}</td>
                      <td>{car.salePrice}</td>
                      <td>{car.soldTo}</td>
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
