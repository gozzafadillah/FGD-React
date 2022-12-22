import axiosInstance from "../config/AxiosInstance";

const ApiThread = {
  async getAllThread(page) {
    try {
      const res = await axiosInstance.get(`admin/thread/${page}`);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getThreadId(id) {
    try {
      const res = await axiosInstance.get(`admin/thread/id/${id}`);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async updateThread(id, data) {
    try {
      const res = await axiosInstance.get(`thread/id/${id}`, data);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteThread(id) {
    try {
      const res = await axiosInstance.delete(`admin/thread/id/${id}`);
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

export default ApiThread;
