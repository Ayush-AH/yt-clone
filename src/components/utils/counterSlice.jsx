import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: true,
}

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open; 
    },
  },
})

export const { toggleSidebar} = counterSlice.actions

export default counterSlice.reducer