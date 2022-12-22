import axiosInstance from "../config/AxiosInstance";

const ApiTopic = {
  async getAllTopic() {
    try {
      const res = await axiosInstance.get(`admin/topic/${1}`);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async createTopic(data) {
    try {
      const res = await axiosInstance.post("admin/topic", data);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getTopic(id) {
    try {
      const res = await axiosInstance.get(`admin/topic/id/${id}`);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async updateTopic(id, data) {
    try {
      const res = await axiosInstance.put(`admin/topic/id/${id}`, data);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteTopic(id) {
    try {
      const res = await axiosInstance.delete(`admin/topic/id/${id}`);
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default ApiTopic;
