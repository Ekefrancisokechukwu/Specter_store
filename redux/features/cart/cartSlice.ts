import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  cart: CartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: 500;
  tax: number;
  orderTotal: number;
};

const defaultState: CartState = {
  cart: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// const loadCartFromLocalStorage = (): CartState => {
//   const storedCart = localStorage.getItem("cartInfo");
//   return storedCart ? JSON.parse(storedCart) || defaultState : defaultState;
// };

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")!) || defaultState;
};

const CartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),

  reducers: {
    addItem: (state, { payload }: PayloadAction<CartProduct>) => {
      state.cart.unshift(payload);
      state.numItemsInCart += payload.quantity;
      state.cartTotal += payload.price * payload.quantity;
      CartSlice.caseReducers.calculateTotal(state);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const cartID = action.payload;
      const product = state.cart.find(
        (item: CartProduct) => item.cartID === cartID
      );
      state.cart = state.cart.filter(
        (item: CartProduct) => item.cartID !== cartID
      );
      state.numItemsInCart -= product?.quantity!;

      state.cartTotal -= product?.price! * product?.quantity!;
      CartSlice.caseReducers.calculateTotal(state);
    },

    editItem: (
      state,
      action: PayloadAction<{ cartID: number; quantity: number }>
    ) => {
      const { cartID, quantity } = action.payload;
      const product = state.cart.find(
        (prod: CartProduct) => prod.cartID === cartID
      );
      state.numItemsInCart += quantity - product?.quantity!;
      state.cartTotal += product?.price! * (quantity - product?.quantity!);
      product!.quantity = quantity;
      CartSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cartInfo", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem } = CartSlice.actions;

export default CartSlice.reducer;
