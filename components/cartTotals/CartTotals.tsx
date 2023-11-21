"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/store";
import { formatPrice } from "@/lib/utils";

const CartTotals = () => {
  const { cartTotal, orderTotal, shipping } = useAppSelector(
    (state) => state.cartState
  );

  const { user, isLoggedIn } = useAppSelector((state) => state.userState);

  const handleCheckout = () => {};

  return (
    <div>
      <h1 className="text-2xl">Summary</h1>

      <ul className="space-y-3 font-medium mt-3">
        <li className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Estimated Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Tax</span>
          <span>-</span>
        </li>

        <li className=" border-y py-4 flex justify-between items-center">
          <span>Total</span>

          <span>{formatPrice(orderTotal)}</span>
        </li>
      </ul>

      <Button
        onClick={handleCheckout}
        className="rounded-3xl w-full text-lg mt-4"
      >
        Checkout
      </Button>

      {isLoggedIn && (
        <div className="w-full h-screen z-20 px-5 top-0 grid place-items-center left-0 fixed bg-black/60">
          <div className="p-8 bg-white rounded-lg">
            <h1 className="text-slate-950 text-center font-medium">
              You Are Not Logged In
            </h1>
            <div className="flex gap-x-5 mt-6">
              <Button variant={"outline"}>Take me to log in</Button>
              <Button variant={"destructive"}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartTotals;
