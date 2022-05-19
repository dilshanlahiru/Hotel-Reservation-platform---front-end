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
}
export default new RegistrationService();
