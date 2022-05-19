import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationService from "../../API/Customer/RegistrationService";

function CustomerRegister() {
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resId, setResId] = useState("");
  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();

    const submitData = { userName, phoneNo, email, password };

    console.log(submitData);
    RegistrationService.addUser(submitData).then((res) => {
      console.log(res);
      setResId(res.data.userId);
      navigate(`/profile/${res.data.userId}`);
      alert(res.data.userId);
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card col-md-7 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>
            <h1>Registation</h1>
          </div>
          <br />
          <br />
          <form onSubmit={clickSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">User Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Mobile Number</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="077123456"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                ></input>
              </div>
            </div>

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
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegister;
