import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TaxiService() {
  const navigate = useNavigate();

  const SubmitTaxi = (e) => {
    e.preventDefault();
    Swal.fire("Taxi booked succesfully", "Taxi will arrive soon!", "success");
    navigate("/");
  };

  return (
    <div className="container">
      <br />
      <br />

      <div className="card col-md-6 offset-md-3 offset-md-3">
        <br></br>
        <h1>Book A Taxi</h1>
        <br></br>
        <form
          style={{ width: 700, marginLeft: 40 }}
          className="row g-3"
          onSubmit={(e) => {
            SubmitTaxi(e);
          }}
        >
          <div class="col-md-4">
            <label class="form-label">Pick Up Address</label>
            <input
              class="form-control"
              name="Trader"
              type="text"
              required
            ></input>
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Destination
            </label>
            <input type="place" class="form-control" id="inputEmail4" />
          </div>
          &nbsp;
          <div class="col-md-4">
            <label class="form-label">Pick Up Time</label>
            <input
              class="form-control"
              name="Trader"
              type="time"
              required
            ></input>
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Pick Up Date
            </label>
            <input type="date" class="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <input
              style={{ width: 300, marginLeft: 70 }}
              className="btn btn-primary"
              type="submit"
              value="submit"
            ></input>
          </div>
          <br></br>
        </form>
        <br></br>

        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984671121426!2d79.97075581409538!3d6.914682820412032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1652956546328!5m2!1sen!2slk"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiService;
