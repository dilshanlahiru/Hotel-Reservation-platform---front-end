import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoomService from "../../API/Admin/RoomService.js";
import { useParams } from "react-router";

function AddRooms() {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("compooo");

    if (id) {
      RoomService.getRoomByID(id).then((Response) => {
        setCategory(Response.data.category);
        setSize(Response.data.size);
        setDescription(Response.data.description);
      });
    }
  }, []);

  console.log(category);
  console.log(description);

  const title = () => {
    if (id) {
      return <h2>Update Rooms</h2>;
    } else {
      return <h2>Add Rooms</h2>;
    }
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    console.log("test");

    const submitRoom = { category, size, description };
    console.log(submitRoom);

    if (id) {
      RoomService.updateRoom(id, submitRoom).then((res) => {
        {
          console.log(res);
          navigate("/admin-rooms/view");
        }
      });
      alert("successful");
    } else {
      RoomService.addRoom(submitRoom).then((res) => {
        console.log(res);
        navigate("/admin-rooms/view");
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
          <div>{title()}</div>
          <form onSubmit={clickSubmit}>
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
                  >
                    <option>Select Category </option>
                    <option value="normal">normal</option>
                    <option value="luxury">luxury</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="col">
                <div className="form-group">
                  <label>Room Size</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                  >
                    <option>Select Size</option>
                    <option value="2-person">2-person</option>
                    <option value="5-person">5-person</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Room Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                // defaultValue="null"
                placeholder="enter"
              ></textarea>
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRooms;
