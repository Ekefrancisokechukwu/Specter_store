"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { generatedAmount } from "@/lib";
import { addItem, removeItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ChangeEvent, useState } from "react";

type Props = {
  data: Product;
};

const Product = ({ data }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartState);

  const cartProduct: CartProduct = {
    cartID: data?.id,
    title: data.attributes.title,
    price: data.attributes.price ?? 0,
    image: data.attributes.image!,
    company: data.attributes.company!,
    quantity,
  };

  const cartItem = cart.find(
    (prod: CartProduct) => prod.cartID === cartProduct.cartID
  );

  const isInCart = cart.includes(cartItem!);

  const addTocart = () => {
    dispatch(addItem(cartProduct));

    toast({
      title: cartProduct.title,
      description: "Item Added to cart",
      action: (
        <ToastAction onClick={removeFromCart} altText="Goto schedule to undo">
          Undo
        </ToastAction>
      ),
    });
  };

  const removeFromCart = () => {
    dispatch(removeItem(cartProduct.cartID));
  };
  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="">
      <div className="mt-6">
        <select
          value={quantity}
          onChange={handleQuantity}
          className="w-36 border p-1"
        >
          {generatedAmount()}
        </select>
      </div>
      <Button
        onClick={addTocart}
        variant={"outline"}
        className="mt-5"
        disabled={isInCart}
      >
        {isInCart ? " In Cart" : " Add To cart"}
      </Button>
    </div>
  );
};

export default Product;
