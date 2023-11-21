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
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GitPullRequestDraft } from "lucide-react";
import Header from "@/components/Header";

const fetchProducts = async (
  pageParam: number,
  category = "all",
  company: string,
  search: string,
  order: string,
  price: string
) => {
  const reponse = await customFetch(
    `/products?page=${pageParam}&search=${search}&category=${category}&company=${company}&order=${order}&price=${price}`
  );
  return reponse.data;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const company = searchParams.get("company") || "all";
  const search = searchParams.get("search") || "";
  const order = searchParams.get("order") || "a-z";
  const price = searchParams.get("price") || "";

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["products", page, category, company, search, order, price],
    queryFn: () => fetchProducts(page, category, company, search, order, price),
    placeholderData: keepPreviousData,
  });

  const categories: string[] = data?.meta?.categories;
  const companies: string[] = data?.meta?.companies;
  const paginate: Paginate = data?.meta?.pagination;

  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Header />

      <Container>
        <Banner />

        {isLoading ? (
          <ProductsLoading />
        ) : (
          <main>
            <div className="flex justify-between mb-2 px-4">
              <h1 className="md:block hidden"></h1>
              <Button className="md:hidden ">
                <GitPullRequestDraft className="w-3 h-3 mr-2" /> filter
              </Button>
              <Sort />
            </div>

            <div className="p-4 grid md:grid-cols-[auto,1fr] grid-cols-1 gap-7 items-start">
              <Filters
                categories={categories}
                loading={isFetching}
                companies={companies}
              />

              <div className="">
                {data && <ProductsContainer data={data.data} />}

                {paginate?.pageCount <= 1 ? null : (
                  <PaginationCOntainer
                    paginate={paginate}
                    handlePage={handlePage}
                  />
                )}
              </div>
            </div>
          </main>
        )}
      </Container>
    </>
  );
}
