import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
//Giá trị mặc định

export const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggle: (state, value) => {
      const idx = state.value.indexOf(value.payload);
      if (idx !== -1) {
        state.value.splice(idx, 1);
      } else {
        state.value.push(value.payload);
      }
    },
  },
});
//Set event

export const { toggle } = favSlice.actions;
export default favSlice.reducer;