import axios from "axios";

const API_URL = "http://localhost:8080";

class BookingService {
  booking(data) {
    return axios.post(`${API_URL}/book/`, data);
  }

  getAvaliable(aDate, dDate, category, size) {
    return axios.get(
      `${API_URL}/book/checkAvailability/${aDate}/${dDate}/${category}/${size}`
    );
  }

  viewAllBooking(id) {
    return axios.get(`${API_URL}/book/booking/${id}`);
  }

  deleteBooking(id) {
    return axios.delete(`${API_URL}/book/${id}`);
  }
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
export default new BookingService();
