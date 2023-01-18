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
  greet: '',
};

const greetReducer = createSlice({
  name: "greet",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGeetingAsyncThank.fulfilled, (state, { payload }) => {
      state.greet = payload;
    });
  },
});

const getGreet = (state) => state.greet.greet;
export { getGreet, fetchGeetingAsyncThank };
export default greetReducer.reducer;
