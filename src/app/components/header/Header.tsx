import Image from "next/image";
import Logo from "../../../../public/11zon_cropped.png";

export default function Header() {
  return (
    <div className=" text-white px-28 flex justify-between items-center h-24 bg-transparent">
      <div className="flex items-center">
        <Image className="me-3" alt="" width={60} height={50} src={Logo} />
        <div className="font-bold text-4xl">
          Karma <span className="text-secText">Solutions</span>
        </div>
      </div>
      <div className="flex gap-5 items-center ">
        <div
          onClick={() => (location.href = "#contact")}
          className="cursor-pointer hover:bg-secText  px-6 py-1 rounded-full transition-all duration-300"
        >
          HOME
        </div>
        <div className=" cursor-pointer hover:bg-secText px-5 py-1 rounded-full transition-all duration-300">
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
