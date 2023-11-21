import FeaturedProductList from "@/components/FeaturedProductList";
import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="space-y-10 pb-10">
          <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
            <div
              style={{ backgroundImage: `url(/img/hero.jpg)` }}
              className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                  Featured Products
                  <Button size="lg" className="w-full py-6 text-xl">
                    <ShoppingBag className="mr-2" />
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <FeaturedProductList />
          </div>
        </div>
      </Container>
    </>
  );
}
