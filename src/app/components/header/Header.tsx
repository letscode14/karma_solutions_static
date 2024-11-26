import Image from "next/image";
import Logo from "../../../../public/11zon_cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/app/context/MenuContext";

export default function Header() {
  const { toggleMenu } = useMenu();
  return (
    <div className=" text-white xs:px-3 sm:px-6 md:px-10 lg:px-12 3xl:px-28 2xl:px-20 xl:px-16 flex justify-between items-center sm:h-24 xs:h-20 bg-transparent">
      <div className="flex items-center">
        <Image className="me-3 md:w-16 sm:w-[60px] xs:w-12" alt="" src={Logo} />
        <div className="font-bold xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl 3xl:text-4xl 2xl:text-3xl xl:text-3l">
          Karma <span className="text-secText">Solutions</span>
        </div>
      </div>
      <div
        onClick={toggleMenu}
        className="lg:hidden sm:block md:block transition-all hover:bg-secText rounded-xl px-3 pt-2 pb-1 duration-300"
      >
        <FontAwesomeIcon icon={faBars} className="text-[24px]" />
      </div>
      <div className="lg:flex xs:hidden sm:hidden md:hidden xl:gap-5 lg:gap-2 items-center xl:text-base lg:text-sm ">
        <div
          onClick={() => (location.href = "#home")}
          className="cursor-pointer hover:bg-secText  px-6 py-1 rounded-full transition-all duration-300"
        >
          HOME
        </div>
        <div
          onClick={() => (location.href = "#about")}
          className=" cursor-pointer hover:bg-secText  px-5 py-1 rounded-full transition-all duration-300"
        >
          ABOUT US
        </div>
        <div
          onClick={() => (location.href = "#services")}
          className=" cursor-pointer hover:bg-secText  px-5 py-1 rounded-full transition-all duration-300"
        >
          SERVICES
        </div>
        <div
          onClick={() => (location.href = "#contact")}
          className=" cursor-pointer hover:bg-secText px-5 py-1 rounded-full transition-all duration-300"
        >
          CONTACT US
        </div>
      </div>
    </div>
  );
}
