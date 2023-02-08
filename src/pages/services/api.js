import axios from "axios";

export const api = axios.create({
  baseURL: "https://hoteldatabase.onrender.com"
});