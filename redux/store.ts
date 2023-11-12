import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    cartState: cartReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
