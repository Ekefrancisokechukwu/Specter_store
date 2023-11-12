import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const { image, title, price } = data.attributes;

  return (
    <Link
      href={`/products/${data.id}`}
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-y-2 items-start">
          <p className="font-semibold text-lg">{title}</p>
          <p className="text-sm text-primary/80 font-bold">
            {" "}
            {formatPrice(price)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
