import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import ApiTopic from "../../apis/Topic.api";
import errNotFound from "../assets/error-page.png";

const initialState = {
  data: [],
  status: false,
  rescode: "",
  fecthStatus: "idle",
  error: null,
};

export const getAllTopic = createAsyncThunk("get all topic", async () => {
  try {
    const res = await ApiTopic.getAllTopic();
    return res.data.data.topics;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      title: `Oops Failed!
      No internet connection found.
      Check your connection.`,
      imageAlt: "Not Found Image",
      confirmButtonColor: "red",
      confirmButtonText: "Try Again",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });

    throw Error(error.message);
  }
});

export const deleteTopic = createAsyncThunk("delete topic", async (id) => {
  try {
    const res = await ApiTopic.deleteTopic(id);
    return res.data.data.topic;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      title: `Oops Failed!
      No internet connection found.
      Check your connection.`,
      imageAlt: "Not Found Image",
      confirmButtonColor: "red",
      confirmButtonText: "Try Again",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
    throw Error(error.message);
  }
});

export const createTopic = createAsyncThunk("create topic", async (data) => {
  try {
    const res = await ApiTopic.createTopic(data);
    return res.data.data.topic;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      title: error.message,
      imageAlt: "Not Found Image",
      confirmButtonColor: "red",
      confirmButtonText: "Try Again",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
});

export const updateTopic = createAsyncThunk("update topic", async (data) => {
  try {
    const res = await ApiTopic.updateTopic(data.id, data.form);
    return res.data.data.topic;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      title: error.message,
      imageAlt: "Not Found Image",
      confirmButtonColor: "red",
      confirmButtonText: "Try Again",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
});

const topicSlice = createSlice({
  name: "topic",
  initialState,
  extraReducers: (builder) => {
    builder
      // get all topic
      .addCase(getAllTopic.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(getAllTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
        state.status = !state.status;
      })
      .addCase(getAllTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      // delete topic
      .addCase(deleteTopic.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(deleteTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = state.data.filter((val) => val._id !== action.payload._id);
        state.status = !state.status;
      })
      .addCase(deleteTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      // create topic
      .addCase(createTopic.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data.push(action.payload);
        state.status = !state.status;
      })
      .addCase(createTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      })
      // update topic
      .addCase(updateTopic.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(updateTopic.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        const id = action.payload._id;
        const indexData = state.data.findIndex((value) => value._id === id);
        const newArr = [...state.data];
        if (indexData >= 0) {
          newArr[indexData] = action.payload;
        }
        state.data = [...newArr];
        state.status = !state.status;
      })
      .addCase(updateTopic.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.error.message;
      });
  },
});

export default topicSlice.reducer;
