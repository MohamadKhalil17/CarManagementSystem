import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  
    return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand">Car Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link className="btn btn-primary" to="/">My Cars</Link>
      </li>
      <li class="nav-item active">
      <Link className="btn btn-primary" to="/rentedcars">Rented Cars</Link>
      </li>
      <li class="nav-item active">
      <Link className="btn btn-primary" to="/soldcars">Sold Cars</Link>
      </li>
      
    </ul>
  </div>
    <Link className="btn btn-outline-light" to="/addcar">Add Car</Link>
  </div>
</nav>
  )
}
