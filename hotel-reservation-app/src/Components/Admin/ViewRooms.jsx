import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoomService from "../../API/Admin/RoomService";
import Swal from "sweetalert2";

function ViewRooms() {
  const navigate = useNavigate();
  const [roomList, setRoomList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    RoomService.viewAllRoom().then((response) => {
      setRoomList(response.data);
      console.log(response.data);
    });
  }, []);

  const updateClicked = (id) => {
    console.log(id);
    navigate(`/admin-rooms/${id}`);
  };

  const deleteClicked = (id) => {
    // alert(id);
    Swal.fire(" succesfully deleted");
    RoomService.deleteRoom(id).then((res) => {
      setRoomList(roomList.filter((roomList) => roomList.id !== id));
    });
  };

  const clickAddRoom = () => {
    navigate("/admin-rooms/add");
  };
  const clickViewBooking = () => {
    navigate("/admin-booking/view");
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="card-body">
        <div>
          <h1>View Rooms</h1>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="search by room category"
            className="form-control"
            style={{
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 360,
              width: "40%",
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <br />
        <br />

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category</th>
              <th scope="col">Size</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roomList
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  //value.id.toString(includes(search))
                  value.category.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
                return 0;
              })
              .map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.category}</td>
                  <td>{r.size}</td>
                  <td>{r.description}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        updateClicked(r.id);
                      }}
                      style={{ marginRight: 10 }}
                    >
                      update
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        deleteClicked(r.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <br />
        <br />

        <button
          className="btn btn-primary"
          onClick={clickAddRoom}
          style={{ marginRight: 10 }}
        >
          Add Room
        </button>
        <button className="btn btn-primary" onClick={clickViewBooking}>
          View Booking Details
        </button>
      </div>
    </div>
  );
}

export default ViewRooms;
