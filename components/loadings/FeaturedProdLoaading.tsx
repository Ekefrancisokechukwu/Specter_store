import Container from "../ui/Container";
import { Skeleton } from "../ui/skeleton";

const FeaturedProdLoaading = () => {
  return (
    <Container>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
      </div>
    </Container>
  );
};
export default FeaturedProdLoaading;
