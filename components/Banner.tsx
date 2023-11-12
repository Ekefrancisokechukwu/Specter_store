import Image from "next/image";
import img1 from "@/public/img/tan1.jpg";
import img2 from "@/public/img/tan2.jpg";
import img3 from "@/public/img/tan3.jpg";

const Banner = () => {
  return (
    <section>
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        <div className="rounded-lg relative aspect-square flex md:aspect-[2.4/1] overflow-hidden bg-cover">
          <Image
            src={img2}
            alt={"cover"}
            quality={80}
            priority
            className=" h-full w-full object-cover"
          />
          <Image
            src={img3}
            alt={"cover"}
            quality={100}
            priority
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
