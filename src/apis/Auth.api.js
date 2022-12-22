import axiosInstance from "../config/AxiosInstance";

const ApiAuth = {
  async login(data) {
    try {
      const res = await axiosInstance.post("user/login", data);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getAllStat() {
    try {
      const res = await axiosInstance.get("admin/statistics");
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getProfile() {
    try {
      const res = await axiosInstance.get("user/profile");
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ApiAuth;
