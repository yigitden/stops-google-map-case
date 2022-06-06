import { createSlice } from "@reduxjs/toolkit";
import stopsData from "../data/stops.json";

const initialState = {
  data: stopsData,
};

const stopsSlice = createSlice({
  name: "stops",
  initialState,
  reducers: {},
});

export default stopsSlice.reducer;
export const {} = stopsSlice.actions;
