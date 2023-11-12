import ProductCard from "../ui/ProductCard";

type Props = {
  isFilterOpen: boolean;
  data: Product[];
};

const ProductsContainer = ({ data, isFilterOpen }: Props) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 ${
        isFilterOpen ? "lg:grid-cols-3" : "lg:grid-cols-3"
      }`}
    >
      {data.map((product, i) => {
        return <ProductCard data={product} key={i} />;
      })}
    </div>
  );
};
export default ProductsContainer;
