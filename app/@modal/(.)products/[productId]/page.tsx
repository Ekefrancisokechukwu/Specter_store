"use client";

import { getSingleProduct } from "@/app/server/getSingleProduct";
import Modal from "@/components/modal/Modal";
import { formatPrice } from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { generatedAmount } from "@/lib";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addItem, removeItem } from "@/redux/features/cart/cartSlice";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type Params = {
  params: { productId: string };
};

const PopModal = ({ params: { productId } }: Params) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singleprod", productId],
    queryFn: () => getSingleProduct(productId),
    placeholderData: keepPreviousData,
  });

  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const { cart } = useAppSelector((state) => state.cartState);

  const productInfo = data?.attributes;

  const cartProduct: CartProduct = {
    cartID: data?.id!,
    title: productInfo?.title!,
    price: productInfo?.price ?? 0,
    image: productInfo?.image!,
    company: productInfo?.company!,
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

  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const removeFromCart = () => {
    dispatch(removeItem(cartProduct.cartID));
  };

  return (
    <div>
      <Modal>
        {isLoading ? (
          <div className="grid place-items-center h-full w-full">
            <div className="animate-spin mx-auto rounded-full w-5 h-5 border-b-2 border-black "></div>
          </div>
        ) : (
          productInfo && (
            <div className="mt-7 flex  lg:flex-row flex-col gap-y-10  gap-x-16">
              <div className="relative lg:w-[40rem] w-full h-[30rem]">
                <Image
                  src={productInfo.image}
                  alt={productInfo.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="sm:w-[26rem]">
                <div className="space-y-2">
                  <h1 className="text-3xl text-black capitalize">
                    {productInfo.title}
                  </h1>
                  <h3 className=" text-lg text-purple-700">
                    {productInfo.company}
                  </h3>
                  <h3 className="font-semibold text-gray-800">
                    {formatPrice(productInfo.price)}
                  </h3>
                </div>
                <p className="mt-4 text-gray-800 leading-8">
                  {productInfo.description}
                </p>

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
            </div>
          )
        )}
      </Modal>
    </div>
  );
};
export default PopModal;
