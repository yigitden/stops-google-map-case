import { createSlice } from "@reduxjs/toolkit";
import userData from '../data/users.json'

const initialState = {
  data: userData,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  
});

export default userSlice.reducer;
export const {} = userSlice.actions;