import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  cart: CartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: 500;
  tax: number;
  orderTotal: number;
  isInCart: boolean;
};

const defaultState: CartState = {
  cart: [],
  numItemsInCart: 0,
  cartTotal: 0,
  isInCart: false,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<CartProduct>) => {
      const product = state.cart.find((prod) => prod.cartID === payload.cartID);
      state.isInCart = state.cart.includes(product!);

      if (product) {
        product.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
      }
      state.numItemsInCart += payload.quantity;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const cartID = action.payload;
      const product = state.cart.find((item) => item.cartID === cartID);
      state.cart = state.cart.filter((item) => item.cartID !== cartID);
      state.numItemsInCart -= product?.quantity!;
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
