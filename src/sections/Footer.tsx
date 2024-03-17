import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 lg:px-20 max-lg:px-10 mt-40">
      <div className="flex flex-1 justify-between w-full items-start gap-2 max-lg:flex-col">
        {/* Left Start */}
        <div className="flex flex-col items-start">
          <Image src="/logo.webp" alt="logo" width={140} height={30} />
          <p className="py-7 text-slate-600 max-w-sm">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-4 pt-3 mb-4">
            <div className="flex items-center justify-center p-[10px]  bg-[#f1f1f1] rounded-[10px] cursor-pointer box-border h-[40px] w-[40px]">
              <IoLogoTwitter />
            </div>
            <div className="flex items-center justify-center p-[10px]  bg-[#f1f1f1] rounded-[10px] cursor-pointer box-border h-[40px] w-[40px]">
              {" "}
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center p-[10px]  bg-[#f1f1f1] rounded-[10px] cursor-pointer box-border h-[40px] w-[40px]">
              {" "}
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Right Div */}

        <div className="flex flex-1 justify-between lg:px-36 gap-3 max-lg:flex-col">
          {FOOTER_LINKS.map((column, index) => (
            <FooterColumns title={column.title} key={index}>
              <ul className=" text-[14px] font-[400] flex flex-col gap-4 text-gray-500">
                {column.links.map((link) => (
                  <Link href="/" key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </ul>
            </FooterColumns>
          ))}
        </div>
      </div>

      <div className="flex lg:flex-row lg:justify-evenly max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-8 gap-16 mt-32 max-lg:mt-16 border-t-[1px] border-solid border-[#666] mb-3 ">
        <p className="font-normal text-base leading-[22px] text-[#666] mt-10 max-lg:mt-4">
          Copyright © 2022 Dine Market
        </p>
        <div className="flex items-center mt-10 max-lg:mt-4">
          <p className="font-normal text-base leading-[22px] text-[#666]">
            Designed by.
          </p>
          <span className="font-bold text-[1rem] leading-4 text-black">
            Weird Design Studio
          </span>
        </div>
        <div className="flex items-center mt-10 max-lg:mt-4">
          <p>Clone by.</p>
          <span className="font-bold text-[1rem] leading-4 text-black">
            Anam-Zahid98 on github
          </span>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnsProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumns = ({ title, children }: FooterColumnsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[18px] font-[700] whitesapce-nowrap text-gray-600">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default Footer;
