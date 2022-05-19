import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import BookingService from "../../API/Customer/BookingService";

export default function Payment() {
  const navigate = useNavigate();
  const { cusId } = useParams();
  const { id } = useParams();
  const { amount } = useParams();

  // const clickCard = () => {
  //   navigate(`/booking-rooms/${id}/${amount}/card`);
  // };

  const clickProfile = () => {
    navigate(`/profile/${cusId}`);
  };

  const payment = () => {
    var bookingId = id;
    var price = amount;

    const submitDat = { bookingId, price };
    BookingService.payment(submitDat).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>
            <h2>Select Payment Method</h2>
          </div>
          <br />
          <br />
          <div>
            <br />

            <div>
              <label>
                <h2>Rs {amount}</h2>
              </label>
            </div>
            <br />

            <StripeCheckout
              token=""
              name="Card Details"
              currency="LKR"
              // onClick={clickCard}

              stripeKey="pk_test_51KxR3MIC2E0K0mYHN4a2mYK3zETDNxJVZPhLZ19tDCGfHzSzOtu9u0dJFz28ZyZe3AMh0nBlySOwWIHwbY0LUJRM00P1aj1dUp"
            >
              <button
                className="btn btn-primary"
                style={{ marginRight: 10 }}
                onClick={payment}
              >
                Pay Now
              </button>
            </StripeCheckout>

            <button
              className="btn btn-primary"
              style={{ marginRight: 10 }}
              onClick={clickProfile}
            >
              Go To Profile
            </button>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
