import ProductCard from "../ui/ProductCard";

type Props = {
  data: Product[];
};

const ProductsContainer = ({ data }: Props) => {
  if (data.length === 0) {
    return <h1 className="text-center mt-20 text-2xl">Nothing Found...</h1>;
  }

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4
          `}
      >
        {data.map((product, i) => {
          return <ProductCard data={product} key={i} />;
        })}
      </div>
    </>
  );
};
export default ProductsContainer;
