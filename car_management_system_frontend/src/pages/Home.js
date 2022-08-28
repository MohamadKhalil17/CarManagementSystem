import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Home() {

    const [cars,setCars] = useState([])

    useEffect(()=>{
        loadCars()
    },[])

    const loadCars=async ()=>{
        const myCars = await axios.get("http://localhost:8090/car/getAll")
        setCars(myCars.data)
    }

    const deleteCar = async (id) => {
      await axios.delete(`http://localhost:8090/car/deleteCar/${id}`);
      loadCars();
    };

  return (
    
    <div className='container'>
      <h1 className='mt-4 text-primary'>Welcome to your car management system!</h1>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Row</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Color</th>
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
