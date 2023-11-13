"use client";

import Banner from "@/components/Banner";
import Container from "@/components/ui/Container";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { customFetch } from "@/lib/utils";
import ProductsContainer from "@/components/productsContainer/ProductsContainer";
import Filters from "./Filters";
import { useState } from "react";
import Sort from "@/components/Sort";
import PaginationCOntainer from "@/components/PaginationCOntainer";
import ProductsLoading from "@/components/loadings/productsLoading";

const fetchProducts = async (pageParam: number) => {
  const reponse = await customFetch(
    `/products?page=${pageParam}&search=&category=all&company=all&order=a-z&price=100000`
  );

  return reponse.data;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);

  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    placeholderData: keepPreviousData,
  });

  const categories: string[] = data?.meta?.categories;
  const companies: string[] = data?.meta?.companies;
  const paginate: Paginate = data?.meta?.pagination;

  console.log(data);

  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <Banner />

      {isLoading ? (
        <ProductsLoading />
      ) : (
        <main>
          <div className="flex justify-between mb-2 px-4">
            <h1></h1>
            <Sort />
          </div>

          <div className="p-4 grid grid-cols-[20rem,auto] gap-7 items-start">
            {isFilterOpen && (
              <Filters categories={categories} companies={companies} />
            )}

            <div className="">
              {data && (
                <ProductsContainer data={data.data} isFilterOpen={false} />
              )}
              <PaginationCOntainer
                paginate={paginate}
                handlePage={handlePage}
              />
            </div>
          </div>
        </main>
      )}
    </Container>
  );
}
