import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoomService from "../../API/Admin/RoomService";
import moment from "moment";

function ViewBooking() {
  const navigate = useNavigate();
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    RoomService.viewAllBooking().then((response) => {
      setBookingList(response.data);
      console.log(response.data);
    });
  }, []);

  const clickBack = () => {
    navigate("/admin-rooms/view");
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="card-body">
        <div>
          <h1>View Bookings</h1>
        </div>

        <br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Booking ID</th>
              <th scope="col">Adate</th>
              <th scope="col">Ddate</th>
              <th scope="col">Category</th>
              <th scope="col">Size</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((r) => (
              <tr key={r.bookingId}>
                <td>{r.bookingId}</td>
                <td>{moment(r.arrivalDate).format("DD-MM-YYYY")}</td>
                <td>{moment(r.departureDate).format("DD-MM-YYYY")}</td>
                <td>{r.category}</td>
                <td>{r.size}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-primary"
          onClick={clickBack}
          style={{ marginRight: 10 }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewBooking;
