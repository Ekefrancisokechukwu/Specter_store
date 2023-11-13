"use  client";

import { generatedAmount } from "@/lib";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/store";
import { removeItem } from "@/redux/features/cart/cartSlice";
import { useToast } from "../ui/use-toast";
import { formatPrice } from "@/lib/utils";

type Props = {
  item: CartProduct;
};

const SingleCartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const removeCartItem = () => {
    dispatch(removeItem(item.cartID));
    toast({
      title: item.title,
      description: "Item removed from cart",
    });
  };

  return (
    <div className="flex items-start  gap-x-5">
      <Link
        href={`/products/${item.cartID}`}
        className="relative w-[8rem] h-[8rem]"
      >
        <Image
          src={item.image}
          alt="img"
          fill
          className="rounded-lg object-cover"
        />
      </Link>
      <div className="">
        <h1 className="text-lg capitalize">{item.title}</h1>
        <div className="mt-5 flex items-center gap-x-8">
          <Button onClick={removeCartItem} variant={"ghost"}>
            <Trash className="w-5 h-5" />
          </Button>

          <select value={item.quantity} className="w-12">
            {generatedAmount(8)}
          </select>
        </div>
      </div>

      <span className="ms-auto">{formatPrice(item.price)}</span>
    </div>
  );
};
export default SingleCartItem;
