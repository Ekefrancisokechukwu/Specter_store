import Link from "next/link";
import { Button } from "../ui/button";

const CartTotals = () => {
  return (
    <div>
      <h1 className="text-2xl">Summary</h1>

      <ul className="space-y-3 font-medium mt-3">
        <li className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>$180.00</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Estimated Shipping</span>
          <span>$7.00</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Tax</span>
          <span>-</span>
        </li>

        <li className=" border-y py-4 flex justify-between items-center">
          <span>Total</span>

          <span>$187.00</span>
        </li>
      </ul>

      <Button asChild className="rounded-3xl w-full text-lg mt-4">
        <Link href={"/checkout"}>Checkout</Link>
      </Button>
    </div>
  );
};
export default CartTotals;
