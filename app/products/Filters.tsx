"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  categories: string[];
  companies: string[];
  loading: boolean;
};

const Filters = ({ categories, companies, loading }: Props) => {
  const maxPrice = 100000;
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";
  const activeCompany = searchParams.get("company") || "all";
  const order = searchParams.get("order") || "a-z";
  const price = searchParams.get("price") || [100000];

  const [searchQuery, setSearchQuery] = useState("");

  const filterCompany = (prop: string) => {
    router.push(
      `?search=${search}&category=${activeCategory}&company=${prop}&order=${order}`,
      {
        scroll: false,
      }
    );
  };

  const filterCategory = (prop: string) => {
    router.push(
      `?search=${search}&category=${prop}&company=${activeCompany}&order=${order}`,
      {
        scroll: false,
      }
    );
  };
  const Searchfilter = () => {
    router.push(
      `?search=${searchQuery}&category=${activeCategory}&company=${activeCompany}&order=${order}`,
      {
        scroll: false,
      }
    );
  };

  const filterPrice = (prop: number | number[]) => {
    router.push(
      `?search=${searchQuery}&category=${activeCategory}&company=${activeCompany}&order=${order}&price=${prop}`,
      {
        scroll: false,
      }
    );
  };

  return (
    <div className="pb-7 md:block hidden">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <Button disabled={loading} onClick={Searchfilter} type="submit">
          Search
        </Button>
      </div>

      <Button asChild className="mt-8">
        <Link href="/products" scroll={false}>
          <X className="mr-2 h-4 w-4" /> Reset
        </Link>
      </Button>
      <div className="mt-8">
        <h1 className="font-bold px-3">Categories</h1>
        <ul className="mt-5">
          {categories?.map((category, i) => {
            return (
              <li
                key={i}
                onClick={() => filterCategory(category)}
                className={`cursor-pointer py-3 text-sm  rounded-lg px-3 hover:bg-primary-foreground w-full capitalize ${
                  category === activeCategory ? "bg-primary-foreground" : null
                }`}
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
                onClick={() => filterCompany(company)}
                className={`cursor-pointer py-3 text-sm  rounded-lg px-3 hover:bg-primary-foreground w-full capitalize ${
                  company === activeCompany ? "bg-primary-foreground" : null
                }`}
              >
                {company}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-7 px-3">
        <h1 className="font-bold">Price</h1>
        <div className="mb-3 flex justify-between items-center">
          <h5>
            <span>Max:{formatPrice(maxPrice)}</span>
          </h5>
          <h6>{formatPrice(Number(price))}</h6>
        </div>
        <Slider
          defaultValue={[Number(price)]}
          max={maxPrice}
          step={5}
          onValueChange={(e) => filterPrice(e)}
        />
      </div>
    </div>
  );
};

export default Filters;
