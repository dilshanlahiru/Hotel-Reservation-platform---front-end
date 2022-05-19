import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import StripeCheckout from "react-stripe-checkout";

function CardPaymentService() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { amount } = useParams();

  // const clickCard = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <StripeCheckout
        token=""
        name="Card Details"
        currency="LKR"
        // onClick={clickCard}
        stripeKey="pk_test_51KxR3MIC2E0K0mYHN4a2mYK3zETDNxJVZPhLZ19tDCGfHzSzOtu9u0dJFz28ZyZe3AMh0nBlySOwWIHwbY0LUJRM00P1aj1dUp"
      >
        <button className="btn btn-primary">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}

export default CardPaymentService;
