import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const fetchGeetingAsyncThank = createAsyncThunk(
  "greet/fetchGeetingAsyncThank",
  async () => {
    const response = await axios
      .get(`http://127.0.0.1:3000/api/v1/greets`)
      .catch(() => false);
    return response.data;
  }
);

const initialState = {
  greets: [],
};

const greetReducer = createSlice({
  name: "greet",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGeetingAsyncThank.fulfilled, (state, { payload }) => {
      state.greets = payload;
    });
  },
});

const getAllGreets = (state) => state.greet.greets;
export { getAllGreets, fetchGeetingAsyncThank };
export default greetReducer.reducer;
