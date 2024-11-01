import Image from "next/image";
import Logo from "../../../../public/11zon_cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className=" text-white md:px-10 lg:px-12 3xl:px-28 2xl:px-20 xl:px-16 flex justify-between items-center h-24 bg-transparent">
      <div className="flex items-center">
        <Image className="me-3 md:w-16  " alt="" src={Logo} />
        <div className="font-bold md:text-3xl lg:text-2xl 3xl:text-4xl 2xl:text-3xl xl:text-3xl">
          Karma <span className="text-secText">Solutions</span>
        </div>
      </div>
      <div className="lg:hidden md:block transition-all hover:bg-secText rounded-xl px-3 pt-2 pb-1 duration-300">
        <FontAwesomeIcon icon={faBars} className="text-[24px]" />
      </div>
      <div className="lg:flex md:hidden xl:gap-5 lg:gap-2 items-center xl:text-base lg:text-sm ">
        <div
          onClick={() => (location.href = "#contact")}
          className="cursor-pointer hover:bg-secText  px-6 py-1 rounded-full transition-all duration-300"
        >
          HOME
        </div>
        <div className=" cursor-pointer hover:bg-secText  px-5 py-1 rounded-full transition-all duration-300">
          ABOUT US
        </div>
        <div className=" cursor-pointer hover:bg-secText  px-5 py-1 rounded-full transition-all duration-300">
          SERVICES
        </div>
        <div className=" cursor-pointer hover:bg-secText px-5 py-1 rounded-full transition-all duration-300">
          CONTACT US
        </div>
      </div>
    </div>
  );
}
