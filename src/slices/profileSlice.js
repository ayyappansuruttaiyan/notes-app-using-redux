import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profile: {
    name: "Ayyappan",
    email: "ayyappan.sjec@gmail.com",
  },
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: initialState,
  reducers: {},
});
export default profileSlice.reducer;
