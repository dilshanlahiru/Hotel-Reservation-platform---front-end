import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

function BookingRooms() {
  const [aDate, setADate] = useState();
  const [dDate, setDDate] = useState();
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const checkAvaliable = (e) => {
    e.preventDefault();

    const submitData = { aDate, dDate, category, size };

    console.log(submitData);
    // RegistrationService.addUser(submitData).then((res) => {
    //   console.log(res);
    //   navigate("/");
    // });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>Booking</div>
          <form onSubmit={checkAvaliable}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>A Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setADate(e.target.value)}
                    value={aDate}
                  ></input>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="col">
                <div className="form-group">
                  <label>D Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setDDate(e.target.value)}
                    value={dDate}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Room Category</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    // onChange={selectCategory}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option>Select Category </option>
                    <option value="normal">normal</option>
                    <option value="luxury">luxury</option>
                  </select>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label>Room Size</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                  >
                    <option>Select Size</option>
                    <option value="2-person">2-person</option>
                    <option value="5-person">5-person</option>
                  </select>
                </div>
              </div>
            </div>

            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              check
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingRooms;
