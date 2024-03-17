import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { BRANDS } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-20 max-lg:px-10 mt-6 ">
      <div className="w-full flex xl:flex-row ">
        {/* left div */}
        <div>
          <p className="w-[124px] h-[40px] flex justify-evenly items-center rounded-md bg-blue-100 text-blue-700 font-bold  mt-16 ">
            Sale 70%
          </p>
          <h1 className="mt-8 text-6xl font-bold">
            <span className="capitalize ">an industrial take</span>
            <br />
            <span>on Streetwear</span>
          </h1>
          <p className="text-[14px] max-w-sm mt-8 mb-8 text-gray-600">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <div>
            <Link href="#">
              <Button className="gap-2 px-7 max-lg:px-20 py-7 font-bold">
                <ShoppingCart />
                Start Shopping
              </Button>
            </Link>
          </div>

          <div className="flex mt-28 max-lg:mt-12 max-lg:mb-16 gap-10 max-lg:flex-row max-sm:grid max-sm:grid-cols-2 max-sm:gap-5">
            {BRANDS.map((brand) => (
              <Image
                src={brand.src}
                alt={brand.alt}
                key={brand.label}
                width={100}
                height={30}
              />
            ))}
          </div>
        </div>
        {/* right div */}
        <div className="hidden lg:flex lg:flex-5 lg:ml-32 justify-center item-start w-[500px] h-[550px] rounded-[50%] bg-[#ffece3]">
          <Image
            src="/Hero.png"
            alt="photo"
            width={600}
            height={600}
            className="absolute justify-center items-center -mt-8 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
