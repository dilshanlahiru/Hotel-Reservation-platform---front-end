import axios from "axios";

const API_URL = "http://localhost:8080";

class RoomService {
  addRoom(room) {
    return axios.post(`${API_URL}/room/`, room);
  }

  viewAllRoom() {
    return axios.get(`${API_URL}/room/`);
  }

  getRoomByID(id) {
    return axios.get(`${API_URL}/room/${id}`);
  }

  updateRoom(id, room) {
    return axios.put(`${API_URL}/room/${id}`, room);
  }

  deleteRoom(id) {
    return axios.delete(`${API_URL}/room/${id}`);
  }

  viewAllBooking() {
    return axios.get(`${API_URL}/book/`);
  }
}
export default new RoomService();
