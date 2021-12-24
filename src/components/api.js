import axios from "axios";
//credit  to Ahmed Jalled for the backend
const api = axios.create({
  baseURL: "https://jallad-basic-api-server.herokuapp.com/itemsRoute",
});
export default api;
