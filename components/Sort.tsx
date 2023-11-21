import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const sorts = ["a-z", "z-a", "high", "low"];

const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";
  const activeCompany = searchParams.get("company") || "all";
  const order = searchParams.get("order") || "a-z";

  const ordersort = (prop: string) => {
    router.push(
      `?search=${search}&category=${activeCategory}&company=${activeCompany}&order=${prop}`,
      {
        scroll: false,
      }
    );
  };

  return (
    <Select value={order} onValueChange={(e) => ordersort(e)}>
      <SelectTrigger className="w-[180px] capitalize">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sorts.map((sort) => {
          return (
            <SelectItem key={sort} value={sort} className="capitalize">
              {sort}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
export default Sort;
