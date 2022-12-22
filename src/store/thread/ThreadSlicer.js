import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import ApiThread from "../../apis/Thread.api";
import errNotFound from "../assets/error-page.png";

const initialState = {
  data: {
    thread: {},
    threads: [],
  },
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const getAllThread = createAsyncThunk("get all thread", async (page) => {
  try {
    const res = await ApiThread.getAllThread(page);
    return res.data.data.threads;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      imageHeight: 200,
      title: error.message,
      imageAlt: "Not Found Image",
    });
  }
});

export const getThread = createAsyncThunk("get thread", async (id) => {
  try {
    const res = await ApiThread.getThreadId(id);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      imageHeight: 200,
      title: error.message,
      imageAlt: "Not Found Image",
    });
  }
});

export const deleteThread = createAsyncThunk("delete thread", async (id) => {
  try {
    const res = await ApiThread.deleteThread(id);
    return res.data;
  } catch (error) {
    Swal.fire({
      imageUrl: errNotFound,
      imageWidth: 400,
      imageHeight: 200,
      title: error.message,
      imageAlt: "Not Found Image",
    });
  }
});

const threadSlice = createSlice({
  name: "thread",
  initialState,
  extraReducers: (builder) => {
    builder
      // get all thread
      .addCase(getAllThread.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(getAllThread.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.status = !state.status;
        state.data.threads = action.payload;
      })
      .addCase(getAllThread.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      })
      // get thread by id
      .addCase(getThread.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(getThread.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.status = !state.status;
        state.data.thread = action.payload;
      })
      .addCase(getThread.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      })
      // delete thread
      .addCase(deleteThread.pending, (state) => {
        state.fecthStatus = "loading";
      })
      .addCase(deleteThread.fulfilled, (state, action) => {
        state.status = !state.status;
        state.fecthStatus = "success";
        state.data.threads = state.data.threads.filter(
          (val) => val._id !== action.payload.data.thread._id
        );
      })
      .addCase(deleteThread.rejected, (state) => {
        state.fecthStatus = "failed";
      });
  },
});

export default threadSlice.reducer;
