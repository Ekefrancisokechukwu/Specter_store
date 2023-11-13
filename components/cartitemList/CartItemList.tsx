"use client";

import { useAppSelector } from "@/redux/store";
import SingleCartItem from "../singlecartItem/SingleCartItem";

const CartItemList = () => {
  const { cart } = useAppSelector((state) => state.cartState);

  return (
    <div className="space-y-8">
      {cart.map((item) => {
        return <SingleCartItem key={item.cartID} item={item} />;
      })}
    </div>
  );
};
export default CartItemList;
