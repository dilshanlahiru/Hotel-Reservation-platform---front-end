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
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

          {/* <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984671121426!2d79.97075581409538!3d6.914682820412032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1652956546328!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
