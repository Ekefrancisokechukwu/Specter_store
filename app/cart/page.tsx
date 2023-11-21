"use client";

import CartTotals from "@/components/cartTotals/CartTotals";
import CartItemList from "@/components/cartitemList/CartItemList";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/redux/store";

import Link from "next/link";

const Cart = () => {
  const cart = useAppSelector((state) => state.cartState.cart);

  if (cart.length === 0) {
    return (
      <Container>
        <div className="grid place-items-center h-[80vh] w-full">
          <div className="">
            <h1 className="text-2xl"> Empty cart </h1>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-5 sm:px-20 px-8">
        <nav className="flex h-5 space-x-4 items-center text-sm ">
          <Link href={"/"}>Home</Link>
          <Separator orientation="vertical" />
          <Link href={"/products"}>Products</Link>
        </nav>

        <main className="sm:mt-16 mt-5 grid gap-x-20 lg:grid-cols-[1fr,auto] grid-cols-1 gap-y-9">
          <div className="">
            <CartItemList />
          </div>
          <div className="w-[20rem]  max-[400px]:w-full">
            <CartTotals />
          </div>
        </main>
      </div>
    </Container>
  );
};
export default Cart;
