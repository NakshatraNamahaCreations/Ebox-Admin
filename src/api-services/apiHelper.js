import axios from "axios";
import { apiUrl } from "./apiContents";

const apiClient = axios.create({
  baseURL: apiUrl.BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET method
const get = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("API GET error:", error);
    throw error; // Propagate the error to be handled by the caller
  }
};

export { get };