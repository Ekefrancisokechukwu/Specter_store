"use client";

import ProductCard from "./ui/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/app/server/getFeaturedProducts";
import { Suspense } from "react";
import FeaturedProdLoaading from "./loadings/FeaturedProdLoaading";

const FeaturedProductList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FeaturedProducts"],
    queryFn: () => getData("/products"),
  });

  return (
    <div className="space-y-4">
      <Suspense fallback={<FeaturedProdLoaading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.slice(1, 9).map((item: Product) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};
export default FeaturedProductList;
