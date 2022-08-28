import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddCar from './myCars/AddCar';
import RentedCars from './pages/RentedCars';
import SoldCars from './pages/SoldCars';
import ViewCar from './myCars/ViewCar';
import EditCar from './myCars/EditCar'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "" element={<Home/>}/>
        <Route exact path = "/addcar" element={<AddCar/>}/>
        <Route exact path = "/rentedcars" element={<RentedCars/>}/>
        <Route exact path = "/soldcars" element={<SoldCars/>}/>
        <Route exact path = "/viewcar/:id" element={<ViewCar/>} />
        <Route exact path = "/editcar/:id" element={<EditCar/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
