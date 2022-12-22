import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import ApiAuth from "../../apis/Auth.api";

const initialState = {
  data: [],
  profile: {},
  statistik: {},
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const fetchAuth = createAsyncThunk("auth", async (data) => {
  try {
    const res = await ApiAuth.login(data);
    const arrRes = res.data.data.token.split(" ");
    Cookies.set("token", arrRes[1]);
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

export const getStats = createAsyncThunk("get all stat", async () => {
  try {
    const res = await ApiAuth.getAllStat();
    return res.data.data;
  } catch (error) {
    Swal.fire({ icon: "error", title: error.message });
  }
});

export const profile = createAsyncThunk("get profile", async () => {
  try {
    const res = await ApiAuth.getProfile();
    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
});

const AuthSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      // login/signup
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // get profile
      .addCase(profile.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.profile = action.payload.user;
      })
      .addCase(profile.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      })
      // sum stat
      .addCase(getStats.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.statistik = action.payload;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default AuthSlice.reducer;
