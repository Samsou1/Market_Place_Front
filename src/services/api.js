import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3000";
const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(({ headers, ...config }) =>
  headers.Authorization || Cookies.get("bearerToken")
    ? {
        ...config,
        headers: {
          ...headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            headers.Authorization || Cookies.get("bearerToken")
          }`,
        },
      }
    : {
        ...config,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
);

export default class APIManager {
  static async registerUser(payload) {
    try {
      const response = await API.post("/users", payload);
      Cookies.set(
        "bearerToken",
        response.headers.get("Authorization").slice(7)
      );
      Cookies.set("currentUser", JSON.stringify(response.data.user));
      return response;
    } catch {
      throw new Error("Invalid email or password");
    }
  }

  static async loginUser(payload) {
    try {
      const response = await API.post("/users/sign_in", payload);
      Cookies.set(
        "bearerToken",
        response.headers.get("Authorization").slice(7)
      );
      Cookies.set("currentUser", JSON.stringify(response.data.user));
      console.log(response);
      return response;
    } catch {
      throw new Error("Invalid email or password");
    }
  }

  static async logoutUser() {
    if (Cookies.get("currentUser")) {
      try {
        const response = await API.delete("/users/sign_out", {
          headers: { Authorization: Cookies.get("bearerToken") },
        });
        console.log(response);
        Cookies.remove("bearerToken");
        Cookies.remove("currentUser");
        return response;
      } catch {
        throw new Error("Something went wrong");
      }
    }
  }

  static async resetPassword(payload) {
    if (Cookies.get("currentUser")) {
      try {
        const response = await API.post("/users/password/new", payload);
        return response;
      } catch {
        throw new Error("Something went wrong");
      }
    }
  }

  static async getAllApartments() {
    try {
      const response = await API.get("/apartments");
      return response.data;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async getFilteredApartments(search) {
    try {
      const response = await API.get(`/apartments?search_term=${search}`);
      return response.data;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async getApartment(id) {
    try {
      const response = await API.get(`/apartments/${id}`);
      return response.data;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async getUser() {
    try {
      const response = await API.get(`/member-data`);
      return response.data.user;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async newApartment(payload) {
    try {
      const response = await API.post(`/apartments`, payload);
      return response;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async getMyApartments() {
    try {
      const response = await API.get("/apartments?search_term=user");
      return response.data;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  }

  static async deleteApartments(id) {
    try {
      const response = await API.delete(`/apartments/${id}`);
      return response.data;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async editApartment(id, payload) {
    try {
      const response = await API.put(`/apartments/${id}`, payload);
      return response.data;
    } catch {
      throw new Error("Something went wrong");
    }
  }

  static async editProfile(payload) {
    try {
      const response = await API.patch(`/member-update`, payload);
      return response.data;
    } catch {
      throw new Error("Something went wrong");
    }
  }
}
