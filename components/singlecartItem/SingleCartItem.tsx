"use  client";

import { generatedAmount } from "@/lib";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/store";
import { editItem, removeItem } from "@/redux/features/cart/cartSlice";
import { useToast } from "../ui/use-toast";
import { formatPrice } from "@/lib/utils";
import { ChangeEvent } from "react";

type Props = {
  item: CartProduct;
};

const SingleCartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const removeCartItem = () => {
    dispatch(removeItem(item.cartID));
    toast({
      title: title,
      description: "Item removed from cart",
    });
  };

  const handleAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      editItem({ cartID: item.cartID, quantity: parseInt(e.target.value) })
    );
  };

  const { cartID, image, price, quantity, title } = item;

  return (
    <div className="flex  py-8 max-[400px]:flex-col last-of-type:border-b-0 border-b gap-y-2 items-start  gap-x-5">
      <Link
        href={`/products/${cartID}`}
        className="relative w-[8rem]  max-[400px]:w-full h-[8rem]"
      >
        <Image
          src={image}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
      </Link>
      <div>
        <h1 className="text-lg capitalize">{title}</h1>
        <div className="mt-5 flex items-center gap-x-8">
          <Button onClick={removeCartItem} variant={"ghost"}>
            <Trash className="w-5 h-5" />
          </Button>

          <select onChange={handleAmount} value={quantity} className="w-12">
            {generatedAmount(8)}
          </select>
        </div>
      </div>

      <span className="sm:ms-auto">{formatPrice(price)}</span>
    </div>
  );
};
export default SingleCartItem;
