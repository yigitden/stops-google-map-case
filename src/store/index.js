import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"; 
import userSlice from '../features/userSlice'
import stopsSlice from '../features/stopsSlice'
const store = configureStore({
  reducer: {
    user:userSlice,
    stops:stopsSlice
  },
});

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();