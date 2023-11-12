import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: { username: "okey" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
