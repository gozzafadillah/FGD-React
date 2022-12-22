import axiosInstance from "../config/AxiosInstance";

const ApiUser = {
  async getAllUser(page) {
    try {
      const res = await axiosInstance.get(`admin/user/${page}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async getUser(id) {
    try {
      const res = await axiosInstance.get(`admin/user/id/${id}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async deleteUser(id) {
    try {
      const res = await axiosInstance.delete(`admin/user/id/${id}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async suspendUser(id) {
    try {
      const res = await axiosInstance.put(`admin/user/suspend/${id}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async unSuspendUser(id) {
    try {
      const res = await axiosInstance.put(`admin/user/unsuspend/${id}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

export default ApiUser;
