import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationService from "../../API/Customer/RegistrationService";
import { Link } from "react-router-dom";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLog, setIsLog] = useState("");
  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();

    const submitData = { email, password };

    console.log(submitData);

    if (email === "admin@admin.com" && password === "admin") {
      navigate("/admin-rooms/view");
    } else {
      RegistrationService.login(submitData).then((res) => {
        console.log(res);
        // navigate(`/booking-rooms/${res.data}`);
        navigate(`/profile/${res.data}`);
      });
    }
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
            <h2>Login</h2>
          </div>
          <br />
          <br />
          <form onSubmit={clickSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required="required"
                ></input>
              </div>
            </div>
            <br />

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                  minlength="4"
                  title="please enter at least 4 characters"
                ></input>
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <div className="text-center">
              create an account{" "}
              <Link to="/registaion" className="text-center">
                Sign up{" "}
              </Link>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
