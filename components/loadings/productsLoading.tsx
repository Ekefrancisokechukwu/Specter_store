import { Skeleton } from "../ui/skeleton";

const myArry = Array.from({ length: 10 });

const ProductsLoading = () => {
  return (
    <div className="p-4 grid md:grid-cols-[20rem,auto] grid-cols-1 gap-7 items-start">
      <div className="space-y-3 md:block hidden">
        <Skeleton className="h-4 w-full mb-1 rounded-lg" />
        <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
        <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
        <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
        <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
        <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
        <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />

        <div className="mt-5 space-y-3">
          <Skeleton className="h-4 mb-1 bg-primary/40 w-full rounded-lg" />
          <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
          <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
          <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
          <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
          <Skeleton className="h-3 w-full bg-primary/40 rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 ">
        {myArry.map((_, i) => {
          return (
            <Skeleton
              key={i}
              className="aspect-square bg-primary/40 rounded-xl"
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductsLoading;
