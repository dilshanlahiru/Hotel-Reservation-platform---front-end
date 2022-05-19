import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../../API/Customer/BookingService";
import { useParams } from "react-router";

function Profile() {
  const navigate = useNavigate();
  const [bookingList, setBookingList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    BookingService.viewAllBooking(id).then((response) => {
      setBookingList(response.data);
      console.log(response.data);
      console.log(bookingList);
    });
  }, []);

  const updateClicked = (id) => {
    console.log(id);
    // navigate(`/admin-rooms/${id}`);
    alert(id);
  };

  const deleteClicked = (bookingId) => {
    BookingService.deleteBooking(bookingId).then((res) => {
      setBookingList(
        bookingList.filter((bookingList) => bookingList.bookingId !== bookingId)
      );
    });
    alert(bookingId);
  };

  const clickAddBooking = () => {
    navigate(`/booking-rooms/${id}`);
  };
  const clickAddBookTaxi = () => {
    navigate("/booking-taxi");
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
              <th scope="col">date</th>
              <th scope="col">date</th>
              <th scope="col">Category</th>
              <th scope="col">Size</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((r) => (
              <tr key={r.bookingId}>
                <td>{r.bookingId}</td>
                <td>{r.arrivalDate}</td>
                <td>{r.departureDate}</td>
                <td>{r.category}</td>
                <td>{r.size}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      updateClicked(r.bookingId);
                    }}
                    style={{ marginRight: 10 }}
                  >
                    update
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      deleteClicked(r.bookingId);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-primary"
          onClick={clickAddBooking}
          style={{ marginRight: 10 }}
        >
          Book Room
        </button>
        <button className="btn btn-primary" onClick={clickAddBookTaxi}>
          Book Taxi
        </button>
      </div>
    </div>
  );
}

export default Profile;
