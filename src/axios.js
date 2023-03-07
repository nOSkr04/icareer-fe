import axios from "axios";

const instance = axios.create({
  baseURL: "https://career-developer.com/api/v1",
});
instance.defaults.withCredentials = true;

export default instance;
