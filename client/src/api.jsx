import axios from "axios";

const API = axios.create({
  baseURL: "https://car-5hw1.onrender.com/api", 
});

export default API;
