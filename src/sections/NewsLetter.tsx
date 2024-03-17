import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <section className=" max-w-[1440px] mx-auto px-6 lg:px-20 max-lg:px-10 mt-6 flex flex-col justify-center items-center relative z-1">
      <div className="flex justify-center font-extrabold absolute z-[-1] text-[#f2f3f7] text-9xl leading-[151px] ">
        Newsletter
      </div>
      <h1 className="font-bold mb-10 text-4xl leading-10 text-black ">
        Subscribe Our Newsletter
      </h1>
      <p className="font-light mb-6">
        Get the latest information and promo offers directly
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 rounded-none">
        <Input
          className="pt-10px pr-120px pb-10px pl-20px"
          type="email"
          placeholder="Input email address"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </section>
  );
};

export default NewsLetter;
