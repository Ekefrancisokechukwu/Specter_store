import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  blocked?: false | true;
  confirmed?: boolean;
  createdAt?: string;
  email?: string;
  id?: 4;
  provider?: string;
  token?: string;
  updatedAt?: string;
  username?: string;
};

type UserState = {
  user: User | null;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
