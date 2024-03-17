import React from "react";
import Image from "next/image";

const Promotions = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-20 max-lg:px-10  mt-20">
      <div className="flex flex-col justify-center items-center leading-9">
        <p className="text-[14px] font-semibold  font-mono text-blue-600">
          PROMOTIONS
        </p>
        <p className="font-semibold capitalize text-4xl">
          our promotions events
        </p>
      </div>
      {/* wrapper div for all 4 div */}
      <div className="lg:flex max-lg:flex-col justify-between pt-10 gap-3">
        {/* Left 2 div wrapper  */}
        <div className="flex flex-col gap-3 pb-3">
          <div className="flex justify-between lg:h-[200px] lg:w-[670px] max-lg:h-[250px] max-lg:w-[600px] max-sm:h-[200px] max-sm:w-[410px] align-middle bg-[#d6d6d8]">
            <div className="flex flex-col items-center justify-center  pl-6 ">
              <h3 className="font-bold text-3xl ">
                GET UP TO <span className="font-extrabold">60%</span>{" "}
              </h3>
              <p className="text-gray-900">For the summer season</p>
            </div>
            <Image src="/img1.webp" alt="photo" height={200} width={260} />
          </div>
          <div className="flex flex-col justify-center items-center lg:h-[200px] lg:w-[670px] max-lg:h-[250px] max-lg:w-[600px] max-sm:h-[200px] max-sm:w-[410px] text-[#fff] bg-[#212121] ">
            <h3 className="font-extrabold text-3xl leading-10 pb-4">
              GET 30% Off
            </h3>
            <p className="leading-normal">USE PROMO CODE</p>
            <p className="bg-[#474747] p-2 rounded-md pl-10 pr-10">
              DINEWEEKENDSALE
            </p>
          </div>
        </div>
        {/* Right 2 div wrapper */}
        <div className="flex justify-between lg:gap-3 ">
          {/* div # 1 */}
          <div className="flex flex-col justify-between h-[411px] w-[300px] bg-[#efe1c7] ">
            <div className="pt-6 pl-5">
              <p>Flex Sweatshirt</p>
              <div className="flex gap-3">
                <span className="line-through">$100.00</span>
                <span className="font-bold">$75.00</span>
              </div>
            </div>
            <Image
              src="/img2.webp"
              alt="photo"
              width={600}
              height={340}
              className="w-[600px]  h-[340px] "
            />
          </div>
          {/* div # 2 */}
          <div className="flex flex-col justify-between h-[411px] w-[300px] bg-[#d7d7d9] ">
            <div className="pt-6 pl-5">
              <p>Flex Push Button Bomber</p>
              <div className="flex gap-3">
                <span className="line-through">$225.00</span>
                <span className="font-bold">$190.00</span>
              </div>
            </div>
            <Image
              src="/img3.webp"
              alt="photo"
              width={600}
              height={340}
              className="w-[600px]  h-[340px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
