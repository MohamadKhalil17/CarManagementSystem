import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCar() {
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
    
      

  const { id } = useParams();

  useEffect(() => {
    loadCar();
  }, []);

  const loadCar = async () => {
    const car = await axios.get(`http://localhost:8090/car/getCar/${id}`);
    console.log(car.data)
    setCar(car.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center text-primary m-4">Car Details</h2>

          <div className="card bg-secondary">
            <div className="card-header text-light">
              Details of car id : {car.id}
              <ul className="list-group list-group-flush bg-seconday">
                <li className="list-group-item">
                  <b className="text-dark ">Name: </b>
                  <i>{car.name}</i>
                </li>
                <li className="list-group-item">
                  <b className="text-dark ">Serial Number: </b>
                  <i>{car.serialNumber}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Number: </b>
                  <i>{car.number}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Color: </b>
                  <i>{car.color}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Model Year: </b>
                  <i>{car.modelYear}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Bought From: </b>
                  <i>{car.boughtFrom}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Cost: </b>
                  <i>{car.cost}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Sold To: </b>
                  <i>{car.soldTo}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Sale Price: </b>
                  <i>{car.salePrice}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Price: </b>
                  <i>{car.price}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">For Sale Status: </b>
                  <i>{car.forSaleStatus}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">For Rent Status: </b>
                  <i>{car.forRentStatus}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Tenant: </b>
                  <i>{car.tenant}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Rent Per Day: </b>
                  <i>{car.rentPerDay}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Rent Start Date: </b>
                  <i>{car.rentStartDate}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Rent End Date: </b>
                  <i>{car.rentEndDate}</i>
                </li>
                <li className="list-group-item ">
                  <b className="text-dark ">Notes: </b>
                  <i>{car.notes}</i>
                </li>
            
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}