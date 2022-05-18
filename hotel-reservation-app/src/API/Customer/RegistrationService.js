import axios from "axios";

const API_URL = "http://localhost:8080";

class RegistrationService {
  addUser(user) {
    return axios.post(`${API_URL}/user/`, user);
  }

  // getLogin(email, password) {
  //   return axios.get(`${API_URL}/login/${email}/${password}`);
  // }

  login(user) {
    return axios.post(`${API_URL}/user/Login`, user);
  }
  // viewAllRoom() {
  //   return axios.get(`${API_URL}/room/`);
  // }

  // getRoomByID(id) {
  //   return axios.get(`${API_URL}/room/${id}`);
  // }

  // updateRoom(id, room) {
  //   return axios.put(`${API_URL}/room/${id}`, room);
  // }

  // deleteRoom(id) {
  //   return axios.delete(`${API_URL}/room/${id}`);
  // }
}
export default new RegistrationService();
