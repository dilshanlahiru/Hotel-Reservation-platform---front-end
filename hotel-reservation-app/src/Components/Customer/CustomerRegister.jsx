import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationService from "../../API/Customer/RegistrationService";
import Swal from "sweetalert2";

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
      Swal.fire(" succesfully registaion");
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
                  placeholder="kamal"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required="required"
                  minlength="4"
                  title="please enter at least 4 characters"
                ></input>
                <small id="emailHelp" class="form-text text-muted">
                  please enter at least 4 characters
                </small>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Mobile Number</label>
              <div className="col-sm-10">
                <input
                  type="mobile"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="077xxxxxxx"
                  minlength="10"
                  maxlength="10"
                  title="please enter 10 digit mobile number"
                  pattern="[0-9]*"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required="required"
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
                  minlength="5"
                  maxlength="10"
                  title="please enter at least 5 characters"
                ></input>
                <small id="emailHelp" class="form-text text-muted">
                  please enter at least 5 characters
                </small>
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
