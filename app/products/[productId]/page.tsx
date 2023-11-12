import Container from "@/components/ui/Container";
import { customFetch, formatPrice } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Params = {
  params: { productId: string };
};

export async function generateMetadata({
  params: { productId },
}: Params): Promise<Metadata> {
  // const product: Promise<Product> = await customFetch(
  //   `https://.../${productId}`
  // );

  return {
    title: "...",
  };
}

const page = async ({ params: { productId } }: Params) => {
  const response = await customFetch(`/products/${productId}`);
  const data = response.data.data;

  const { image, title, price, description, company, category } =
    data.attributes;

  return (
    <Container>
      <div className="py-5 px-8">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Link href={"/"}>Home</Link>
          <Separator orientation="vertical" />

          <div>{title}</div>
        </div>

        <div className="mt-16 flex lg:flex-row flex-col gap-y-10  gap-x-16">
          <div className="relative lg:w-[40rem] w-full h-[30rem]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="sm:w-[26rem]">
            <div className="space-y-2">
              <h1 className="text-3xl capitalize">{title}</h1>
              <h3 className="text-purple-500 text-lg">{company}</h3>
              <h3 className="font-semibold">{formatPrice(price)}</h3>
            </div>

            <p className="mt-4 text-gray-800 dark:text-white leading-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
