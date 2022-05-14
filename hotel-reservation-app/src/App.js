import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AddRooms from "./Components/Admin/AddRooms";
import ViewRooms from "./Components/Admin/ViewRooms";
import CustomerRegister from "./Components/Customer/CustomerRegister";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/registaion" element={<CustomerRegister />} />
          <Route path="/admin-rooms/add" element={<AddRooms />} />
          <Route path="/admin-rooms/view" element={<ViewRooms />} />
          <Route path="/admin-rooms/:id" element={<AddRooms />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
