import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import BookingService from "../../API/Customer/BookingService";
import emailjs from "emailjs-com";

// import DatePicker from "react-datetime";
// import DatePicker from "react-datepicker";
// import moment from "moment";

function BookingRooms() {
  const [aDate, setADate] = useState();
  const [dDate, setDDate] = useState();
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const [d, setD] = useState();
  const [email, setEmail] = useState("");

  const checkAvaliable = async (e) => {
    e.preventDefault();

    if (id) {
      setPrice();
      console.log(amount);
      await BookingService.getAvaliable(aDate, dDate, category, size).then(
        (res) => {
          console.log(res.data);
          setD(res.data);

          if (d > 0) {
            var customerId = id;
            var arrivalDate = aDate;
            var departureDate = dDate;

            const bookingData = {
              customerId,
              arrivalDate,
              departureDate,
              category,
              size,
            };

            BookingService.booking(bookingData).then((res) => {
              console.log(res.data.bookingId);

              emailjs
                .sendForm(
                  "service_te9rdrw",
                  "template_t7wgl5z",
                  e.target,
                  "user_82jopq3UFMlV5szQ1YBg1"
                )
                .then((res) => {
                  console.log(res);
                });

              navigate(`/booking-rooms/${id}/${res.data.bookingId}/${amount}`);
            });
          } else if (d <= 0) {
            alert("sorry, All this types of rooms reserved in this day");
          }
        }
      );
    } else {
      const submitData = { aDate, dDate, category, size };

      await BookingService.getAvaliable(aDate, dDate, category, size).then(
        (res) => {
          console.log(res.data);
          setD(res.data);
          if (d > 0) {
            navigate("/login");
          } else if (d <= 0) {
            alert("sorryyyy");
          }
        }
      );
    }
  };

  const setPrice = () => {
    if (category === "normal" && size === "2-person") {
      setAmount(2000);
    } else if (category === "normal" && size === "5-person") {
      setAmount(4000);
    } else if (category === "luxury" && size === "2-person") {
      setAmount(5000);
    } else if (category === "luxury" && size === "5-person") {
      setAmount(10000);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>
            <h2>Room Reservation Form</h2>
          </div>
          <br />
          <br />
          <form onSubmit={checkAvaliable}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Arrival Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setADate(e.target.value)}
                    value={aDate}
                    name="Arrival_Date"
                  ></input>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="col">
                <div className="form-group">
                  <label>Departure Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setDDate(e.target.value)}
                    value={dDate}
                    name="Departure_Date"
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
                    name="Room_Category"
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
                    name="Room_Size"
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
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  value={email}
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>

            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              check
            </button>

            {/* <DatePicker
              selected={new Date()}
              // onChange={(date) => handleDateChange(date, field)}
              minDate={moment().toDate()}
            /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingRooms;
