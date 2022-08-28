import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddCar() {

  let navigate = useNavigate();

  const [car,setCar] = useState({
    name:"",
    serialNumber: "",
    number:"",
    color: "",
    modelYear:"",
    boughtFrom:"",
    cost:"",
    soldTo:"",
    salePrice:"",
    price:"",
    forSaleStatus: "",
    forRentStatus:"",
    tenant: "",
    rentPerDay:"",
    rentStartDate:"",
    rentEndDate:"",
    notes:""
  })

  const {name, serialNumber, number, color, modelYear, boughtFrom, cost,
  soldTo,salePrice,price,forSaleStatus,forRentStatus, tenant, rentPerDay,
  rentStartDate, rentEndDate,notes}=car

  const onInputChange=(e)=>{
      setCar({...car,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8090/car/addCar", car);
    navigate("/");
  };

  return (
    <div className='container'>
      <div className='raw'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4 text-primary' >Register Car</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>
              Car Name
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's name"
            name='name'
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='SerialNumber' className='form-label'>
              SerialNumber
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's serial number"
            name='serialNumber'
            value={serialNumber}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Number' className='form-label'>
              Number
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's number"
            name='number'
            value={number}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Color' className='form-label'>
              Color
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's color"
            name='color'
            value={color}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='ModelYear' className='form-label'>
              Model Year
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's model year"
            name='modelYear'
            value={modelYear}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='BoughtFrom' className='form-label'>
              Bought From
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter car's previous owner"
            name='boughtFrom'
            value={boughtFrom}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Cost' className='form-label'>
              Cost
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter car's cost"
            name='cost'
            value={cost}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='SoldTo' className='form-label'>
              Sold to
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Leave Empty if the car is not sold"
            name='soldTo'
            value={soldTo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='SalePrice' className='form-label'>
              Sale Price
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's sale price in $ (leave empty if not sold yet)"
            name='salePrice'
            value={salePrice}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Price' className='form-label'>
              Price
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's price in $"
            name='price'
            value={price}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='ForSaleStatus' className='form-label'>
              For Sale Status
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's sale status: YES/NO"
            name='forSaleStatus'
            value={forSaleStatus}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='ForRentStatus' className='form-label'>
              For Rent Status
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's rent Status: YES/NO"
            name='forRentStatus'
            value={forRentStatus}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Tenant' className='form-label'>
              Tenant
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's tenant (leave empty if the car is not for rent or rented)"
            name='tenant'
            value={tenant}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='RentPerDay' className='form-label'>
              Rent Per Day
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter the car's rent per day in $ (leave empty if the car is not for rent)"
            name='rentPerDay'
            value={rentPerDay}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='RentStartDate' className='form-label'>
              Rent Start Date
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter car's rent Start Date (leave empty if the car is not for rent)"
            name='rentStartDate'
            value={rentStartDate}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='RentEndDate' className='form-label'>
              Rent End Date
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter car's rent End Date (leave empty if the car is not for rent)"
            name='rentEndDate'
            value={rentEndDate}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Notes' className='form-label'>
              Notes
            </label>
            <input 
            type={"text"}
            className='form-control'
            placeholder="Enter you notes"
            name='notes'
            value={notes}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <button type='submit' className='btn btn-primary my-2'>Submit</button>
          <Link type='submit' className='btn btn-danger mx-3' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
