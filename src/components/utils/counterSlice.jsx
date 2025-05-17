import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
  video: [],
  category: "all",
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { toggleSidebar, setHomeVideo, setCategory } =
  counterSlice.actions;

export default counterSlice.reducer;
