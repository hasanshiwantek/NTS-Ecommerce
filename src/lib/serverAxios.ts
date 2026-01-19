// lib/serverAxios.ts
import axios from "axios";

const serverAxios = axios.create({
  baseURL: "http://3.12.69.112/api/",
  headers: {
    storeId: 4, // Replace with dynamic storeId if needed
  },
});

export default serverAxios;
