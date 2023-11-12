import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

type Props = {
  categories: string[];
  companies: string[];
};

const Filters = ({ categories, companies }: Props) => {
  const maxPrice = 1000;
  const [selectedPrice, setSelectedPrice] = useState<number>(maxPrice);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    console.log(value);
    setSelectedPrice(value);
  };

  return (
    <form action="" className="pb-7">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">Search</Button>
      </div>
      <div className="mt-10">
        <h1 className="font-bold px-3">Categories</h1>
        <ul className="mt-5">
          {categories?.map((category, i) => {
            return (
              <li
                key={i}
                className="cursor-pointer py-3 text-sm rounded-lg px-3 hover:bg-primary-foreground w-full capitalize"
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-7">
        <h1 className="font-bold px-3">companies</h1>
        <ul className="mt-5">
          {companies?.map((company, i) => {
            return (
              <li
                key={i}
                className="cursor-pointer py-3 text-sm rounded-lg px-3 hover:bg-primary-foreground w-full capitalize"
              >
                {company}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-7 px-3">
        <div className="flex items-center justify-between mb-3">
          <h5>
            Price <span className="text-xs ">Max:{formatPrice(maxPrice)}</span>
          </h5>
          <h6>{formatPrice(selectedPrice)}</h6>
        </div>
        <Slider defaultValue={[selectedPrice]} max={100} step={5} />
        {/* <input type="range" onChange={(handleRange)} max={100} step={5} /> */}
      </div>
    </form>
  );
};

export default Filters;
